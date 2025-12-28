import type { ReactNode } from "react"
import { useAuth } from "@/hooks/useAuth"

export default function EmailVerificationGuard({
  children,
}: {
  children: ReactNode
}) {
  const { user } = useAuth()

  if (!user?.email_confirmed_at) {
    return (
      <div className="p-6 text-center space-y-2">
        <h2 className="text-lg font-semibold">
          Verify your email
        </h2>
        <p className="text-sm text-muted-foreground">
          Please check your inbox and verify your email to continue.
        </p>
      </div>
    )
  }

  return <>{children}</>
}