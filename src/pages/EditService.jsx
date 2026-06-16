import React, { useState } from "react";

export default function EditService({ service, onBack }) {
  const [serviceName, setServiceName] = useState(service?.title || "Lawn Mowing");
  const [commission, setCommission] = useState(service?.commission || "20");
  const [showSuccess, setShowSuccess] = useState(false);

  const [stateBlocks] = useState([
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
    <div className="min-h-screen p-4 sm:p-6 ">

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-10 w-full max-w-sm text-center shadow-xl">

            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-green-500">✓</span>
            </div>

            <h3 className="text-xl font-bold mb-2">Successfully!</h3>
            <p className="text-sm text-gray-500 mb-6">
              Your service has been updated successfully.
            </p>

            <button
              onClick={() => { setShowSuccess(false); onBack(); }}
              className="w-full bg-[#1866B4] text-white py-3 rounded-xl font-bold"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">

        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center"
        >
          ←
        </button>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
          Edit {serviceName}
        </h2>

        <button
          onClick={() => setShowSuccess(true)}
          className="bg-[#1866B4] text-white px-5 sm:px-8 py-3 rounded-xl font-bold text-sm sm:text-base"
        >
          Update Service
        </button>

      </div>

      {/* FORM CARD */}
      <div className="  p-4 sm:p-6">

        {/* TOP FIELDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">

          <div>
            <label className="text-xs font-bold text-gray-700">Service Name</label>
            <input
              className="w-full mt-2 p-3 border border-gray-200 rounded-xl"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-xs font-bold text-gray-700">Commission</label>
            <div className="flex gap-2 mt-2 items-center">
              <input
                className="w-24 p-3 border border-gray-200 rounded-xl"
                value={commission}
                onChange={(e) => setCommission(e.target.value)}
              />
              <span className="text-sm text-gray-600">%</span>
            </div>
          </div>

        </div>

        {/* BLOCKS */}
        <div className="space-y-8">

          {stateBlocks.map((block) => (
            <div key={block.id} className="pb-6 border-b border-gray-100">

              {/* GRID RESPONSIVE */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                {/* STATE */}
                <div>
                  <label className="text-xs font-bold">State</label>
                  <select className="w-full mt-2 p-3 border rounded-xl">
                    <option>{block.state}</option>
                  </select>
                </div>

                {/* CITY */}
                <div>
                  <label className="text-xs font-bold">City</label>
                  <select className="w-full mt-2 p-3 border rounded-xl">
                    <option>Select city</option>
                  </select>
                </div>

                {/* AREA */}
                <div className="space-y-2">
                  <label className="text-xs font-bold">Area Range</label>
                  {block.ranges.map((r, i) => (
                    <input
                      key={i}
                      className="w-full p-3 border rounded-xl"
                      value={r.area}
                      readOnly
                    />
                  ))}
                </div>

                {/* PRICE */}
                <div className="space-y-2">
                  <label className="text-xs font-bold">Price</label>
                  {block.ranges.map((r, i) => (
                    <div key={i} className="flex gap-2">
                      <input
                        className="w-full p-3 border rounded-xl"
                        value={r.price}
                        readOnly
                      />
                      <button className="w-8 h-8 rounded-full bg-gray-900 text-white">
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

              </div>

              <div className="flex justify-end mt-4">
                <button className="text-[#1866B4] text-sm font-bold">
                  + Add Range
                </button>
              </div>

            </div>
          ))}

        </div>

        {/* FOOT BUTTON */}
        <div className="mt-6">
          <button className="bg-[#1866B4] text-white px-6 py-3 rounded-xl font-bold">
            Add more
          </button>
        </div>

      </div>
    </div>
  );
}