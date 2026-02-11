'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { loginSchema } from '@/lib/validations/auth'

type LoginValues = z.infer<typeof loginSchema>

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (values: LoginValues) => {
    console.info('login payload', values)
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="mb-1 block text-sm font-medium">Email</label>
        <input className="w-full rounded-md border border-slate-300 px-3 py-2" {...register('email')} />
        {errors.email ? <p className="mt-1 text-xs text-red-500">{errors.email.message}</p> : null}
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Password</label>
        <input className="w-full rounded-md border border-slate-300 px-3 py-2" type="password" {...register('password')} />
        {errors.password ? <p className="mt-1 text-xs text-red-500">{errors.password.message}</p> : null}
      </div>
      <button className="w-full rounded-md bg-slate-900 px-4 py-2 font-medium text-white" type="submit">
        Sign in
      </button>
      <p className="text-center text-sm text-slate-500">
        Don&apos;t have an account?{' '}
        <Link className="font-medium text-blue-600" href="/register">
          Register
        </Link>
      </p>
    </form>
  )
}
