import { useState } from "react";
import { Search } from "lucide-react";
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
    <div className="w-full px-0 md:px-0 pb-6 min-h-screen">
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 -mt-2 gap-4">
        <h2 className="text-xl font-bold text-slate-800">Job Report</h2>
        
        {/* UPDATED SEARCH INPUT: Width, Height, and Shadow */}
        <div className="relative w-full md:w-[600px]"> 
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 text-sm outline-none shadow-md focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-start">
        {filteredJobs.slice(0, 3).map((job) => (
          <div
            key={job.id}
            onClick={() => setSelectedJob(job)}
            className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all cursor-pointer flex flex-col min-h-[160px] w-[290px]"
          >
            {/* ... card content same rahega */}
            <div className="flex justify-between items-start mb-3">
              <div className="text-left overflow-hidden">
                <h3 className="font-bold text-slate-900 text-sm truncate">{job.title}</h3>
                <p className="text-[10px] text-gray-400 mt-0.5">500 sq ft</p>
                <div className="mt-2 text-[10px] text-gray-500 font-medium">
                  <p>{job.date}</p>
                  <p className="text-gray-500 mt-0.5 truncate">{job.address}</p>
                </div>
              </div>
              <div className="text-right flex-shrink-0 ml-2">
                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold border text-red-600 bg-red-50 border-red-200">
                  {job.status}
                </span>
                <p className="font-black text-sm text-slate-900 mt-2">${job.price}<span className="text-[9px] text-gray-400 font-normal"><br /> /min</span></p>
              </div>
            </div>

            <div className="mt-auto border-t pt-3">
              <p className="text-[10px] font-bold text-blue-600 mb-1.5 flex items-center gap-1">
                <span className="text-[12px]">📎</span> attachments
              </p>
              <div className="flex gap-1.5">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i} 
                    src={job.title === "Lawn Mowing" ? `/images/job.${i}.jpg` : `/images/m.${i}.jpg`} 
                    alt="job-img" 
                    className="w-14 h-14 rounded-lg object-cover border border-slate-100" 
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