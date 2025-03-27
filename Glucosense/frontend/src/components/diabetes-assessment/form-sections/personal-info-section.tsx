
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GENDER_OPTIONS, SMOKING_HISTORY_OPTIONS } from "../form-constants"
import { UseFormReturn } from "react-hook-form"
import { DiabetesFormValues } from "@/lib/schema"

interface PersonalInfoSectionProps {
  form: UseFormReturn<DiabetesFormValues>
}

export function PersonalInfoSection({ form }: PersonalInfoSectionProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="gender"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Gender</FormLabel>
            <Select 
              onValueChange={field.onChange} 
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {GENDER_OPTIONS.map((option) => (
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
        name="age"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Age (years)</FormLabel>
            <FormControl>
              <Input 
                type="number" 
                placeholder="Enter your age" 
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="smoking_history"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Smoking History</FormLabel>
            <Select 
              onValueChange={field.onChange} 
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select smoking history" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {SMOKING_HISTORY_OPTIONS.map((option) => (
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
