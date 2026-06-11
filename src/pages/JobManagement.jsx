import { useState } from "react";
import JobDetail from "./JobDetail"; 

// Mock Data Structure
const jobs = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  title: index % 2 === 0 ? "Lawn Mowing" : "Snow Removal",
  name: index % 2 === 0 ? "James Anderson" : "Sarah Connor",
  email: index % 2 === 0 ? "james.anderson@gmail.com" : "sarah.c@gmail.com",
  phone: "+0123456789",
  address: "53C, 14th street, Empire state, USA",
  yardSize: "500",
  price: "24",
  instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
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
  const [selectedJob, setSelectedJob] = useState(null); 

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

  const filteredJobs = jobs.filter((job) => {
    const matchFilter = filter === "All" || job.status === filter;
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.name.toLowerCase().includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });

  // Dynamic Routing Wrapper inside Main Layout view
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
    <div className="w-full min-h-screen bg-[#F8F8F8] flex flex-col box-border font-sans antialiased overflow-x-hidden p-8">
      
      {/* Title & Input Field Row */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4 w-full">
        <h2 className="text-xl font-bold text-[#1e293b] m-0">Job Management</h2>

        {/* Exact Mockup Size Input Box */}
        <div className="flex items-center gap-3 border border-solid border-gray-200/80 rounded-xl px-4 py-2.5 bg-white w-full md:w-[320px] shadow-2xs transition-all focus-within:border-slate-300">
          <span className="text-gray-400 text-sm select-none">🔍</span>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-xs outline-none border-none w-full text-slate-700 placeholder-gray-400 bg-transparent"
          />
        </div>
      </div>

      {/* Filter Tabs Row */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {["All", "Pending", "Active", "Cancelled", "Completed"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border border-solid transition-all cursor-pointer ${
              filter === item 
                ? "bg-[#1866B4] text-white border-[#1866B4] shadow-xs" 
                : "bg-white text-gray-500 border-slate-200/60 hover:bg-slate-50"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Cards Responsive Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            onClick={() => setSelectedJob(job)} 
            className="bg-white rounded-xl p-4 shadow-sm border border-solid border-gray-100 hover:border-blue-400 transition-all cursor-pointer hover:shadow-md flex flex-col justify-between box-border min-h-[250px]"
          >
            <div className="w-full">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <h3 className="font-bold text-slate-800 m-0 text-sm tracking-tight">{job.title}</h3>
                  <p className="text-[11px] text-gray-400 m-0 mt-0.5">
                    {job.title.toLowerCase().includes("snow") ? "Driveway, Walkways" : `${job.yardSize} sq ft`}
                  </p>
                  <p className="text-[11px] text-[#1866B4] font-bold m-0 mt-2">👤 {job.name}</p>
                </div>

                <div className="text-right flex flex-col items-end flex-shrink-0">
                  <span className={`border border-solid px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide ${getStatusClass(job.status)}`}>
                    {job.status}
                  </span>
                  <h4 className="font-black mt-2 mb-0 text-slate-800 text-base">${job.price}</h4>
                  <p className="text-[9px] text-gray-400 m-0">/min</p>
                </div>
              </div>

              <p className="text-[11px] text-gray-400 font-medium mt-4 m-0">Sep 25, 2025 | 09:00 AM</p>
              <p className="text-[11px] text-gray-500 font-medium mt-1 m-0 line-clamp-1">{job.address}</p>
            </div>

            <div className="w-full mt-4">
              <p className="text-[10px] text-gray-400 font-bold flex items-center gap-1 mb-2 m-0">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-500"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                attachments
              </p>

              <div className="flex gap-1.5 w-full">
                <img src={job.title.toLowerCase().includes("snow") ? "https://picsum.photos/seed/s1/60/60" : "https://picsum.photos/seed/l1/60/60"} alt="attachment" className="w-[52px] h-10 rounded-lg object-cover flex-shrink-0" />
                <img src={job.title.toLowerCase().includes("snow") ? "https://picsum.photos/seed/s2/60/60" : "https://picsum.photos/seed/l2/60/60"} alt="attachment" className="w-[52px] h-10 rounded-lg object-cover flex-shrink-0" />
                <img src={job.title.toLowerCase().includes("snow") ? "https://picsum.photos/seed/s3/60/60" : "https://picsum.photos/seed/l3/60/60"} alt="attachment" className="w-[52px] h-10 rounded-lg object-cover flex-shrink-0" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}