import TopBar from "../components/TopBar";
import { useState } from "react";
import ContractorDetail from "./ContractorDetail";

const initialContractors = [
  { id: 1,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 2,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 3,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 4,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 5,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 6,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 7,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 8,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 9,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 10, name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 11, name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" },
];

const columns = ["Name", "Email", "Phone number", "Service", "Company", "Address", "Status"];

export default function ContractorManagement() {
  const [contractors, setContractors] = useState(initialContractors);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedContractor, setSelectedContractor] = useState(null);

  if (selectedContractor) {
    return <ContractorDetail contractor={selectedContractor} onBack={() => setSelectedContractor(null)} />;
  }

  const filtered = contractors.filter(c => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || c.status === filter;
    return matchSearch && matchFilter;
  });

  const toggleStatus = (id) => {
    setContractors(prev =>
      prev.map(c =>
        c.id === id ? { ...c, status: c.status === "Block" ? "Unblock" : "Block" } : c
      )
    );
  };

  return (
    <div className="p-8">
      <TopBar />

      <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
        <h2 className="text-xl font-semibold text-slate-800">Contractor Management</h2>
        <div className="flex items-center gap-3">
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
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-slate-700 bg-white focus:outline-none w-28"
          >
            <option>All</option>
            <option>Block</option>
            <option>Unblock</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              {columns.map(col => (
                <th key={col} className="text-left px-4 py-3 text-xs font-semibold text-slate-600 whitespace-nowrap">
                  {col} {col !== "Status" && <span className="text-gray-300">↕</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((contractor, index) => (
              <tr
                key={contractor.id}
                onClick={() => setSelectedContractor(contractor)}
                className={`border-b border-gray-50 hover:bg-blue-50/30 transition-colors cursor-pointer ${index % 2 === 0 ? "bg-white" : "bg-blue-50/20"}`}
              >
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <img
                      src={`https://picsum.photos/seed/contractor${contractor.id}/32/32`}
                      alt="avatar"
                      className="w-7 h-7 rounded-full object-cover flex-shrink-0"
                    />
                    <span className="text-slate-700 font-medium">{contractor.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{contractor.email}</td>
                <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{contractor.phone}</td>
                <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{contractor.service}</td>
                <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{contractor.company}</td>
                <td className="px-4 py-3 text-slate-600 max-w-[180px] truncate">{contractor.address}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <button
                    onClick={e => { e.stopPropagation(); toggleStatus(contractor.id); }}
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-white border-none cursor-pointer transition-colors ${
                      contractor.status === "Block" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
                    }`}
                  >
                    {contractor.status}
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-10 text-gray-400 text-sm">
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