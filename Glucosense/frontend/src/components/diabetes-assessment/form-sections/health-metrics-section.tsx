
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { UseFormReturn } from "react-hook-form"
import { DiabetesFormValues } from "@/lib/schema"

interface HealthMetricsSectionProps {
  form: UseFormReturn<DiabetesFormValues>
}

export function HealthMetricsSection({ form }: HealthMetricsSectionProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="bmi"
        render={({ field }) => (
          <FormItem>
            <FormLabel>BMI (kg/m²)</FormLabel>
            <FormControl>
              <Input 
                type="number" 
                step="0.1" 
                placeholder="Enter your BMI" 
                {...field} 
              />
            </FormControl>
            <FormDescription className="text-xs">
              Body Mass Index = weight(kg) / height²(m)
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="HbA1c_level"
        render={({ field }) => (
          <FormItem>
            <FormLabel>HbA1c Level (%)</FormLabel>
            <FormControl>
              <Input 
                type="number" 
                step="0.1" 
                placeholder="Enter HbA1c level" 
                {...field} 
              />
            </FormControl>
            <FormDescription className="text-xs">
              Average blood sugar level over past 2-3 months
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="blood_glucose_level"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Blood Glucose Level (mg/dL)</FormLabel>
            <FormControl>
              <Input 
                type="number" 
                placeholder="Enter blood glucose level" 
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}
