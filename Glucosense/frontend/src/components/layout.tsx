
import { ReactNode } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Heart } from "lucide-react"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary animate-pulse-slow" />
            <h1 className="text-lg font-semibold tracking-tight">GlucoSense AI</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1 container py-6 md:py-10">
        {children}
      </main>
      <footer className="py-6 border-t">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} GlucoSense AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
