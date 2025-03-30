
import { DiabetesResult } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle, ChevronLeft, HeartPulse, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import { RiskIndicator } from "./diabetes-assessment/results/risk-indicator"
import { AssessmentMetric } from "./diabetes-assessment/results/assessment-metric"
import { HealthRecommendations } from "./diabetes-assessment/results/health-recommendations"
import { RiskScoreProgress } from "./diabetes-assessment/results/risk-score-progress"

interface ResultDisplayProps {
  result: DiabetesResult
  onReset: () => void
}

export function ResultDisplay({ result, onReset }: ResultDisplayProps) {
  const riskColor = 
    result.risk_level === "High Risk" 
      ? "text-destructive" 
      : result.risk_level === "Moderate Risk" 
        ? "text-amber-500 dark:text-amber-400" 
        : "text-green-500 dark:text-green-400"

  return (
    <div className="space-y-8 animate-fade-in">
      <Button 
        variant="ghost" 
        className="group flex items-center gap-1"
        onClick={onReset}
      >
        <ChevronLeft 
          className="h-4 w-4 transition-transform group-hover:-translate-x-1" 
        />
        Back to assessment
      </Button>

      <div className="grid grid-cols-1 gap-6">
        <Card className={cn(
          "border-2 overflow-hidden transition-all duration-500",
          result.prediction === 1 
            ? "border-destructive/50" 
            : "border-green-500/50"
        )}>
          <CardHeader className={cn(
            "p-6",
            result.prediction === 1 
              ? "bg-destructive/10" 
              : "bg-green-500/10"
          )}>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl">Diabetes Risk Assessment</CardTitle>
                <CardDescription>AI-powered analysis results</CardDescription>
              </div>
              <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center",
                result.prediction === 1 ? "bg-destructive/20" : "bg-green-500/20"
              )}>
                {result.prediction === 1 ? (
                  <AlertCircle className="h-8 w-8 text-destructive" />
                ) : (
                  <CheckCircle className="h-8 w-8 text-green-500" />
                )}
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-6 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Overall Result:</h3>
              <div className={cn(
                "text-2xl font-bold",
                result.prediction === 1 ? "text-destructive" : "text-green-500"
              )}>
                {result.prediction === 1 ? "Positive - Diabetes Risk Detected" : "Negative - Low Diabetes Risk"}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <h4 className="font-medium">Risk Score:</h4>
                <span className={riskColor + " font-semibold"}>
                  {result.risk_score_percentage}% - {result.risk_level}
                </span>
              </div>
              <RiskScoreProgress percentage={result.risk_score_percentage} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <RiskIndicator riskLevel={result.risk_level} />
              
              <AssessmentMetric 
                icon={HeartPulse} 
                title="BMI Assessment" 
                value={result.bmi_risk} 
              />
              
              <AssessmentMetric 
                icon={Info} 
                title="HbA1c Assessment" 
                value={result.hba1c_risk} 
              />
              
              <AssessmentMetric 
                icon={Info} 
                title="Blood Glucose" 
                value={result.glucose_risk} 
              />
              
              <AssessmentMetric 
                icon={Info} 
                title="Hypertension Status" 
                value={result.hypertension_risk} 
              />
              
              <AssessmentMetric 
                icon={Info} 
                title="Heart Disease Status" 
                value={result.heart_disease_risk} 
              />
            </div>

            {result.health_advice && (
              <HealthRecommendations recommendations={result.health_advice} />
            )}
          </CardContent>
          
          <CardFooter className="p-6 bg-muted/50 flex flex-col items-start gap-2">
            <p className="text-sm text-muted-foreground">
              This assessment is based on the data you provided and uses an AI model to estimate diabetes risk. 
              It is not a medical diagnosis.
            </p>
            <p className="text-sm font-medium">
              Please consult with a healthcare professional for proper medical advice.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
