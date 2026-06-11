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
    <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">User Management</h2>
        <div className="flex gap-3">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-[300px] border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-400 transition-all shadow-sm" 
          />
          <select className="w-[120px] border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none bg-white text-slate-600 shadow-sm cursor-pointer hover:border-slate-300">
            <option>All</option>
            <option>Block</option>
            <option>Unblock</option>
          </select>
        </div>
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-slate-800 text-[11px] font-bold uppercase tracking-wider border-b border-slate-100">
              <th className="px-6 py-4">Name ▾</th>
              <th className="px-4 py-4">Email ▾</th>
              <th className="px-4 py-4">Phone number ▾</th>
              <th className="px-4 py-4">Country ▾</th>
              <th className="px-4 py-4">State ▾</th>
              <th className="px-4 py-4">City ▾</th>
              <th className="px-4 py-4">Address ▾</th>
              <th className="px-4 py-4">Status ▾</th>
            </tr>
          </thead>
          
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b border-slate-100 odd:bg-slate-50 hover:bg-slate-100 transition-colors">
                <td className="px-6 py-4 flex items-center gap-3 text-sm text-slate-900 font-bold">
                  <img 
                    src="/images/face.1.jpg" 
                    alt="User" 
                    className="w-8 h-8 rounded-full object-cover border border-slate-200"
                  />
                  {u.name}
                </td>
                <td className="px-4 py-4 text-sm text-slate-900 font-medium">{u.email}</td>
                <td className="px-4 py-4 text-sm text-slate-600">{u.phone}</td>
                <td className="px-4 py-4 text-sm text-slate-600">{u.country}</td>
                <td className="px-4 py-4 text-sm text-slate-600">{u.state}</td>
                <td className="px-4 py-4 text-sm text-slate-600">{u.city}</td>
                <td className="px-4 py-4 text-sm text-slate-600 truncate max-w-[150px]">{u.address}</td>
                <td className="px-4 py-4">
                  <button className={`px-4 py-1.5 rounded-full text-white text-[10px] font-bold ${u.status === 'Unblock' ? 'bg-red-500' : 'bg-green-500'}`}>
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