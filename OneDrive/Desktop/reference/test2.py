import pandas as pd
import joblib

# Load the pre-trained XGBoost model
model_predict = joblib.load("XGBoost_Diabetes_model.joblib")

# Define a function to take user input and store it in a DataFrame
def get_user_input():
    try:
        gender = input("Enter gender (male/female): ").strip().lower()
        age = float(input("Enter age: "))
        hypertension = int(input("Do you have hypertension? (1 for Yes, 0 for No): "))
        heart_disease = int(input("Do you have heart disease? (1 for Yes, 0 for No): "))
        bmi = float(input("Enter BMI: "))
        HbA1c_level = float(input("Enter HbA1c level: "))
        blood_glucose_level = float(input("Enter blood glucose level: "))
        smoking_history = input("Enter smoking history (never, current, former, not_current, ever): ").strip().lower()

    except ValueError:
        print("Invalid input. Please enter the correct numerical values.")
        return None  # If there's an error in conversion, return None

    # Encode gender
    gender_map = {"male": 0, "female": 1}
    gender_value = gender_map.get(gender, -1)  # Default to -1 if invalid

    if gender_value == -1:
        print("Invalid gender input. Please enter 'male' or 'female'.")
        return None  # Stop execution if invalid gender

    # Map smoking history to one-hot encoding
    smoking_history_map = {
        "never": 1, "current": 2, "former": 3, "not_current": 4, "ever": 5
    }
    smoking_value = smoking_history_map.get(smoking_history, 0)  # Default to 0 if invalid

    # Create DataFrame for prediction
    input_data = pd.DataFrame({
        'gender': [gender_value],
        'age': [age],
        'hypertension': [hypertension],
        'heart_disease': [heart_disease],
        'bmi': [bmi],
        'HbA1c_level': [HbA1c_level],
        'blood_glucose_level': [blood_glucose_level],
        'smoking_history_never': [1 if smoking_value == 1 else 0],
        'smoking_history_current': [1 if smoking_value == 2 else 0],
        'smoking_history_former': [1 if smoking_value == 3 else 0],
        'smoking_history_not_current': [1 if smoking_value == 4 else 0],
        'smoking_history_ever': [1 if smoking_value == 5 else 0]
    })

    return input_data

# Get user input
user_input_data = get_user_input()

if user_input_data is not None:
    print("User input data:")
    print(user_input_data)

    # Ensure the input data has the same columns as the model expects
    try:
        prediction = model_predict.predict(user_input_data)

        # Display the prediction result
        if prediction[0] == 1:
            print("Prediction: Diabetes detected")
        else:
            print("Prediction: No Diabetes detected")

    except Exception as e:
        print("Error during prediction:", str(e))
else:
    print("No valid input received. Prediction cannot be made.")