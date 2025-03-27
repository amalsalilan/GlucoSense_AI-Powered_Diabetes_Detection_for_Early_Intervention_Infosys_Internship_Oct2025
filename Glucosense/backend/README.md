
# GlucoSense AI Backend

This is the Flask backend for the GlucoSense AI Diabetes Detection application.

## Setup

1. Make sure you have Python 3.8+ installed
2. Install the required dependencies:

```bash
pip install flask flask-cors pandas scikit-learn joblib numpy
```

3. Place the `XGBoost_Diabetes_Model.joblib` model file in this directory.

## Running the Server

To start the Flask server:

```bash
python app.py
```

The server will run on http://localhost:5000 by default.

## API Endpoints

### POST /predict

Accepts JSON data with the following fields:
- gender (string): "Male", "Female", or "Other"
- smoking_history (string): "never", "former", "current", "not current", "ever", or "No Info"
- age (number): Patient's age in years
- bmi (number): Body Mass Index value
- HbA1c_level (number): HbA1c level percentage
- blood_glucose_level (number): Blood glucose level in mg/dL
- hypertension (number): 0 for No, 1 for Yes
- heart_disease (number): 0 for No, 1 for Yes

Returns a JSON object with the prediction result, risk assessment, and health recommendations.
