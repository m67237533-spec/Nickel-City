import { useState } from "react";

// Mock Data
const initialTransactions = [
  { id: 1, user: "James Anderson", phone: "+0123456789", service: "Lawn Mowing", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "$4.80", status: "Transferred" },
  { id: 2, user: "James Anderson", phone: "+0123456789", service: "Snow Removal", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "-$2.5", status: "Refunded" },
  { id: 3, user: "James Anderson", phone: "+0123456789", service: "Lawn Mowing", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "$4.80", status: "Transferred" },
  { id: 4, user: "James Anderson", phone: "+0123456789", service: "Snow Removal", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "-$2.5", status: "Refund" },
];

const stats = [
  { label: "Total Revenue", value: "$5,780", bg: "bg-blue-50", icon: "/icons/dash.1.jpg" },
  { label: "Total Commissions", value: "$1,156", bg: "bg-emerald-50", icon: "/icons/dash.2.jpg" },
  { label: "Total Contractors", value: "512", bg: "bg-amber-50", icon: "/icons/msg.jpg" },
  { label: "Total Customer", value: "190", bg: "bg-violet-50", icon: "/icons/msg2.jpg" },
];

// CARD
function StatCard({ label, value, bg, icon }) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center gap-3 shadow-md border border-gray-100 w-full">

      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${bg} flex items-center justify-center`}>
        <img src={icon} className="w-4 h-4 sm:w-5 sm:h-5" alt="" />
      </div>

      <div>
        <div className="font-bold text-sm sm:text-base text-slate-800">
          {value}
        </div>
        <div className="text-[10px] sm:text-xs text-gray-400">
          {label}
        </div>
      </div>

    </div>
  );
}

export default function PaymentsTransaction() {
  const [search, setSearch] = useState("");

  const getStatusClass = (status) => {
    switch (status) {
      case "Transferred": return "bg-emerald-500 text-white";
      case "Refunded": return "bg-rose-500 text-white";
      case "Refund": return "bg-amber-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="p-3 sm:p-4 space-y-6">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between gap-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
          Payment & Transaction
        </h2>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-80 px-4 py-2 rounded-xl border border-gray-200 shadow-sm text-sm"
        />
      </div>

      {/* ✅ ONLY CARD FIX (NO TABLE CHANGE) */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* 🔥 YOUR ORIGINAL TABLE (UNCHANGED) */}
      <div className="   overflow-hidden w-full">
        <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Transactions</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-[11px] border-separate border-spacing-y-2 text-left">
            <thead>
              <tr className="text-black-400 font-bold uppercase tracking-wider">
                <th className="px-3 py-2">User Name</th>
                <th className="px-3 py-2">Phone Number</th>
                <th className="px-3 py-2">Service</th>
                <th className="px-3 py-2">Contractor</th>
                <th className="px-3 py-2">Date & Time</th>
                <th className="px-3 py-2">Payment</th>
                <th className="px-3 py-2">Commission</th>
                <th className="px-3 py-2 text-center">Status</th>
              </tr>
            </thead>

            <tbody className="text-[10px] text-slate-600">
              {initialTransactions
                .filter(t =>
                  t.user.toLowerCase().includes(search.toLowerCase()) ||
                  t.service.toLowerCase().includes(search.toLowerCase())
                )
                .map((t, index) => {
                  const isColored = index % 2 === 0;

                  return (
                    <tr key={t.id} className="hover:bg-slate-50 transition-colors">

                      <td className={`px-3 py-3 whitespace-nowrap font-bold text-slate-800 ${isColored ? "bg-[#F3F7FB] text-gray-500 rounded-l-lg" : "text-gray-500"}`}>
                        <div className="flex items-center gap-2">
                          <img src="/images/face.1.jpg" className="w-5 h-5 rounded-full object-cover" />
                          {t.user}
                        </div>
                      </td>

                      <td className={`px-3 py-3 ${isColored ? "bg-[#F3F7FB] text-gray-500" : "text-gray-500"}`}>
                        {t.phone}
                      </td>

                      <td className={`px-3 py-3 font-semibold ${isColored ? "bg-[#F3F7FB] text-gray-500" : "text-gray-500"}`}>
                        {t.service}
                      </td>

                      <td className={`px-3 py-3 ${isColored ? "bg-[#F3F7FB]" : ""}`}>
                        {t.contractor}
                      </td>

                      <td className={`px-3 py-3 ${isColored ? "bg-[#F3F7FB] text-gray-500" : "text-gray-500"}`}>
                        {t.dateTime}
                      </td>

                      <td className={`px-3 py-3 font-bold ${isColored ? "bg-[#F3F7FB] text-gray-500" : "text-gray-500"}`}>
                        {t.payment}
                      </td>

                      <td className={`px-3 py-3 font-bold ${isColored ? "bg-[#F3F7FB] text-gray-500" : "text-gray-500"}`}>
                        {t.commission}
                      </td>

                      <td className={`px-3 py-3 text-center ${isColored ? "bg-[#F3F7FB] text-gray-500 rounded-r-lg" : "text-gray-500"}`}>
                        <span className={`px-3 py-1 rounded-full text-[9px] font-bold ${getStatusClass(t.status)}`}>
                          {t.status}
                        </span>
                      </td>

                    </tr>
                  );
                })}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
}