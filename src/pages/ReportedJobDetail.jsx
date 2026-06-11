import React from "react";

export default function ReportedJobDetail({ job, onBack }) {
  return (
    <div className="w-full min-h-screen bg-[#F8F8F8] p-8 flex flex-col box-border font-sans antialiased">
      
      {/* Main Details Card Box */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-solid border-slate-100/60 box-border w-full">
        
        {/* Back Button + Title + Action Buttons */}
        <div className="flex justify-between items-start mb-6 flex-wrap gap-4 w-full">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="w-8 h-8 rounded-full border border-solid border-slate-200 bg-white flex items-center justify-center cursor-pointer text-slate-500 shadow-2xs hover:bg-slate-50 transition-colors outline-none"
            >
              <span className="text-sm font-bold">←</span>
            </button>
            <h2 className="text-xl font-bold text-slate-800 m-0 tracking-tight">Details</h2>
          </div>
          
          <div className="flex flex-col items-end gap-2.5">
            <div className="flex items-center gap-3">
              {/* Refund Button */}
              <button 
                onClick={() => alert("Refunded successfully")}
                className="px-5 py-2 bg-[#222] text-white rounded-xl font-bold text-xs border-none cursor-pointer hover:bg-black shadow-xs transition-colors outline-none"
              >
                Refund
              </button>
              {/* Pay Contractor Button */}
              <button 
                onClick={() => alert("Payment sent to contractor")}
                className="px-5 py-2 bg-[#1866B4] text-white rounded-xl font-bold text-xs border-none cursor-pointer hover:bg-blue-700 shadow-xs transition-colors outline-none"
              >
                Pay Contractor
              </button>
            </div>
            {/* Reported Badge */}
            <span className="border border-solid border-red-200 bg-red-50 text-red-500 px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wide">
              Reported
            </span>
          </div>
        </div>

        {/* User Information Section */}
        <div className="mb-8 w-full">
          <div className="flex justify-between items-center mb-3 w-full">
            <h3 className="text-sm font-bold text-slate-800 m-0 tracking-tight">User Information</h3>
            <span className="text-xl font-black text-slate-900">${job?.price || "24"}</span>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=60"
              alt="User"
              className="w-14 h-14 rounded-full object-cover border border-solid border-slate-100 shadow-3xs"
            />
            <div className="flex flex-col gap-0.5">
              <div className="text-base font-bold text-slate-800 tracking-tight">James Anderson</div>
              <div className="text-sm text-slate-400 font-medium">james.anderson@gmail.com</div>
            </div>
          </div>
        </div>

        {/* Service Grid Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 border-b border-solid border-slate-100 pb-6 w-full">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-slate-800 tracking-tight">Service</span>
            <span className="text-xs text-slate-400 font-medium">{job?.title || "Lawn Mowing"}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-slate-800 tracking-tight">Yard Size</span>
            <span className="text-xs text-slate-400 font-medium">{job?.yardSize || "500"} sq ft</span>
          </div>
          <div className="flex flex-col gap-1 max-w-xs">
            <span className="text-sm font-bold text-slate-800 tracking-tight">Address</span>
            <span className="text-xs text-slate-400 font-medium leading-relaxed">{job?.address || "53C, 14th street, Empire state, USA"}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-slate-800 tracking-tight">Date & Time</span>
            <span className="text-xs text-slate-400 font-medium">15 September, 2025 | 10:00 PM</span>
          </div>
        </div>

        {/* Instructions & Attachments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-solid border-slate-100 pb-6 mb-6 w-full">
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-bold text-slate-800 tracking-tight">Instructions</span>
            <p className="text-xs text-slate-400 font-medium leading-relaxed m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold text-slate-800 tracking-tight">Attachments</span>
            <div className="flex gap-2">
              <img src="https://picsum.photos/seed/lawn1/120/120" className="w-14 h-14 rounded-xl object-cover border border-solid border-slate-100 shadow-3xs" alt="Preview" />
              <img src="https://picsum.photos/seed/lawn2/120/120" className="w-14 h-14 rounded-xl object-cover border border-solid border-slate-100 shadow-3xs" alt="Preview" />
              <img src="https://picsum.photos/seed/lawn3/120/120" className="w-14 h-14 rounded-xl object-cover border border-solid border-slate-100 shadow-3xs" alt="Preview" />
            </div>
          </div>
        </div>

        {/* Contractor Information */}
        <div className="mt-6 w-full">
          <h3 className="text-sm font-bold text-slate-800 m-0 mb-4 tracking-tight">Contractor Information</h3>
          
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60"
              alt="Contractor"
              className="w-14 h-14 rounded-full object-cover border border-solid border-slate-100 shadow-3xs"
            />
            <div className="flex flex-col gap-0.5">
              <div className="text-base font-bold text-slate-800 tracking-tight">John Doe</div>
              <div className="text-sm text-slate-400 font-medium">john.doe@gmail.com</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-slate-800 tracking-tight">Phone Number</span>
              <span className="text-xs text-slate-400 font-medium">+0123456789</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-slate-800 tracking-tight">Service Area</span>
              <span className="text-xs text-slate-400 font-medium leading-relaxed">Lorem ipsum dolor, Lorem ipsum</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-slate-800 tracking-tight">Company Name</span>
              <span className="text-xs text-slate-400 font-medium">Lawn Rangers</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}