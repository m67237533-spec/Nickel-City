import { useState } from "react";
import Sidebar from "./components/Sidebar";

import DashboardPage from "./pages/DashboardPage";
import ServiceManagement from "./pages/ServiceManagement";
import UserManagement from "./pages/UserManagement";
import UserDetails from "./pages/UserDetails";
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

  const [selectedUser, setSelectedUser] = useState(null);

  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);

  const [adminData, setAdminData] = useState({
    name: "Admin",
    email: "admin.admin@gmail.com",
    phone: "+0123456789",
    avatar: "images/profile.jpg",
  });

  // ---------------- AUTH FLOW ----------------
  if (currentScreen === "LOGIN")
    return (
      <Login
        onLoginSuccess={() => setCurrentScreen("DASHBOARD")}
        onForgotPasswordClick={() => setCurrentScreen("FORGOT_PASSWORD")}
      />
    );

  if (currentScreen === "FORGOT_PASSWORD")
    return (
      <ForgotPassword
        onBackToLogin={() => setCurrentScreen("LOGIN")}
        onGoToOTP={() => setCurrentScreen("VERIFY_OTP")}
      />
    );

  if (currentScreen === "VERIFY_OTP")
    return (
      <VerifyOTP
        onBackToForgot={() => setCurrentScreen("FORGOT_PASSWORD")}
        onOTPSuccess={() => setCurrentScreen("RESET_PASSWORD")}
      />
    );

  if (currentScreen === "RESET_PASSWORD")
    return (
      <ResetPassword
        onBackToOTP={() => setCurrentScreen("VERIFY_OTP")}
        onResetSuccess={() => setCurrentScreen("LOGIN")}
      />
    );

  // ---------------- MAIN APP ----------------
  return (
    <div className="flex min-h-screen font-sans relative">

      {/* Sidebar */}
      <Sidebar
        active={
          ["Notifications", "Profile", "EditProfile", "UserDetails"].includes(active)
            ? active === "UserDetails"
              ? "User Management"
              : "Settings"
            : active
        }
        setActive={setActive}
        onLogoutClick={() => setShowLogoutPopup(true)}
      />

      {/* MAIN CONTENT */}
      <main className="flex-1 md:pl-[270px] overflow-y-auto w-full">

        {/* HEADER */}
        {!["Notifications", "Change Password", "Terms & Conditions", "Privacy Policy", "About Us"].includes(active) && (
          <div className="flex flex-col">
            <div className="p-4 pt-14 md:pt-4 flex flex-col md:flex-row justify-between md:items-center gap-4">

              <h1 className="text-[24px] md:text-[34px] font-bold text-[#222]">
                Welcome Back, Admin!
              </h1>

              <div className="flex items-center gap-4">

                {/* Notifications */}
                <button
                  onClick={() => {
                    setPreviousActive(active);
                    setActive("Notifications");
                  }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#EEF4FB] hover:bg-blue-100"
                >
                  🔔
                </button>

                {/* Profile */}
                <div
                  onClick={() => {
                    setPreviousActive(active);
                    setActive("Profile");
                  }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <img
                    src={adminData.avatar}
                    className="w-10 h-10 rounded-xl object-cover"
                  />
                  <div className="hidden md:block">
                    <p className="text-xs font-bold">{adminData.name}</p>
                    <p className="text-[12px] text-gray-400">{adminData.email}</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="h-[1px] bg-gray-100 mb-4"></div>
          </div>
        )}

        {/* PAGES */}
        <div className="p-3 md:p-6">

          {active === "Dashboard" && <DashboardPage />}

          {active === "Service Management" && <ServiceManagement />}

          {active === "User Management" && (
            <UserManagement
              onUserClick={(user) => {
                setSelectedUser(user);
                setActive("UserDetails");
              }}
            />
          )}

          {active === "UserDetails" && (
            <UserDetails
              user={selectedUser}
              onBackClick={() => setActive("User Management")}
            />
          )}

          {active === "Contractor Management" && <ContractorManagement />}

          {active === "Contractor Verification" && <ContractorVerification />}

          {active === "Job Management" && <JobManagement />}

          {active === "Payment & Transaction" && <PaymentsTransaction />}

          {active === "Reported Jobs" && <JobReport />}

          {active === "Settings" && (
            <Settings onTabSelect={(tab) => setActive(tab)} />
          )}

          {active === "Notifications" && (
            <Notifications onBackClick={() => setActive(previousActive)} />
          )}

          {active === "Profile" && (
            <Profile
              adminData={adminData}
              onBackClick={() => setActive(previousActive)}
              onEditClick={() => setActive("EditProfile")}
            />
          )}

          {active === "EditProfile" && (
            <EditProfile
              adminData={adminData}
              setAdminData={setAdminData}
              onBackClick={() => setActive("Profile")}
              onUpdateClick={() => setShowUpdatePopup(true)}
            />
          )}

        </div>
      </main>

    </div>
  );
}