
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BINARY_OPTIONS } from "../form-constants"
import { UseFormReturn } from "react-hook-form"
import { DiabetesFormValues } from "@/lib/schema"

interface MedicalConditionsSectionProps {
  form: UseFormReturn<DiabetesFormValues>
}

export function MedicalConditionsSection({ form }: MedicalConditionsSectionProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="hypertension"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Hypertension</FormLabel>
            <Select 
              onValueChange={field.onChange} 
              defaultValue={field.value?.toString()}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Do you have hypertension?" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {BINARY_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="heart_disease"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Heart Disease</FormLabel>
            <Select 
              onValueChange={field.onChange} 
              defaultValue={field.value?.toString()}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Do you have heart disease?" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {BINARY_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}
