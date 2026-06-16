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
        active={active}
        setActive={(val) => {
          setPreviousActive(active);
          setActive(val);
        }}
      />

      {/* MAIN CONTENT */}
      <main className="flex-1 md:pl-[270px] overflow-y-auto w-full">

        {/* HEADER (VISIBLE ON ALL EXCEPT AUTH SCREENS) */}
        {![
          "Change Password",
          "Terms & Conditions",
          "Privacy Policy",
          "About Us"
        ].includes(active) && (
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
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#1866B4"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                  </svg>
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
                    <p className="text-[12px] text-gray-400">
                      {adminData.email}
                    </p>
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
            <Settings setActive={setActive} />
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
            />
          )}

        </div>
      </main>
    </div>
  );
}