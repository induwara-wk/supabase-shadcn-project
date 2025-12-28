import { Navigate } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth"
import type { JSX } from "react/jsx-dev-runtime"

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth()

  if (loading) {
    return <div className="p-6">Loading...</div>
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (!user.email_confirmed_at) {
    return <Navigate to="/login" replace />
  }

  return children
}