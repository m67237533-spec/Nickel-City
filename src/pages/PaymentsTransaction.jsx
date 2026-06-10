import { useState } from "react";

// Mock Data matching your layout exactly
const initialTransactions = [
  { id: 1, user: "James Anderson", phone: "+0123456789", service: "Lawn Mowing", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "$4.80", status: "Transferred" },
  { id: 2, user: "James Anderson", phone: "+0123456789", service: "Snow Removal", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "-$2.5", status: "Refunded" },
  { id: 3, user: "James Anderson", phone: "+0123456789", service: "Lawn Mowing", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "$4.80", status: "Transferred" },
  { id: 4, user: "James Anderson", phone: "+0123456789", service: "Snow Removal", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "-$2.5", status: "Refund" },
  { id: 5, user: "James Anderson", phone: "+0123456789", service: "Lawn Mowing", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "$4.80", status: "Transferred" },
  { id: 6, user: "James Anderson", phone: "+0123456789", service: "Snow Removal", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "-$2.5", status: "Refund" },
  { id: 7, user: "James Anderson", phone: "+0123456789", service: "Lawn Mowing", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "$4.80", status: "Transferred" },
  { id: 8, user: "James Anderson", phone: "+0123456789", service: "Snow Removal", contractor: "John Doe", dateTime: "15 September, 2025 | 10:00 PM", payment: "$24", commission: "-$2.5", status: "Refund" },
];

export default function PaymentsTransaction() {
  const [search, setSearch] = useState("");

  const getStatusClass = (status) => {
    switch (status) {
      case "Transferred":
        return "bg-emerald-50 text-emerald-600 border border-emerald-100";
      case "Refunded":
        return "bg-rose-50 text-rose-500 border border-rose-100";
      case "Refund":
        return "bg-amber-50 text-amber-500 border border-amber-100";
      default:
        return "bg-gray-50 text-gray-500 border border-gray-100";
    }
  };

  return (
    <div className="p-6 bg-[#F8F8F8] min-h-screen">
      {/* Top Welcome Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[48px] font-bold text-[#222]">Welcome Back, Admin!</h1>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 bg-[#EEF4FB] rounded-lg flex items-center justify-center border-none cursor-pointer text-xl">
            🔔
          </button>
          <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-lg shadow-sm">
            <img src="https://i.pravatar.cc/100" alt="Admin" className="w-10 h-10 rounded-lg" />
            <div>
              <h4 className="font-semibold text-sm">Admin</h4>
              <p className="text-xs text-gray-500">admin.admin@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Title & Search Bar */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Payment & Transaction</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[360px] bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm outline-none text-sm placeholder-gray-400"
          />
        </div>
      </div>

      {/* 4 Stats Cards Grid Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {/* Total Revenue */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-50 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#EEF4FB] flex items-center justify-center text-xl text-blue-500 font-bold">💰</div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">$5,780</h3>
            <p className="text-xs text-gray-400 mt-0.5">Total Revenue</p>
          </div>
        </div>

        {/* Total Commissions */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-50 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-xl text-emerald-500 font-bold">💵</div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">$1,156</h3>
            <p className="text-xs text-gray-400 mt-0.5">Total Commissions</p>
          </div>
        </div>

        {/* Total Cancelled Jobs */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-50 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-xl text-rose-500 font-bold">💼</div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">$256</h3>
            <p className="text-xs text-gray-400 mt-0.5">Total Cancelled Jobs</p>
          </div>
        </div>

        {/* Total Completed Jobs */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-50 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-xl text-green-500 font-bold">✅</div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">190</h3>
            <p className="text-xs text-gray-400 mt-0.5">Total Completed Jobs</p>
          </div>
        </div>
      </div>

      {/* Transactions Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-50 p-6 overflow-hidden">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Transactions</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-slate-700 text-xs font-bold">
                <th className="pb-3 font-semibold">User Name ▾</th>
                <th className="pb-3 font-semibold">Phone Number ▾</th>
                <th className="pb-3 font-semibold">Service ▾</th>
                <th className="pb-3 font-semibold">Contractor ▾</th>
                <th className="pb-3 font-semibold">Date & Time ▾</th>
                <th className="pb-3 font-semibold">Payment ▾</th>
                <th className="pb-3 font-semibold">Service Commission ▾</th>
                <th className="pb-3 text-center font-semibold">Status ▾</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs text-slate-600">
              {initialTransactions
                .filter(t => t.user.toLowerCase().includes(search.toLowerCase()) || t.service.toLowerCase().includes(search.toLowerCase()))
                .map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 flex items-center gap-2">
                      <img src={`https://i.pravatar.cc/100?img=${t.id}`} className="w-6 h-6 rounded-full object-cover" alt="" />
                      <span className="font-medium text-slate-700">{t.user}</span>
                    </td>
                    <td className="py-3.5">{t.phone}</td>
                    <td className="py-3.5">{t.service}</td>
                    <td className="py-3.5">{t.contractor}</td>
                    <td className="py-3.5 text-gray-400">{t.dateTime}</td>
                    <td className="py-3.5 font-medium text-slate-700">{t.payment}</td>
                    <td className="py-3.5 font-medium">{t.commission}</td>
                    <td className="py-3.5 text-center">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-semibold ${getStatusClass(t.status)}`}>
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