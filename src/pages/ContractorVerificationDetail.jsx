import React from "react";

export default function ContractorVerificationDetail({ contractor, onBack, onCancel, onApprove }) {
  // exact mockup labels fallbacks
  const detailData = {
    name: contractor?.name || "John Doe",
    email: contractor?.email || "john.doe@gmail.com",
    phone: contractor?.phone || "+0123456789",
    services: contractor?.service || "Lawn Mowing, Snow Removal",
    company: contractor?.company || "N/A",
    address: contractor?.address || "53C, 14th street, Empire state, USA",
    experience: "4 Years",
    status: "Pending"
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] flex flex-col box-border font-sans antialiased overflow-x-hidden">
      
      {/* MAIN DATA BLOCK BODY */}
      <div className="p-8 flex-1 flex flex-col box-border w-full">
        
        {/* BACK CIRCLE NAV ARROW */}
        <div className="mb-4">
          <button 
            onClick={onBack} 
            className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center cursor-pointer text-slate-500 shadow-xs hover:bg-slate-50 transition-colors outline-none"
          >
            <span className="text-sm font-semibold">←</span>
          </button>
        </div>

        {/* DETAILS SECTION MAIN HEADER WITH BADGE POSITIONED ON FAR RIGHT RIGHT */}
        <div className="flex items-center justify-between w-full mb-10">
          <h2 className="text-xl font-bold text-[#1e293b] m-0 tracking-tight">Details</h2>
          <span className="text-[10px] font-bold px-3 py-1 rounded-md bg-[#fef9c3] text-[#ca8a04] tracking-wide">
            {detailData.status}
          </span>
        </div>

        {/* PROFILE INFORMATION CONTAINER ROW */}
        <div className="mb-10 w-full">
          <h3 className="text-sm font-bold text-[#1e293b] m-0 mb-4 tracking-tight">
            Contractor Information
          </h3>
          <div className="flex items-center gap-4">
            <img 
              src={`https://picsum.photos/seed/verificationuser${contractor?.id || "avatar"}/150/150`} 
              alt="Contractor avatar" 
              className="w-16 h-16 rounded-full object-cover border border-slate-100/80 shadow-2xs" 
            />
            <div className="flex flex-col gap-0.5">
              <div className="text-base font-bold text-[#1e293b] tracking-tight">{detailData.name}</div>
              <div className="text-sm text-slate-400 font-medium">{detailData.email}</div>
            </div>
          </div>
        </div>

        {/* EXACT COMPACT 4-COLUMN SYMMETRIC GRID MOCKUP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 w-full mb-12">
          
          {/* COL 1 - ROW 1 */}
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-bold text-[#1e293b] tracking-tight">Phone Number</span>
            <span className="text-xs text-slate-400 font-medium">{detailData.phone}</span>
          </div>

          {/* COL 2 - ROW 1 */}
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-bold text-[#1e293b] tracking-tight">Services</span>
            <span className="text-xs text-slate-400 font-medium">{detailData.services}</span>
          </div>

          {/* COL 3 - ROW 1 */}
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-bold text-[#1e293b] tracking-tight">Service Area</span>
            <span className="text-xs text-slate-400 font-medium">Lorem ipsum dolor, Lorem ipsum</span>
          </div>

          {/* COL 4 - ROW 1 */}
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-bold text-[#1e293b] tracking-tight">Experience</span>
            <span className="text-xs text-slate-400 font-medium">{detailData.experience}</span>
          </div>

          {/* COL 1 - ROW 2 */}
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-bold text-[#1e293b] tracking-tight">Company Name</span>
            <span className="text-xs text-slate-400 font-medium">{detailData.company}</span>
          </div>

          {/* COL 2 - ROW 2 */}
          <div className="flex flex-col gap-1.5 max-w-xs">
            <span className="text-sm font-bold text-[#1e293b] tracking-tight">Address</span>
            <span className="text-xs text-slate-400 font-medium leading-relaxed">
              {detailData.address}
            </span>
          </div>

          {/* EMPTY CELLS PLACED TO FORCE CERTIFICATE ROW TO ALIGN FLUSH ON THE RIGHT AS IMAGE */}
          <div></div>

          {/* COL 4 - ROW 2 (Certifications Badges Cluster Grid) */}
          <div className="flex flex-col gap-2.5">
            <span className="text-sm font-bold text-[#1e293b] tracking-tight">Certifications</span>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-md overflow-hidden border border-slate-200/60 bg-white shadow-2xs flex-shrink-0">
                <img src="https://picsum.photos/seed/cert1/100/100" alt="cert profile" className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-12 rounded-md overflow-hidden border border-slate-200/60 bg-white shadow-2xs flex-shrink-0">
                <img src="https://picsum.photos/seed/cert2/100/100" alt="cert profile" className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-12 rounded-md overflow-hidden border border-slate-200/60 bg-white shadow-2xs flex-shrink-0">
                <img src="https://picsum.photos/seed/cert3/100/100" alt="cert profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ACTION BUTTONS WITH EXACT WIDTH FLOW */}
        <div className="flex items-center gap-3 mt-4 w-full max-w-[340px]">
          {/* DECLINE/CANCEL CONTROL ACTION */}
          <button
            onClick={onCancel}
            className="flex-1 py-3 rounded-xl text-white text-xs font-bold border-none transition-colors text-center bg-[#212529] hover:bg-slate-800 shadow-sm cursor-pointer outline-none"
          >
            Cancel
          </button>

          {/* APPROVAL COMPLETE CONTROL ACTION */}
          <button
            onClick={onApprove}
            className="flex-1 py-3 rounded-xl text-white text-xs font-bold border-none transition-colors text-center bg-[#1d63c9] hover:bg-[#154da1] shadow-sm cursor-pointer outline-none"
          >
            Approve
          </button>
        </div>

      </div>
    </div>
  );
}