import TopBar from "../components/TopBar";
import { useState } from "react";
import ContractorDetail from "./ContractorDetail";

const initialContractors = [
  { id: 1,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 2,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 3,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 4,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 5,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 6,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Unblock" },
   { id: 7,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 8,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 9,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 10,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 11,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 12,  name: "John Doe", email: "john.doe@gmail.com", phone: "+0123456789", service: "Lawn Mowing", company: "Lawn Rangers", address: "53C, 14th street, Empire state, USA", status: "Unblock" }
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
    <div className="w-full min-h-screen  flex flex-col">
      <TopBar />
      <div className="  flex flex-col flex-1 w-full">
             <div className="flex justify-between items-center mb-2 pr-4">
        <h2 className="text-xl font-bold text-slate-800 mb-4 ">Contractor Management</h2>
        
        {/* Controls Container */}
        <div className="flex items-center gap-3">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-[500px] border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-blue-400 shadow-sm" 
          />
          <select className="border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none text-slate-600 shadow-sm cursor-pointer hover:border-slate-300">
            <option>All</option>
            <option>Block</option>
            <option>Unblock</option>
          </select>
        </div>
      </div>

        <div className="w-full overflow-x-auto text">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-slate-500 text-[10px] font-bold uppercase tracking-wider border-b border-slate-200">
                {columns.map(col => <th key={col} className="px-4 py-3">{col}</th>)}
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, index) => (
                <tr
                  key={c.id}
                  onClick={() => setSelectedContractor(c)}
                  // Hover effect hataya gaya hai
                  className={`text-[10px]  border-slate-100 cursor-pointer ${index % 2 === 0 ? 'bg-[#F3F7FB]' : 'bg-white'}`}
                >
                  <td className="px-4 py-3 flex items-center gap-2  text-slate-900">
                    <img src={`images/face.2.jpg`} alt="avatar" className="w-5 h-5 rounded-full object-cover" />
                    {c.name}
                  </td>
                  <td className="px-4 py-3 text-slate-600">{c.email}</td>
                  <td className="px-4 py-3 text-slate-600">{c.phone}</td>
                  <td className="px-4 py-3 text-slate-600">{c.service}</td>
                  <td className="px-4 py-3 text-slate-600">{c.company}</td>
                  <td className="px-4 py-3 text-slate-600 max-w-[150px] truncate">{c.address}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleStatus(c.id); }}
                      className={`px-3 py-1 rounded-full text-[9px] font-bold text-white ${c.status === 'Unblock' ? 'bg-red-500' : 'bg-green-500'}`}
                    >
                      {c.status}
                    </button>
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