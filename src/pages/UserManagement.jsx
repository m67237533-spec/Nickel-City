import React, { useState } from "react";

const users = [
  { id: 1, name: "James Anderson", email: "james.anderson@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 2, name: "John Smith", email: "john@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street", status: "Unblock" },
  { id: 3, name: "James Anderson", email: "james.anderson@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 4, name: "James Anderson", email: "james.anderson@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 5, name: "James Anderson", email: "james.anderson@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 6, name: "James Anderson", email: "james.anderson@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 7, name: "John Smith", email: "john@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street", status: "Unblock" },
  { id: 8, name: "David Miller", email: "david@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street", status: "Block" },
  { id: 9, name: "Chris Evans", email: "chris@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street", status: "Unblock" },
  { id: 10, name: "James Anderson", email: "james.anderson@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 11, name: "Chris Evans", email: "chris@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street", status: "Unblock" },
  { id: 12, name: "James Anderson", email: "james.anderson@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 13, name: "James Anderson", email: "james.anderson@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 14, name: "Chris Evans", email: "chris@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street", status: "Unblock" },


];

export default function UserManagement({ onUserClick }) {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  // 🔥 FILTER + SEARCH LOGIC
  const filteredUsers = users.filter((u) => {
    const matchFilter =
      filter === "All" ? true : u.status === filter;

    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.phone.includes(search);

    return matchFilter && matchSearch;
  });

  return (
    <div className="w-full pt-0 pl-0 pr-8 mt-[-20px]">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
        <h2 className="text-xl font-bold text-slate-800 m-0">
          User Management
        </h2>

        <div className="flex items-center gap-3">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[500px] border rounded-xl px-4 py-2.5 text-sm outline-none shadow-md"
          />

          {/* FILTER */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded-xl px-4 py-2.5 text-sm outline-none text-slate-600 shadow-md cursor-pointer hover:border-slate-300"
          >
            <option value="All">All</option>
            <option value="Block">Block</option>
            <option value="Unblock">Unblock</option>
          </select>
        </div>
      </div>

      {/* TABLE */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-[10px] border-separate border-spacing-y-2 text-left">
          <thead>
            <tr className="uppercase tracking-wider">
              {["Name", "Email", "Phone number", "Country", "State", "City", "Address", "Status"].map((col) => (
                <th
                  key={col}
                  className="text-left px-3 py-2 font-bold whitespace-nowrap text-[11px] text-black"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="text-[10px] text-black">
            {filteredUsers.map((u, index) => {
              const isColored = index % 2 === 0;

              return (
                <tr
                  key={u.id}
                  onClick={() => onUserClick(u)}
                  className="cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  {/* NAME */}
                  <td className={`px-3 py-2 whitespace-nowrap ${isColored ? "bg-[#F3F7FB] text-gray-500 rounded-l-lg" : ""}`}>
                    <div className="flex items-center gap-2">
                      <img
                        src={"/images/face.1.jpg"}
                        alt="avatar"
                        className="w-5 h-5 rounded-full object-cover"
                      />
                      <span className="font-bold text-gray-500">{u.name}</span>
                    </div>
                  </td>

                  <td className={`px-3 py-2 text-gray-500 ${isColored ? "bg-[#F3F7FB]" : ""}`}>{u.email}</td>
                  <td className={`px-3 py-2 text-gray-500 ${isColored ? "bg-[#F3F7FB]" : ""}`}>{u.phone}</td>
                  <td className={`px-3 py-2 text-gray-500 ${isColored ? "bg-[#F3F7FB]" : ""}`}>{u.country}</td>
                  <td className={`px-3 py-2 text-gray-500 ${isColored ? "bg-[#F3F7FB]" : ""}`}>{u.state}</td>
                  <td className={`px-3 py-2 text-gray-500 ${isColored ? "bg-[#F3F7FB]" : ""}`}>{u.city}</td>
                  <td className={`px-3 py-2 max-w-[150px] truncate text-gray-500 ${isColored ? "bg-[#F3F7FB]" : ""}`}>
                    {u.address}
                  </td>

                  {/* STATUS */}
                  <td className={`px-3 py-2 whitespace-nowrap ${isColored ? "bg-[#F3F7FB] rounded-r-lg" : ""}`}>
                    <span
                      className={`px-3 py-1 rounded-full text-[9px] font-bold text-white ${u.status === "Unblock" ? "bg-red-500" : "bg-green-500"
                        }`}
                    >
                      {u.status}
                    </span>
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