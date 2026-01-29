import {
  BarChart3,
  RefreshCcw,
  Users,
  Layers,
  TrendingUp,
  Calendar,
  MessageSquare,
} from "lucide-react";

export default function CollegeAdminDashboard() {
  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      {/* TOP HEADER */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Dashboard
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Welcome back, ICEM Admin. Here’s what’s happening.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium text-slate-700">
                Indira College of Engineering & Management
              </p>
              <p className="text-xs text-slate-500">
                College Admin
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* FILTERS */}
      <section className="border-b bg-[#f9fbfd]">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Layers className="h-5 w-5 text-[#083164]" />
              <div>
                <h2 className="text-lg font-semibold text-slate-800">
                  Academic Structure Filters
                </h2>
                <p className="text-sm text-slate-500">
                  Navigate through courses, departments, and more
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 rounded-md border px-4 py-2 text-sm text-slate-600 hover:bg-slate-50">
              <RefreshCcw className="h-4 w-4" />
              Reset Filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "All Courses",
              "All Years",
              "All Departments",
              "All Subjects",
              "All Batches",
              "Pick a date range",
            ].map((label, i) => (
              <select
                key={i}
                className="rounded-md border px-3 py-2 text-sm text-slate-600 bg-white"
              >
                <option>{label}</option>
              </select>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Responses"
            value="0"
            subtitle="0 today, 0 this week"
            icon={<BarChart3 />}
          />
          <StatCard
            title="Average Rating"
            value="0.0"
            subtitle="Out of 5.0"
            icon={<TrendingUp />}
          />
          <StatCard
            title="Departments"
            value="11"
            subtitle="Academic departments"
            icon={<Layers />}
          />
          <StatCard
            title="Trainers"
            value="2"
            subtitle="Across departments"
            icon={<Users />}
          />
        </div>
      </section>

      {/* CHARTS + FEEDBACK */}
      <section className="mx-auto max-w-7xl px-6 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Department Performance */}
        <Card
          title="Department Performance"
          subtitle="Average trainer scores by department"
        />

        {/* Response Trend */}
        <Card
          title="Response Trend"
          subtitle="Last 7 days"
          icon={<Calendar className="h-4 w-4" />}
        />

        {/* Performance Trend */}
        <Card
          title="Performance Trend"
          subtitle="Monthly overview"
          icon={<TrendingUp className="h-4 w-4" />}
        />

        {/* Category Breakdown */}
        <div className="lg:col-span-2">
          <Card
            title="Category Breakdown"
            subtitle="Trainer performance by category"
          />
        </div>

        {/* Trainer Feedback & Comments */}
        <div className="lg:col-span-1">
          <div className="rounded-xl border bg-white p-6 h-full">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  Trainer Feedback & Comments
                </h3>
                <p className="text-sm text-slate-500">
                  Recent trainer insights
                </p>
              </div>

              <button className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-slate-600">
                <BarChart3 className="h-4 w-4" />
                View All
              </button>
            </div>

            <div className="border rounded-lg p-6 text-center text-slate-500">
              <MessageSquare className="mx-auto h-8 w-8 mb-3" />
              No comments yet
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Components ---------- */

function StatCard({ title, value, subtitle, icon }) {
  return (
    <div className="rounded-xl border bg-white p-6 flex justify-between">
      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <h3 className="mt-2 text-2xl font-semibold text-slate-900">
          {value}
        </h3>
        <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
      </div>
      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#083164]/10 text-[#083164]">
        {icon}
      </div>
    </div>
  );
}

function Card({ title, subtitle, icon }) {
  return (
    <div className="rounded-xl border bg-white p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>
        {icon}
      </div>

      <div className="flex flex-col items-center justify-center h-48 text-slate-500">
        <BarChart3 className="h-8 w-8 mb-2" />
        No data available
      </div>
    </div>
  );
}
