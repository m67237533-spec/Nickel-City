import TopBar from "../components/TopBar";
import { useState } from "react";
import UserDetail from "./UserDetail";

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

  if (selectedUser) {
    return <UserDetail user={selectedUser} onBack={() => setSelectedUser(null)} />;
  }

  const toggleStatus = (id) => {
    setUsers(prev =>
      prev.map(u =>
        u.id === id ? { ...u, status: u.status === "Block" ? "Unblock" : "Block" } : u
      )
    );
  };

  return (
    <div className="p-6">
      <TopBar />

      {/* Header */}
      <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
        <h2 className="text-xl font-semibold text-slate-800">User Management</h2>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white w-52">
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

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full table-fixed text-xs">
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
            <tr className="border-b border-gray-100 bg-gray-50/50">
              {columns.map(col => (
                <th key={col} className="text-left px-3 py-3 text-xs font-semibold text-slate-600">
                  {col} {col !== "Status" && <span className="text-gray-300">↕</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((user, index) => (
              <tr
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className={`border-b border-gray-50 hover:bg-blue-50/30 transition-colors cursor-pointer ${index % 2 === 0 ? "bg-white" : "bg-gray-50/30"}`}
              >
                {/* Name */}
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs flex-shrink-0">
                      👤
                    </div>
                    <span className="text-slate-700 font-medium truncate">{user.name}</span>
                  </div>
                </td>
                <td className="px-3 py-3 text-slate-600 truncate">{user.email}</td>
                <td className="px-3 py-3 text-slate-600 truncate">{user.phone}</td>
                <td className="px-3 py-3 text-slate-600 truncate">{user.country}</td>
                <td className="px-3 py-3 text-slate-600 truncate">{user.state}</td>
                <td className="px-3 py-3 text-slate-600 truncate">{user.city}</td>
                <td className="px-3 py-3 text-slate-600 truncate">{user.address}</td>

                {/* Status Toggle Button */}
                <td className="px-3 py-3">
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleStatus(user.id); }}
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-white border-none cursor-pointer transition-colors ${
                      user.status === "Block" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
                    }`}
                  >
                    {user.status}
                  </button>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center py-10 text-gray-400 text-sm">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}