import React, { useState } from "react";

export default function JobDetail({ job, onBack, getStatusClass }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reason, setReason] = useState("");

  const handleSubmitReason = (e) => {
    e.preventDefault();
    console.log("Cancellation Reason:", reason);
    setIsModalOpen(false);
    setReason("");
  };

  const isPending = job.status === "Pending";
  
  // 🔥 Service check karne ke liye logic
  const isSnowRemoval = job.title === "Snow Removal";

  return (
    <div className="p-6 bg-[#F8F8F8] min-h-screen relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[48px] font-bold text-[#222]">Welcome Back, Admin!</h1>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 bg-[#EEF4FB] rounded-lg flex items-center justify-center border-none cursor-pointer">
            🔔
          </button>
          <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-lg shadow-sm">
            <img src="https://i.pravatar.cc/100" alt="" className="w-10 h-10 rounded-lg" />
            <div>
              <h4 className="font-semibold text-sm">Admin</h4>
              <p className="text-xs text-gray-500">admin.admin@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Details Main Box */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
        
        {/* Back + Title + Cancel Job Button */}
        <div className="flex justify-between items-center mb-6">
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
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2 bg-[#1866B4] text-white rounded-xl font-semibold text-sm border-none cursor-pointer hover:bg-blue-700 shadow-sm"
            >
              Cancel Job
            </button>
            <span className={`border px-3 py-0.5 rounded-full text-xs font-semibold ${getStatusClass(job.status)}`}>
              {job.status}
            </span>
          </div>
        </div>

        {/* User Information (Sirf Pending Hone Par) */}
        {isPending && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-bold text-slate-700">User Information</h3>
              <span className="text-xl font-bold text-slate-900">${job.price}</span>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={`https://picsum.photos/seed/u${job.id}/60/60`}
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <div className="text-base font-bold text-slate-800">{job.name}</div>
                <div className="text-sm text-gray-400 mt-0.5">{job.email}</div>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Fields Grid (Lawn Mowing vs Snow Removal) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 border-b border-gray-100 pb-6">
          <div>
            <div className="text-sm font-bold text-slate-800 mb-1">Service</div>
            <div className="text-sm text-gray-500">{job.title}</div>
          </div>
          
          {/* 🔥 Condition: Agar Snow removal hai to Size ki jagah Address aa jayega grid column 2 mein */}
          {!isSnowRemoval ? (
            <div>
              <div className="text-sm font-bold text-slate-800 mb-1">Yard Size</div>
              <div className="text-sm text-gray-500">{job.yardSize || "500"} sq ft</div>
            </div>
          ) : (
            <div>
              <div className="text-sm font-bold text-slate-800 mb-1">Address</div>
              <div className="text-sm text-gray-500 max-w-xs">{job.address}</div>
            </div>
          )}

          {/* Column 3 details */}
          {!isSnowRemoval ? (
            <div>
              <div className="text-sm font-bold text-slate-800 mb-1">Address</div>
              <div className="text-sm text-gray-500 max-w-xs">{job.address}</div>
            </div>
          ) : (
            <div>
              <div className="text-sm font-bold text-slate-800 mb-1">Date & Time</div>
              <div className="text-sm text-gray-500">15 September, 2025 | 10:00 PM</div>
            </div>
          )}

          {/* Column 4 details */}
          {!isSnowRemoval ? (
            <div>
              <div className="text-sm font-bold text-slate-800 mb-1">Date & Time</div>
              <div className="text-sm text-gray-500">15 September, 2025 | 10:00 PM</div>
            </div>
          ) : (
            <div>
              <div className="text-sm font-bold text-slate-800 mb-1">Phone Number</div>
              <div className="text-sm text-gray-500">{job.phone}</div>
            </div>
          )}
        </div>

        {/* Second Level Fields Row (Extra Columns for Snow Removal) */}
        {isSnowRemoval && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 border-b border-gray-100 pb-6">
            <div>
              <div className="text-sm font-bold text-slate-800 mb-1">Areas</div>
              <div className="text-sm text-gray-500">{job.areas || "Driveway, Walkways"}</div>
            </div>
            <div>
              <div className="text-sm font-bold text-slate-800 mb-1">Thickness</div>
              <div className="text-sm text-gray-500">{job.thickness || "Less than 6 inches"}</div>
            </div>
            <div></div>
            <div></div>
          </div>
        )}

        {/* Instructions, Phone & Attachments Block */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${!isPending ? 'border-b border-gray-100 pb-6 mb-6' : ''}`}>
          <div>
            <div className="text-sm font-bold text-slate-800 mb-1">Instructions</div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            {/* Phone Number section only for Lawnmowing pending layout */}
            {isPending && !isSnowRemoval && (
              <div className="mb-4">
                <div className="text-sm font-bold text-slate-800 mb-1">Phone Number</div>
                <div className="text-sm text-gray-500">{job.phone}</div>
              </div>
            )}
            <div>
              <div className="text-sm font-bold text-slate-800 mb-2">Attachments</div>
              <div className="flex gap-2">
                <img src="https://picsum.photos/seed/snow1/100/100" className="w-16 h-16 rounded-xl object-cover" />
                <img src="https://picsum.photos/seed/snow2/100/100" className="w-16 h-16 rounded-xl object-cover" />
                <img src="https://picsum.photos/seed/snow3/100/100" className="w-16 h-16 rounded-xl object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Contractor Information & Map (Sirf Active Pages Par) */}
        {!isPending && (
          <div className="mt-8 pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-800">Contractor Information</h3>
                  <span className="text-xs font-semibold bg-green-500 text-white px-3 py-1 rounded-full">
                    Arrived
                  </span>
                </div>
                
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
                    <div className="text-sm text-gray-500 line-clamp-2">Lorem ipsum dolor, Lorem ipsum</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800 mb-1">Company Name</div>
                    <div className="text-sm text-gray-500">Lawn Rangers</div>
                  </div>
                </div>
              </div>

              {/* Map Layout */}
              <div className="w-full h-[200px] rounded-2xl overflow-hidden border border-gray-100 relative bg-slate-100">
                <iframe 
                  title="map-mockup"
                  src="https://maps.google.com/maps?q=Empire%20State%20Building&t=&z=13&ie=UTF-8&iwloc=&output=embed" 
                  className="w-full h-full border-0"
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Reason Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 w-[500px] shadow-2xl relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer border-none text-gray-500 hover:bg-gray-200 font-bold"
            >
              ✕
            </button>
            <h2 className="text-3xl font-extrabold text-center text-slate-800 mb-6">Reason!</h2>
            <form onSubmit={handleSubmitReason}>
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-700 mb-2">Reason</label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Write your reason here"
                  required
                  rows="5"
                  className="w-full p-4 border border-gray-200 rounded-2xl outline-none focus:border-blue-500 resize-none text-sm text-slate-700 placeholder-gray-300"
                ></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-[#1866B4] text-white rounded-2xl font-bold text-base border-none cursor-pointer hover:bg-blue-700 shadow-md">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}