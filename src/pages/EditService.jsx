import React, { useState } from "react";

export default function EditService({ service, onBack }) {
  const [serviceName, setServiceName] = useState(service?.title || "Lawn Mowing");
  const [commission, setCommission] = useState(service?.commission || "20");
  const [showSuccess, setShowSuccess] = useState(false);
  
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
    <div className=" min-h-screen ">
      {/* SUCCESS POPUP MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-[24px] p-10 w-[400px] flex flex-col items-center text-center shadow-2xl">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl text-green-500">✓</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Successfully!</h3>
            <p className="text-slate-500 mb-8 text-sm">Your service has been updated successfully.</p>
            <button 
              onClick={() => { setShowSuccess(false); onBack(); }}
              className="w-full bg-[#1866B4] text-white py-4 rounded-[12px] font-bold hover:bg-[#155a9e] transition"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="mb-">
        <button onClick={onBack} className="w-9 h-9 rounded-full border border-gray-200 flex items-center bg-[#d0d3d8] justify-center mb-4 hover:bg-gray-50">←</button>
        
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-800">Edit {serviceName}</h2>
          <button 
            onClick={() => setShowSuccess(true)}
            className="bg-[#1866B4] text-white px-8 py-3 rounded-xl font-bold text-[15px] shadow-[0_4px_12px_rgba(24,102,180,0.3)] hover:bg-[#155a9e] transition"
          >
            Update Service
          </button>
        </div>
      </div>

      {/* Form Container */}
      <div className="p  rounded-2xl shadow-sm">
        <div className="grid grid-cols-2 gap-8 mb-10">
          <div>
            <label className="block text-xs font-bold text-black mb-2">Service Name</label>
            <input className="w-full p-3 border border-gray-200 rounded-xl" value={serviceName} onChange={(e) => setServiceName(e.target.value)} />
          </div>
          <div>
            <label className="block text-xs font-bold text-black mb-2">Service Commission</label>
            <div className="flex gap-2">
              <input className="w-20 p-3 border border-gray-200 rounded-xl" value={commission} onChange={(e) => setCommission(e.target.value)} />
              <span className="self-center font-normal text-black">Percent</span>
            </div>
          </div>
        </div>

        {/* Dynamic Blocks */}
        {stateBlocks.map((block) => (
          <div key={block.id} className="mb-10 pb-6 border-b border-gray-50">
            <div className="grid grid-cols-4 gap-6 items-start">
              <div>
                <label className="block text-xs font-bold text-black mb-2">State</label>
                <select className="w-full p-3 border border-gray-200 rounded-xl mb-2"><option>{block.state}</option></select>
                <div className="flex flex-wrap gap-2"><span className="bg-[#1866B4] text-white text-xs px-3 py-1 rounded-full">{block.state} ×</span></div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-black mb-2">City</label>
                <select className="w-full p-3 border border-gray-200 rounded-xl mb-2"><option>Select city</option></select>
                <div className="flex flex-wrap gap-2">
                  {block.cities.map(city => (<span key={city} className="bg-[#1866B4] text-white text-xs px-3 py-1 rounded-full">{city} ×</span>))}
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="block text-xs font-bold text-black">Area Range (sq ft)</label>
                {block.ranges.map((r, i) => <input key={i} className="w-full p-3 border border-gray-200 rounded-xl" value={r.area} />)}
              </div>
              
              <div className="space-y-3">
                <label className="block text-xs font-bold text-black">Price</label>
                {block.ranges.map((r, i) => (
                    <div key={i} className="flex gap-2">
                        <input className="w-full p-3 border border-gray-200 rounded-xl" value={r.price} />
                        <button className="bg-slate-900 text-white rounded-full w-6 h-6 flex-shrink-0">✕</button>
                    </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end mt-4"><button className="text-[#1866B4] font-bold text-sm">+ Add Range</button></div>
          </div>
        ))}

        <button className="bg-[#1866B4] text-white px-8 py-3 rounded-xl font-bold">Add more</button>
      </div>
    </div>
  );
}