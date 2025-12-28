import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useAuth } from "@/hooks/useAuth"

export default function DashboardPage() {
  const { user, signOut } = useAuth()

  async function handleSignOut() {
    await signOut()
    toast.success("Signed out")
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">
        Welcome, {user?.email}
      </h1>

      <Button variant="outline" onClick={handleSignOut}>
        Sign Out
      </Button>
    </div>
  )
}