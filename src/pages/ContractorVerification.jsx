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
        onCancel={() => {
          setSelectedContractor(null);
          setActiveTab("Cancelled");
        }}
        onApprove={() => {
          setSelectedContractor(null);
          setActiveTab("Approved");
        }}
      />
    );
  }

  const filtered = initialContractors.filter(c => {
    const matchTab = activeTab === "All" || c.status === activeTab;
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div className="p-8">
      <TopBar />

      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <h2 className="text-xl font-semibold text-slate-800">Contractor Verification</h2>
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white w-56">
          <span className="text-gray-400 text-sm">🔍</span>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="text-sm outline-none border-none w-full text-slate-700 placeholder-gray-400"
          />
        </div>
      </div>

      <div className="flex gap-2 mb-5">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border-none cursor-pointer transition-all ${
              activeTab === tab ? "text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
            style={activeTab === tab ? { background: "#1866B4" } : {}}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              {columns.map(col => (
                <th key={col} className="text-left px-4 py-3 text-xs font-semibold text-slate-600 whitespace-nowrap">
                  {col} {col !== "Action" && <span className="text-gray-300">↕</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, index) => (
              <tr
                key={c.id}
                onClick={() => setSelectedContractor(c)}
                className={`border-b border-gray-50 hover:bg-blue-50/30 transition-colors cursor-pointer ${index % 2 === 0 ? "bg-white" : "bg-blue-50/20"}`}
              >
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <img
                      src={`https://picsum.photos/seed/cv${c.id}/32/32`}
                      alt="avatar"
                      className="w-7 h-7 rounded-full object-cover flex-shrink-0"
                    />
                    <span className="text-slate-700 font-medium">{c.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{c.email}</td>
                <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{c.phone}</td>
                <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{c.service}</td>
                <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{c.company}</td>
                <td className="px-4 py-3 text-slate-600 max-w-[180px] truncate">{c.address}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyle(c.status)}`}>
                    {c.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {c.status === "Pending" && (
                    <button
                      onClick={e => { e.stopPropagation(); setSelectedContractor(c); }}
                      className="text-gray-400 hover:text-slate-600 text-lg font-bold bg-transparent border-none cursor-pointer"
                    >
                      •••
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center py-10 text-gray-400 text-sm">
                  No contractors found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}