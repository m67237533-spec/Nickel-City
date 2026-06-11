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

export default function ContractorDetail({ contractor, onBack }) {
  const [showModal, setShowModal] = useState(false);
  // state toggle handler for block/unblock workflow matching your screenshots
  const [isBlocked, setIsBlocked] = useState(false); 

  const handleBlockActionToggle = () => {
    if (!isBlocked) {
      // open verification popup modal before blocking
      setShowModal(true);
    } else {
      // if already blocked, click will instantly toggle it back to unblock active state
      setIsBlocked(false);
    }
  };

  const handleBlockConfirm = () => {
    setIsBlocked(true);
    setShowModal(false);
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] flex flex-col box-border font-sans antialiased overflow-x-hidden">
      
      {/* ─── TOP HEADER LAYER ─── */}
      <TopBar />
      
      {/* ─── MAIN LAYOUT BLOCK ─── */}
      <div className="p-8 flex-1 flex flex-col box-border w-full">
        
        {/* BACK BUTTON ARROW ROW */}
        <div className="mb-4">
          <button 
            onClick={onBack} 
            className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center cursor-pointer text-slate-500 shadow-sm hover:bg-slate-50 transition-colors outline-none"
          >
            <span className="text-sm font-semibold">←</span>
          </button>
        </div>

        {/* DETAILS CORE HUB SPLIT LAYOUT */}
        <div className="flex gap-8 items-start w-full flex-wrap lg:flex-nowrap">
          
          {/* ─── LEFT PANEL CONTAINER ─── */}
          <div className="flex-1 flex flex-col min-w-0 w-full">
            <h2 className="text-xl font-bold text-[#1e293b] m-0 mb-6">Contractor Details</h2>

            {/* CONTRACTOR INFORMATION LAYER */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-[#1e293b] m-0 mb-4">Contractor Information</h3>
              <div className="flex items-center gap-4">
                <img 
                  src={`https://picsum.photos/seed/contractor${contractor?.id || "avatar"}/150/150`} 
                  alt="contractor profile" 
                  className="w-16 h-16 rounded-full object-cover border border-slate-100" 
                />
                <div className="flex flex-col gap-0.5">
                  <div className="text-base font-bold text-[#1e293b]">{contractor?.name || "John Doe"}</div>
                  <div className="text-sm text-slate-400 font-medium">{contractor?.email || "john.doe@gmail.com"}</div>
                  <div className="text-sm text-slate-400 font-medium">{contractor?.phone || "+33757005467"}</div>
                </div>
              </div>
            </div>

            {/* JOBS COMPONENT CARDS BLOCK */}
            <div className="mb-8 w-full">
              <h3 className="text-sm font-bold text-[#1e293b] m-0 mb-4">Jobs Information</h3>
              <div className="flex gap-4 w-full flex-wrap xl:flex-nowrap">
                {jobData.map((job) => (
                  <div 
                    key={job.id} 
                    className={`bg-white rounded-xl p-4 flex-1 min-w-[240px] shadow-sm box-border flex flex-col justify-between ${
                      job.isActiveBorder ? "border-2 border-[#1e62c9]" : "border border-slate-100/60"
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span className="text-sm font-bold text-[#1e293b]">{job.title}</span>
                        <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold tracking-wide ${job.statusClass}`}>
                          {job.status}
                        </span>
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
                      <div className="text-[10px] text-slate-400 font-bold flex items-center gap-1 mb-2">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-500"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                        attachments
                      </div>
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

            {/* TOGGLE WORKFLOW ACTION CONTROLLER BUTTON */}
            <div className="mt-2">
              <button
                onClick={handleBlockActionToggle}
                className="w-56 py-3.5 rounded-xl text-white text-xs font-bold border-none transition-all text-center outline-none bg-[#1e62c9] hover:bg-[#1652ab] shadow-md cursor-pointer"
              >
                {isBlocked ? "Unblock Contractor" : "Block Contractor"}
              </button>
            </div>
          </div>

          {/* ─── RIGHT SIDEBAR PANEL COMPONENT (IMAGE_2E3DD0 SPECIFIC LAYOUT) ─── */}
          <div className="w-[280px] bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col box-border flex-shrink-0 mx-auto lg:mx-0 min-h-[520px]">
            
            {/* Top State row badges */}
            <div className="flex items-center justify-between w-full mb-6">
              <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#22c55e] text-white tracking-wide">
                Transferred
              </span>
              <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full border border-[#22c55e] text-[#22c55e] bg-emerald-50/10">
                Completed
              </span>
            </div>

            {/* Profile main info block */}
            <div className="flex flex-col items-center text-center pb-5 border-b border-slate-100/80 w-full box-border">
              <img 
                src="https://picsum.photos/seed/userprofileavatar/150/150" 
                alt="James Anderson" 
                className="w-18 h-18 rounded-full object-cover mb-3 border border-slate-100 shadow-xs" 
              />
              <div className="text-base font-bold text-[#1e293b] tracking-tight">James Anderson</div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5 mb-3">User</div>
              <div className="text-xl font-bold text-[#1e293b]">$24</div>
            </div>

            {/* Contact Info details group */}
            <div className="pt-5 w-full flex flex-col box-border">
              <h4 className="text-sm font-bold text-[#1e293b] m-0 mb-4 tracking-tight text-left">Contact Info</h4>
              
              <div className="flex flex-col gap-4 w-full text-xs text-slate-400 font-medium">
                {/* Email container wrapper row */}
                <div className="flex items-center gap-3 w-full border-b border-slate-50 pb-2.5">
                  <div className="w-5 h-5 rounded-md bg-[#1e62c9] flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <span className="truncate text-slate-500 font-normal">{contractor?.email || "james.anderson@gmail.com"}</span>
                </div>
                
                {/* Phone container wrapper row */}
                <div className="flex items-center gap-3 w-full border-b border-slate-50 pb-2.5">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1e62c9" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <span className="text-slate-500 font-normal">{contractor?.phone || "+0123456789"}</span>
                </div>
                
                {/* Location container wrapper row */}
                <div className="flex items-start gap-3 w-full pb-1 leading-relaxed">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1e62c9" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <span className="text-slate-500 font-normal text-[11px] leading-normal">{contractor?.address || "53C, 14th street, Empire state, USA"}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ─── BLOCK INTERACTIVE POPUP MODAL ─── */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-slate-900/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-8 text-center shadow-2xl max-w-[360px] w-[90%] box-border animate-in fade-in zoom-in-95 duration-150">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Block</h2>
            <p className="text-slate-400 text-xs font-medium leading-relaxed mb-6">
              Are you sure you want to block<br />this contractor?
            </p>
            <div className="flex gap-3 justify-center w-full">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2.5 rounded-xl text-white text-xs font-bold bg-slate-900 hover:bg-slate-800 transition-colors cursor-pointer outline-none border-none"
              >
                No
              </button>
              <button
                onClick={handleBlockConfirm}
                className="flex-1 py-2.5 rounded-xl text-white text-xs font-bold bg-[#1e62c9] hover:bg-[#1652ab] transition-colors cursor-pointer outline-none border-none"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}