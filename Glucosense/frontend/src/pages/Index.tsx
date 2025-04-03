
import { useState } from "react"
import { Layout } from "@/components/layout"
import { DiabetesForm } from "@/components/diabetes-form"
import { ResultDisplay } from "@/components/result-display"
import { DiabetesResult } from "@/lib/api"
import { cn } from "@/lib/utils"
import { Activity, BarChart3, Brain, Heart } from "lucide-react"

const Index = () => {
  const [result, setResult] = useState<DiabetesResult | null>(null)

  const handleReset = () => {
    setResult(null)
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-12">
        {!result ? (
          <>
            <section className="text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-fade-in">
                GlucoSense AI
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
                AI-powered diabetes detection for early intervention and improved health outcomes
              </p>
            </section>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={cn(
                    "p-6 rounded-lg border bg-card shadow-sm transition-all hover:shadow-md",
                    "animate-fade-in"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-medium">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <DiabetesForm onResult={setResult} />
          </>
        ) : (
          <ResultDisplay result={result} onReset={handleReset} />
        )}
      </div>
    </Layout>
  )
}

const features = [
  {
    title: "Early Detection",
    description: "Identify diabetes risk factors before symptoms appear, enabling proactive healthcare.",
    icon: Activity,
  },
  {
    title: "AI-Powered",
    description: "Advanced machine learning model trained on extensive clinical data for accurate predictions.",
    icon: Brain,
  },
  {
    title: "Comprehensive Analysis",
    description: "Detailed health assessment considering multiple relevant biomarkers and risk factors.",
    icon: BarChart3,
  },
  {
    title: "Health Guidance",
    description: "Personalized recommendations based on your risk profile to improve health outcomes.",
    icon: Heart,
  },
]

export default Index
