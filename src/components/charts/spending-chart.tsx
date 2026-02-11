'use client'

import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell } from 'recharts'

const data = [
  { name: 'Food', value: 820, color: '#0f172a' },
  { name: 'Transport', value: 220, color: '#334155' },
  { name: 'Health', value: 430, color: '#64748b' },
  { name: 'Entertainment', value: 310, color: '#94a3b8' }
]

export function SpendingChart() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">Spending by category</h2>
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={70} outerRadius={100}>
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
