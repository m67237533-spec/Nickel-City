import { useState } from "react";

// Mock Data
const initialTransactions = [
  { id: 1, user: "James Anderson", phone: "+0123456789", service: "Lawn Mowing", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "$4.80", status: "Transferred" },
  { id: 2, user: "James Anderson", phone: "+0123456789", service: "Snow Removal", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "-$2.5", status: "Refunded" },
  { id: 3, user: "James Anderson", phone: "+0123456789", service: "Lawn Mowing", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "$4.80", status: "Transferred" },
  { id: 4, user: "James Anderson", phone: "+0123456789", service: "Snow Removal", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "-$2.5", status: "Refund" },
  { id: 5, user: "James Anderson", phone: "+0123456789", service: "Lawn Mowing", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "$4.80", status: "Transferred" },
  { id: 6, user: "James Anderson", phone: "+0123456789", service: "Snow Removal", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "-$2.5", status: "Refunded" },
  { id: 7, user: "James Anderson", phone: "+0123456789", service: "Lawn Mowing", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "$4.80", status: "Transferred" },
  { id: 8, user: "James Anderson", phone: "+0123456789", service: "Snow Removal", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "-$2.5", status: "Refund" }
];

const stats = [
  { label: "Total Revenue", value: "$5,780", bg: "bg-blue-50", icon: "/icons/dash.1.jpg" },
  { label: "Total Commissions", value: "$1,156", bg: "bg-emerald-50", icon: "/icons/dash.2.jpg" },
  { label: "Total Contractors", value: "512", bg: "bg-amber-50", icon: "/icons/msg.jpg" },
  { label: "Total Customer", value: "190", bg: "bg-violet-50", icon: "/icons/msg2.jpg" },
];

function StatCard({ label, value, bg, icon }) {
  return (
    // Yahan shadow-md aur hover:shadow-lg add kiya hai
    <div className="bg-white rounded-2xl p-4 flex items-center gap-3 flex-1 min-w-[160px] shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300">
      <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center flex-shrink-0`}>
        <img src={icon} alt={label} className="w-5 h-5 object-contain" />
      </div>
      <div className="text-left">
        <div className="text-sm font-extrabold text-slate-800">{value}</div>
        <div className="text-[10px] text-gray-400 mt-0">{label}</div>
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
    <div className="w-full min-h-screen flex flex-col box-border font-sans antialiased ">

      {/* Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 w-full">
        <h2 className="text-2xl font-bold text-slate-800 m-0 tracking-tight">Payment & Transaction</h2>
        {/* Width badhakar w-96 kar di hai aur shadow-md add kiya hai */}
        <div className="relative w-full md:w-96 shadow-md rounded-xl">
          <input
            type="text"
            placeholder="Search "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-slate-100 rounded-xl px-4 py-3 shadow-sm outline-none text-xs text-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="flex gap-4 flex-wrap mb-6 w-full">
        {stats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      {/* Table Section */}
      <div className=" rounded- shadow-sm  overflow-hidden w-full">
        <h3 className="text-base font-bold text-slate-800 mb-2">Transactions</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px] border-separate border-spacing-y-2 text-left">
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
                .filter(t => t.user.toLowerCase().includes(search.toLowerCase()) || t.service.toLowerCase().includes(search.toLowerCase()))
                .map((t, index) => {
                  const isColored = index % 2 === 0;
                  return (
                    <tr key={t.id} className="hover:bg-slate-50 transition-colors">
                      <td className={`px-3 py-3 whitespace-nowrap font-bold text-slate-800 ${isColored ? "bg-[#F3F7FB] text-gray-500 rounded-l-lg" : "text-gray-500"}`}>
                        <div className="flex items-center gap-2">
                          <img
                            src="/images/face.1.jpg"
                            className="w-5 h-5 rounded-full object-cover 0"
                            alt="User"
                          />                          {t.user}
                        </div>
                      </td>
                      <td className={`px-3 py-3 font-medium ${isColored ? "bg-[#F3F7FB] text-gray-500" : "text-gray-500"}`}>{t.phone}</td>
                      <td className={`px-3 py-3 font-semibold text-slate-700 ${isColored ? "bg-[#F3F7FB] text-gray-500" : "text-gray-500"}`}>{t.service}</td>
                      <td className={`px-3 py-3 ${isColored ? "bg-[#F3F7FB]" : ""}`}>{t.contractor}</td>
                      <td className={`px-3 py-3 text-slate-400 ${isColored ? "bg-[#F3F7FB] text-gray-500" : "text-gray-500"}`}>{t.dateTime}</td>
                      <td className={`px-3 py-3 font-bold text-slate-800 ${isColored ? "bg-[#F3F7FB] text-gray-500" : "text-gray-500"}`}>{t.payment}</td>
                      <td className={`px-3 py-3 font-bold text-slate-700 ${isColored ? "bg-[#F3F7FB] text-gray-500" : "text-gray-500"}`}>{t.commission}</td>
                      <td className={`px-3 py-3 text-center ${isColored ? "bg-[#F3F7FB] text-gray-500 rounded-r-lg" : "text-gray-500"}`}>
                        <span className={`px-3 py-1 rounded-full text-[9px] font-bold   ${getStatusClass(t.status)}`}>
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