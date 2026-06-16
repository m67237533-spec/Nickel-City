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
    return (
      <ReportedJobDetail
        job={selectedJob}
        onBack={() => setSelectedJob(null)}
      />
    );
  }

  return (
    <div className="w-full min-h-screen px-3 sm:px-4 md:px-6 pb-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800">
          Job Report
        </h2>

        <div className="relative w-full md:w-[500px] lg:w-[600px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-sm outline-none shadow-md focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
          />
        </div>

      </div>

      {/* CARDS WRAPPER */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-3 
        gap-4 sm:gap-5 lg:gap-6
      ">

        {filteredJobs.map((job) => (
          <div
            key={job.id}
            onClick={() => setSelectedJob(job)}
            className="
              bg-white rounded-2xl p-5 shadow-md 
              hover:shadow-lg hover:border-blue-200 transition-all cursor-pointer
              flex flex-col min-h-[160px]
            "
          >

            <div className="flex justify-between items-start mb-3">
              <div className="overflow-hidden">
                <h3 className="font-bold text-slate-900 text-sm truncate">
                  {job.title}
                </h3>

                <p className="text-[11px] text-gray-400 mt-1">
                  500 sq ft
                </p>

                <div className="mt-2 text-[11px] text-gray-500">
                  <p>{job.date}</p>
                  <p className="truncate">{job.address}</p>
                </div>
              </div>

              <div className="text-right ml-2">
                <span className="px-2 py-1 rounded-full text-[10px] font-bold border text-red-600 bg-red-50 border-red-200">
                  {job.status}
                </span>

                <p className="font-bold text-sm text-slate-900 mt-2">
                  ${job.price}
                  <span className="text-[10px] text-gray-400 font-normal block">
                    /min
                  </span>
                </p>
              </div>
            </div>

            {/* IMAGES */}
            <div className="mt-auto border-t pt-3">
              <p className="text-[11px] font-bold text-blue-600 mb-2 flex items-center gap-1">
                📎 attachments
              </p>

              <div className="flex gap-2 flex-wrap">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={
                      job.title === "Lawn Mowing"
                        ? `/images/job.${i}.jpg`
                        : `/images/m.${i}.jpg`
                    }
                    alt="job-img"
                    className="
                      w-12 h-12 sm:w-16 sm:h-16
                      rounded-lg object-cover border border-slate-100
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