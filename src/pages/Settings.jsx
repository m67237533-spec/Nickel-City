import React, { useState } from "react";

export default function Settings() {
  // Main view state: "main", "password", "terms", "privacy", "about"
  const [subView, setSubView] = useState("main");

  // Popup states for password success message
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Change Password form input states
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New Password and Confirm Password do not match!");
      return;
    }
    // Form validation success hone par popup show karein
    setShowSuccessPopup(true);
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    setSubView("main"); // Wapas main settings menu par le jayen
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  // Mock text for Policies and About Us pages layout
  const dummyText = (
    <div className="space-y-6 text-sm text-gray-400 leading-relaxed">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur nisl sapien, in consectetur turpis posuere in. Vestibulum arcu metus, vestibulum in egestas quis, facilisis vel nisl. Curabitur aliquam felis et ullamcorper ultrices. Mauris iaculis sapien fermentum eros finibus, id interdum nulla scelerisque. Nulla lacinia volutpat consectetur. Nunc hendrerit odio at felis porttitor, vel ornare erat elementum. Aliquam nec massa neque. Donec dignissim libero ac metus maximus, a accumsan diam bibendum. Nullam vitae urna ultricies, commodo tellus eu, tempor leo. Pellentesque lorem augue, viverra et eleifend eget, volutpat vitae mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Donec non feugiat mi, vestibulum tincidunt ex.
      </p>
      <p>
        Proin nec leo viverra, sollicitudin felis in, luctus dui. Nullam erat nisl, tempor at est id, consequat fringilla velit. Sed id nunc ligula. Suspendisse at massa consectetur, efficitur dui vel, eleifend libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue velit in nulla posuere sagittis ac ut ipsum. Mauris dignissim ullamcorper erat vel placerat. Curabitur id molestie arcu, non porta magna. Donec ultrices gravida dui, nec blandit sem tincidunt sed. Vestibulum ornare neque non felis sodales lacinia.
      </p>
      <p>
        Aenean ullamcorper, ... (baki paragraph texts)
      </p>
    </div>
  );

  return (
    <div className="p-6 bg-[#F8F8F8] min-h-screen relative">
      {/* Top Welcome Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[48px] font-bold text-[#222]">Welcome Back, Admin!</h1>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 bg-[#EEF4FB] rounded-lg flex items-center justify-center border-none cursor-pointer text-xl">
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

      {/* ----------------- 1. MAIN MENU DASHBOARD VIEW ----------------- */}
      {subView === "main" && (
        <>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Settings</h2>
          </div>
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
        </>
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
              <div className="relative">
                <input
                  type="password"
                  placeholder="............"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 text-sm"
                />
                <span className="absolute right-4 top-3.5 text-gray-400 cursor-pointer text-xs">👁️</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">New Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="............"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 text-sm"
                />
                <span className="absolute right-4 top-3.5 text-gray-400 cursor-pointer text-xs">👁️</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">Confirm Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="............"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 text-sm"
                />
                <span className="absolute right-4 top-3.5 text-gray-400 cursor-pointer text-xs">👁️</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#1866B4] text-white rounded-xl font-bold text-sm border-none cursor-pointer hover:bg-blue-700 shadow-md transition-colors"
            >
              Update Password
            </button>
          </form>
        </div>
      )}

      {/* ----------------- 3. POLICIES & DESCRIPTION SUB-VIEWS ----------------- */}
      {(subView === "terms" || subView === "privacy" || subView === "about") && (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-6xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSubView("main")}
                className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center cursor-pointer text-slate-600 hover:bg-gray-50 text-sm font-bold"
              >
                ←
              </button>
              <h2 className="text-xl font-bold text-slate-800">
                {subView === "terms" && "Terms & Conditions"}
                {subView === "privacy" && "Privacy Policy"}
                {subView === "about" && "About Us"}
              </h2>
            </div>
            <button 
              onClick={() => alert("Edit triggered!")}
              className="w-8 h-8 bg-[#EEF4FB] rounded-full border-none flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
            >
              ✏️
            </button>
          </div>
          {dummyText}
        </div>
      )}

      {/* ----------------- 4. SUCCESS POPUP MODAL OVERLAY ----------------- */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 transition-all animate-fade-in">
          <div className="bg-white p-8 rounded-2xl max-w-sm w-full text-center shadow-2xl mx-4 transform scale-100 transition-transform">
            {/* Title */}
            <h3 className="text-xl font-bold text-slate-900 mb-2">Successfully!</h3>
            
            {/* Subtext Paragraph */}
            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              Your password has been updated successfully.
            </p>
            
            {/* Done Action Button */}
            <button
              onClick={handleClosePopup}
              className="w-full py-3 bg-[#1866B4] text-white font-semibold rounded-xl text-xs border-none cursor-pointer hover:bg-blue-700 shadow-sm transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}