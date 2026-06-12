import { useState } from "react";

// Mock Data
const initialTransactions = [
  { id: 1, user: "James Anderson", phone: "+0123456789", service: "Lawn Mowing", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "$4.80", status: "Transferred" },
  { id: 2, user: "James Anderson", phone: "+0123456789", service: "Snow Removal", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "-$2.5", status: "Refunded" },
  { id: 3, user: "James Anderson", phone: "+0123456789", service: "Lawn Mowing", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "$4.80", status: "Transferred" },
  { id: 4, user: "James Anderson", phone: "+0123456789", service: "Snow Removal", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "-$2.5", status: "Refund" },
];

export default function PaymentsTransaction() {
  const [search, setSearch] = useState("");

  const getStatusClass = (status) => {
    switch (status) {
      case "Transferred": return "bg-emerald-50 text-emerald-600 border border-emerald-100";
      case "Refunded": return "bg-rose-50 text-rose-500 border border-rose-100";
      case "Refund": return "bg-amber-50 text-amber-500 border border-amber-100";
      default: return "bg-gray-50 text-gray-500 border-gray-100";
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F8F8F8] p-8 flex flex-col box-border font-sans antialiased">
      
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 w-full">
        <h2 className="text-2xl font-bold text-slate-800 m-0 tracking-tight">Payment & Transaction</h2>
        <div className="relative w-80">
          <input
            type="text"
            placeholder="Search by name or service..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-slate-100 rounded-xl px-4 py-2.5 shadow-sm outline-none text-xs text-slate-700 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8 w-full">
        {[
          { label: "Total Revenue", val: "$5,780", bg: "bg-[#EEF4FB]", icon: "/icons/dash.1.jpg" },
          { label: "Total Commissions", val: "$1,156", bg: "bg-emerald-50", icon: "/icons/dash.2.jpg" },
          { label: "Total Cancelled Jobs", val: "$256", bg: "bg-rose-50", icon: "/icons/dash.3.jpg" },
          { label: "Total Completed Jobs", val: "190", bg: "bg-green-50", icon: "/icons/dash.4.jpg" }
        ].map((item, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center`}>
              <img src={item.icon} alt={item.label} className="w-6 h-6 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-800 m-0">{item.val}</h3>
              <p className="text-[11px] text-slate-400 font-medium m-0 mt-0.5">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 overflow-hidden w-full">
        <h3 className="text-base font-bold text-slate-800 mb-4">Transactions</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="text-slate-400 text-[11px] font-bold uppercase border-b border-slate-100">
                <th className="pb-3">User Name</th>
                <th className="pb-3">Phone</th>
                <th className="pb-3">Service</th>
                <th className="pb-3">Contractor</th>
                <th className="pb-3">Date & Time</th>
                <th className="pb-3">Payment</th>
                <th className="pb-3">Commission</th>
                <th className="pb-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-600">
              {initialTransactions
                .filter(t => t.user.toLowerCase().includes(search.toLowerCase()) || t.service.toLowerCase().includes(search.toLowerCase()))
                .map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 flex items-center gap-2 font-bold text-slate-800">
                      <img src={`https://picsum.photos/seed/u${t.id}/60/60`} className="w-6 h-6 rounded-full" alt="" />
                      {t.user}
                    </td>
                    <td className="py-4 font-medium">{t.phone}</td>
                    <td className="py-4 font-semibold text-slate-700">{t.service}</td>
                    <td className="py-4">{t.contractor}</td>
                    <td className="py-4 text-slate-400">{t.dateTime}</td>
                    <td className="py-4 font-bold text-slate-800">{t.payment}</td>
                    <td className="py-4 font-bold text-slate-700">{t.commission}</td>
                    <td className="py-4 text-center">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${getStatusClass(t.status)}`}>
                        {t.status}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}