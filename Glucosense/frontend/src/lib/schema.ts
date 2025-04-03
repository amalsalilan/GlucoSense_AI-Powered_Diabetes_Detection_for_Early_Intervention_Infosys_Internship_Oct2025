
import { z } from "zod"

export const diabetesFormSchema = z.object({
  gender: z.enum(["Male", "Female", "Other"], {
    required_error: "Please select a gender.",
  }),
  smoking_history: z.enum(["never", "former", "current", "not current", "ever", "No Info"], {
    required_error: "Please select smoking history.",
  }),
  age: z.coerce
    .number({
      required_error: "Age is required.",
      invalid_type_error: "Age must be a number.",
    })
    .positive("Age must be a positive number.")
    .min(1, "Age must be at least 1 year.")
    .max(120, "Age must be less than 120 years."),
  bmi: z.coerce
    .number({
      required_error: "BMI is required.",
      invalid_type_error: "BMI must be a number.",
    })
    .positive("BMI must be a positive number.")
    .min(10, "BMI must be at least 10.")
    .max(50, "BMI must be less than 50."),
  HbA1c_level: z.coerce
    .number({
      required_error: "HbA1c level is required.",
      invalid_type_error: "HbA1c level must be a number.",
    })
    .positive("HbA1c level must be a positive number.")
    .min(3, "HbA1c level must be at least 3.")
    .max(15, "HbA1c level must be less than 15."),
  blood_glucose_level: z.coerce
    .number({
      required_error: "Blood glucose level is required.",
      invalid_type_error: "Blood glucose level must be a number.",
    })
    .positive("Blood glucose level must be a positive number.")
    .min(50, "Blood glucose level must be at least 50.")
    .max(400, "Blood glucose level must be less than 400."),
  hypertension: z.coerce
    .number({
      required_error: "Hypertension information is required.",
      invalid_type_error: "Please select an option for hypertension.",
    })
    .min(0, "Invalid value for hypertension.")
    .max(1, "Invalid value for hypertension."),
  heart_disease: z.coerce
    .number({
      required_error: "Heart disease information is required.",
      invalid_type_error: "Please select an option for heart disease.",
    })
    .min(0, "Invalid value for heart disease.")
    .max(1, "Invalid value for heart disease."),
})

export type DiabetesFormValues = z.infer<typeof diabetesFormSchema>
