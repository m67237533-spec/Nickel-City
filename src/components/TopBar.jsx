export default function TopBar() {
  return (
    <div className="flex justify-between items-center mb-7">
      <h1 className="text-3xl font-bold text-slate-800 m-0">
        Welcome Back, Admin!
      </h1>
      <div className="flex items-center gap-4">
        {/* Bell */}
        <button
          className="w-10 h-10 rounded-full border-none flex items-center justify-center cursor-pointer text-lg text-white"
          style={{ background: "var(--Primary-Color, #1866B4)" }}
        >
          🔔
        </button>
        {/* Avatar */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center text-xl">
            👨‍💼
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-800">Admin</div>
            <div className="text-xs text-gray-400">admin.admin@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}