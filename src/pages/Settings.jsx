import React, { useState } from "react";

export default function Settings() {
  const [subView, setSubView] = useState("main"); // "main", "password", "terms", "privacy", "about"
  
  // Password state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New Password and Confirm Password do not match!");
      return;
    }
    alert("Password updated successfully!");
    setSubView("main");
  };

  return (
    <div className="min-h-screen pt-8 pr-8 pb-8 pl-0">
      
      {/* Title */}
      {subView === "main" && (
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800">Settings</h2>
        </div>
      )}

      {/* 1. MAIN MENU */}
      {subView === "main" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div onClick={() => setSubView("password")} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all text-sm font-bold text-slate-700">Change Password</div>
          <div onClick={() => setSubView("terms")} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all text-sm font-bold text-slate-700">Terms & Conditions</div>
          <div onClick={() => setSubView("privacy")} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all text-sm font-bold text-slate-700">Privacy Policy</div>
          <div onClick={() => setSubView("about")} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all text-sm font-bold text-slate-700">About Us</div>
        </div>
      )}

      {/* 2. DYNAMIC SUB-VIEWS */}
      {subView !== "main" && (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-xl">
          <button 
            onClick={() => setSubView("main")} 
            className="mb-6 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50 font-bold"
          >
            ←
          </button>
          
          <h2 className="text-xl font-bold text-slate-800 mb-6 capitalize">{subView === "password" ? "Change Password" : subView}</h2>
          
          {/* Change Password View */}
          {subView === "password" && (
            <form onSubmit={handlePasswordUpdate} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Current Password</label>
                <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">New Password</label>
                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 text-sm" />
              </div>
              <button type="submit" className="w-full py-3.5 bg-[#1866B4] text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors">Update Password</button>
            </form>
          )}

          {/* Other Views Placeholder */}
          {subView !== "password" && (
            <div className="text-sm text-gray-500 leading-relaxed">
              <p>Content for {subView} section goes here. You can add your terms, privacy policy or about us text here.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
  
}
