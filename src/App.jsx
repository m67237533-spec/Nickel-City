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
import ResetPassword from "./pages/ResetPassword"; // 🔥 Naya Import

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("LOGIN"); 
  const [active, setActive] = useState("Dashboard");
  const [previousActive, setPreviousActive] = useState("Dashboard");
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [adminData, setAdminData] = useState({
    name: "Admin",
    email: "admin.admin@gmail.com",
    phone: "+0123456789"
  });

  const completedPages = [
    "Dashboard", "Service Management", "User Management", "Contractor Management",
    "Contractor Verification", "Job Management", "Payment & Transaction", 
    "Reported Jobs", "Settings", "Notifications", "Change Password", 
    "Terms & Conditions", "Privacy Policy", "About Us"
  ];

  // ================= 🛑 AUTH ROUTING FLOW =================
  
  if (currentScreen === "LOGIN") return <Login onLoginSuccess={() => setCurrentScreen("DASHBOARD_FLOW")} onForgotPasswordClick={() => setCurrentScreen("FORGOT_PASSWORD")} />;
  
  if (currentScreen === "FORGOT_PASSWORD") return <ForgotPassword onBackToLogin={() => setCurrentScreen("LOGIN")} onGoToOTP={() => setCurrentScreen("VERIFY_OTP")} />;
  
  if (currentScreen === "VERIFY_OTP") return <VerifyOTP onBackToForgot={() => setCurrentScreen("FORGOT_PASSWORD")} onOTPSuccess={() => setCurrentScreen("RESET_PASSWORD")} />;
  
  if (currentScreen === "RESET_PASSWORD") return <ResetPassword onBackToOTP={() => setCurrentScreen("VERIFY_OTP")} onResetSuccess={() => setCurrentScreen("LOGIN")} />;

  // ================= 🏢 MAIN DASHBOARD LAYOUT =================
  return (
    <div className="flex min-h-screen bg-[#F8F8F8] font-sans relative">
      <Sidebar 
        active={["Notifications", "Change Password", "Terms & Conditions", "Privacy Policy", "About Us"].includes(active) ? "Settings" : active} 
        setActive={setActive} 
        onLogoutClick={() => setShowLogoutPopup(true)} 
      />
      
      <main className="flex-1 pl-[250px] overflow-y-auto">
        {!["Notifications", "Change Password", "Terms & Conditions", "Privacy Policy", "About Us"].includes(active) && (
          <div className="p-6 pb-2 flex justify-between items-center">
            <h1 className="text-[32px] font-bold text-[#222] tracking-tight">Welcome Back, Admin!</h1>
            <div className="flex items-center gap-4">
              <button onClick={() => { setPreviousActive(active); setActive("Notifications"); }} className="w-10 h-10 rounded-xl flex items-center justify-center border-none bg-[#EEF4FB] text-[#1866B4] text-lg cursor-pointer hover:bg-blue-100 transition-colors">🔔</button>
              <div onClick={() => setShowProfileModal(true)} className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 cursor-pointer">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80" className="w-9 h-9 rounded-xl object-cover" alt="Admin" />
                <div className="text-left"><h4 className="font-bold text-xs text-slate-800">{adminData.name}</h4><p className="text-[10px] text-gray-400">{adminData.email}</p></div>
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

      {/* Profile & Logout Modals (Slightly shortened for brevity) */}
      {showLogoutPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl max-w-sm w-full text-center shadow-2xl">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Logout</h3>
            <div className="flex gap-4 justify-center">
              <button onClick={() => setShowLogoutPopup(false)} className="px-6 py-2 bg-slate-200 rounded-xl">No</button>
              <button onClick={() => { setShowLogoutPopup(false); setCurrentScreen("LOGIN"); }} className="px-6 py-2 bg-[#1866B4] text-white rounded-xl">Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}