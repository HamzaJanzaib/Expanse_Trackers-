import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-4xl font-bold">Expanse Trackers</h1>
      <p className="max-w-2xl text-slate-600">
        A family expense tracker for budgeting, health events, pocket money, and daily life logs.
      </p>
      <div className="flex gap-3">
        <Link className="rounded-md bg-slate-900 px-4 py-2 text-white" href="/dashboard">
          Open dashboard
        </Link>
        <Link className="rounded-md border border-slate-300 px-4 py-2" href="/login">
          Sign in
        </Link>
      </div>
    </main>
  )
}
