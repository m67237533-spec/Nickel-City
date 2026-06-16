import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage"; // ✅ FIXED HERE

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

  if (currentScreen === "LOGIN")
    return (
      <Login
        onLoginSuccess={() => setCurrentScreen("DASHBOARD_FLOW")}
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

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <Sidebar
        active={active}
        setActive={setActive}
      />

      {/* Main */}
      <main className="flex-1 md:pl-[270px] overflow-y-auto w-full">

        {/* Top Section */}
        {!["Notifications"].includes(active) && (
          <div className="p-4">
            <h1 className="text-2xl font-bold">Welcome Back, Admin!</h1>
          </div>
        )}

        {/* Pages */}
        <div className="p-4">

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

          {active === "Settings" && <Settings setActive={setActive} />}

          {active === "Notifications" && (
            <Notifications onBackClick={() => setActive(previousActive)} />
          )}

          {active === "Profile" && (
            <Profile
              adminData={adminData}
              onBackClick={() => setActive(previousActive)}
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