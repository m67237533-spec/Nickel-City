import { useState } from "react";
import { Search } from "lucide-react";
import JobDetail from "./JobDetail";

const jobs = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  address: "53C, 14th street, Empire state, USA",
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
  const [selectedJob, setSelectedJob] = useState(null);

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "text-amber-600 bg-amber-50 border-amber-200";
      case "Active":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "Cancelled":
        return "text-red-600 bg-red-50 border-red-200";
      case "Completed":
        return "text-emerald-600 bg-emerald-50 border-emerald-200";
      default:
        return "";
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchFilter = filter === "All" || job.status === filter;
    return (
      matchFilter &&
      job.address.toLowerCase().includes(search.toLowerCase())
    );
  });

  if (selectedJob)
    return (
      <JobDetail
        job={selectedJob}
        onBack={() => setSelectedJob(null)}
        getStatusClass={getStatusClass}
      />
    );

  return (
    <div className="w-full px-3 sm:px-4 md:px-6 pt-6 pb-4 min-h-screen">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-5">

        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800">
          Job Management
        </h2>

        <div className="relative w-full lg:w-[500px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm outline-none shadow-md focus:border-blue-400 transition-all"
          />
        </div>

      </div>

      {/* FILTER TABS */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["All", "Pending", "Active", "Cancelled", "Completed"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold transition-all ${
              filter === item
                ? "bg-blue-600 text-white shadow-sm"
                : "text-gray-500 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-4
      ">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            onClick={() => setSelectedJob(job)}
            className="
              bg-white rounded-xl p-4 sm:p-5
              shadow-md border border-gray-100
              hover:shadow-lg hover:border-blue-300
              transition-all cursor-pointer
              flex flex-col min-h-[200px]
            "
          >

            <div className="flex justify-between items-start mb-2">
              <div className="text-left">
                <h3 className="font-bold text-slate-900 text-sm sm:text-[14px]">
                  Lawn Mowing
                </h3>

                <p className="text-[10px] text-gray-400 mt-0.5">
                  500 sq ft
                </p>

                <div className="mt-2 text-[10px] sm:text-xs text-gray-500">
                  <p>Sep 25, 2025 | 09:00 AM</p>
                  <p className="truncate max-w-[120px] sm:max-w-[150px]">
                    {job.address}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span
                  className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${getStatusClass(
                    job.status
                  )}`}
                >
                  {job.status}
                </span>

                <p className="font-black text-sm sm:text-base text-slate-900 mt-2">
                  ${job.price}
                  <span className="text-[9px] text-gray-400 font-normal block">
                    /min
                  </span>
                </p>
              </div>
            </div>

            {/* IMAGES */}
            <div className="mt-auto border-t pt-3">
              <p className="text-[10px] font-bold text-gray-600 mb-2 flex items-center gap-1">
                📎 attachments
              </p>

              <div className="flex gap-2 flex-wrap">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={
                      job.id < 4
                        ? `/images/job.${i}.jpg`
                        : `/images/m.${i}.jpg`
                    }
                    alt="job-img"
                    className="
                      w-12 h-12 sm:w-14 sm:h-14
                      rounded-md object-cover border border-slate-100
                    "
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