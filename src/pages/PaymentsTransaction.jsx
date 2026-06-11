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
        return "bg-emerald-50 text-emerald-600 border border-solid border-emerald-100";
      case "Refunded":
        return "bg-rose-50 text-rose-500 border border-solid border-rose-100";
      case "Refund":
        return "bg-amber-50 text-amber-500 border border-solid border-amber-100";
      default:
        return "bg-gray-50 text-gray-500 border border-solid border-gray-100";
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F8F8F8] p-8 flex flex-col box-border font-sans antialiased">
      
      {/* Main Title & Search Bar Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 w-full">
        <h2 className="text-2xl font-bold text-slate-800 m-0 tracking-tight">Payment & Transaction</h2>
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-[320px] bg-white border border-solid border-slate-100 rounded-xl px-4 py-2.5 shadow-2xs outline-none text-xs text-slate-700 placeholder-slate-400 focus:border-blue-500 transition-colors box-border"
          />
        </div>
      </div>

      {/* 4 Stats Cards Grid Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8 w-full">
        {/* Total Revenue */}
        <div className="bg-white p-5 rounded-2xl shadow-2xs border border-solid border-slate-100/60 flex items-center gap-4 box-border">
          <div className="w-12 h-12 rounded-full bg-[#EEF4FB] flex items-center justify-center text-xl text-blue-500 font-bold select-none">💰</div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-800 m-0">$5,780</h3>
            <p className="text-[11px] text-slate-400 font-medium m-0 mt-0.5">Total Revenue</p>
          </div>
        </div>

        {/* Total Commissions */}
        <div className="bg-white p-5 rounded-2xl shadow-2xs border border-solid border-slate-100/60 flex items-center gap-4 box-border">
          <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-xl text-emerald-500 font-bold select-none">💵</div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-800 m-0">$1,156</h3>
            <p className="text-[11px] text-slate-400 font-medium m-0 mt-0.5">Total Commissions</p>
          </div>
        </div>

        {/* Total Cancelled Jobs */}
        <div className="bg-white p-5 rounded-2xl shadow-2xs border border-solid border-slate-100/60 flex items-center gap-4 box-border">
          <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-xl text-rose-500 font-bold select-none">💼</div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-800 m-0">$256</h3>
            <p className="text-[11px] text-slate-400 font-medium m-0 mt-0.5">Total Cancelled Jobs</p>
          </div>
        </div>

        {/* Total Completed Jobs */}
        <div className="bg-white p-5 rounded-2xl shadow-2xs border border-solid border-slate-100/60 flex items-center gap-4 box-border">
          <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-xl text-green-500 font-bold select-none">✅</div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-800 m-0">190</h3>
            <p className="text-[11px] text-slate-400 font-medium m-0 mt-0.5">Total Completed Jobs</p>
          </div>
        </div>
      </div>

      {/* Transactions Table Section */}
      <div className="bg-white rounded-2xl shadow-2xs border border-solid border-slate-100/60 p-6 overflow-hidden w-full box-border">
        <h3 className="text-base font-bold text-slate-800 m-0 mb-4 tracking-tight">Transactions</h3>
        
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="border-b border-solid border-slate-100 text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                <th className="pb-3 font-bold">User Name ▾</th>
                <th className="pb-3 font-bold">Phone Number ▾</th>
                <th className="pb-3 font-bold">Service ▾</th>
                <th className="pb-3 font-bold">Contractor ▾</th>
                <th className="pb-3 font-bold">Date & Time ▾</th>
                <th className="pb-3 font-bold">Payment ▾</th>
                <th className="pb-3 font-bold">Service Commission ▾</th>
                <th className="pb-3 text-center font-bold">Status ▾</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-solid divide-slate-100 text-xs text-slate-600">
              {initialTransactions
                .filter(t => t.user.toLowerCase().includes(search.toLowerCase()) || t.service.toLowerCase().includes(search.toLowerCase()))
                .map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 flex items-center gap-2">
                      <img src={`https://picsum.photos/seed/u${t.id}/60/60`} className="w-6 h-6 rounded-full object-cover border border-solid border-slate-100 shadow-3xs" alt="" />
                      <span className="font-bold text-slate-800">{t.user}</span>
                    </td>
                    <td className="py-3.5 font-medium text-slate-500">{t.phone}</td>
                    <td className="py-3.5 font-semibold text-slate-700">{t.service}</td>
                    <td className="py-3.5 font-medium text-slate-600">{t.contractor}</td>
                    <td className="py-3.5 text-slate-400 font-medium">{t.dateTime}</td>
                    <td className="py-3.5 font-extrabold text-slate-800">{t.payment}</td>
                    <td className="py-3.5 font-bold text-slate-700">{t.commission}</td>
                    <td className="py-3.5 text-center">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide border border-solid ${getStatusClass(t.status)}`}>
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