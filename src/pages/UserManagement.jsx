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
];

export default function UserManagement() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">User Management</h2>
        <div className="flex gap-3">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-[400px] border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-400 transition-all shadow-sm" 
          />
          <select className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none text-slate-600 shadow-sm cursor-pointer hover:border-slate-300">
            <option>All</option>
            <option>Block</option>
            <option>Unblock</option>
          </select>
        </div>
      </div>
      
      {/* Table */}
     {/* Table */}
<div className="overflow-x-auto">
  <table className="w-full text-left border-collapse">
    <thead>
      <tr className="text-slate-800 text-[10px] font-bold uppercase tracking-wider border-b border-slate-100">
        <th className="px-4 py-3">Name ▾</th>
        <th className="px-4 py-3">Email ▾</th>
        <th className="px-4 py-3">Phone number ▾</th>
        <th className="px-4 py-3">Country ▾</th>
        <th className="px-4 py-3">State ▾</th>
        <th className="px-4 py-3">City ▾</th>
        <th className="px-4 py-3">Address ▾</th>
        <th className="px-4 py-3">Status ▾</th>
      </tr>
    </thead>
    
    <tbody>
      {users.map((u) => (
        <tr key={u.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors text-xs"> {/* text-xs yahan add kiya hai */}
          <td className="px-4 py-3 flex items-center gap-2 text-slate-900 font-bold">
            <img 
              src="/images/face.1.jpg" 
              alt="User" 
              className="w-6 h-6 rounded-full object-cover border border-slate-200"
            />
            {u.name}
          </td>
          <td className="px-4 py-3 text-slate-900">{u.email}</td>
          <td className="px-4 py-3 text-slate-600">{u.phone}</td>
          <td className="px-4 py-3 text-slate-600">{u.country}</td>
          <td className="px-4 py-3 text-slate-600">{u.state}</td>
          <td className="px-4 py-3 text-slate-600">{u.city}</td>
          <td className="px-4 py-3 text-slate-600 max-w-[150px] truncate">{u.address}</td>
          <td className="px-4 py-3">
            <button className={`px-3 py-1 rounded-full text-white text-[9px] font-bold ${u.status === 'Unblock' ? 'bg-red-500' : 'bg-green-500'}`}>
              {u.status}
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  );
}