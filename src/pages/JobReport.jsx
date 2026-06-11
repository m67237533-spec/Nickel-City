import { useState } from "react";
import ReportedJobDetail from "./ReportedJobDetail"; 

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
  const [selectedJob, setSelectedJob] = useState(null); 

  const filteredJobs = reportedJobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  // Detail View render wrapper layer
  if (selectedJob) {
    return (
      <ReportedJobDetail 
        job={selectedJob} 
        onBack={() => setSelectedJob(null)} 
      />
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#F8F8F8] p-8 flex flex-col box-border font-sans antialiased">
      
      {/* Title and Search Bar Row (Top Header Block Removed) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 w-full">
        <h2 className="text-2xl font-bold text-slate-800 m-0 tracking-tight">Job Report</h2>
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-[320px] bg-white border border-solid border-slate-100 rounded-xl px-4 py-2.5 shadow-2xs outline-none text-xs text-slate-700 placeholder-slate-400 focus:border-blue-500 transition-colors box-border"
          />
        </div>
      </div>

      {/* Reported Cards Responsive Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            onClick={() => setSelectedJob(job)} 
            className="bg-white rounded-2xl p-5 shadow-2xs border border-solid border-slate-100/60 transition-all cursor-pointer hover:shadow-xs hover:translate-y-[-1px] flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start w-full">
                <div>
                  <h3 className="font-bold text-sm text-slate-800 m-0 tracking-tight">{job.title}</h3>
                  <p className="text-[11px] text-slate-400 font-medium m-0 mt-0.5">{job.yardSize} sq ft</p>
                </div>

                <div className="text-right flex flex-col items-end">
                  <span className="border border-solid border-red-200 bg-red-50 text-red-500 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide">
                    {job.status}
                  </span>
                  <h4 className="font-extrabold m-0 mt-2 text-slate-800 text-base">${job.price}</h4>
                  <p className="text-[9px] text-slate-400 font-medium m-0">/min</p>
                </div>
              </div>

              <div className="mt-4">
                <span className="text-[11px] text-slate-400 font-medium block">{job.date}</span>
                <p className="text-[11px] text-slate-500 font-medium m-0 mt-0.5 line-clamp-1">{job.address}</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-[10px] font-bold text-slate-400 flex items-center gap-1 m-0 mb-2 uppercase tracking-wider">
                📎 attachments
              </p>
              <div className="flex gap-1.5">
                <img src="https://picsum.photos/seed/report1/100/100" className="w-12 h-12 rounded-lg object-cover border border-solid border-slate-100 shadow-3xs" alt="Attach Preview" />
                <img src="https://picsum.photos/seed/report2/100/100" className="w-12 h-12 rounded-lg object-cover border border-solid border-slate-100 shadow-3xs" alt="Attach Preview" />
                <img src="https://picsum.photos/seed/report3/100/100" className="w-12 h-12 rounded-lg object-cover border border-solid border-slate-100 shadow-3xs" alt="Attach Preview" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}