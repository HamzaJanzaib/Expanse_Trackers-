import { SpendingChart } from '@/components/charts/spending-chart'

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Monthly Income" value="$8,420" />
        <Card title="Monthly Expenses" value="$5,910" />
        <Card title="Net Balance" value="$2,510" />
      </div>
      <SpendingChart />
    </section>
  )
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-2xl font-semibold">{value}</p>
    </article>
  )
}
