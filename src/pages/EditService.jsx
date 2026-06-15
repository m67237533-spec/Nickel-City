import React, { useState } from "react";

export default function EditService({ service, onBack }) {
  const [serviceName, setServiceName] = useState(service?.title || "Lawn Mowing");
  const [commission, setCommission] = useState(service?.commission || "20");
  const [stateBlocks, setStateBlocks] = useState([
    {
      id: 1,
      state: "California",
      cities: ["San Diego", "San Jose", "Los Angeles", "San Francisco"],
      ranges: [
        { area: "100-500 sq ft", price: "100" },
        { area: "500-1000 sq ft", price: "200" },
      ],
    },
    {
      id: 2,
      state: "Alabama",
      cities: ["Huntsville", "Birmingham", "Montgomery"],
      ranges: [{ area: "", price: "" }],
    },
  ]);

  return (
    <div className="p-8 min-h-screen">
      
      {/* Header Section */}
      <div className="mb-8">
        <button onClick={onBack} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center mb-4">←</button>
        
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-800">Edit {serviceName}</h2>
          <button className="bg-[#1866B4] text-white px-8 py-3 rounded-xl font-bold text-[15px] shadow-[0_4px_12px_rgba(24,102,180,0.3)] hover:shadow-[0_6px_16px_rgba(24,102,180,0.4)] transition-shadow">
            Update Service
          </button>
        </div>
      </div>

      {/* Form Container */}
      <div className="p-8">
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">Service Name</label>
            <input className="w-full p-3 border border-gray-200 rounded-xl" value={serviceName} onChange={(e) => setServiceName(e.target.value)} />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">Service Commission</label>
            <div className="flex gap-2">
              <input className="w-20 p-3 border border-gray-200 rounded-xl" value={commission} onChange={(e) => setCommission(e.target.value)} />
              <span className="self-center font-bold text-slate-600">Percent</span>
            </div>
          </div>
        </div>

        {/* Dynamic Blocks */}
        {stateBlocks.map((block) => (
          <div key={block.id} className="mb-10 pb-6">
            <div className="grid grid-cols-4 gap-6 items-start">
              {/* State */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">State</label>
                <select className="w-full p-3 border border-gray-200 rounded-xl mb-2">
                   <option>{block.state}</option>
                </select>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#1866B4] text-white text-xs px-3 py-1 rounded-full">{block.state} ×</span>
                </div>
              </div>
              
              {/* City */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">City</label>
                <select className="w-full p-3 border border-gray-200 rounded-xl mb-2">
                  <option>Select city</option>
                </select>
                <div className="flex flex-wrap gap-2">
                  {block.cities.map(city => (
                    <span key={city} className="bg-[#1866B4] text-white text-xs px-3 py-1 rounded-full">{city} ×</span>
                  ))}
                </div>
              </div>
              
              {/* Area Range */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-700">Area Range (sq ft)</label>
                {block.ranges.map((r, i) => <input key={i} className="w-full p-3 border border-gray-200 rounded-xl" value={r.area} />)}
              </div>
              
              {/* Price */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-700">Price</label>
                {block.ranges.map((r, i) => (
                    <div key={i} className="flex gap-2">
                        <input className="w-full p-3 border border-gray-200 rounded-xl" value={r.price} />
                        <button className="bg-black text-white rounded-full w-10 h-10 flex-shrink-0">✕</button>
                    </div>
                ))}
              </div>
            </div>
            
            {/* ADD RANGE BUTTON SHIFTED TO RIGHT */}
            <div className="flex justify-end mt-4">
               <button className="text-[#1866B4] font-bold text-sm">+ Add Range</button>
            </div>
          </div>
        ))}

        <button className="bg-[#1866B4] text-white px-8 py-3 rounded-xl font-bold">Add more</button>
      </div>
    </div>
  );
}