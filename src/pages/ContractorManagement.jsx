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
  { id: 9, name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" }
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
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || c.status === filter;
    return matchSearch && matchFilter;
  });

  const toggleStatus = (id) => {
    setContractors(prev => prev.map(c => c.id === id ? { ...c, status: c.status === "Block" ? "Unblock" : "Block" } : c));
  };

  return (
    <div className="w-full min-h-screen flex flex-col pr-8">
      <TopBar />
      {/* Yahan mt-[-20px] se heading ko upar shift kiya gaya hai */}
      <div className="flex flex-col flex-1 w-full mt-[-40px]">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
          <h2 className="text-xl font-bold text-slate-800 m-0">Contractor Management</h2>
          <div className="flex items-center gap-3">
            <input 
              type="text" 
              placeholder="Search..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-[500px] border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-400 shadow-sm" 
            />
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none text-slate-600 shadow-sm cursor-pointer hover:border-slate-300"
            >
              <option value="All">All</option>
              <option value="Block">Block</option>
              <option value="Unblock">Unblock</option>
            </select>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-[10px] border-separate border-spacing-y-2 text-left">
            <thead>
              <tr className="text-black uppercase tracking-wider">
                {columns.map(col => (
                  <th key={col} className="px-3 py-2 font-bold whitespace-nowrap text-[11px] text-slate-500">
                    {col}
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
                    <td className={`px-3 py-2 whitespace-nowrap ${isColored ? "bg-[#F3F7FB] rounded-r-lg" : ""}`}>
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleStatus(c.id); }}
                        className={`px-3 py-1 rounded-full text-[9px] font-bold text-white ${c.status === 'Unblock' ? 'bg-red-500' : 'bg-green-500'}`}
                      >
                        {c.status}
                      </button>
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