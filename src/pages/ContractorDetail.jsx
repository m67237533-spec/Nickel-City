import { useState } from "react";
import TopBar from "../components/TopBar";

const jobData = [
  {
    id: 1,
    title: "Lawn Mowing",
    status: "Completed",
    statusColor: "bg-green-100 text-green-600",
    sqft: "500 sq ft",
    date: "Sep 25, 2025 | 09:00 AM",
    address: "53C, 14th street, Empire state, USA",
    price: "$24",
    images: [
      "https://picsum.photos/seed/job1a/60/50",
      "https://picsum.photos/seed/job1b/60/50",
      "https://picsum.photos/seed/job1c/60/50",
    ],
  },
  {
    id: 2,
    title: "Snow Removal",
    status: "Active",
    statusColor: "bg-blue-100 text-blue-600",
    sqft: "500 sq ft",
    date: "Sep 25, 2025 | 09:00 AM",
    address: "53C, 14th street, Empire state, USA",
    price: "$24",
    images: [
      "https://picsum.photos/seed/job2a/60/50",
      "https://picsum.photos/seed/job2b/60/50",
      "https://picsum.photos/seed/job2c/60/50",
    ],
  },
  {
    id: 3,
    title: "Lawn Mowing",
    status: "Cancelled",
    statusColor: "bg-red-100 text-red-500",
    sqft: "500 sq ft",
    date: "Sep 25, 2025 | 09:00 AM",
    address: "53C, 14th street, Empire state, USA",
    price: "$24",
    images: [
      "https://picsum.photos/seed/job3a/60/50",
      "https://picsum.photos/seed/job3b/60/50",
      "https://picsum.photos/seed/job3c/60/50",
    ],
  },
];

export default function ContractorDetail({ contractor, onBack }) {
  const [showModal, setShowModal] = useState(false);
  const [blocked, setBlocked] = useState(false);

  const handleBlockConfirm = () => {
    setBlocked(true);
    setShowModal(false);
  };

  return (
    <div className="p-8">
      <TopBar />

      {/* Back + Title */}
      <div className="flex items-center gap-3 mb-5">
        <button
          onClick={onBack}
          className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center cursor-pointer text-slate-600 hover:bg-gray-50"
        >
          ←
        </button>
        <h2 className="text-xl font-semibold text-slate-800">Contractor Details</h2>
      </div>

      <div className="flex gap-6">
        {/* Left Side */}
        <div className="flex-1">

          {/* Contractor Information */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-5">
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Contractor Information</h3>
            <div className="flex items-center gap-4">
              <img
                src={`https://picsum.photos/seed/contractor${contractor.id}/70/70`}
                alt="contractor"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <div className="text-base font-bold text-slate-800">{contractor.name}</div>
                <div className="text-sm text-gray-500 mt-0.5">{contractor.email}</div>
                <div className="text-sm text-gray-500 mt-0.5">+33757005467</div>
              </div>
            </div>
          </div>

          {/* Jobs Information */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-5">
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Jobs Information</h3>
            <div className="flex gap-4 flex-wrap">
              {jobData.map(job => (
                <div key={job.id} className="border border-gray-100 rounded-xl p-3 w-64 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-slate-800">{job.title}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${job.statusColor}`}>
                      {job.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 mb-1">{job.sqft}</div>
                  <div className="text-xs text-gray-400 mb-1">{job.date}</div>
                  <div className="text-xs text-gray-400 mb-2">{job.address}</div>
                  <div className="text-sm font-bold text-slate-800 mb-2">{job.price}</div>
                  <div className="text-xs text-gray-400 mb-1">📎 attachments</div>
                  <div className="flex gap-1">
                    {job.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="attachment"
                        className="w-14 h-10 rounded-lg object-cover"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Block / Unblock Button */}
          <button
            onClick={() => !blocked && setShowModal(true)}
            className="px-8 py-3 rounded-xl text-white text-sm font-semibold border-none cursor-pointer"
            style={{ background: blocked ? "#9ca3af" : "#1866B4", cursor: blocked ? "not-allowed" : "pointer" }}
          >
            {blocked ? "Contractor Blocked" : "Block Contractor"}
          </button>

        </div>

        {/* Right Side */}
        <div className="w-64 flex flex-col gap-4">

          {/* Profile Card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="flex gap-2 mb-3 self-end">
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-600 font-medium">Transferred</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-600 font-medium">Completed</span>
            </div>
            <img
              src={`https://picsum.photos/seed/user${contractor.id}/80/80`}
              alt="user"
              className="w-16 h-16 rounded-full object-cover mb-2"
            />
            <div className="text-sm font-bold text-slate-800">James Anderson</div>
            <div className="text-xs text-gray-400 mb-1">User</div>
            <div className="text-lg font-bold text-slate-800">$24</div>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">Contact Info</h3>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>📧</span> {contractor.email}
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>📞</span> {contractor.phone}
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>📍</span> {contractor.address}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Block Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: "rgba(0,0,0,0.45)" }}>
          <div className="bg-white rounded-2xl p-10 text-center shadow-2xl" style={{ maxWidth: 420, width: "90%" }}>
            <h2 className="text-2xl font-bold mb-3">Block</h2>
            <p className="text-gray-500 text-sm mb-7">
              Are you sure you want to block<br />this contractor?
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setShowModal(false)}
                className="px-10 py-3 rounded-xl text-white text-sm font-semibold"
                style={{ background: "#1a1a1a", minWidth: 130 }}
              >
                No
              </button>
              <button
                onClick={handleBlockConfirm}
                className="px-10 py-3 rounded-xl text-white text-sm font-semibold"
                style={{ background: "#1866B4", minWidth: 130 }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}