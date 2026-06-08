import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/Dashboard";
import ServiceManagement from "./pages/ServiceManagement";
import UserManagement from "./pages/UserManagement";

export default function App() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar active={active} setActive={setActive} />
      <main className="flex-1 p-0 overflow-y-auto">
        {active === "Dashboard" && <DashboardPage />}
        {active === "Service Management" && <ServiceManagement />}
        {active === "User Management" && <UserManagement />}
        {active !== "Dashboard" && active !== "Service Management" && active !== "User Management" && (
          <div className="flex flex-col items-center justify-center h-[60vh] text-gray-400">
            <div className="text-5xl mb-4">🚧</div>
            <h2 className="text-xl font-semibold text-slate-500">{active}</h2>
            <p className="text-sm mt-2">This page is under construction</p>
          </div>
        )}
      </main>
    </div>
  );
}