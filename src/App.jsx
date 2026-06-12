import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/Dashboard";
import ServiceManagement from "./pages/ServiceManagement";
import UserManagement from "./pages/UserManagement";
import ContractorManagement from "./pages/ContractorManagement";
import ContractorVerification from "./pages/ContractorVerification";
import JobManagement from "./pages/JobManagement";
import PaymentsTransaction from "./pages/PaymentsTransaction";
import JobReport from "./pages/JobReport";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications"; 
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOTP from "./pages/VerifyOTP";
import ResetPassword from "./pages/ResetPassword"; 

import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("LOGIN"); 
  const [active, setActive] = useState("Dashboard");
  const [previousActive, setPreviousActive] = useState("Dashboard");
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  
  const [adminData, setAdminData] = useState({
    name: "Admin Admin",
    email: "admin.admin@gmail.com",
    phone: "+0123456789",
    avatar: "images/profile.jpg",
  });

  const completedPages = [
    "Dashboard", "Service Management", "User Management", "Contractor Management",
    "Contractor Verification", "Job Management", "Payment & Transaction", 
    "Reported Jobs", "Settings", "Notifications", "Change Password", 
    "Terms & Conditions", "Privacy Policy", "About Us", "Profile", "EditProfile"
  ];

  if (currentScreen === "LOGIN") return <Login onLoginSuccess={() => setCurrentScreen("DASHBOARD_FLOW")} onForgotPasswordClick={() => setCurrentScreen("FORGOT_PASSWORD")} />;
  if (currentScreen === "FORGOT_PASSWORD") return <ForgotPassword onBackToLogin={() => setCurrentScreen("LOGIN")} onGoToOTP={() => setCurrentScreen("VERIFY_OTP")} />;
  if (currentScreen === "VERIFY_OTP") return <VerifyOTP onBackToForgot={() => setCurrentScreen("FORGOT_PASSWORD")} onOTPSuccess={() => setCurrentScreen("RESET_PASSWORD")} />;
  if (currentScreen === "RESET_PASSWORD") return <ResetPassword onBackToOTP={() => setCurrentScreen("VERIFY_OTP")} onResetSuccess={() => setCurrentScreen("LOGIN")} />;

  return (
    <div className="flex min-h-screen bg-[#F8F8F8] font-sans relative">
      <Sidebar 
        active={["Notifications", "Change Password", "Terms & Conditions", "Privacy Policy", "About Us", "Profile", "EditProfile"].includes(active) ? "Settings" : active} 
        setActive={setActive} 
        onLogoutClick={() => setShowLogoutPopup(true)} 
      />
      
      <main className="flex-1 pl-[270px] overflow-y-auto bg-f">
        {!["Notifications", "Change Password", "Terms & Conditions", "Privacy Policy", "About Us"].includes(active) && (
        // 🔥 Yahan pt-6 add kiya hai taake thora upar se gap mil jaye
        <div className="p-4 pb-2 pt-2 flex justify-between items-center">
          {/* 🔥 ml-4 se right side shift kiya */}
          <h1 className="text-[40px] font-bold cmd-1 text-[#222] tracking-tight ml-8">Welcome Back, Admin!</h1>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => { setPreviousActive(active); setActive("Notifications"); }} 
              className="w-10 h-10 rounded-xl flex items-center justify-center border-none bg-[#EEF4FB] cursor-pointer hover:bg-blue-100 transition-colors"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#1866B4" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
              </svg>
            </button>
            
            <div 
              onClick={() => { setPreviousActive(active); setActive("Profile"); }} 
              className="flex items-center gap-3 px-4 py-2 rounded-xl hover:border-gray-200 transition-colors cursor-pointer"
            >
              <img src={adminData.avatar} className="w-12 h-12 rounded-xl object-cover" alt="Admin" />
              <div className="text-left">
                <h4 className="font-bold text-xs text-slate-800">{adminData.name}</h4>
                <p className="text-[18px] text-gray-400">{adminData.email}</p>
              </div>
            </div>
          </div>
        </div>
        )}

        <div className="p-6 pt-2">
          {active === "Dashboard" && <DashboardPage />}
          {active === "Service Management" && <ServiceManagement />}
          {active === "User Management" && <UserManagement />}
          {active === "Contractor Management" && <ContractorManagement />}
          {active === "Contractor Verification" && <ContractorVerification />}
          {active === "Job Management" && <JobManagement />}
          {active === "Payment & Transaction" && <PaymentsTransaction />}
          {active === "Reported Jobs" && <JobReport />}
          {active === "Settings" && <Settings onTabSelect={(tabName) => setActive(tabName)} />}
          {active === "Notifications" && <Notifications onBackClick={() => setActive(previousActive)} />}
          
          {active === "Profile" && (
            <Profile 
              adminData={adminData} 
              onEditClick={() => setActive("EditProfile")} 
              onBackClick={() => setActive(previousActive)} 
            />
          )}

          {active === "EditProfile" && (
            <EditProfile 
              adminData={adminData} 
              setAdminData={setAdminData} 
              onUpdateClick={() => setShowUpdatePopup(true)} 
              onBackClick={() => setActive("Profile")} 
            />
          )}

          {["Change Password", "Privacy Policy", "Terms & Conditions", "About Us"].includes(active) && (
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <button onClick={() => setActive("Settings")} className="mb-4 text-xs text-blue-600 font-bold bg-transparent border-none cursor-pointer">← Back to Settings</button>
              <h2 className="text-xl font-bold text-slate-800">{active} Screen</h2>
            </div>
          )}

          {!completedPages.includes(active) && (
            <div className="flex flex-col items-center justify-center h-[60vh] text-gray-400">
              <div className="text-5xl mb-4">🚧</div><h2 className="text-xl font-semibold text-slate-500">{active}</h2>
            </div>
          )}
        </div>
      </main>

      {/* ... (Baki code waisa hi rahega) */}
      {showUpdatePopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center z-[999]">
          <div className="bg-white py-10 px-8 rounded-2xl max-w-[420px] w-full text-center shadow-2xl border border-solid border-slate-100 box-border mx-4 animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-2xl font-bold text-slate-900 m-0 mb-3 tracking-tight">Successfully!</h3>
            <p className="text-sm font-medium text-slate-400 m-0 mb-6 leading-relaxed px-4">Your profile has been updated successfully.</p>
            <div className="px-6">
              <button onClick={() => { setShowUpdatePopup(false); setActive("Profile"); }} className="w-full py-3.5 bg-[#1866B4] hover:bg-blue-700 text-white font-bold text-xs rounded-xl border-none cursor-pointer shadow-md transition-all outline-none">Done</button>
            </div>
          </div>
        </div>
      )}

      {showLogoutPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl max-w-sm w-full text-center shadow-2xl">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Logout</h3>
            <div className="flex gap-4 justify-center">
              <button onClick={() => setShowLogoutPopup(false)} className="px-6 py-2 bg-slate-200 rounded-xl cursor-pointer">No</button>
              <button onClick={() => { setShowLogoutPopup(false); setCurrentScreen("LOGIN"); }} className="px-6 py-2 bg-[#1866B4] text-white rounded-xl cursor-pointer">Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}