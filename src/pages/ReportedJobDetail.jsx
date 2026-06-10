import React from "react";

export default function ReportedJobDetail({ job, onBack }) {
  return (
    <div className="p-6 bg-[#F8F8F8] min-h-screen relative">
      {/* Top Welcome Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[48px] font-bold text-[#222]">Welcome Back, Admin!</h1>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 bg-[#EEF4FB] rounded-lg flex items-center justify-center border-none cursor-pointer">
            🔔
          </button>
          <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-lg shadow-sm">
            <img src="https://i.pravatar.cc/100" alt="Admin" className="w-10 h-10 rounded-lg" />
            <div>
              <h4 className="font-semibold text-sm">Admin</h4>
              <p className="text-xs text-gray-500">admin.admin@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Details Card Box */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
        
        {/* Back Button + Title + Action Buttons */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center cursor-pointer text-slate-600 hover:bg-gray-50 text-sm font-bold"
            >
              ←
            </button>
            <h2 className="text-xl font-bold text-slate-800">Details</h2>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-3">
              {/* Refund Button */}
              <button 
                onClick={() => alert("Refunded successfully")}
                className="px-6 py-2.5 bg-[#222] text-white rounded-xl font-semibold text-sm border-none cursor-pointer hover:bg-black shadow-sm"
              >
                Refund
              </button>
              {/* Pay Contractor Button */}
              <button 
                onClick={() => alert("Payment sent to contractor")}
                className="px-6 py-2.5 bg-[#1866B4] text-white rounded-xl font-semibold text-sm border-none cursor-pointer hover:bg-blue-700 shadow-sm"
              >
                Pay Contractor
              </button>
            </div>
            {/* Reported Badge */}
            <span className="border border-red-200 bg-red-50 text-red-500 px-3 py-0.5 rounded-full text-xs font-semibold">
              Reported
            </span>
          </div>
        </div>

        {/* User Information Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-bold text-slate-700">User Information</h3>
            <span className="text-xl font-bold text-slate-900">${job?.price || "24"}</span>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=60"
              alt="User"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <div className="text-base font-bold text-slate-800">James Anderson</div>
              <div className="text-sm text-gray-400 mt-0.5">james.anderson@gmail.com</div>
            </div>
          </div>
        </div>

        {/* Service Grid Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 border-b border-gray-100 pb-6">
          <div>
            <div className="text-sm font-bold text-slate-800 mb-1">Service</div>
            <div className="text-sm text-gray-500">{job?.title || "Lawn Mowing"}</div>
          </div>
          <div>
            <div className="text-sm font-bold text-slate-800 mb-1">Yard Size</div>
            <div className="text-sm text-gray-500">{job?.yardSize || "500"} sq ft</div>
          </div>
          <div>
            <div className="text-sm font-bold text-slate-800 mb-1">Address</div>
            <div className="text-sm text-gray-500 max-w-xs">{job?.address || "53C, 14th street, Empire state, USA"}</div>
          </div>
          <div>
            <div className="text-sm font-bold text-slate-800 mb-1">Date & Time</div>
            <div className="text-sm text-gray-500">15 September, 2025 | 10:00 PM</div>
          </div>
        </div>

        {/* Instructions & Attachments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-100 pb-6 mb-6">
          <div>
            <div className="text-sm font-bold text-slate-800 mb-1">Instructions</div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <div>
              <div className="text-sm font-bold text-slate-800 mb-2">Attachments</div>
              <div className="flex gap-2">
                <img src="https://picsum.photos/seed/lawn1/100/100" className="w-16 h-16 rounded-xl object-cover" />
                <img src="https://picsum.photos/seed/lawn2/100/100" className="w-16 h-16 rounded-xl object-cover" />
                <img src="https://picsum.photos/seed/lawn3/100/100" className="w-16 h-16 rounded-xl object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Contractor Information */}
        <div className="mt-6">
          <h3 className="text-sm font-bold text-slate-800 mb-4">Contractor Information</h3>
          
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60"
              alt="Contractor"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <div className="text-base font-bold text-slate-800">John Doe</div>
              <div className="text-sm text-gray-400">john.doe@gmail.com</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-xs font-bold text-slate-800 mb-1">Phone Number</div>
              <div className="text-sm text-gray-500">+0123456789</div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800 mb-1">Service Area</div>
              <div className="text-sm text-gray-500">Lorem ipsum dolor, Lorem ipsum</div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800 mb-1">Company Name</div>
              <div className="text-sm text-gray-500">Lawn Rangers</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}