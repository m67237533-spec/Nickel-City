import TopBar from "../components/TopBar";
import { useState } from "react";

// SCREENSHOT KE STRUCTURE KE MUTABIK EXACT IMPORTS
import UserDetailBlock from "./UserDetailBlock";
import UserDetailUnblock from "./UserDetailUnblock";

const initialUsers = [
  { id: 1,  name: "James Anderson", email: "james.anderson@gmail.com", phone: "+01234456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 2,  name: "James Anderson", email: "james.anderson@gmail.com", phone: "+01234456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 3,  name: "James Anderson", email: "james.anderson@gmail.com", phone: "+01234456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 4,  name: "James Anderson", email: "james.anderson@gmail.com", phone: "+01234456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 5,  name: "James Anderson", email: "james.anderson@gmail.com", phone: "+01234456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 6,  name: "James Anderson", email: "james.anderson@gmail.com", phone: "+01234456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Unblock" },
  { id: 7,  name: "James Anderson", email: "james.anderson@gmail.com", phone: "+01234456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 8,  name: "James Anderson", email: "james.anderson@gmail.com", phone: "+01234456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 9,  name: "James Anderson", email: "james.anderson@gmail.com", phone: "+01234456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 10, name: "James Anderson", email: "james.anderson@gmail.com", phone: "+01234456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 11, name: "James Anderson", email: "james.anderson@gmail.com", phone: "+01234456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
];

const columns = ["Name", "Email", "Phone number", "Country", "State", "City", "Address", "Status"];

export default function UserManagement() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedUser, setSelectedUser] = useState(null);

  const filtered = users.filter(u => {
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || u.status === filter;
    return matchSearch && matchFilter;
  });

  const toggleStatus = (id) => {
    setUsers(prev =>
      prev.map(u =>
        u.id === id ? { ...u, status: u.status === "Block" ? "Unblock" : "Block" } : u
      )
    );
    
    // Selected user view ko live data sync rakhne ke liye
    setSelectedUser(prev => 
      prev && prev.id === id ? { ...prev, status: prev.status === "Block" ? "Unblock" : "Block" } : prev
    );
  };

  // DETAILED SCREEN SWITCH LOGIC
  if (selectedUser) {
    if (selectedUser.status === "Block") {
      return (
        <UserDetailBlock 
          user={selectedUser} 
          onBack={() => setSelectedUser(null)} 
          onBlockClick={() => toggleStatus(selectedUser.id)} 
        />
      );
    } else {
      return (
        <UserDetailUnblock 
          user={selectedUser} 
          onBack={() => setSelectedUser(null)} 
          onUnblockClick={() => toggleStatus(selectedUser.id)} 
        />
      );
    }
  }

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] flex flex-col box-border">
      {/* ─── TOP HEADER LAYER ─── */}
      <TopBar />

      {/* ─── MAIN CONTENT BLOCK (WITHOUT SIDEBAR) ─── */}
      <div className="px-10 py-8 flex flex-col flex-1 w-full box-border">
        
        {/* ROW: HEADING & INTERACTION BAR */}
        <div className="flex items-center justify-between mt-4 mb-6 flex-wrap gap-4 w-full">
          <h2 className="text-[22px] font-bold text-[#1e293b] m-0">User Management</h2>
          
          <div className="flex items-center gap-4 flex-1 justify-end max-w-4xl">
            
            {/* SEARCH INPUT */}
            <div className="flex items-center gap-3 border border-slate-100 rounded-xl px-4 py-3 bg-white shadow-sm flex-1 max-w-xl h-[46px] box-border">
              <span className="text-gray-400 text-base flex items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </span>
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="text-sm outline-none border-none w-full text-slate-700 placeholder-slate-400 bg-transparent"
              />
            </div>

            {/* STATUS FILTER DROPDOWN */}
            <div className="relative box-border">
              <select
                value={filter}
                onChange={e => setFilter(e.target.value)}
                className="border border-slate-100 rounded-xl pl-4 pr-10 py-3 text-sm text-slate-600 bg-white shadow-sm focus:outline-none w-32 h-[46px] appearance-none cursor-pointer font-medium"
              >
                <option>All</option>
                <option>Block</option>
                <option>Unblock</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                ▼
              </span>
            </div>

          </div>
        </div>

        {/* ─── DATA TABLE BOX ─── */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden w-full">
          <table className="w-full table-fixed text-xs border-collapse">
            <colgroup>
              <col style={{ width: "14%" }} />
              <col style={{ width: "17%" }} />
              <col style={{ width: "11%" }} />
              <col style={{ width: "10%" }} />
              <col style={{ width: "9%" }} />
              <col style={{ width: "9%" }} />
              <col style={{ width: "18%" }} />
              <col style={{ width: "9%" }} />
            </colgroup>
            <thead>
              <tr className="border-b border-slate-100 bg-[#f8fafc]">
                {columns.map(col => (
                  <th key={col} className="text-left px-4 py-3.5 text-xs font-semibold text-slate-600 select-none">
                    <div className="flex items-center gap-1.5">
                      {col} 
                      {col !== "Status" && (
                        <span className="text-slate-300 font-normal text-[10px]">↕</span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((user, index) => (
                <tr
                  key={user.id}
                  onClick={() => setSelectedUser(user)}
                  className={`border-b border-slate-50 hover:bg-blue-50/20 transition-colors cursor-pointer ${
                    index % 2 === 0 ? "bg-white" : "bg-slate-50/20"
                  }`}
                >
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs flex-shrink-0 text-slate-500">
                        👤
                      </div>
                      <span className="text-slate-700 font-semibold truncate">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-slate-600 truncate">{user.email}</td>
                  <td className="px-4 py-3.5 text-slate-600 truncate">{user.phone}</td>
                  <td className="px-4 py-3.5 text-slate-600 truncate">{user.country}</td>
                  <td className="px-4 py-3.5 text-slate-600 truncate">{user.state}</td>
                  <td className="px-4 py-3.5 text-slate-600 truncate">{user.city}</td>
                  <td className="px-4 py-3.5 text-slate-600 truncate">{user.address}</td>

                  {/* Status column badge */}
                  <td className="px-4 py-3.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleStatus(user.id);
                      }}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold text-white border-none cursor-pointer transition-all duration-200 shadow-sm ${
                        user.status === "Block"
                          ? "bg-emerald-500 hover:bg-emerald-600"
                          : "bg-rose-500 hover:bg-rose-600"
                      }`}
                    >
                      {user.status}
                    </button>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center py-12 text-slate-400 text-sm font-medium">
                    No users found matching the filter
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}