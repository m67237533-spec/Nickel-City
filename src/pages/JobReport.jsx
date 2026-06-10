import { useState } from "react";
import ReportedJobDetail from "./ReportedJobDetail"; // 🔥 Import details page

const reportedJobs = Array.from({ length: 3 }, (_, index) => ({
  id: index,
  title: index === 1 ? "Snow Removal" : "Lawn Mowing",
  date: "Sep 25, 2025 | 09:00 AM",
  address: "53C, 14th street, Empire state, USA",
  yardSize: "500",
  price: "24",
  status: "Reported"
}));

export default function JobReport() {
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState(null); // 🔥 Clicked job state

  const filteredJobs = reportedJobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  // 🔥 Agar user ne kisi job par click kiya hua hai, toh detail view show karo
  if (selectedJob) {
    return (
      <ReportedJobDetail 
        job={selectedJob} 
        onBack={() => setSelectedJob(null)} 
      />
    );
  }

  return (
    <div className="p-6 bg-[#F8F8F8] min-h-screen">
      {/* Top Welcome Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[48px] font-bold text-[#222]">Welcome Back, Admin!</h1>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 bg-[#EEF4FB] rounded-lg flex items-center justify-center border-none cursor-pointer text-xl">
            🔔
          </button>
          <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-lg shadow-sm">
            <img src="https://i.pravatar.cc/100" alt="Admin" className="w-10 h-10 rounded-lg" />
            <div>
              <h4 className="font-semibold text-sm">Admin</h4>
              <p className="text-xs text-gray-500">admin.admin@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Title and Search Bar Row */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800">Job Report</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[360px] bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm outline-none text-sm placeholder-gray-400"
          />
        </div>
      </div>

      {/* Reported Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            onClick={() => setSelectedJob(job)} // 🔥 Click karne par details open hongi
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-50 transition-all cursor-pointer hover:shadow-md hover:scale-[1.01]"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-slate-800">{job.title}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{job.yardSize} sq ft</p>
              </div>

              <div className="text-right">
                <span className="border border-red-200 bg-red-50 text-red-500 px-3 py-0.5 rounded-full text-[11px] font-semibold">
                  {job.status}
                </span>
                <h4 className="font-bold mt-2 text-slate-800 text-lg">${job.price}</h4>
                <p className="text-[10px] text-gray-400 -mt-1">/min</p>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-4">{job.date}</p>
            <p className="text-xs text-gray-400 mt-1 line-clamp-1">{job.address}</p>
            
            <p className="text-xs text-gray-500 mt-4 mb-2 flex items-center gap-1">
              📎 attachments
            </p>

            <div className="flex gap-2">
              <img src="https://picsum.photos/seed/report1/120/120" className="w-16 h-16 rounded-xl object-cover" />
              <img src="https://picsum.photos/seed/report2/120/120" className="w-16 h-16 rounded-xl object-cover" />
              <img src="https://picsum.photos/seed/report3/120/120" className="w-16 h-16 rounded-xl object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}