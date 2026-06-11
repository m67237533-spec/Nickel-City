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
    <div className="w-full p-8 bg-[#F8F8F8]">
      {/* Header with Reduced Search Bar Height */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Job Management</h2>
        <div className="relative w-[400px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none shadow-sm focus:border-blue-400"
          />
        </div>
      </div>

      {/* Reduced Height Tabs */}
      <div className="flex gap-2 mb-8">
        {["All", "Pending", "Active", "Cancelled", "Completed"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-1 rounded-full text-[10px] font-bold transition-all ${
              filter === item 
                ? "bg-blue-600 text-white shadow-sm" 
                : "text-gray-500 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            onClick={() => setSelectedJob(job)}
            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:border-blue-300 transition-all cursor-pointer flex flex-col min-h-[210px]"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="text-left">
                <h3 className="font-bold text-slate-900 text-sm leading-none">Lawn Mowing</h3>
                <p className="text-[10px] text-gray-400 mt-1">500 sq ft</p>
                
                <div className="mt-3 text-[10px] text-gray-500 font-medium leading-tight">
                  <p>Sep 25, 2025 | 09:00 AM</p>
                  <p className="text-gray-500 mt-1 truncate max-w-[140px]">{job.address}</p>
                </div>
              </div>

              <div className="text-right">
                <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold border flex items-center justify-center min-w-[75px] ${getStatusClass(job.status)}`}>
                  {job.status}
                </span>
                <p className="font-black text-sm text-slate-900 mt-2 mb-0">${job.price}<span className="text-[9px] text-gray-400 font-normal"><br />/min</span></p>
              </div>
            </div>

            <div className="mt-auto border-t pt-3">
              <p className="text-[9px] font-bold text-blue-600 flex items-center gap-1 mb-2">📎 attachments</p>
              <div className="flex gap-1.5">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i} 
                    src={job.id < 4 ? `/images/job.${i}.jpg` : `/images/m.${i}.jpg`} 
                    alt="job-img" 
                    className="w-12 h-12 rounded-lg object-cover border border-slate-100" 
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