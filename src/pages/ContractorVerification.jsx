import React, { useState } from "react";
import TopBar from "../components/TopBar";
import ContractorVerificationDetail from "./ContractorVerificationDetail";

const initialContractors = [
  { id: 1, name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Pending" },
  { id: 2, name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Approved" },
  { id: 3, name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "N/A", address: "53C, 14th street, Empire state, USA", status: "Cancelled" },
  { id: 4, name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Pending" },
  { id: 5, name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Approved" },
  { id: 6, name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "N/A", address: "53C, 14th street, Empire state, USA", status: "Cancelled" },
   { id: 7, name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "N/A", address: "53C, 14th street, Empire state, USA", status: "Cancelled" },
  { id: 8, name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Pending" },
  { id: 9, name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Approved" },
  { id: 10, name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "N/A", address: "53C, 14th street, Empire state, USA", status: "Cancelled" }
];

const tabs = ["All", "Pending", "Approved", "Cancelled"];

function statusStyle(status) {
  if (status === "Pending") return "text-yellow-500 bg-yellow-50";
  if (status === "Approved") return "text-green-600 bg-green-50";
  if (status === "Cancelled") return "text-red-500 bg-red-50";
  return "";
}

export default function ContractorVerification() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedContractor, setSelectedContractor] = useState(null);

  const filtered = initialContractors.filter(c => {
    const matchTab = activeTab === "All" || c.status === activeTab;
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || 
                        c.email.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  if (selectedContractor) {
    return (
      <ContractorVerificationDetail
        contractor={selectedContractor}
        onBack={() => setSelectedContractor(null)}
        onCancel={() => { setSelectedContractor(null); setActiveTab("Cancelled"); }}
        onApprove={() => { setSelectedContractor(null); setActiveTab("Approved"); }}
      />
    );
  }

  return (
    <div className="pl-0 pr-8 pt-0 pb-8">
      <TopBar />

      <div className="flex items-center justify-between mb-4 mt-[-40px] flex-wrap gap-3 text-left">
        <h2 className="text-xl font-bold text-slate-800 m-0">Contractor Verification</h2>
        <input 
          type="text" 
          placeholder="Search..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[600px] border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-400 shadow-md transition-shadow" 
        />
      </div>

      <div className="flex gap-2 mb-5">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-[11px] font-bold border-none cursor-pointer transition-all ${
              activeTab === tab ? "text-white shadow-md" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
            style={activeTab === tab ? { background: "#1866B4" } : {}}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-[10px] border-separate border-spacing-y-2 text-left">
          <thead>
            <tr className="text-black uppercase tracking-wider">
              {["Name", "Email", "Phone", "Service", "Company", "Address", "Status", "Action"].map(col => (
                <th key={col} className="px-3 py-2 font-bold text-[11px] text-black">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[10px] text-black">
            {filtered.map((c, index) => {
              const isColored = index % 2 === 0;
              return (
                <tr 
                  key={c.id + index} 
                  onClick={() => setSelectedContractor(c)}
                  className="cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <td className={`px-3 py-2 ${isColored ? "bg-[#F3F7FB] rounded-l-lg" : ""}`}>
                    <div className="flex items-center gap-2">
                      <img src="/images/face.2.jpg" alt="avatar" className="w-5 h-5 rounded-full" />
                      <span className="font-bold text-gray-500">{c.name}</span>
                    </div>
                  </td>
                  <td className={`px-3 py-2 ${isColored ? "bg-[#F3F7FB] text-gray-500" : "text-gray-500"}`}>{c.email}</td>
                  <td className={`px-3 py-2 ${isColored ? "bg-[#F3F7FB] text-gray-500" : "text-gray-500"}`}>{c.phone}</td>
                  <td className={`px-3 py-2 ${isColored ? "bg-[#F3F7FB] text-gray-500" : "text-gray-500"}`}>{c.service}</td>
                  <td className={`px-3 py-2 ${isColored ? "bg-[#F3F7FB] text-gray-500" : "text-gray-500"}`}>{c.company}</td>
                  <td className={`px-3 py-2 truncate max-w-[150px] ${isColored ? "bg-[#F3F7FB] text-gray-500" : "text-gray-500"}`}>{c.address}</td>
                  <td className={`px-3 py-2 ${isColored ? "bg-[#F3F7FB]" : ""}`}>
                    <span className={`px-3 py-1 rounded-full font-bold ${statusStyle(c.status)}`}>{c.status}</span>
                  </td>
                  <td className={`px-3 py-2 ${isColored ? "bg-[#F3F7FB] rounded-r-lg" : ""}`}>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedContractor(c); }} 
                      className="text-gray-400 font-bold text-lg hover:text-blue-600"
                    >
                      •••
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}