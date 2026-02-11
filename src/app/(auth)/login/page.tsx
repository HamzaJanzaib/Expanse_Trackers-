import { LoginForm } from '@/components/forms/login-form'

export default function LoginPage() {
  return (
    <section className="w-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h1 className="mb-4 text-2xl font-semibold">Sign in</h1>
      <LoginForm />
    </section>
  )
}
