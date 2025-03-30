from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from joblib import load
import os

app = Flask(__name__)
CORS(app)

# Load the model
script_dir = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(script_dir, "XGBoost_Diabetes_Model.joblib")

try:
    model = load(model_path)
    print(f"✅ Model loaded successfully from: {model_path}")
except Exception as e:
    print(f"❌ Error loading model: {e}")
    model = None


@app.route("/predict", methods=["POST"])
def predict():
    if model is None:
        return jsonify({"error": "Model not loaded"}), 500

    try:
        # Get JSON data
        data = request.get_json()
        print("📩 Received data:", data)

        required_fields = [
            "gender",
            "smoking_history",
            "age",
            "bmi",
            "HbA1c_level",
            "blood_glucose_level",
            "hypertension",
            "heart_disease",
        ]
        if not all(field in data for field in required_fields):
            return jsonify({"error": "Missing required fields"}), 400

        try:
            input_data = pd.DataFrame(
                [
                    {
                        "gender": data["gender"],
                        "smoking_history": data["smoking_history"],
                        "age": float(data["age"]),
                        "bmi": float(data["bmi"]),
                        "HbA1c_level": float(data["HbA1c_level"]),
                        "blood_glucose_level": float(data["blood_glucose_level"]),
                        "hypertension": int(data["hypertension"]),
                        "heart_disease": int(data["heart_disease"]),
                    }
                ]
            )
        except ValueError as e:
            return jsonify({"error": f"Invalid numerical input: {e}"}), 400

        # Ensure correct feature order for the model
        try:
            input_data = input_data[model.named_steps["preprocessor"].feature_names_in_]
        except KeyError as e:
            return jsonify({"error": f"Column mismatch: {e}"}), 400

        # Get prediction and probability
        prediction = model.predict(input_data)[0]
        probability = model.predict_proba(input_data)[:, 1][0]

        # Risk Score Calculation
        risk_score_percentage = round(probability * 100, 2)

        # Risk Level
        if risk_score_percentage < 30:
            risk_level = "Low Risk"
        elif 30 <= risk_score_percentage < 70:
            risk_level = "Moderate Risk"
        else:
            risk_level = "High Risk"

        # Individual Risk Assessments
        bmi = float(data["bmi"])
        HbA1c_level = float(data["HbA1c_level"])
        blood_glucose_level = float(data["blood_glucose_level"])
        hypertension = int(data["hypertension"])
        heart_disease = int(data["heart_disease"])

        bmi_risk = (
            "Low Risk"
            if 18.5 <= bmi < 24.9
            else "Moderate Risk" if 25 <= bmi < 29.9 else "High Risk"
        )
        hba1c_risk = (
            "Low Risk"
            if HbA1c_level < 5.7
            else "Moderate Risk" if 5.7 <= HbA1c_level < 6.5 else "High Risk"
        )
        glucose_risk = (
            "Low Risk"
            if blood_glucose_level < 140
            else "Moderate Risk" if 140 <= blood_glucose_level < 199 else "High Risk"
        )
        hypertension_risk = "High Risk" if hypertension == 1 else "Low Risk"
        heart_disease_risk = "High Risk" if heart_disease == 1 else "Low Risk"

        results = {
            "prediction": int(prediction),
            "probability": float(probability),
            "risk_score_percentage": float(risk_score_percentage),
            "risk_level": risk_level,
            "bmi_risk": bmi_risk,
            "hba1c_risk": hba1c_risk,
            "glucose_risk": glucose_risk,
            "hypertension_risk": hypertension_risk,
            "heart_disease_risk": heart_disease_risk,
        }

        return jsonify(results)

    except Exception as e:
        print(f"⚠️ Prediction error: {e}")
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
