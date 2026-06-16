export default function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border rounded-xl px-4 py-3 shadow-xl">
        <p className="text-xs text-gray-400">This Month</p>
        <p className="text-lg font-bold text-slate-800">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
}