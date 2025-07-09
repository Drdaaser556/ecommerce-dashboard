export default function StatsCard({ title, value, diff, color }) {
  return (
    <div className={`rounded-xl p-4 bg-white shadow-md border-l-4 border-${color}-500`}>
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
      <p className={`text-sm ${diff.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{diff} since last period</p>
    </div>
  );
}