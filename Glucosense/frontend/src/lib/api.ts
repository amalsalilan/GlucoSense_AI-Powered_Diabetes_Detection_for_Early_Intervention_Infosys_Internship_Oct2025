
import { DiabetesFormValues } from "./schema"

const API_URL = "http://localhost:5000"

export type DiabetesResult = {
  prediction: number
  probability: number
  risk_score_percentage: number
  risk_level: string
  bmi_risk: string
  hba1c_risk: string
  glucose_risk: string
  hypertension_risk: string
  heart_disease_risk: string
  health_advice: string[]
}

export async function predictDiabetes(data: DiabetesFormValues): Promise<DiabetesResult> {
  const response = await fetch(`${API_URL}/predict`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || "Failed to predict diabetes")
  }

  return response.json()
}
