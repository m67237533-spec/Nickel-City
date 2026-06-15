import React, { useState } from "react";

export default function JobDetail({ job, onBack, getStatusClass }) {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const isSnowRemoval = job?.title?.toLowerCase().includes("snow");
  
  const isCompleted = job?.status === "Completed";
  const isActive = job?.status === "Active";
  const hasContractorInfo = isActive || isCompleted;

  return (
    <div className="w-full min-h-screen flex flex-col box-border font-sans antialiased relative">
      
      {/* Cancel Reason Modal */}
      {isCancelModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl w-full max-w-md p-8 relative shadow-2xl transition-all transform scale-100">
            <button 
              onClick={() => setIsCancelModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-2xl font-light"
            >✕</button>
            
            <h3 className="text-2xl font-bold text-center mb-8">Reason!</h3>
            
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm text-gray-700">Reason</label>
              <textarea 
                placeholder="Write your reason here"
                className="w-full h-40 p-4 border border-gray-200 rounded-2xl outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 resize-none transition-all"
              />
            </div>
            
            <button 
              onClick={() => setIsCancelModalOpen(false)}
              className="w-full mt-8 py-4 bg-[#1866B4] text-white rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-lg active:scale-95 transition-all"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* Main Details Card Box */}
      <div className=" border-slate-100/60 box-border w-full">
        
        {/* Back Button + Title + Status Badge Row */}
        <div className="flex justify-between items-start mb-6 flex-wrap gap-4 w-full">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="w-8 h-8 rounded-full border border-solid border-slate-200 bg-white flex items-center justify-center cursor-pointer text-slate-500 shadow-2xs hover:bg-slate-50 transition-colors outline-none"
            >
              <span className="text-sm font-bold">←</span>
            </button>
            <h2 className="text-xl font-bold text-slate-800 m-0 tracking-tight ">Details</h2>
          </div>
          
          <div className="flex flex-col items-end gap-2.5">
            {!isCompleted && job?.status !== "Cancelled" && (
              <button 
                onClick={() => setIsCancelModalOpen(true)}
                className="px-5 py-2.5 bg-[#1866B4] text-white rounded-xl font-bold text-xs border-none cursor-pointer hover:bg-blue-700 shadow-xs transition-colors outline-none"
              >
                Cancel Job
              </button>
            )}
            
            <span className={`border border-solid px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wide ${getStatusClass(job.status)}`}>
              {job.status}
            </span>
          </div>
        </div>

        {/* User Information Section */}
        <div className="mb-8 w-full">
          <div className="flex items-center gap-24 mb-3 w-full">
            <h3 className="text-sm font-bold text-slate-800 m-0 tracking-tight">User Information</h3>
            <span className="text-base font-black text-slate-900">${job?.price || "24"}</span>
          </div>
          <div className="flex items-center gap-4">
            <img src="/images/face.1.jpg" alt="User" className="w-14 h-14 rounded-full object-cover border border-solid border-slate-100 shadow-3xs" />
            <div className="flex flex-col gap-0.5">
              <div className="text-base font-bold text-slate-800 tracking-tight">{job?.name || "James Anderson"}</div>
              <div className="text-sm text-slate-400 font-medium">{job?.email || "james.anderson@gmail.com"}</div>
            </div>
          </div>
        </div>

        {/* Core Layout Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-6 pb-8 border-b border-solid border-slate-100/80 w-full">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-slate-800 tracking-tight">Service</span>
            <span className="text-xs text-slate-400 font-medium">{job?.title || "Snow Removal"}</span>
            {isSnowRemoval && (
              <div className="flex flex-col gap-1 mt-6">
                <span className="text-sm font-bold text-slate-800 tracking-tight">Thickness</span>
                <span className="text-xs text-slate-400 font-medium">Less than 6 inches</span>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1 max-w-xs">
            <span className="text-sm font-bold text-slate-800 tracking-tight">Address</span>
            <span className="text-xs text-slate-400 font-medium leading-relaxed">{job?.address || "53C, 14th street, Empire state, USA"}</span>
            <div className="flex flex-col gap-1 mt-6">
              <span className="text-sm font-bold text-slate-800 tracking-tight">Instructions</span>
              <p className="text-xs text-slate-400 font-medium leading-relaxed m-0">{job?.instructions || "Lorem ipsum dolor sit amet, consectetur adipiscing"}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-slate-800 tracking-tight">Date & Time</span>
            <span className="text-xs text-slate-400 font-medium">15 September, 2025 | 10:00 PM</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-slate-800 tracking-tight">Phone Number</span>
            <span className="text-xs text-slate-400 font-medium">{job?.phone || "+0123456789"}</span>
            <div className="flex flex-col gap-2 mt-6">
              <span className="text-sm font-bold text-slate-800 tracking-tight">Attachments</span>
              <div className="flex gap-2">
                <img src="/images/job.1.jpg" className="w-14 h-14 rounded-xl object-cover border border-solid border-slate-100 shadow-3xs" alt="Preview" />
                <img src="/images/job.2.jpg" className="w-14 h-14 rounded-xl object-cover border border-solid border-slate-100 shadow-3xs" alt="Preview" />
                <img src="/images/job.3.jpg" className="w-14 h-14 rounded-xl object-cover border border-solid border-slate-100 shadow-3xs" alt="Preview" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            {isSnowRemoval ? (
              <><span className="text-sm font-bold text-slate-800 tracking-tight">Areas</span><span className="text-xs text-slate-400 font-medium">Driveway, Walkways</span></>
            ) : (
              <><span className="text-sm font-bold text-slate-800 tracking-tight">Yard Size</span><span className="text-xs text-slate-400 font-medium">{job?.yardSize || "500"} sq ft</span></>
            )}
          </div>
        </div>

        {/* Contractor Information Section */}
        {hasContractorInfo && (
          <div className="mt-6 w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex-1 w-full">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-sm font-bold text-slate-800 m-0 tracking-tight">Contractor Information</h3>
                {isActive && <span className="bg-emerald-500 text-white px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide">Arrived</span>}
              </div>
              <div className="flex items-center gap-4 mb-6">
                <img src="/images/face.2.jpg" alt="Contractor" className="w-14 h-14 rounded-full object-cover border border-solid border-slate-100 shadow-3xs" />
                <div className="flex flex-col gap-0.5">
                  <div className="text-base font-bold text-slate-800 tracking-tight">John Doe</div>
                  <div className="text-sm text-slate-400 font-medium">john.doe@gmail.com</div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                <div className="flex flex-col gap-1"><span className="text-xs font-bold text-slate-800 tracking-tight">Phone Number</span><span className="text-xs text-slate-400 font-medium">+0123456789</span></div>
                <div className="flex flex-col gap-1"><span className="text-xs font-bold text-slate-800 tracking-tight">{isCompleted ? "Service Area" : "Experience"}</span><span className="text-xs text-slate-400 font-medium">{isCompleted ? "Lorem ipsum dolor, Lorem ipsum" : "4 Years"}</span></div>
                <div className="flex flex-col gap-1"><span className="text-xs font-bold text-slate-800 tracking-tight">Company Name</span><span className="text-xs text-slate-400 font-medium">{isCompleted ? "Lawn Rangers" : "N/A"}</span></div>
              </div>
            </div>
            {isActive && (
              <div className="w-full md:w-[45%] h-[160px] bg-slate-100 rounded-xl overflow-hidden border border-solid border-slate-200 relative shadow-3xs">
                <img src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-78.8784,42.8864,13,0/400x160?access_token=mock" alt="Map View" className="w-full h-full object-cover opacity-80" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}