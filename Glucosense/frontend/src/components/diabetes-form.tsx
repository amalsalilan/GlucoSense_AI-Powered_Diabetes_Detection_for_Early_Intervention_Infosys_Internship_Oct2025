
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { DiabetesFormValues, diabetesFormSchema } from "@/lib/schema"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import { predictDiabetes, DiabetesResult } from "@/lib/api"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { PersonalInfoSection } from "./diabetes-assessment/form-sections/personal-info-section"
import { HealthMetricsSection } from "./diabetes-assessment/form-sections/health-metrics-section"
import { MedicalConditionsSection } from "./diabetes-assessment/form-sections/medical-conditions-section"

interface DiabetesFormProps {
  onResult: (result: DiabetesResult) => void
}

export function DiabetesForm({ onResult }: DiabetesFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<DiabetesFormValues>({
    resolver: zodResolver(diabetesFormSchema),
    defaultValues: {
      gender: undefined,
      smoking_history: undefined,
      age: undefined,
      bmi: undefined,
      HbA1c_level: undefined,
      blood_glucose_level: undefined,
      hypertension: undefined,
      heart_disease: undefined,
    },
  })

  async function onSubmit(data: DiabetesFormValues) {
    setIsSubmitting(true)
    try {
      const result = await predictDiabetes(data)
      onResult(result)
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className={cn(
          "space-y-6 rounded-lg p-4 animate-fade-in",
          "bg-card border shadow-lg transition-all"
        )}
      >
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Diabetes Risk Assessment</h2>
          <p className="text-muted-foreground">
            Enter your health details below for an AI-powered diabetes risk evaluation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PersonalInfoSection form={form} />
          <HealthMetricsSection form={form} />
          <MedicalConditionsSection form={form} />
        </div>

        <Button 
          type="submit" 
          className="w-full transition-all transform hover:scale-[1.02]"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            "Analyze Risk"
          )}
        </Button>
      </form>
    </Form>
  )
}
