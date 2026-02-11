import Link from 'next/link'

const sections = [
  { href: 'transactions', label: 'Transactions' },
  { href: 'categories', label: 'Categories' },
  { href: 'pocket-money', label: 'Pocket Money' },
  { href: 'health', label: 'Health' },
  { href: 'daily', label: 'Daily Logs' },
  { href: 'members', label: 'Members' },
  { href: 'settings', label: 'Settings' }
]

export default function FamilyDashboardPage({ params }: { params: { familyId: string } }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Family: {params.familyId}</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Link
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-slate-300"
            href={`/dashboard/families/${params.familyId}/${section.href}`}
            key={section.href}
          >
            {section.label}
          </Link>
        ))}
      </div>
    </section>
  )
}
