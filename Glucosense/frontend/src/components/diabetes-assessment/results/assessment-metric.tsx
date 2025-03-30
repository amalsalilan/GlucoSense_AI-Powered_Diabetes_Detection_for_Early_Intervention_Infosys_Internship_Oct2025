
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface AssessmentMetricProps {
  icon: LucideIcon
  title: string
  value: string
  className?: string
}

export function AssessmentMetric({ icon: Icon, title, value, className }: AssessmentMetricProps) {
  return (
    <div className={cn("p-4 rounded-lg bg-secondary", className)}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className="h-5 w-5 text-primary" />
        <h4 className="font-medium">{title}</h4>
      </div>
      <p className="font-medium">{value}</p>
    </div>
  )
}
