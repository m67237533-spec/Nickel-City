import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-xl">
        <p className="text-xs text-gray-400 mb-1">This Month</p>
        <p className="text-xl font-bold text-slate-800 mb-0.5">
          ${payload[0]?.value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
}

export default function RevenueChart({ data }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

      {/* header */}
      <div className="flex justify-end items-center mb-4">
        <span className="text-xs text-gray-400">Provision Month</span>
        <span className="ml-2 text-xs font-semibold text-slate-800 bg-slate-50 border border-gray-200 rounded-lg px-3 py-1">
          September 2025 📅
        </span>
      </div>

      {/* chart */}
      <div className="w-full h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />

            <XAxis
              dataKey="day"
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tickFormatter={(v) => `$${v}`}
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip content={<CustomTooltip />} />

            <Line
              type="monotone"
              dataKey="thisMonth"
              stroke="#1866B4"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 6 }}
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

      {/* legend */}
      <div className="flex gap-5 mt-4 justify-center">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-0.5 bg-[#1866B4]" />
          <span className="text-xs text-gray-500">This Month</span>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="w-6 h-0.5 bg-slate-300" />
          <span className="text-xs text-gray-500">Last Month</span>
        </div>
      </div>
    </div>
  );
}