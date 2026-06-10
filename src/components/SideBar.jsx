const navItems = [
  { label: "Dashboard", icon: "🏠" },
  { label: "Service Management", icon: "🛠️" },
  { label: "User Management", icon: "👤" },
  { label: "Contractor Management", icon: "👷" },
  { label: "Contractor Verification", icon: "👷" },
  { label: "Job Management", icon: "💼" },
  { label: "Reported Jobs", icon: "📁" },
  { label: "Payment & Transaction", icon: "💳" },
  { label: "Settings", icon: "⚙️" },
];

// 🔥 FIXED: Component ke props mein 'onLogoutClick' receive kiya
export default function Sidebar({ active, setActive, onLogoutClick }) {
  return (
    <aside
      className="w-[250px] h-screen bg-[#1866B4] flex flex-col fixed top-0 left-0 z-40"
    >
      {/* Logo */}
      <div className="flex justify-center pt-6 pb-6">
        <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-lg">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-28 h-28 object-contain"
          />
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto px-3">
        {navItems.map(({ label, icon }) => {
          const isActive = active === label;

          return (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={`w-full flex items-center gap-4 px-4 py-3 mb-3 rounded-xl text-sm transition-all border-none cursor-pointer
              ${
                isActive
                  ? "bg-white text-[#1866B4] border-2 border-black shadow-md font-medium"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <span className="text-lg">{icon}</span>
              <span>{label}</span>
            </button>
          );
        })}
      </div>

      {/* Logout */}
      <div className="p-4">
        {/* 🔥 FIXED: Button ke onClick par 'onLogoutClick' call kar diya */}
        <button 
          onClick={onLogoutClick}
          className="w-full bg-white text-[#1866B4] py-3 rounded-lg flex items-center justify-center gap-2 font-medium border-none cursor-pointer hover:bg-slate-100 transition-colors"
        >
          🚪 Logout
        </button>
      </div>
    </aside>
  );
}