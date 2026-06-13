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
    <div className="w-full pl-2 pr-4 pt-8 pb-2 mt-[-50px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold text-slate-800 m-0">Job Management</h2>
        
        <div className="relative w-[500px]"> 
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-xs outline-none shadow-md focus:border-blue-400 transition-all"
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

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            onClick={() => setSelectedJob(job)}
            // Yahan shadow-md aur hover:shadow-lg add kiya gaya hai
            className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer flex flex-col min-h-[200px]"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="text-left">
                <h3 className="font-bold text-slate-900 text-[11px] leading-tight">Lawn Mowing</h3>
                <p className="text-[9px] text-gray-400 mt-0.5">500 sq ft</p>
                <div className="mt-2 text-[9px] text-gray-500 font-medium leading-tight">
                  <p>Sep 25, 2025 | 09:00 AM</p>
                  <p className="text-gray-500 mt-0.5 truncate max-w-[100px]">{job.address}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`px-1.5 py-0.5 rounded-full text-[8px] font-bold border flex items-center justify-center min-w-[50px] ${getStatusClass(job.status)}`}>
                  {job.status}
                </span>
                <p className="font-black text-xs text-slate-900 mt-1.5 mb-0">${job.price}<span className="text-[8px] text-gray-400 font-normal"> <br /> /min</span></p>
              </div>
            </div>

            <div className="mt-auto border-t pt-2">
              <p className="text-[10px] font-bold text-grey-900 flex items-center gap-1 mb-1.5">📎 attachments</p>
              <div className="flex gap-1">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i} 
                    src={job.id < 4 ? `/images/job.${i}.jpg` : `/images/m.${i}.jpg`} 
                    alt="job-img" 
                    className="w-12 h-12 rounded-md object-cover border border-slate-100" 
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