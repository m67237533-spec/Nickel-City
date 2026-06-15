import React, { useState } from "react";

export default function ReportedJobDetail({ job, onBack }) {
  const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);
  const [refundType, setRefundType] = useState("100");

  return (
    <div className="w-full min-h-screen p-6 flex flex-col box-border font-sans antialiased">
      
      {/* Refund Modal */}
      {isRefundModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg p-8 relative shadow-2xl">
            <button 
              onClick={() => setIsRefundModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-2xl font-light"
            >✕</button>
            
            <h3 className="text-2xl font-bold text-center mb-8">Refund!</h3>
            
            <div className="flex flex-col gap-4 mb-8">
              <span className="text-sm font-bold text-slate-800">Select Percent</span>
              
              {/* Option 1 */}
              <div 
                onClick={() => setRefundType("100")}
                className={`flex items-center justify-between p-4 border rounded-2xl cursor-pointer ${refundType === "100" ? "border-blue-500" : "border-slate-200"}`}
              >
                <div className="flex items-center gap-3">
                  <input type="radio" checked={refundType === "100"} readOnly className="w-4 h-4 accent-blue-600" />
                  <span className="font-bold text-sm">Refund 100%</span>
                </div>
                <span className="font-bold text-sm">${job?.price || "24"}</span>
              </div>

              {/* Option 2 */}
              <div 
                onClick={() => setRefundType("custom")}
                className={`flex flex-col p-4 border rounded-2xl cursor-pointer ${refundType === "custom" ? "border-blue-500" : "border-slate-200"}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <input type="radio" checked={refundType === "custom"} readOnly className="w-4 h-4 accent-blue-600" />
                  <span className="font-bold text-sm">Refund Custom Percent</span>
                </div>
                {refundType === "custom" && (
                  <input 
                    type="number" 
                    placeholder="Enter Percent" 
                    className="w-full p-4 border border-slate-200 rounded-xl outline-none focus:border-blue-500"
                  />
                )}
              </div>
            </div>
            
            <button 
              onClick={() => setIsRefundModalOpen(false)}
              className="w-full py-4 bg-[#1866B4] text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* Main Details Card */}
      <div className="border-slate-100/60 box-border w-full">
        <div className="flex justify-between items-start mb-6 flex-wrap gap-4 w-full">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center cursor-pointer text-slate-500 hover:bg-slate-50">
              <span className="text-sm font-bold">←</span>
            </button>
            <h2 className="text-xl font-bold text-slate-800 tracking-tight">Details</h2>
          </div>
          <div className="flex flex-col items-end gap-2.5">
            <div className="flex items-center gap-3">
              <button onClick={() => setIsRefundModalOpen(true)} className="px-10 py-3 bg-[#222] text-white rounded-xl font-bold text-xs cursor-pointer hover:bg-black">Refund</button>
              <button onClick={() => alert("Payment sent")} className="px-10 py-3 bg-[#1866B4] text-white rounded-xl font-bold text-xs cursor-pointer hover:bg-blue-700">Pay Contractor</button>
            </div>
            <span className="border border-red-200 bg-red-50 text-red-500 px-3 py-0.5 rounded-full text-[10px] font-bold">Reported</span>
          </div>
        </div>

        {/* User Info */}
        <div className="mb-8 w-full">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-bold text-slate-800">User Information</h3>
            <span className="text-xl font-black text-slate-900">${job?.price || "24"}</span>
          </div>
          <div className="flex items-center gap-4">
            <img src="/images/face.1.jpg" alt="User" className="w-14 h-14 rounded-full object-cover" />
            <div>
              <div className="text-base font-bold text-slate-800">James Anderson</div>
              <div className="text-sm text-slate-400">james.anderson@gmail.com</div>
            </div>
          </div>
        </div>

        {/* Service Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 border-b border-slate-100 pb-6">
          <div><span className="text-sm font-bold text-slate-800">Service</span><div className="text-xs text-slate-400">{job?.title || "Lawn Mowing"}</div></div>
          <div><span className="text-sm font-bold text-slate-800">Yard Size</span><div className="text-xs text-slate-400">{job?.yardSize || "500"} sq ft</div></div>
          <div><span className="text-sm font-bold text-slate-800">Address</span><div className="text-xs text-slate-400">{job?.address || "53C, 14th street, Empire state, USA"}</div></div>
          <div><span className="text-sm font-bold text-slate-800">Date & Time</span><div className="text-xs text-slate-400">15 September, 2025 | 10:00 PM</div></div>
        </div>

        {/* Contractor Info */}
        <div className="mt-6">
          <h3 className="text-sm font-bold text-slate-800 mb-4">Contractor Information</h3>
          <div className="flex items-center gap-4">
            <img src="/images/face.2.jpg" alt="Contractor" className="w-14 h-14 rounded-full object-cover" />
            <div>
              <div className="text-base font-bold text-slate-800">John Doe</div>
              <div className="text-sm text-slate-400">john.doe@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}