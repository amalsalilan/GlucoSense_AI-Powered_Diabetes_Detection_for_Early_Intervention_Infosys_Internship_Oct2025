
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

interface RiskScoreProgressProps {
  percentage: number
  className?: string
}

export function RiskScoreProgress({ percentage, className }: RiskScoreProgressProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Progress 
        value={percentage} 
        className={cn(
          "h-2",
          percentage < 30 ? "bg-green-200" : 
          percentage < 70 ? "bg-amber-200" : 
          "bg-red-200"
        )}
        indicator={
          <div className={cn(
            "h-full",
            percentage < 30 ? "bg-green-500" : 
            percentage < 70 ? "bg-amber-500" : 
            "bg-destructive"
          )} />
        }
      />
    </div>
  )
}
