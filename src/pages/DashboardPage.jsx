import TopBar from "../components/TopBar";
import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

function StatCard({ label, value, bg, icon }) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center gap-3 shadow-md border border-gray-100">

      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${bg} flex items-center justify-center`}>
        <img src={icon} className="w-4 h-4 sm:w-5 sm:h-5" alt="" />
      </div>

      <div className="text-left">
        <div className="font-bold text-sm sm:text-base text-slate-800">
          {value}
        </div>
        <div className="text-[10px] sm:text-xs text-gray-400">
          {label}
        </div>
      </div>

    </div>
  );
}

const stats = [
  { label: "Revenue", value: "$5,780", bg: "bg-blue-50", icon: "/icons/dash.1.jpg" },
  { label: "Commissions", value: "$1,156", bg: "bg-green-50", icon: "/icons/dash.2.jpg" },
  { label: "Contractors", value: "190", bg: "bg-yellow-50", icon: "/icons/dash.3.jpg" },
  { label: "Customers", value: "512", bg: "bg-purple-50", icon: "/icons/dash.4.jpg" },
];

const revenueData = [
  { day: 1, thisMonth: 600, lastMonth: 1000 },
  { day: 5, thisMonth: 800, lastMonth: 900 },
  { day: 10, thisMonth: 1250, lastMonth: 1500 },
  { day: 15, thisMonth: 1400, lastMonth: 1400 },
  { day: 20, thisMonth: 1200, lastMonth: 1100 },
  { day: 25, thisMonth: 1600, lastMonth: 1500 },
  { day: 30, thisMonth: 1050, lastMonth: 700 },
];

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-xl">
        <p className="text-xs text-gray-400 mb-1">This Month</p>
        <p className="text-sm font-bold text-slate-800">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
}

export default function DashboardPage() {
  return (
    <div className="p-3 sm:p-4 space-y-6  min-h-screen">

      <TopBar />
<h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
  Dashboard
</h2>
      {/* STATS - UPDATED RESPONSIVE GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* CHART */}
      <div className="bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center gap-2 mb-4">
          <span className="text-xs text-gray-400">Provision Month</span>
          <span className="text-xs font-semibold bg-slate-50 border border-gray-200 rounded-lg px-3 py-1 w-fit">
            September 2025 📅
          </span>
        </div>

        {/* CHART HEIGHT RESPONSIVE */}
        <div className="w-full h-[200px] sm:h-[260px] md:h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>

              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />

              <XAxis
                dataKey="day"
                tick={{ fontSize: 10, fill: "#9CA3AF" }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tickFormatter={(v) => `$${v}`}
                tick={{ fontSize: 10, fill: "#9CA3AF" }}
                axisLine={false}
                tickLine={false}
                width={35}
              />

              <Tooltip content={<CustomTooltip />} />

              <Line
                type="monotone"
                dataKey="thisMonth"
                stroke="#1866B4"
                strokeWidth={2}
                dot={false}
              />

              <Line
                type="monotone"
                dataKey="lastMonth"
                stroke="#CBD5E1"
                strokeWidth={2}
                dot={false}
              />

            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* LEGEND */}
        <div className="flex flex-wrap gap-4 mt-4 justify-center">

          <div className="flex items-center gap-1.5">
            <div className="w-5 h-0.5 bg-[#1866B4]" />
            <span className="text-xs text-gray-500">This Month</span>
          </div>

          <div className="flex items-center gap-1.5">
            <div className="w-5 h-0.5 bg-slate-300" />
            <span className="text-xs text-gray-500">Last Month</span>
          </div>

        </div>

      </div>

    </div>
  );
}