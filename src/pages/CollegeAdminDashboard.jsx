import { useEffect, useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Layers,
  Users,
  Calendar,
  RefreshCcw,
  MessageSquare,
} from "lucide-react";
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
    <div className="p-6 bg-[#f7f9fc] min-h-screen space-y-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
          <p className="text-sm text-slate-500 mt-1">
            Welcome back, ICEM Admin. Here's what's happening.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium">
            ICEM
          </div>
        </div>
      </div>

      {/* FILTERS SECTION */}
      <div className="bg-white rounded-xl border p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Layers className="h-5 w-5 text-[#083164]" />
            <div>
              <h2 className="font-semibold text-slate-800">
                Academic Structure Filters
              </h2>
              <p className="text-sm text-slate-500">
                Navigate through courses, departments, and more
              </p>
            </div>
          </div>

          <button className="flex items-center gap-2 text-sm border px-3 py-2 rounded-md hover:bg-slate-50">
            <RefreshCcw className="h-4 w-4" />
            Reset Filters
          </button>
        </div>

        {/* Dropdowns (existing logic preserved) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Object.values(filters).map((list, i) => (
            <select
              key={i}
              className="border rounded-md px-3 py-2 text-sm bg-slate-50"
            >
              {list.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Stat
          title="Total Responses"
          value={stats.totalResponses}
          subtitle="0 today, 0 this week"
          icon={<BarChart3 />}
        />
        <Stat
          title="Average Rating"
          value={stats.avgRating}
          subtitle="Out of 5.0"
          icon={<TrendingUp />}
        />
        <Stat
          title="Departments"
          value={stats.departments}
          subtitle="Academic departments"
          icon={<Layers />}
        />
        <Stat
          title="Trainers"
          value={stats.trainers}
          subtitle="Across departments"
          icon={<Users />}
        />
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartCard
          title="Department Performance"
          subtitle="Average scores by department"
        />
        <ChartCard
          title="Response Trend"
          subtitle="Last 7 days"
          icon={<Calendar className="h-4 w-4" />}
        />
        <ChartCard
          title="Performance Trend"
          subtitle="Monthly overview"
          icon={<TrendingUp className="h-4 w-4" />}
        />
      </div>

      {/* LOWER SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ChartCard
            title="Category Breakdown"
            subtitle="Trainer performance by category"
          />
        </div>

        <div className="bg-white rounded-xl border p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-slate-800">
                Trainer Feedback & Comments
              </h3>
              <p className="text-sm text-slate-500">Recent trainer insights</p>
            </div>
          </div>

          <div className="border rounded-lg p-6 text-center text-slate-500">
            <MessageSquare className="mx-auto h-8 w-8 mb-3" />
            No comments yet
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- UI Components ---------- */

function Stat({ title, value, subtitle, icon }) {
  return (
    <div className="bg-white rounded-xl border p-6 flex justify-between">
      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <h2 className="text-2xl font-semibold mt-2">{value}</h2>
        <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
      </div>
      <div className="h-10 w-10 rounded-lg bg-[#083164]/10 text-[#083164] flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
}

function ChartCard({ title, subtitle, icon }) {
  return (
    <div className="bg-white rounded-xl border p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-slate-800">{title}</h3>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>
        {icon}
      </div>

      <div className="flex flex-col items-center justify-center h-48 text-slate-400">
        <BarChart3 className="h-8 w-8 mb-2" />
        No data available
      </div>
    </div>
  );
}
