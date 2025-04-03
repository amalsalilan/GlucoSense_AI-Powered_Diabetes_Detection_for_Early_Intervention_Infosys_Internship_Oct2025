
import { cn } from "@/lib/utils"
import { AlertCircle, AlertTriangle, CheckCircle } from "lucide-react"

interface RiskIndicatorProps {
  riskLevel: string
  className?: string
}

export function RiskIndicator({ riskLevel, className }: RiskIndicatorProps) {
  const RiskIcon = 
    riskLevel === "High Risk" 
      ? AlertCircle 
      : riskLevel === "Moderate Risk" 
        ? AlertTriangle 
        : CheckCircle

  const riskColor = 
    riskLevel === "High Risk" 
      ? "text-destructive" 
      : riskLevel === "Moderate Risk" 
        ? "text-amber-500 dark:text-amber-400" 
        : "text-green-500 dark:text-green-400"
  
  const riskBgColor = 
    riskLevel === "High Risk" 
      ? "bg-destructive/10" 
      : riskLevel === "Moderate Risk" 
        ? "bg-amber-500/10" 
        : "bg-green-500/10"
  
  return (
    <div className={cn(
      "p-4 rounded-lg",
      riskBgColor,
      className
    )}>
      <div className="flex items-center gap-2 mb-2">
        <RiskIcon className={cn(
          "h-5 w-5",
          riskColor
        )} />
        <h4 className="font-medium">Risk Level</h4>
      </div>
      <p className={cn(
        "font-bold text-lg",
        riskColor
      )}>
        {riskLevel}
      </p>
    </div>
  )
}
