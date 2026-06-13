import TopBar from "../components/TopBar";
import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const revenueData = [
  { day: 1,  thisMonth: 600,  lastMonth: 1000 },
  { day: 5,  thisMonth: 800,  lastMonth: 900  },
  { day: 10, thisMonth: 1250, lastMonth: 1500 },
  { day: 13, thisMonth: 1250, lastMonth: 1600 },
  { day: 15, thisMonth: 1400, lastMonth: 1400 },
  { day: 20, thisMonth: 1200, lastMonth: 1100 },
  { day: 23, thisMonth: 1800, lastMonth: 1700 },
  { day: 25, thisMonth: 1600, lastMonth: 1500 },
  { day: 30, thisMonth: 1050, lastMonth: 700  },
];

const stats = [
  { label: "Total Revenue",     value: "$5,780", bg: "bg-blue-50",   icon: "/icons/dash.1.jpg" },
  { label: "Total Commissions", value: "$1,156", bg: "bg-emerald-50", icon: "/icons/dash.2.jpg" },
  { label: "Total Contractors", value: "190",    bg: "bg-amber-50",   icon: "/icons/dash.3.jpg" },
  { label: "Total Customer",    value: "512",    bg: "bg-violet-50",  icon: "/icons/dash.4.jpg" },
];

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-xl">
        <p className="text-xs text-gray-400 mb-1">This Month</p>
        <p className="text-xl font-bold text-slate-800 mb-0.5">
          ${payload[0]?.value.toLocaleString()}.00
        </p>
        <p className="text-xs text-gray-500">September</p>
      </div>
    );
  }
  return null;
}

function StatCard({ label, value, bg, icon }) {
  return (
    <div className="bg-white rounded-1.5xl p-4 flex items-center gap-3 flex-1 min-w-[160px] min-h-[80px] shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center flex-shrink-0`}>
        <img src={icon} alt={label} className="w-5 h-5 object-contain" />
      </div>
      <div className="text-left">
        <div className="text- font-bold text-slate-800">{value}</div>
        <div className="text-[10px] text-gray-400 mt-0">{label}</div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="pt-0">
      <div className="mb-0">
        <TopBar />
      </div>

      <h2 className="text-xl font-bold text-slate-900 mt-[-40px] mb-6 text-left ml-2">
        Dashboard
      </h2>

      <div className="flex gap-4 flex-wrap mb-6">
        {stats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-end items-center gap-2 mb-4">
          <span className="text-xs text-gray-400">Provisions Month</span>
          <span className="text-xs font-semibold text-slate-800 bg-slate-50 border border-gray-200 rounded-lg px-3 py-1">
            September 2025 📅
          </span>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
            <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
            <YAxis tickFormatter={v => `$${v}`} tick={{ fontSize: 12, fill: "#9CA3AF" }} axisLine={false} tickLine={false} domain={[400, 2200]} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="thisMonth" stroke="#1866B4" strokeWidth={2.5} dot={false} activeDot={{ r: 6, fill: "#1866B4", strokeWidth: 0 }} />
            <Line type="monotone" dataKey="lastMonth" stroke="#CBD5E1" strokeWidth={2} dot={false} activeDot={false} />
          </LineChart>
        </ResponsiveContainer>

        <div className="flex gap-5 mt-3 justify-center">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-0.5 bg-[#1866B4] rounded" />
            <span className="text-xs text-gray-500">This Month</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-0.5 bg-slate-300 rounded" />
            <span className="text-xs text-gray-500">Last Month</span>
          </div>
        </div>
      </div>
    </div>
  );
}