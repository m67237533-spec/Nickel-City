import { useState } from "react";
import { Search } from "lucide-react"; // Search icon import kiya
import ReportedJobDetail from "./ReportedJobDetail"; 

const reportedJobs = Array.from({ length: 3 }, (_, index) => ({
  id: index,
  title: index % 2 === 0 ? "Lawn Mowing" : "Snow Removal",
  date: "Sep 25, 2025 | 09:00 AM",
  address: "53C, 14th street, Empire state, USA",
  price: "24",
  status: "Reported"
}));

export default function JobReport() {
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState(null); 

  const filteredJobs = reportedJobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  if (selectedJob) {
    return <ReportedJobDetail job={selectedJob} onBack={() => setSelectedJob(null)} />;
  }

  return (
    <div className="w-full p-8 bg-[#F8F8F8]">
      {/* Header with Search Bar and Icon */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Job Report</h2>
        <div className="relative w-full md:w-[600px]">
          {/* Icon Container */}
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-4 text-sm outline-none shadow-sm focus:border-blue-400 transition-all"
          />
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            onClick={() => setSelectedJob(job)}
            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:border-blue-300 transition-all cursor-pointer flex flex-col min-h-[210px]"
          >
            {/* ... rest of the card code same as before ... */}
            <div className="flex justify-between items-start mb-3">
              <div className="text-left">
                <h3 className="font-bold text-slate-900 text-sm leading-none">{job.title}</h3>
                <p className="text-[10px] text-gray-400 mt-1">500 sq ft</p>
                <div className="mt-2 text-[10px] text-gray-500 font-medium leading-tight">
                  <p>{job.date}</p>
                  <p className="text-gray-500 mt-0.5 truncate max-w-[140px]">{job.address}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold border flex items-center justify-center min-w-[75px] text-red-600 bg-red-50 border-red-200">
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
                    src={job.title === "Lawn Mowing" ? `/images/job.${i}.jpg` : `/images/m.${i}.jpg`} 
                    alt="job-img" 
                    className="w-14 h-12 rounded-lg object-cover border border-slate-100" 
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