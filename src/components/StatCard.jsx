export default function StatCard({ label, value, bg, icon }) {
  return (
    <div className="bg-white rounded-2xl p-4 flex items-center gap-3 flex-1 min-w-[160px] shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300">

      <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center flex-shrink-0`}>
        <img src={icon} alt={label} className="w-5 h-5 object-contain" />
      </div>

      <div className="text-left">
        <div className="text-sm font-extrabold text-slate-800">
          {value}
        </div>
        <div className="text-[10px] text-gray-400">
          {label}
        </div>
      </div>

    </div>
  );
}