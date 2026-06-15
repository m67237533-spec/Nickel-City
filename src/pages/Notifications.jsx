import React from "react";

export default function Notifications({ onBackClick }) {
  // Mock data matching the design items exactly
  const notificationList = [
    {
      id: 1,
      title: "John Doe marked as completed service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      time: "Today",
      dateString: "March 15, 2026 | 02:35PM"
    },
    {
      id: 2,
      title: "James Anderson post lawn mowing job",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      time: "Today",
      dateString: "March 15, 2026 | 02:25PM"
    },
    {
      id: 3,
      title: "John Doe marked as completed service",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      time: "Today",
      dateString: "March 15, 2026 | 02:35PM"
    },
    {
      id: 4,
      title: "James Anderson post lawn mowing job",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      time: "Today",
      dateString: "March 15, 2026 | 02:25PM"
    }
  ];

  return (
    <div className=" min-h-screen">
      {/* Top Welcome Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[35px] font-bold text-[#222]">Welcome Back, Admin!</h1>
        <div className="flex items-center gap-4">
          {/* Active / Highlighted Bell Icon */}
          <button className="w-10 h-10 bg-[#EEF4FB] rounded-lg flex items-center justify-center border-none cursor-pointer text-xl text-[#1866B4]">
            🔔
          </button>
          <div className="flex items-center gap-3  px-3 py-2 ">
            <img src="/images/profile.jpg" alt="Admin" className="w-10 h-10 rounded-lg" />
            <div>
              <h4 className="font-semibold text-sm">Admin</h4>
              <p className="text-xs text-gray-500">admin.admin@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Title Header with Back Arrow Button */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBackClick}
          className="w-8 h-8 rounded-full border border-gray-200 bg-grey flex items-center justify-center cursor-pointer text-slate-600 hover:bg-gray-50 text-sm font-bold shadow-sm"
        >
          ←
        </button>
        <h2 className="text-xl font-bold text-slate-800">Notifications</h2>
      </div>

      {/* Notifications List Container */}
      <div className="space-y-4 max-w-6xl">
        {notificationList.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-4 relative"
          >
            {/* Round Blue Notification Icon */}
            <div className="w-12 h-12 rounded-full bg-[#1866B4] flex items-center justify-center text-white flex-shrink-0 text-lg">
              🔔
            </div>

            {/* Content Details */}
            <div className="flex-1 pr-16">
              <h4 className="font-bold text-base text-slate-900 mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-gray-400 mb-1 leading-relaxed">
                {item.description}
              </p>
              <span className="text-[10px] text-gray-300 font-medium block">
                {item.dateString}
              </span>
            </div>

            {/* Time Stamp (Top Right corner) */}
            <span className="absolute right-6 top-5 text-xs text-gray-300 font-medium">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}