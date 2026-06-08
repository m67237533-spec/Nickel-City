import TopBar from "../components/TopBar";
import { useState } from "react";

const stateOptions = ["California", "Alabama", "Texas", "New York", "Florida"];
const cityOptions = {
  California: ["San Diego", "San Jose", "Los Angeles", "San Francisco"],
  Alabama: ["Huntsville", "Birmingham", "Montgomery"],
  Texas: ["Houston", "Dallas", "Austin"],
  "New York": ["New York City", "Buffalo", "Albany"],
  Florida: ["Miami", "Orlando", "Tampa"],
};

function RangeRow({ range, index, onChange, onRemove }) {
  const cities = cityOptions[range.state] || [];

  const toggleCity = (city) => {
    const already = range.cities.includes(city);
    onChange(index, {
      ...range,
      cities: already ? range.cities.filter(c => c !== city) : [...range.cities, city],
    });
  };

  return (
    <div className="mb-6">
      <div className="flex gap-4 items-start mb-3 flex-wrap">
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500 font-medium">State</label>
          <select
            value={range.state}
            onChange={e => onChange(index, { ...range, state: e.target.value, cities: [] })}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-slate-700 w-36 focus:outline-none focus:border-blue-400"
          >
            <option value="">Select state</option>
            {stateOptions.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500 font-medium">City</label>
          <select
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-slate-700 w-36 focus:outline-none focus:border-blue-400"
            onChange={e => { if (e.target.value) toggleCity(e.target.value); }}
            value=""
          >
            <option value="">Select city</option>
            {cities.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500 font-medium">Area Range (sq ft)</label>
          <input
            type="text"
            value={range.areaRange}
            onChange={e => onChange(index, { ...range, areaRange: e.target.value })}
            placeholder="100-500 sq ft"
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-36 focus:outline-none focus:border-blue-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-500 font-medium">Price</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={range.price}
              onChange={e => onChange(index, { ...range, price: e.target.value })}
              placeholder="$100"
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-24 focus:outline-none focus:border-blue-400"
            />
            <button
              onClick={() => onRemove(index)}
              className="w-6 h-6 rounded-full bg-gray-800 text-white border-none cursor-pointer flex items-center justify-center text-xs font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      {range.cities.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {range.cities.map(city => (
            <span
              key={city}
              className="px-3 py-1 rounded-full text-xs text-white font-medium flex items-center gap-1"
              style={{ background: "#1866B4" }}
            >
              {city}
              <button
                onClick={() => toggleCity(city)}
                className="bg-transparent border-none text-white cursor-pointer text-xs ml-1"
              >✕</button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── ADD MORE SERVICE PAGE ────────────────────────────────────────────────────
function AddMoreService({ onBack }) {
  const [addMoreSuccess, setAddMoreSuccess] = useState(false);
  const [ranges, setRanges] = useState([
    { state: "", cities: [], thicknessRange: "", price: "" },
    { state: "", cities: [], thicknessRange: "", price: "" },
  ]);

  const thicknessOptions = [
    "Less than 3 inches",
    "Less than 6 inches",
    "Less than 9 inches",
    "More than 9 inches",
  ];

  const handleRangeChange = (index, updated) => {
    setRanges(prev => prev.map((r, i) => i === index ? updated : r));
  };

  const handleRemoveRange = (index) => {
    setRanges(prev => prev.filter((_, i) => i !== index));
  };

  const toggleCity = (index, city) => {
    const range = ranges[index];
    const already = range.cities.includes(city);
    handleRangeChange(index, {
      ...range,
      cities: already ? range.cities.filter(c => c !== city) : [...range.cities, city],
    });
  };

  return (
    <div className="p-8">
      <TopBar />

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center cursor-pointer text-slate-600 hover:bg-gray-50"
          >
            ←
          </button>
          <h2 className="text-xl font-semibold text-slate-800">Edit Snow Removal</h2>
        </div>

        <button
          onClick={() => setAddMoreSuccess(true)}
          className="px-6 py-2.5 rounded-xl text-white text-sm font-semibold border-none cursor-pointer"
          style={{ background: "#1866B4" }}
        >
          Update Service
        </button>
      </div>

      {/* Success Popup */}
      {addMoreSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50"
          style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center shadow-2xl w-80">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Successfully!</h3>
            <p className="text-sm text-gray-500 text-center mb-6">
              Your service has been updated successfully.
            </p>
            <button
              onClick={() => { setAddMoreSuccess(false); onBack(); }}
              className="px-10 py-2.5 rounded-xl text-white text-sm font-semibold border-none cursor-pointer w-full"
              style={{ background: "#1866B4" }}
            >
              Done
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex gap-6 mb-5 flex-wrap">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700">Service Name</label>
            <input
              type="text"
              placeholder="Snow Removal"
              className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm w-64 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-sm font-medium text-slate-700">Cancellation Fee</label>
            <input
              type="text"
              defaultValue="$ 10"
              className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Commission</label>
          <div className="flex items-center gap-3">
            <input
              type="number"
              defaultValue={20}
              className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm w-20 focus:outline-none focus:border-blue-400"
            />
            <span className="text-sm text-gray-500">Percent</span>
          </div>
        </div>

        <div className="border-t border-gray-100 mb-6" />

        {ranges.map((range, index) => (
          <div key={index} className="mb-6">
            <div className="flex gap-4 items-start mb-3 flex-wrap">
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 font-medium">State</label>
                <select
                  value={range.state}
                  onChange={e => handleRangeChange(index, { ...range, state: e.target.value, cities: [] })}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-slate-700 w-36 focus:outline-none focus:border-blue-400"
                >
                  <option value="">Select state</option>
                  {stateOptions.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 font-medium">City</label>
                <select
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-slate-700 w-36 focus:outline-none focus:border-blue-400"
                  onChange={e => { if (e.target.value) toggleCity(index, e.target.value); }}
                  value=""
                >
                  <option value="">Select city</option>
                  {(cityOptions[range.state] || []).map(c => <option key={c}>{c}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 font-medium">Thickness Range</label>
                <select
                  value={range.thicknessRange}
                  onChange={e => handleRangeChange(index, { ...range, thicknessRange: e.target.value })}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-slate-700 w-44 focus:outline-none focus:border-blue-400"
                >
                  <option value="">Less than 3 inches</option>
                  {thicknessOptions.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 font-medium">Price</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={range.price}
                    onChange={e => handleRangeChange(index, { ...range, price: e.target.value })}
                    placeholder="$100"
                    className="border border-gray-200 rounded-lg px-3 py-2 text-sm w-24 focus:outline-none focus:border-blue-400"
                  />
                  <button
                    onClick={() => handleRemoveRange(index)}
                    className="w-6 h-6 rounded-full bg-gray-800 text-white border-none cursor-pointer flex items-center justify-center text-xs font-bold"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>

            {range.cities.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {range.cities.map(city => (
                  <span
                    key={city}
                    className="px-3 py-1 rounded-full text-xs text-white font-medium flex items-center gap-1"
                    style={{ background: "#1866B4" }}
                  >
                    {city}
                    <button
                      onClick={() => toggleCity(index, city)}
                      className="bg-transparent border-none text-white cursor-pointer text-xs ml-1"
                    >✕</button>
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}

        <button
          onClick={() => setRanges(prev => [...prev, { state: "", cities: [], thicknessRange: "", price: "" }])}
          className="flex items-center gap-2 text-sm font-semibold mb-6 border-none bg-transparent cursor-pointer"
          style={{ color: "#1866B4" }}
        >
          Add Range
          <span className="w-6 h-6 rounded-full text-white flex items-center justify-center text-lg font-bold" style={{ background: "#1866B4" }}>+</span>
        </button>

        <button
          className="px-8 py-3 rounded-xl text-white text-sm font-semibold border-none cursor-pointer"
          style={{ background: "#1866B4" }}
        >
          Add another City
        </button>
      </div>
    </div>
  );
}

// ─── EDIT SERVICE PAGE ────────────────────────────────────────────────────────
export default function EditService({ service, onBack }) {
  const [name, setName] = useState(service.title);
  const [commission, setCommission] = useState(service.commission);
  const [showAddMore, setShowAddMore] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [ranges, setRanges] = useState(
    service.ranges.length > 0 ? service.ranges : [{ state: "", cities: [], areaRange: "", price: "" }]
  );

  if (showAddMore) {
    return <AddMoreService onBack={() => setShowAddMore(false)} />;
  }

  const handleRangeChange = (index, updated) => {
    setRanges(prev => prev.map((r, i) => i === index ? updated : r));
  };

  const handleRemoveRange = (index) => {
    setRanges(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-8">
      <TopBar />

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center cursor-pointer text-slate-600 hover:bg-gray-50"
          >
            ←
          </button>
          <h2 className="text-xl font-semibold text-slate-800">Edit {name}</h2>
        </div>
        <button
          onClick={() => setShowSuccess(true)}
          className="px-6 py-2.5 rounded-xl text-white text-sm font-semibold border-none cursor-pointer"
          style={{ background: "#1866B4" }}
        >
          Update Service
        </button>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50"
          style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center shadow-2xl w-80">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Successfully!</h3>
            <p className="text-sm text-gray-500 text-center mb-6">
              Your service has been updated successfully.
            </p>
            <button
              onClick={() => { setShowSuccess(false); onBack(); }}
              className="px-10 py-2.5 rounded-xl text-white text-sm font-semibold border-none cursor-pointer w-full"
              style={{ background: "#1866B4" }}
            >
              Done
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="mb-5">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm w-72 focus:outline-none focus:border-blue-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Commission</label>
          <div className="flex items-center gap-3">
            <input
              type="number"
              value={commission}
              onChange={e => setCommission(e.target.value)}
              className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm w-20 focus:outline-none focus:border-blue-400"
            />
            <span className="text-sm text-gray-500">Percent</span>
          </div>
        </div>

        <div className="border-t border-gray-100 mb-6" />

        {ranges.map((range, index) => (
          <RangeRow
            key={index}
            range={range}
            index={index}
            onChange={handleRangeChange}
            onRemove={handleRemoveRange}
          />
        ))}

        <button
          onClick={() => setRanges(prev => [...prev, { state: "", cities: [], areaRange: "", price: "" }])}
          className="flex items-center gap-2 text-sm font-semibold mb-6 border-none bg-transparent cursor-pointer"
          style={{ color: "#1866B4" }}
        >
          Add Range
          <span className="w-6 h-6 rounded-full text-white flex items-center justify-center text-lg font-bold" style={{ background: "#1866B4" }}>+</span>
        </button>

        <button
          onClick={() => setShowAddMore(true)}
          className="px-8 py-3 rounded-xl text-white text-sm font-semibold border-none cursor-pointer"
          style={{ background: "#1866B4" }}
        >
          Add more
        </button>
      </div>
    </div>
  );
}
