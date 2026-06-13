import React from 'react';

const users = [
  { id: 1, name: "James Anderson", email: "james.anderson@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 2, name: "James Anderson", email: "james.anderson@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 3, name: "James Anderson", email: "james.anderson@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 4, name: "James Anderson", email: "james.anderson@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 5, name: "James Anderson", email: "james.anderson@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 6, name: "James Anderson", email: "james.anderson@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Unblock" },
  { id: 7, name: "James Anderson", email: "james.anderson@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 8, name: "James Anderson", email: "james.anderson@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
   { id: 7, name: "James Anderson", email: "james.anderson@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
  { id: 8, name: "James Anderson", email: "james.anderson@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },
    { id: 8, name: "James Anderson", email: "james.anderson@gmail.com", phone: "+0123456789", country: "United State", state: "California", city: "Los Angeles", address: "53C, 14th street, Empire state, USA", status: "Block" },

];

export default function UserManagement() {
  return (
    // mt-[-20px] add kiya hai heading ko upar karne ke liye
    <div className="w-full pt-0 pl-0 pr-8 mt-[-20px]"> 
      
      <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
        <h2 className="text-xl font-bold text-slate-800 m-0">User Management</h2>
        <div className="flex items-center gap-3">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-[500px] border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-400 shadow-sm" 
          />
          <select className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none text-slate-600 shadow-sm cursor-pointer hover:border-slate-300">
            <option>All</option>
            <option>Block</option>
            <option>Unblock</option>
          </select>
        </div>
      </div>
      
      <div className="w-full overflow-x-auto">
        <table className="w-full text-[10px] border-separate border-spacing-y-2 text-left">
          <thead>
            <tr className="text-black uppercase tracking-wider">
              {["Name", "Email", "Phone number", "Country", "State", "City", "Address", "Status"].map(col => (
                <th key={col} className="text-left px-3 py-2 font-bold whitespace-nowrap text-[11px] text-slate-500">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[10px] text-black">
            {users.map((u, index) => {
              const isColored = index % 2 === 0;
              return (
                <tr key={u.id} className="cursor-pointer transition-colors">
                  <td className={`px-3 py-2 whitespace-nowrap ${isColored ? "bg-[#F3F7FB] rounded-l-lg" : ""}`}>
                    <div className="flex items-center gap-2">
                      <img src={"/images/face.1.jpg"} alt="avatar" className="w-5 h-5 rounded-full object-cover" />
                      <span className="font-bold text-black">{u.name}</span>
                    </div>
                  </td>
                  <td className={`px-3 py-2 font-medium ${isColored ? "bg-[#F3F7FB]" : ""}`}>{u.email}</td>
                  <td className={`px-3 py-2 font-medium ${isColored ? "bg-[#F3F7FB]" : ""}`}>{u.phone}</td>
                  <td className={`px-3 py-2 ${isColored ? "bg-[#F3F7FB]" : ""}`}>{u.country}</td>
                  <td className={`px-3 py-2 ${isColored ? "bg-[#F3F7FB]" : ""}`}>{u.state}</td>
                  <td className={`px-3 py-2 ${isColored ? "bg-[#F3F7FB]" : ""}`}>{u.city}</td>
                  <td className={`px-3 py-2 max-w-[150px] truncate ${isColored ? "bg-[#F3F7FB]" : ""}`}>{u.address}</td>
                  <td className={`px-3 py-2 whitespace-nowrap ${isColored ? "bg-[#F3F7FB] rounded-r-lg" : ""}`}>
                    <span className={`px-3 py-1 rounded-full text-[9px] font-bold text-white ${u.status === 'Unblock' ? 'bg-red-500' : 'bg-green-500'}`}>
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