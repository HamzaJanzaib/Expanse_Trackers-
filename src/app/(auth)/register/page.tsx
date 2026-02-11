import { RegisterForm } from '@/components/forms/register-form'

export default function RegisterPage() {
  return (
    <section className="w-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h1 className="mb-4 text-2xl font-semibold">Create account</h1>
      <RegisterForm />
    </section>
  )
}
