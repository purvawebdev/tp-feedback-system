import { useEffect, useState } from "react";
import { getAcademicFilters } from "../services/academicConfig.service";
import { getDashboardStats } from "../services/dashboard.service";

export default function CollegeAdminDashboard() {
  const [filters, setFilters] = useState({});
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function load() {
      setFilters(await getAcademicFilters());
      setStats(await getDashboardStats());
    }
    load();
  }, []);

  if (!stats) return null;

  return (
    <div className="p-6 bg-[#f7f9fc] min-h-screen">
      <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>

      {/* Filters */}
      <div className="grid grid-cols-6 gap-4 mt-6">
        {Object.values(filters).map((list, i) => (
          <select key={i} className="border rounded-md px-3 py-2 text-sm">
            {list.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mt-8">
        <Stat title="Total Responses" value={stats.totalResponses} />
        <Stat title="Average Rating" value={stats.avgRating} />
        <Stat title="Departments" value={stats.departments} />
        <Stat title="Trainers" value={stats.trainers} />
      </div>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="bg-white rounded-xl border p-6">
      <p className="text-sm text-slate-500">{title}</p>
      <h2 className="text-2xl font-semibold mt-2">{value}</h2>
    </div>
  );
}
