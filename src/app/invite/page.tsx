interface InvitePageProps {
  searchParams: { code?: string }
}

export default function InvitePage({ searchParams }: InvitePageProps) {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl items-center px-6">
      <section className="w-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Family invitation</h1>
        <p className="mt-2 text-slate-600">
          {searchParams.code
            ? `Invitation code detected: ${searchParams.code}`
            : 'Missing invitation code. Ask your family admin for a fresh invite link.'}
        </p>
      </section>
    </main>
  )
}
