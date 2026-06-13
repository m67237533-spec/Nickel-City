import { useState } from "react";
import TopBar from "../components/TopBar";

// Sample Job Data
const jobData = [
  { id: 1, title: "Lawn Mowing", status: "Completed", statusClass: "border-emerald-500 text-emerald-500 bg-emerald-50/30", address: "53C, 14th street, Empire state, USA", price: "$24", images: ["https://picsum.photos/seed/1/100/100", "https://picsum.photos/seed/2/100/100"] },
  { id: 2, title: "Snow Removal", status: "Active", statusClass: "border-blue-500 text-blue-500 bg-blue-50/30", address: "53C, 14th street, Empire state, USA", price: "$24", images: ["https://picsum.photos/seed/3/100/100"] },
  { id: 3, title: "Lawn Mowing", status: "Cancelled", statusClass: "border-rose-500 text-rose-500 bg-rose-50/30", address: "53C, 14th street, Empire state, USA", price: "$24", images: ["https://picsum.photos/seed/4/100/100"] },
];

export default function ContractorDetail({ contractor, onBack }) {
  const [showModal, setShowModal] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] flex flex-col font-sans antialiased overflow-x-hidden">
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
            <div className="mb-8 p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
              <img src={`https://picsum.photos/seed/contractor/150/150`} className="w-16 h-16 rounded-full object-cover" alt="profile" />
              <div>
                <div className="text-base font-bold text-[#1e293b]">{contractor?.name || "John Doe"}</div>
                <div className="text-sm text-slate-400">{contractor?.email || "john.doe@gmail.com"}</div>
              </div>
            </div>

            {/* Jobs Section */}
            <h3 className="text-sm font-bold text-[#1e293b] mb-4">Jobs Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
              {jobData.map((job) => (
                <div key={job.id} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-bold">{job.title}</span>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full border ${job.statusClass}`}>{job.status}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-3 line-clamp-2">{job.address}</p>
                  <div className="text-base font-black mb-2">{job.price}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsBlocked(!isBlocked)}
              className="w-full md:w-56 py-3.5 rounded-xl text-white text-xs font-bold bg-[#1e62c9] hover:bg-[#1652ab] cursor-pointer"
            >
              {isBlocked ? "Unblock Contractor" : "Block Contractor"}
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