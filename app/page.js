"use client";
import StatsCard from '../components/StatsCard';
import ChartOverview from '../components/ChartOverview';

export default function Dashboard() {
  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatsCard title="Today's Money" value="$53,000" diff="+55%" color="purple" />
        <StatsCard title="Today's Users" value="2,300" diff="+3%" color="red" />
        <StatsCard title="New Clients" value="+3,462" diff="-2%" color="green" />
        <StatsCard title="Sales" value="$103,430" diff="+5%" color="orange" />
      </div>
      <ChartOverview />
    </div>
  );
}