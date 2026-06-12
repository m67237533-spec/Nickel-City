import TopBar from "../components/TopBar";
import { useState } from "react";
import ContractorVerificationDetail from "./ContractorVerificationDetail";

const initialContractors = [
  { id: 1,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Pending" },
  { id: 2,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Approved" },
  { id: 3,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "N/A",          address: "53C, 14th street, Empire state, USA", status: "Cancelled" },
  { id: 4,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Pending" },
  { id: 5,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Approved" },
  { id: 6,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "N/A",          address: "53C, 14th street, Empire state, USA", status: "Cancelled" },
  { id: 7,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Pending" },
  { id: 8,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Approved" },
  { id: 9,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "N/A",          address: "53C, 14th street, Empire state, USA", status: "Cancelled" },
  { id: 10, name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Pending" },
  { id: 11, name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Approved" },
];

const tabs = ["All", "Pending", "Approved", "Cancelled"];
const columns = ["Name", "Email", "Phone number", "Service", "Company", "Address", "Status", "Action"];

function statusStyle(status) {
  if (status === "Pending")   return "text-yellow-500 bg-yellow-50";
  if (status === "Approved")  return "text-green-600 bg-green-50";
  if (status === "Cancelled") return "text-red-500 bg-red-50";
  return "";
}

export default function ContractorVerification() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedContractor, setSelectedContractor] = useState(null);

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

  const filtered = initialContractors.filter(c => {
    const matchTab = activeTab === "All" || c.status === activeTab;
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div className="pl-0 pr-8 pt-0 pb-8">
      <TopBar />

      <div className="flex items-center justify-between mb-4 mt-0 flex-wrap gap-3 text-left">
        <h2 className="text-xl font-bold text-slate-800">Contractor Verification</h2>
        <div className="flex gap-3">
          <input 
            type="text" 
            placeholder="Search..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[600px] border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-400 transition-all shadow-sm" 
          />
        </div>
      </div>

      <div className="flex gap-2 mb-5">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 rounded-full text-[11px] font-medium border-none cursor-pointer transition-all ${activeTab === tab ? "text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
            style={activeTab === tab ? { background: "#1866B4" } : {}}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table left align karne ke liye margin-left hata di aur container ko screen ke edge se connect kar diya */}
      <div className="w-full overflow-x-auto pl-0">
        <table className="w-full text-[10px] border-separate border-spacing-y-2 text-left">
          <thead>
            <tr className="text-black uppercase tracking-wider">
              {columns.map(col => (
                <th key={col} className="text-left px-3 py-2 font-bold whitespace-nowrap text-[11px]">
                  {col} {col !== "Action" && <span className="text-gray-400">↕</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[10px] text-black">
            {filtered.map((c, index) => {
              const isColored = index % 2 === 0;
              return (
                <tr
                  key={c.id}
                  onClick={() => setSelectedContractor(c)}
                  className="cursor-pointer transition-colors"
                >
                  <td className={`px-3 py-2 whitespace-nowrap ${isColored ? "bg-[#F3F7FB] rounded-l-lg" : ""}`}>
                    <div className="flex items-center gap-2">
                      <img src={"/images/face.2.jpg"} alt="avatar" className="w-5 h-5 rounded-full object-cover" />
                      <span className="font-bold text-black">{c.name}</span>
                    </div>
                  </td>
                  <td className={`px-3 py-2 font-medium ${isColored ? "bg-[#F3F7FB]" : ""}`}>{c.email}</td>
                  <td className={`px-3 py-2 font-medium ${isColored ? "bg-[#F3F7FB]" : ""}`}>{c.phone}</td>
                  <td className={`px-3 py-2 ${isColored ? "bg-[#F3F7FB]" : ""}`}>{c.service}</td>
                  <td className={`px-3 py-2 ${isColored ? "bg-[#F3F7FB]" : ""}`}>{c.company}</td>
                  <td className={`px-3 py-2 max-w-[150px] truncate ${isColored ? "bg-[#F3F7FB]" : ""}`}>{c.address}</td>
                  <td className={`px-3 py-2 whitespace-nowrap ${isColored ? "bg-[#F3F7FB]" : ""}`}>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold ${statusStyle(c.status)}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className={`px-3 py-2 whitespace-nowrap ${isColored ? "bg-[#F3F7FB] rounded-r-lg" : ""}`}>
                    {c.status === "Pending" && (
                      <button onClick={e => { e.stopPropagation(); setSelectedContractor(c); }} className="text-gray-400 hover:text-black text-lg font-bold bg-transparent border-none cursor-pointer">•••</button>
                    )}
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