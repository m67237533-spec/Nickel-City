import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. Mobile Hamburger Button (Sirf mobile par dikhega) */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#1866B4] text-white rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* 2. Mobile Overlay (Sidebar khulne par background blur/dim karne ke liye) */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 3. Sidebar Component */}
      <aside className={`fixed top-0 left-0 h-screen bg-[#1866B4] flex flex-col z-40 transition-transform duration-300 w-[270px]
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex justify-center pt-6 pb-6">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
            <img src="/images/Logo.jpg" alt="Logo" className="w-20 h-20 object-contain" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4">
          {navItems.map(({ label, icon }) => {
            const isActive = active === label;
            return (
              <button
                key={label}
                onClick={() => {
                  setActive(label);
                  if (window.innerWidth < 768) setIsOpen(false); // Mobile par click karte hi menu band
                }}
                className={`w-full flex items-center gap-4 px-4 py-2.5 mb-2 rounded-xl text-[11px] transition-all border-none cursor-pointer
                ${isActive ? "bg-white text-[#1866B4] shadow-md" : "text-white hover:bg-white/10"}`}
              >
                <img
                  src={icon}
                  alt={label}
                  className={`w-5 h-5 object-contain transition-all duration-300 ${isActive
                      ? "brightness-[0.2] saturate-[10] hue-rotate-[180deg]"
                      : "brightness-0 invert"
                    }`}
                />
                <span className="whitespace-nowrap">{label}</span>
              </button>
            );
          })}
        </div>

        <div className="p-6">
          <button onClick={onLogoutClick} className="w-full bg-white text-[#1866B4] py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-[13px] border-none cursor-pointer hover:bg-slate-100 transition-colors shadow-sm">
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}