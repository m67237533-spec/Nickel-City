const navItems = [
  { label: "Dashboard", icon: "/icons/icon.1.jpg" },
  { label: "Service Management", icon: "/icons/icon.2.jpg" },
  { label: "User Management", icon: "/icons/icon.3.jpg" },
  { label: "Contractor Management", icon: "/icons/icon.4.jpg" },
  { label: "Contractor Verification", icon: "/icons/icon.5.jpg" },
  { label: "Job Management", icon: "/icons/icon.6.jpg" },
  { label: "Reported Jobs", icon: "/icons/icon.7.jpg" },
  { label: "Payment & Transaction", icon: "/icons/icon.8.jpg" },
  { label: "Settings", icon: "/icons/icon.9.jpg" },
];

export default function Sidebar({ active, setActive, onLogoutClick }) {
  return (
    <aside className="w-[250px] h-screen bg-[#1866B4] flex flex-col fixed top-0 left-0 z-40">
      <div className="flex justify-center pt-6 pb-6">
        <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
          <img src="/images/Logo.jpg" alt="Logo" className="w-20 h-20 object-contain" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3">
        {navItems.map(({ label, icon }) => {
          const isActive = active === label;
          return (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 mb-2 rounded-xl text-[13px] transition-all border-none cursor-pointer
              ${isActive ? "bg-white text-[#1866B4] shadow-md font-bold" : "text-white hover:bg-white/10"}`}
            >
              <img
                src={icon}
                alt={label}
                className={`w-5 h-5 object-contain transition-all duration-300 ${isActive
                    ? "brightness-0 saturate-200 hue-rotate-[190deg]"
                    : "brightness-0 invert"
                  }`}
              />
              <span className="whitespace-nowrap">{label}</span>
            </button>
          );
        })}
      </div>

      <div className="p-4">
        <button onClick={onLogoutClick} className="w-full bg-white text-[#1866B4] py-2.5 rounded-lg flex items-center justify-center gap-2 font-bold text-[13px] border-none cursor-pointer hover:bg-slate-100 transition-colors">
          Logout
        </button>
      </div>
    </aside>
  );
}