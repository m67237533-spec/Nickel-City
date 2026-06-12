import { useState } from "react";
import { Search } from "lucide-react";
import JobDetail from "./JobDetail"; 

const jobs = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  address: "53C, 14th street, Empire state, USA",
  price: "24",
  status: index % 4 === 0 ? "Pending" : index % 4 === 1 ? "Active" : index % 4 === 2 ? "Cancelled" : "Completed",
}));

export default function JobManagement() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState(null); 

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending": return "text-amber-600 bg-amber-50 border-amber-200";
      case "Active": return "text-blue-600 bg-blue-50 border-blue-200";
      case "Cancelled": return "text-red-600 bg-red-50 border-red-200";
      case "Completed": return "text-emerald-600 bg-emerald-50 border-emerald-200";
      default: return "";
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchFilter = filter === "All" || job.status === filter;
    return matchFilter && job.address.toLowerCase().includes(search.toLowerCase());
  });

  if (selectedJob) return <JobDetail job={selectedJob} onBack={() => setSelectedJob(null)} getStatusClass={getStatusClass} />;

  return (
    // yahan pt-8 aur pb-2 set kiya hai taaki niche ki space kam ho jaye
    <div className="w-full px-4 pt-8 pb-2 bg-[#F8F8F8]">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold text-slate-800">Job Management</h2>
        <div className="relative w-[320px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-xs outline-none shadow-sm focus:border-blue-400"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1.5 mb-6">
        {["All", "Pending", "Active", "Cancelled", "Completed"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-3 py-1 rounded-full text-[9px] font-bold transition-all ${
              filter === item ? "bg-blue-600 text-white shadow-sm" : "text-gray-500 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Cards Grid: 4 per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            onClick={() => setSelectedJob(job)}
            className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 hover:border-blue-300 transition-all cursor-pointer flex flex-col min-h-[170px]"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="text-left">
                <h3 className="font-bold text-slate-900 text-[11px] leading-tight">Lawn Mowing</h3>
                <p className="text-[9px] text-gray-400 mt-0.5">500 sq ft</p>
                <div className="mt-2 text-[9px] text-gray-500 font-medium leading-tight">
                  <p>Sep 25, 2025</p>
                  <p className="text-gray-500 mt-0.5 truncate max-w-[100px]">{job.address}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`px-1.5 py-0.5 rounded-full text-[8px] font-bold border flex items-center justify-center min-w-[50px] ${getStatusClass(job.status)}`}>
                  {job.status}
                </span>
                <p className="font-black text-xs text-slate-900 mt-1.5 mb-0">${job.price}<span className="text-[8px] text-gray-400 font-normal">/min</span></p>
              </div>
            </div>

            <div className="mt-auto border-t pt-2">
              <p className="text-[8px] font-bold text-blue-600 flex items-center gap-1 mb-1.5">📎 attachments</p>
              <div className="flex gap-1">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i} 
                    src={job.id < 4 ? `/images/job.${i}.jpg` : `/images/m.${i}.jpg`} 
                    alt="job-img" 
                    className="w-9 h-9 rounded-md object-cover border border-slate-100" 
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}