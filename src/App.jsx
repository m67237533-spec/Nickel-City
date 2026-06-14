import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/Dashboard";
import ServiceManagement from "./pages/ServiceManagement";
import UserManagement from "./pages/UserManagement";
import UserDetails from "./pages/UserDetails"; // Import Added
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
  const [selectedUser, setSelectedUser] = useState(null); // State Added

  const [adminData, setAdminData] = useState({
    name: "Admin",
    email: "admin.admin@gmail.com",
    phone: "+0123456789",
    avatar: "images/profile.jpg",
  });

  const completedPages = [
    "Dashboard", "Service Management", "User Management", "UserDetails",
    "Contractor Management", "Contractor Verification", "Job Management",
    "Payment & Transaction", "Reported Jobs", "Settings", "Notifications",
    "Change Password", "Terms & Conditions", "Privacy Policy", "About Us",
    "Profile", "EditProfile"
  ];

  if (currentScreen === "LOGIN") return <Login onLoginSuccess={() => setCurrentScreen("DASHBOARD_FLOW")} onForgotPasswordClick={() => setCurrentScreen("FORGOT_PASSWORD")} />;
  if (currentScreen === "FORGOT_PASSWORD") return <ForgotPassword onBackToLogin={() => setCurrentScreen("LOGIN")} onGoToOTP={() => setCurrentScreen("VERIFY_OTP")} />;
  if (currentScreen === "VERIFY_OTP") return <VerifyOTP onBackToForgot={() => setCurrentScreen("FORGOT_PASSWORD")} onOTPSuccess={() => setCurrentScreen("RESET_PASSWORD")} />;
  if (currentScreen === "RESET_PASSWORD") return <ResetPassword onBackToOTP={() => setCurrentScreen("VERIFY_OTP")} onResetSuccess={() => setCurrentScreen("LOGIN")} />;

  return (
    <div className="flex min-h-screen font-sans relative">
      <Sidebar
        active={["Notifications", "Change Password", "Terms & Conditions", "Privacy Policy", "About Us", "Profile", "EditProfile", "UserDetails"].includes(active) ? (active === "UserDetails" ? "User Management" : "Settings") : active}
        setActive={setActive}
        onLogoutClick={() => setShowLogoutPopup(true)}
      />

      <main className="flex-1 pl-[270px] overflow-y-auto">
        {!["Notifications", "Change Password", "Terms & Conditions", "Privacy Policy", "About Us"].includes(active) && (
          <div className="flex flex-col">
            <div className="p-4 pb-4 pt-2 flex justify-between items-center">
              <h1 className="text-[35px] font-bold text-[#222] tracking-tight pl-2 mt-2">Welcome Back, Admin!</h1>
              <div className="flex items-center ">
                <button onClick={() => { setPreviousActive(active); setActive("Notifications"); }} className="w-10 h-10 rounded-xl flex items-center justify-center border-none bg-[#EEF4FB] cursor-pointer hover:bg-blue-100 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1866B4" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
                </button>
                <div onClick={() => { setPreviousActive(active); setActive("Profile"); }} className="flex items-center gap-2 px-4 py-2 rounded-xl hover:border-gray-200 transition-colors cursor-pointer">
                  <img src={adminData.avatar} className="w-11 h-11 rounded-xl object-cover" alt="Admin" />
                  <div className="text-left"><h4 className="font-bold text-xs text-slate-800">{adminData.name}</h4><p className="text-[13px] text-gray-400">{adminData.email}</p></div>
                </div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-100 mb-6"></div>
          </div>
        )}

        <div className="p-6 pt-2">
          {active === "Dashboard" && <DashboardPage />}
          {active === "Service Management" && <ServiceManagement />}

          {active === "User Management" && (
            <UserManagement onUserClick={(user) => { setSelectedUser(user); setActive("UserDetails"); }} />
          )}
          {active === "UserDetails" && (
            <UserDetails user={selectedUser} onBackClick={() => setActive("User Management")} />
          )}

          {active === "Contractor Management" && <ContractorManagement />}
          {active === "Contractor Verification" && <ContractorVerification />}
          {active === "Job Management" && <JobManagement />}
          {active === "Payment & Transaction" && <PaymentsTransaction />}
          {active === "Reported Jobs" && <JobReport />}
          {active === "Settings" && <Settings onTabSelect={(tabName) => setActive(tabName)} />}
          {active === "Notifications" && <Notifications onBackClick={() => setActive(previousActive)} />}
          {active === "Profile" && <Profile adminData={adminData} onEditClick={() => setActive("EditProfile")} onBackClick={() => setActive(previousActive)} />}
          {active === "EditProfile" && <EditProfile adminData={adminData} setAdminData={setAdminData} onUpdateClick={() => setShowUpdatePopup(true)} onBackClick={() => setActive("Profile")} />}

          {["Change Password", "Privacy Policy", "Terms & Conditions", "About Us"].includes(active) && (
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <button onClick={() => setActive("Settings")} className="mb-4 text-xs text-blue-600 font-bold bg-transparent border-none cursor-pointer">← Back to Settings</button>
              <h2 className="text-xl font-bold text-slate-800">{active} Screen</h2>
            </div>
          )}
        </div>
      </main>
      {/* Popups (Logout/Update) remain the same */}
    </div>
  );
}