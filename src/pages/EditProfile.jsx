import React from "react";

export default function EditProfile({ adminData, setAdminData, onUpdateClick }) {
  return (
    // Yahan 'bg-white' aur 'p-8' add kar diya hai taake pura container white ho jaye
    <div className="w-full flex flex-col items-start text-left bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
      
      {/* Title */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800 m-0 tracking-tight">Edit Profile</h2>
      </div>

      {/* Avatar */}
      <div className="mb-6 relative">
        <img src={adminData.avatar} alt="Admin" className="w-16 h-16 rounded-full object-cover" />
        <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#1866B4] rounded-full flex items-center justify-center border-2 border-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          </svg>
        </div>
      </div>

      {/* Input Fields */}
      <div className="flex flex-col gap-5 w-full max-w-[400px]">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-600">Full Name</label>
          <input 
            type="text" 
            value={adminData.name} 
            onChange={(e) => setAdminData({ ...adminData, name: e.target.value })}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-[#1866B4] transition-colors text-sm" 
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-600">Email</label>
          <input 
            type="email" 
            value={adminData.email} 
            onChange={(e) => setAdminData({ ...adminData, email: e.target.value })}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-[#1866B4] transition-colors text-sm" 
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-600">Phone Number</label>
          <input 
            type="text" 
            value={adminData.phone} 
            onChange={(e) => setAdminData({ ...adminData, phone: e.target.value })}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-[#1866B4] transition-colors text-sm" 
          />
        </div>

        {/* Update Button */}
        <button
          onClick={onUpdateClick}
          className="mt-4 w-full py-3.5 bg-[#1866B4] text-white font-bold text-xs rounded-xl hover:bg-blue-700 transition-colors"
        >
          Update
        </button>
      </div>
    </div>
  );
}