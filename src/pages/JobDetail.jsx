import React from "react";

export default function JobDetail({ job, onBack, getStatusClass }) {
  const isSnowRemoval = job?.title?.toLowerCase().includes("snow");
  
  // Status matching tags
  const isCompleted = job?.status === "Completed";
  const isActive = job?.status === "Active";
  const hasContractorInfo = isActive || isCompleted;

  return (
    <div className="w-full min-h-screen bg-[#F8F8F8] p-8 flex flex-col box-border font-sans antialiased relative">
      
      {/* Main Details Card Box */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-solid border-slate-100/60 box-border w-full">
        
        {/* Back Button + Title + Status Badge Row */}
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
            {!isCompleted && job?.status !== "Cancelled" && (
              <button 
                onClick={() => alert("Cancel action triggered")}
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
          {/* Mockup Match: $24 is shifted right next to 'User Information' title with custom close spacing */}
          <div className="flex items-center gap-24 mb-3 w-full">
            <h3 className="text-sm font-bold text-slate-800 m-0 tracking-tight">User Information</h3>
            <span className="text-base font-black text-slate-900">${job?.price || "24"}</span>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=60"
              alt="User"
              className="w-14 h-14 rounded-full object-cover border border-solid border-slate-100 shadow-3xs"
            />
            <div className="flex flex-col gap-0.5">
              <div className="text-base font-bold text-slate-800 tracking-tight">{job?.name || "James Anderson"}</div>
              <div className="text-sm text-slate-400 font-medium">{job?.email || "james.anderson@gmail.com"}</div>
            </div>
          </div>
        </div>

        {/* Core Layout Grid System matching image_2b95c3.png */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-6 pb-8 border-b border-solid border-slate-100/80 w-full">
          
          {/* Column 1: Service info */}
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-slate-800 tracking-tight">Service</span>
            <span className="text-xs text-slate-400 font-medium">{job?.title || "Snow Removal"}</span>
            
            {/* Row Item Below Service: Thickness (As per layout blueprint alignment) */}
            {isSnowRemoval && (
              <div className="flex flex-col gap-1 mt-6">
                <span className="text-sm font-bold text-slate-800 tracking-tight">Thickness</span>
                <span className="text-xs text-slate-400 font-medium">Less than 6 inches</span>
              </div>
            )}
          </div>

          {/* Column 2: Address Info */}
          <div className="flex flex-col gap-1 max-w-xs">
            <span className="text-sm font-bold text-slate-800 tracking-tight">Address</span>
            <span className="text-xs text-slate-400 font-medium leading-relaxed">{job?.address || "53C, 14th street, Empire state, USA"}</span>
            
            {/* Row Item Below Address: Instructions */}
            <div className="flex flex-col gap-1 mt-6">
              <span className="text-sm font-bold text-slate-800 tracking-tight">Instructions</span>
              <p className="text-xs text-slate-400 font-medium leading-relaxed m-0">
                {job?.instructions || "Lorem ipsum dolor sit amet, consectetur adipiscing"}
              </p>
            </div>
          </div>

          {/* Column 3: Date & Time */}
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-slate-800 tracking-tight">Date & Time</span>
            <span className="text-xs text-slate-400 font-medium">15 September, 2025 | 10:00 PM</span>
          </div>

          {/* Column 4: Phone Number */}
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-slate-800 tracking-tight">Phone Number</span>
            <span className="text-xs text-slate-400 font-medium">{job?.phone || "+0123456789"}</span>
            
            {/* Mockup Match: Attachments section strictly aligned underneath Phone & Areas column stack */}
            <div className="flex flex-col gap-2 mt-6">
              <span className="text-sm font-bold text-slate-800 tracking-tight">Attachments</span>
              <div className="flex gap-2">
                <img src="https://picsum.photos/seed/snow1/120/120" className="w-14 h-14 rounded-xl object-cover border border-solid border-slate-100 shadow-3xs" alt="Preview" />
                <img src="https://picsum.photos/seed/snow2/120/120" className="w-14 h-14 rounded-xl object-cover border border-solid border-slate-100 shadow-3xs" alt="Preview" />
                <img src="https://picsum.photos/seed/snow3/120/120" className="w-14 h-14 rounded-xl object-cover border border-solid border-slate-100 shadow-3xs" alt="Preview" />
              </div>
            </div>
          </div>

          {/* Column 5: Areas (Yard size / custom items) */}
          <div className="flex flex-col gap-1">
            {isSnowRemoval ? (
              <>
                <span className="text-sm font-bold text-slate-800 tracking-tight">Areas</span>
                <span className="text-xs text-slate-400 font-medium">Driveway, Walkways</span>
              </>
            ) : (
              <>
                <span className="text-sm font-bold text-slate-800 tracking-tight">Yard Size</span>
                <span className="text-xs text-slate-400 font-medium">{job?.yardSize || "500"} sq ft</span>
              </>
            )}
          </div>

        </div>

        {/* Contractor Information Section */}
        {hasContractorInfo && (
          <div className="mt-6 w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex-1 w-full">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-sm font-bold text-slate-800 m-0 tracking-tight">Contractor Information</h3>
                {isActive && (
                  <span className="bg-emerald-500 text-white px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide">
                    Arrived
                  </span>
                )}
              </div>
              
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-slate-800 tracking-tight">Phone Number</span>
                  <span className="text-xs text-slate-400 font-medium">+0123456789</span>
                </div>
                
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-slate-800 tracking-tight">
                    {isCompleted ? "Service Area" : "Experience"}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {isCompleted ? "Lorem ipsum dolor, Lorem ipsum" : "4 Years"}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-slate-800 tracking-tight">Company Name</span>
                  <span className="text-xs text-slate-400 font-medium">
                    {isCompleted ? "Lawn Rangers" : "N/A"}
                  </span>
                </div>
              </div>
            </div>

            {/* Map rendering block completely hidden if Completed */}
            {isActive && (
              <div className="w-full md:w-[45%] h-[160px] bg-slate-100 rounded-xl overflow-hidden border border-solid border-slate-200 relative shadow-3xs">
                <img 
                  src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-78.8784,42.8864,13,0/400x160?access_token=mock" 
                  alt="Map View" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}