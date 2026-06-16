import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import CustomTooltip from "./CustomTooltip";

export default function ChartSection({ data }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mt-6">
      
      {/* header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
        <span className="text-xs text-gray-400">Revenue Overview</span>
        <span className="text-xs font-semibold bg-slate-50 border rounded-lg px-3 py-1">
          September 2025 📅
        </span>
      </div>

      {/* chart */}
      <div className="w-full h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
            <XAxis dataKey="day" tick={{ fontSize: 12 }} />
            <YAxis tickFormatter={(v) => `$${v}`} />
            <Tooltip content={<CustomTooltip />} />

            <Line
              type="monotone"
              dataKey="thisMonth"
              stroke="#1866B4"
              strokeWidth={2.5}
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

      {/* legend */}
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-[#1866B4]" />
          <span className="text-xs text-gray-500">This Month</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-gray-300" />
          <span className="text-xs text-gray-500">Last Month</span>
        </div>
      </div>
    </div>
  );
}