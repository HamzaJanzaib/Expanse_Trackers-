'use client'

const mockFamilies = [
  { id: 'family-alpha', name: 'Alpha Family' },
  { id: 'family-bravo', name: 'Bravo Family' }
]

export function FamilySwitcher() {
  return (
    <select className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" defaultValue={mockFamilies[0].id}>
      {mockFamilies.map((family) => (
        <option key={family.id} value={family.id}>
          {family.name}
        </option>
      ))}
    </select>
  )
}
