import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "sonner"
import { useAuth } from "@/hooks/useAuth"
import AuthLayout from "@/components/AuthLayout"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUpPage() {
  const { signUp } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const isValid =
    email.length > 0 &&
    password.length >= 6 &&
    password === confirmPassword

  async function handleSignUp() {
    if (!isValid) {
      toast.warning("Passwords must match and be at least 6 characters")
      return
    }

    setLoading(true)
    try {
      await signUp(email, password)
      toast.success("Check your email to verify your account")
    } catch (err: any) {
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout>
      <div className="space-y-1 text-center">
        <h1 className="text-xl font-semibold">Sign Up</h1>
        <p className="text-sm text-muted-foreground">
          Create your PetPal account
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

        <div className="space-y-1">
          <Label>Confirm Password</Label>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <Button
          className="w-full"
          disabled={!isValid || loading}
          onClick={handleSignUp}
        >
          Sign Up
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Sign in
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}