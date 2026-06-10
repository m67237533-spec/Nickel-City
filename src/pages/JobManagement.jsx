import TopBar from "../components/TopBar";
import { useState } from "react";
import JobDetail from "./JobDetail"; // 🔥 Agli file ko yahan import kiya

// Mock Data
const jobs = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  title: index % 2 === 0 ? "Lawn Mowing" : "Snow Removal",
  name: index % 2 === 0 ? "James Anderson" : "Sarah Connor",
  email: index % 2 === 0 ? "james.anderson@gmail.com" : "sarah.c@gmail.com",
  phone: "+0123456789",
  address: "53C, 14th street, Empire state, USA",
  yardSize: "500",
  price: "24",
  status:
    index % 4 === 0
      ? "Pending"
      : index % 4 === 1
      ? "Active"
      : index % 4 === 2
      ? "Cancelled"
      : "Completed",
}));

export default function JobManagement() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState(null); // 🔥 State for detail view

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "text-yellow-500 border-yellow-500 bg-yellow-50/50";
      case "Active":
        return "text-blue-500 border-blue-500 bg-blue-50/50";
      case "Cancelled":
        return "text-red-500 border-red-500 bg-red-50/50";
      case "Completed":
        return "text-green-500 border-green-500 bg-green-50/50";
      default:
        return "";
    }
  };

  // Filter Logic
  const filteredJobs = jobs.filter((job) => {
    const matchFilter = filter === "All" || job.status === filter;
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.name.toLowerCase().includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });

  // 🔥 Agar koi card click hua hai toh JobDetail component render hoga
  if (selectedJob) {
    return (
      <JobDetail 
        job={selectedJob} 
        onBack={() => setSelectedJob(null)} 
        getStatusClass={getStatusClass}
      />
    );
  }

  return (
    <div className="p-6 bg-[#F8F8F8] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[48px] font-bold text-[#222]">Welcome Back, Admin!</h1>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 bg-[#EEF4FB] rounded-lg flex items-center justify-center border-none cursor-pointer">
            {/* Bell icon */}
          </button>
          <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-lg shadow-sm">
            <img src="https://i.pravatar.cc/100" alt="" className="w-10 h-10 rounded-lg" />
            <div>
              <h4 className="font-semibold text-sm">Admin</h4>
              <p className="text-xs text-gray-500">admin.admin@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Title & Search */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold">Job Management</h2>
          <div className="flex gap-2 mt-3">
            {["All", "Pending", "Active", "Cancelled", "Completed"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-4 py-1 rounded-full text-xs border cursor-pointer font-medium transition-all ${
                  filter === item ? "bg-[#1866B4] text-white border-[#1866B4]" : "bg-white text-gray-600"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <input
          type="text"
          placeholder="Search by service or user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[360px] bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm outline-none text-sm"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            onClick={() => setSelectedJob(job)} // 🔥 Click Handler
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-blue-400 transition-all cursor-pointer hover:shadow-md"
          >
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-slate-800">{job.title}</h3>
                <p className="text-xs text-gray-400">{job.yardSize} sq ft</p>
                <p className="text-[11px] text-blue-600 font-medium mt-1">👤 {job.name}</p>
              </div>

              <div className="text-right">
                <span className={`border px-2 py-0.5 rounded-full text-[10px] font-semibold ${getStatusClass(job.status)}`}>
                  {job.status}
                </span>
                <h4 className="font-bold mt-2 text-slate-800">${job.price}</h4>
                <p className="text-[10px] text-gray-400">/min</p>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-3">Sep 25, 2025 | 09:00 AM</p>
            <p className="text-xs text-gray-400 mt-1 line-clamp-1">{job.address}</p>
            <p className="text-xs text-gray-500 mt-4 mb-2">📎 attachments</p>

            <div className="flex gap-2">
              <img src="https://picsum.photos/seed/l1/60/60" className="w-12 h-12 rounded-md object-cover" />
              <img src="https://picsum.photos/seed/l2/60/60" className="w-12 h-12 rounded-md object-cover" />
              <img src="https://picsum.photos/seed/l3/60/60" className="w-12 h-12 rounded-md object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}