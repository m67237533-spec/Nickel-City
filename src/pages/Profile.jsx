import React from "react";

export default function Profile({ adminData, onEditClick, onBackClick }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-xs border border-solid border-slate-100/60 box-border w-full flex flex-col items-start text-left">
      <div className="flex justify-between items-center mb-6 w-full">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBackClick} 
            className="w-8 h-8 rounded-full border border-solid border-slate-200 bg-white flex items-center justify-center cursor-pointer text-slate-500 shadow-3xs hover:bg-slate-50 transition-colors outline-none"
          >
            <span className="text-sm font-bold">←</span>
          </button>
          <h2 className="text-xl font-bold text-slate-800 m-0 tracking-tight">Profile</h2>
        </div>
        <button 
          onClick={onEditClick} 
          className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border-none text-slate-600 hover:bg-slate-200 cursor-pointer outline-none transition-colors shadow-3xs"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
      </div>

      <h3 className="text-sm font-bold text-slate-800 m-0 mb-4 tracking-tight">Admin Information</h3>
      <div className="mb-6">
        <img src={adminData.avatar} alt="Admin" className="w-16 h-16 rounded-full object-cover border border-solid border-slate-100 shadow-2xs" />
      </div>

      <div className="flex flex-col gap-5 max-w-[450px] w-full items-start text-left">
        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-xs font-bold text-slate-800 tracking-tight">Full Name</label>
          <input type="text" value={adminData.name} readOnly className="w-full bg-white border border-solid border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-400 font-medium outline-none cursor-default" />
        </div>
        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-xs font-bold text-slate-800 tracking-tight">Email</label>
          <input type="email" value={adminData.email} readOnly className="w-full bg-white border border-solid border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-400 font-medium outline-none cursor-default" />
        </div>
        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-xs font-bold text-slate-800 tracking-tight">Phone Number</label>
          <input type="text" value={adminData.phone} readOnly className="w-full bg-white border border-solid border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-400 font-medium outline-none cursor-default" />
        </div>
      </div>
    </div>
  );
}