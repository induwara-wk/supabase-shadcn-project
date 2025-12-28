import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { toast } from "sonner"
import { useAuth } from "@/hooks/useAuth"
import AuthLayout from "@/components/AuthLayout"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignInPage() {
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const isValid = email.length > 0 && password.length > 0

  async function handleSignIn() {
    if (!isValid) {
      toast.warning("Please enter email and password")
      return
    }

    setLoading(true)
    try {
      await signIn(email, password)
      toast.success("Signed in successfully")
      navigate("/", { replace: true })
    } catch (err: any) {
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout>
      <div className="space-y-1 text-center">
        <h1 className="text-xl font-semibold">Sign In</h1>
        <p className="text-sm text-muted-foreground">
          Welcome back to PetPal
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-1">
          <Label>Email</Label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="space-y-1">
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button
          className="w-full"
          disabled={!isValid || loading}
          onClick={handleSignIn}
        >
          Sign In
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Don’t have an account?{" "}
          <Link to="/signup" className="underline">
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}