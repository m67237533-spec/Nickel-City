import { useState } from "react";
import TopBar from "../components/TopBar";

const jobData = [
  {
    id: 1,
    title: "Lawn Mowing",
    status: "Completed",
    statusClass: "border border-emerald-500 text-emerald-500 bg-emerald-50/30",
    sqft: "500 sq ft",
    date: "Sep 25, 2025 | 09:00 AM",
    address: "53C, 14th street, Empire state, USA",
    price: "$24",
    timeAgo: "5min",
    isActiveBorder: true,
    images: [
      "https://picsum.photos/seed/job1a/100/100",
      "https://picsum.photos/seed/job1b/100/100",
      "https://picsum.photos/seed/job1c/100/100",
    ],
  },
  {
    id: 2,
    title: "Snow Removal",
    status: "Active",
    statusClass: "border border-blue-500 text-blue-500 bg-blue-50/30",
    sqft: "Sep 25, 2025 | 09:00 AM",
    date: "", 
    address: "53C, 14th street, Empire state, USA",
    price: "$24",
    timeAgo: "5min",
    isActiveBorder: false,
    images: [
      "https://picsum.photos/seed/job2a/100/100",
      "https://picsum.photos/seed/job2b/100/100",
      "https://picsum.photos/seed/job2c/100/100",
    ],
  },
  {
    id: 3,
    title: "Lawn Mowing",
    status: "Cancelled",
    statusClass: "border border-rose-500 text-rose-500 bg-rose-50/30",
    sqft: "500 sq ft",
    date: "Sep 25, 2025 | 09:00 AM",
    address: "53C, 14th street, Empire state, USA",
    price: "$24",
    timeAgo: "5min",
    isActiveBorder: false,
    images: [
      "https://picsum.photos/seed/job3a/100/100",
      "https://picsum.photos/seed/job3b/100/100",
      "https://picsum.photos/seed/job3c/100/100",
    ],
  },
];

export default function UserDetailUnblock({ user, onBack, onUnblockClick }) {
  return (
    <div className="w-full min-h-screen bg-[#f8fafc] flex flex-col box-border font-sans antialiased overflow-x-hidden">
      
      {/* TOP HEADER LAYER */}
      <TopBar />
      
      {/* MAIN LAYOUT CONTENT BLOCK */}
      <div className="p-8 flex-1 flex flex-col box-border w-full">
        
        {/* BACK BUTTON ROW */}
        <div className="mb-4">
          <button onClick={onBack} className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center cursor-pointer text-slate-500 shadow-sm hover:bg-slate-50">
            <span className="text-sm font-semibold">←</span>
          </button>
        </div>

        {/* DETAILS GRID LAYOUT */}
        <div className="flex gap-8 items-start w-full flex-wrap lg:flex-nowrap">
          <div className="flex-1 flex flex-col min-w-0 w-full">
            <h2 className="text-xl font-bold text-[#1e293b] m-0 mb-6">User Details</h2>

            {/* USER INFORMATION SECTION */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-[#1e293b] m-0 mb-4">User Information</h3>
              <div className="flex items-center gap-4">
                <img src="https://picsum.photos/seed/useravatar/150/150" alt="user" className="w-16 h-16 rounded-full object-cover border border-slate-100" />
                <div className="flex flex-col gap-0.5">
                  <div className="text-base font-bold text-[#1e293b]">{user?.name || "James Anderson"}</div>
                  <div className="text-sm text-slate-400 font-medium">{user?.email || "james.anderson@gmail.com"}</div>
                  <div className="text-sm text-slate-400 font-medium">{user?.phone || "+33757005467"}</div>
                </div>
              </div>
            </div>

            {/* JOBS COMPONENT LIST */}
            <div className="mb-6 w-full">
              <h3 className="text-sm font-bold text-[#1e293b] m-0 mb-4">Jobs Information</h3>
              <div className="flex gap-4 w-full flex-wrap xl:flex-nowrap">
                {jobData.map((job) => (
                  <div key={job.id} className={`bg-white rounded-xl p-4 flex-1 min-w-[240px] shadow-sm box-border flex flex-col justify-between ${job.isActiveBorder ? "border-2 border-[#1e62c9]" : "border border-slate-100/60"}`}>
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span className="text-sm font-bold text-[#1e293b]">{job.title}</span>
                        <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold tracking-wide ${job.statusClass}`}>{job.status}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium mb-0.5">{job.sqft}</div>
                      {job.date && <div className="text-[11px] text-slate-400 font-medium mb-0.5">{job.date}</div>}
                      <div className="text-[11px] text-slate-400 font-medium mb-3 truncate">{job.address}</div>
                    </div>
                    <div>
                      <div className="flex items-baseline justify-between gap-2 mb-2">
                        <span className="text-base font-black text-[#1e293b]">{job.price}</span>
                        <span className="text-[10px] text-slate-400 font-medium">{job.timeAgo}</span>
                      </div>
                      <div className="text-[10px] text-slate-400 font-bold flex items-center gap-1 mb-2">📎 attachments</div>
                      <div className="flex gap-1.5 w-full">
                        {job.images.map((img, i) => (
                          <img key={i} src={img} alt="job proof" className="w-[52px] h-10 rounded-lg object-cover flex-shrink-0" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ACTION FOOTER BUTTON */}
            <div className="mt-4">
              <button
                onClick={onUnblockClick}
                className="w-56 py-3.5 rounded-xl text-white text-xs font-bold border-none cursor-pointer shadow-md bg-[#1e62c9] hover:bg-[#1652ab] transition-all text-center outline-none"
              >
                Unblock User
              </button>
            </div>
          </div>

          {/* RIGHT SIDEBAR PANEL */}
          <div className="w-[260px] bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex flex-col box-border flex-shrink-0 mx-auto lg:mx-0">
            <div className="flex items-center justify-between w-full mb-4">
              <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-emerald-500 text-white tracking-wide">Paid</span>
              <span className="text-[9px] font-medium px-2 py-0.5 rounded-md border border-emerald-500 text-emerald-500 bg-emerald-50/10">Completed</span>
            </div>
            <div className="flex flex-col items-center text-center pb-4 border-b border-slate-100 w-full box-border">
              <img src="https://picsum.photos/seed/contractorprofile/120/120" alt="contractor" className="w-14 h-14 rounded-full object-cover mb-2 border border-slate-100" />
              <div className="text-sm font-bold text-[#1e293b]">John Deo</div>
              <div className="text-[10px] text-slate-400 font-semibold mb-2">Contractor</div>
              <div className="text-lg font-black text-[#1e293b]">$24</div>
            </div>
            <div className="pt-4 w-full flex flex-col box-border">
              <h4 className="text-[10px] font-bold text-[#1e293b] m-0 mb-3 uppercase tracking-wider text-left">Contact Info</h4>
              <div className="flex flex-col gap-3 w-full text-[11px] text-slate-500 font-medium">
                <div>📧 john.doe@gmail.com</div>
                <div>📞 +0123456789</div>
                <div className="leading-relaxed">📍 53C, 14th street, Empire state, USA</div>
                <div className="pt-2 border-t border-slate-100">👥 Lawn Rangers</div>
                <div>🛠️ Lawn Mowing</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}