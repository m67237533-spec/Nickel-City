import { useState } from "react";
import TopBar from "../components/TopBar";

// Sample Job Data (Updated to match JobReport structure)
const jobData = [
  { id: 1, title: "Lawn Mowing", status: "Completed", date: "Sep 25, 2025 | 09:00 AM", address: "53C, 14th street, Empire state, USA", price: "24", statusClass: "border-emerald-500 text-emerald-500 bg-emerald-50/30" },
  { id: 2, title: "Snow Removal", status: "Active", date: "Sep 26, 2025 | 10:00 AM", address: "53C, 14th street, Empire state, USA", price: "24", statusClass: "border-blue-500 text-blue-500 bg-blue-50/30" },
  { id: 3, title: "Lawn Mowing", status: "Cancelled", date: "Sep 27, 2025 | 11:00 AM", address: "53C, 14th street, Empire state, USA", price: "24", statusClass: "border-rose-500 text-rose-500 bg-rose-50/30" },
];

export default function ContractorDetail({ contractor, onBack }) {
  const [isBlocked, setIsBlocked] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col font-sans antialiased overflow-x-hidden">
      <TopBar />
      
      <div className="p-4 md:p-8 flex-1 w-full max-w-[1400px] mx-auto box-border">
        {/* Back Button */}
        <div className="mb-6">
          <button onClick={onBack} className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center cursor-pointer hover:bg-slate-50">
            ←
          </button>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-6">
          
          {/* Left Panel */}
          <div className="w-full">
            <h2 className="text-xl font-bold text-[#1e293b] mb-6">Contractor Details</h2>

            {/* Info Section */}
            <div className="mb-8 p-4 flex items-center gap-4">
              <img src={`/images/face.1.jpg`} className="w-16 h-16 rounded-full object-cover" alt="profile" />
              <div>
                <div className="text-base font-bold text-[#1e293b]">{contractor?.name || "James Anderson"}</div>
                <div className="text-sm text-slate-400">{contractor?.email || "james.anderson@gmail.com"}</div>
                <div className="text-sm text-slate-400">{contractor?.number || "+0123456789"}</div>
              </div>
            </div>

            {/* Jobs Section (Updated Card Style) */}
            <h3 className="text-sm font-bold text-[#1e293b] mb-4">Jobs Information</h3>
            <div className="flex flex-wrap gap-4 mb-8">
              {jobData.map((job) => (
                <div key={job.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col min-h-[140px] w-[260px]">
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-left overflow-hidden">
                      <h3 className="font-bold text-slate-900 text-sm truncate">{job.title}</h3>
                      <p className="text-[9px] text-gray-400 mt-0.5">500 sq ft</p>
                      <div className="mt-2 text-[10px] text-gray-500 font-medium">
                        <p>{job.date}</p>
                        <p className="text-gray-500 mt-0.5 truncate">{job.address}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${job.statusClass}`}>
                        {job.status}
                      </span>
                      <p className="font-black text-sm text-slate-900 mt-2">${job.price}<span className="text-[9px] text-gray-400 font-normal"><br /> /min</span></p>
                    </div>
                  </div>
                  <div className="mt-auto border-t pt-3">
                    <p className="text-[9px] font-bold text-blue-600 mb-1.5 flex items-center gap-1">
                      <span className="text-[12px]">📎</span> attachments
                    </p>
                    <div className="flex gap-1.5">
                      {[1, 2, 3].map((i) => (
                        <img key={i} src={`https://picsum.photos/seed/${job.id}${i}/100/100`} alt="job-img" className="w-12 h-12 rounded-lg object-cover border border-slate-100" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsBlocked(!isBlocked)}
              className="w-full md:w-56 py-3.5 rounded-xl text-white text-xs font-bold bg-[#1e62c9] hover:bg-[#1652ab] cursor-pointer"
            >
              {isBlocked ? "Unblock User" : "Block User"}
            </button>
          </div>

          {/* Right Sidebar Panel */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col h-fit">
            <div className="flex flex-col items-center text-center pb-5 border-b border-slate-100">
              <img src="https://picsum.photos/seed/user/150/150" className="w-18 h-18 rounded-full mb-3" alt="User" />
              <div className="text-base font-bold text-[#1e293b]">James Anderson</div>
              <div className="text-xl font-bold text-[#1e293b] mt-2">$24</div>
            </div>
            <div className="pt-5 space-y-4 text-xs text-slate-500">
              <p>Email: {contractor?.email || "james.anderson@gmail.com"}</p>
              <p>Phone: {contractor?.phone || "+0123456789"}</p>
              <p className="leading-relaxed">Address: {contractor?.address || "53C, 14th street, USA"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}