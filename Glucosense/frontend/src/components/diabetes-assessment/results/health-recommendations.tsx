
import { HeartPulse } from "lucide-react"

interface HealthRecommendationsProps {
  recommendations: string[]
}

export function HealthRecommendations({ recommendations }: HealthRecommendationsProps) {
  if (!recommendations || recommendations.length === 0) {
    return null
  }
  
  return (
    <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
      <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
        <HeartPulse className="h-5 w-5 text-primary" />
        Health Recommendations
      </h3>
      <ul className="list-disc list-inside space-y-1">
        {recommendations.map((advice, index) => (
          <li key={index} className="text-sm">{advice}</li>
        ))}
      </ul>
    </div>
  )
}
