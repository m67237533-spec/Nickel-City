import React from "react";

export default function TopBar({ onNotificationClick, onProfileClick, adminName, adminEmail }) {
  return (
    <div className="flex justify-between items-center mb-7">
      {/* Welcome Heading */}
      {/* <h1 className="text-[32px] font-bold text-[#222] tracking-tight m-0">
        Welcome Back, Admin!
      </h1> */}
      
      <div className="flex items-center gap-4">
        {/* 🔥 Notification Bell (Uncommented & Connected) */}
        {/* <button
          onClick={onNotificationClick}
          className="w-10 h-10 rounded-xl border-none flex items-center justify-center cursor-pointer text-lg text-[#1866B4] bg-[#EEF4FB] hover:bg-blue-100 transition-colors"
        >
          🔔
        </button> */}

        {/* 🔥 Avatar Card (Connected to Profile Modal Click) */}
        <div 
          onClick={onProfileClick}
          className=""
        >
          {/* <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-xl overflow-hidden">
            👨‍💼
          </div>
          <div className="text-left">
            <div className="text-sm font-bold text-slate-800">{adminName || "Admin"}</div>
            <div className="text-[10px] text-gray-400">{adminEmail || "admin.admin@gmail.com"}</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}