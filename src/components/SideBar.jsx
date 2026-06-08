const navItems = [
  { label: "Dashboard",               icon: "🏠" },
  { label: "Service Management",      icon: "🔧" },
  { label: "User Management",         icon: "👤" },
  { label: "Contractor Management",   icon: "👷" },
  { label: "Contractor Verification", icon: "✅" },
  { label: "Job Management",          icon: "💼" },
  { label: "Job Report",              icon: "📋" },
  { label: "Payment & Transaction",   icon: "💳" },
  { label: "Settings",                icon: "⚙️" },
];

export default function Sidebar({ active, setActive }) {
  return (
   <aside className="w-60 min-h-screen flex flex-col items-center pt-7 flex-shrink-0 border-0 outline-none"
  style={{ background: "var(--Primary-Color, #1866B4)" }}>

      {/* Logo */}
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-8 text-3xl shadow-lg">
        🚗
      </div>

      {/* Nav */}
      <nav className="w-full px-3">
        {navItems.map(({ label, icon }) => {
          const isActive = active === label;
          return (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border-none cursor-pointer text-sm mb-1 text-left transition-all duration-150
                ${isActive
                  ? "bg-white/20 text-white font-semibold"
                  : "bg-transparent text-white/65 font-normal hover:bg-white/10"
                }`}
            >
              <span className="text-base">{icon}</span>
              {label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}