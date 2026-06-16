import React from "react";

export default function Notifications({ onBackClick }) {
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
    <div className="min-h-screen">

      {/* ONLY PAGE TITLE (NO HEADER NOW) */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBackClick}
          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-slate-600"
        >
          ←
        </button>

        <h2 className="text-xl font-bold text-slate-800">
          Notifications
        </h2>
      </div>

      {/* LIST */}
      <div className="space-y-4 max-w-6xl">
        {notificationList.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-4 relative"
          >
            <div className="w-12 h-12 rounded-full bg-[#1866B4] flex items-center justify-center text-white flex-shrink-0">
              🔔
            </div>

            <div className="flex-1 pr-16">
              <h4 className="font-bold text-base text-slate-900 mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-gray-400 mb-1">
                {item.description}
              </p>
              <span className="text-[10px] text-gray-300">
                {item.dateString}
              </span>
            </div>

            <span className="absolute right-6 top-5 text-xs text-gray-300">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}