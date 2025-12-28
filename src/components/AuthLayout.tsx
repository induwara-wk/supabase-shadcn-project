import type { ReactNode } from "react"
import { Card } from "@/components/ui/card"

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-sm p-6 space-y-6">
        {children}
      </Card>
    </div>
  )
}