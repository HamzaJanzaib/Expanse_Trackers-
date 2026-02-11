import Link from 'next/link'

const families = [
  { id: 'family-alpha', name: 'Alpha Family', members: 4 },
  { id: 'family-bravo', name: 'Bravo Family', members: 3 }
]

export default function FamiliesPage() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Families</h2>
      <ul className="grid gap-4 md:grid-cols-2">
        {families.map((family) => (
          <li key={family.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-lg font-medium">{family.name}</p>
            <p className="mb-3 text-sm text-slate-600">{family.members} members</p>
            <Link href={`/dashboard/families/${family.id}`} className="text-sm font-medium text-blue-600">
              Open family dashboard
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
