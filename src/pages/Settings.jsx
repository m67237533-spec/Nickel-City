import React, { useState } from "react";

export default function Settings() {
  const [subView, setSubView] = useState("main");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New Password and Confirm Password do not match!");
      return;
    }
    setShowSuccessPopup(true);
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    setSubView("main");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const dummyText = (
    <div className="space-y-6 text-sm text-gray-400 leading-relaxed">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
  );

  return (
    <div className="p-6 bg-[#F8F8F8] min-h-screen relative">
      
      {/* Settings Heading - Ab ye explicitly left-aligned hai */}
      <div className="mb-8 text-left">
        <h2 className="text-3xl font-bold text-slate-800">Settings</h2>
      </div>

      {/* ----------------- 1. MAIN MENU DASHBOARD VIEW ----------------- */}
      {subView === "main" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div 
            onClick={() => setSubView("password")}
            className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center cursor-pointer hover:shadow-md hover:border-gray-200 transition-all text-sm font-semibold text-slate-700"
          >
            Change Password
          </div>
          <div 
            onClick={() => setSubView("terms")}
            className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center cursor-pointer hover:shadow-md hover:border-gray-200 transition-all text-sm font-semibold text-slate-700"
          >
            Terms & Conditions
          </div>
          <div 
            onClick={() => setSubView("privacy")}
            className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center cursor-pointer hover:shadow-md hover:border-gray-200 transition-all text-sm font-semibold text-slate-700"
          >
            Privacy Policy
          </div>
          <div 
            onClick={() => setSubView("about")}
            className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center cursor-pointer hover:shadow-md hover:border-gray-200 transition-all text-sm font-semibold text-slate-700"
          >
            About Us
          </div>
        </div>
      )}

      {/* ----------------- 2. CHANGE PASSWORD SUB-VIEW ----------------- */}
      {subView === "password" && (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-xl">
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => setSubView("main")}
              className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center cursor-pointer text-slate-600 hover:bg-gray-50 text-sm font-bold"
            >
              ←
            </button>
            <h2 className="text-xl font-bold text-slate-800">Change Password</h2>
          </div>

          <form onSubmit={handlePasswordUpdate} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">Current Password</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 text-sm"
              />
            </div>
            {/* ... (newPassword and confirmPassword inputs same as before) */}
            <button
              type="submit"
              className="w-full py-3.5 bg-[#1866B4] text-white rounded-xl font-bold text-sm border-none cursor-pointer hover:bg-blue-700 shadow-md transition-colors"
            >
              Update Password
            </button>
          </form>
        </div>
      )}

      {/* ... (Policies and Success Popup logic stays the same) */}
    </div>
  );
}