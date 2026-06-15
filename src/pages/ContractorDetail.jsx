import { useState } from "react";
import { Mail, Phone, MapPin, Building, Tractor, Pencil } from "lucide-react";
import TopBar from "../components/TopBar";

const jobData = [
  { id: 1, title: "Lawn Mowing", status: "Completed", date: "Sep 25, 2025 | 09:00 AM", address: "53C, 14th street, Empire state, USA", price: "24", statusClass: "border-emerald-500 text-emerald-500 bg-emerald-50/30" },
  { id: 2, title: "Snow Removal", status: "Active", date: "Sep 26, 2025 | 10:00 AM", address: "53C, 14th street, Empire state, USA", price: "24", statusClass: "border-blue-500 text-blue-500 bg-blue-50/30" },
  { id: 3, title: "Lawn Mowing", status: "Cancelled", date: "Sep 27, 2025 | 11:00 AM", address: "53C, 14th street, Empire state, USA", price: "24", statusClass: "border-rose-500 text-rose-500 bg-rose-50/30" },
];

export default function ContractorDetail({ contractor, onBack }) {
  const [isBlocked, setIsBlocked] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col font-sans antialiased overflow-x-hidden">
       <div className="">
              <button onClick={onBack} className="w-8 h-8 rounded-full border border-slate-200 bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-slate-50">
            ←
          </button>
        </div>
      <TopBar />
       {/* <div className="">
              <button onClick={onBack} className="w-8 h-8 rounded-full border border-slate-200 bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-slate-50">
            ←
          </button>
        </div> */}
      <div className=" flex-1 w-full max-w-[1400px] mx-auto box-border">
        {/* Back Button */}
        {/* <div className="mb-6">
          <button onClick={onBack} className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center cursor-pointer hover:bg-slate-50">
            ←
          </button>
        </div> */}

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,240px]">
          
          {/* Left Panel */}
          <div className="w-full">
            
            <h2 className=" text-xl font-bold text-[#1e293b]">User Details</h2>

            {/* Info Section */}
            <div className="mb-8 p-4 flex items-center gap-4  ">
              <img src={`/images/face.1.jpg`} className="w-16 h-16 rounded-full object-cover" alt="profile" />
              <div>
                <div className="text-base font-bold text-[#1e293b]">{contractor?.name || "James Anderson"}</div>
                <div className="text-sm text-slate-400">{contractor?.email || "james.anderson@gmail.com"}</div>
                <div className="text-sm text-slate-400">{contractor?.number || "+0123456789"}</div>
              </div>
            </div>

            {/* Jobs Section */}
            <h3 className="text-xl font-bold text-[#1e293b] mb-4">Jobs Information</h3>
            <div className="flex gap-2 mb-8 overflow-x-auto whitespace-nowrap pb-2">
              {jobData.map((job) => (
                <div key={job.id} className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100 flex flex-col min-h-[130px] min-w-[250px] flex-shrink-0">
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-left overflow-hidden">
                      <h3 className="font-bold text-slate-900 text-sm truncate">{job.title}</h3>
                      <p className="text-[9px] text-gray-400 mt-0.5">500 sq ft</p>
                      <div className="mt-2 text-[10px] text-gray-500 font-medium">
                        <p>{job.date}</p>
                        <p className="text-gray-500 mt-0.5 truncate">{job.address}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${job.statusClass}`}>
                        {job.status}
                      </span>
                      <p className="font-black text-sm text-slate-900 mt-2">${job.price}<span className="text-[9px] text-gray-400 font-normal"><br /> /min</span></p>
                    </div>
                  </div>
                  <div className="mt-auto border-t pt-3">
                    <p className="text-[9px] font-bold text-blue-600 mb-1.5 flex items-center gap-1">
                      <span>📎</span> attachments
                    </p>
                    <div className="flex gap-1.5">
                      {[1, 2, 3].map((i) => (
                        <img 
                          key={i} 
                          src={job.id === 2 ? `/images/m.${i}.jpg` : `/images/job.${i}.jpg`} 
                          alt="job-img" 
                          className="w-12 h-12 rounded-lg object-cover border border-slate-100" 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsBlocked(!isBlocked)}
              className="w-full md:w-56 py-3.5 rounded-xl text-white text-xs font-bold bg-[#1e62c9] hover:bg-[#1652ab] cursor-pointer"
            >
              {isBlocked ? "Unblock User" : "Block User"}
            </button>
          </div>

          {/* Right Sidebar Panel */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col h-fit w-60 relative">
            {/* <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white border border-gray-100 cursor-pointer flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
              <Pencil size={14} className="text-gray-600" />
            </button> */}

            <div className="flex justify-between mb-4">
              <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Paid</span>
              <span className="text-emerald-700 text-[10px] font-bold px-3 py-1 border border-emerald-500 rounded-full uppercase tracking-wider">Completed</span>
            </div>

            <div className="flex flex-col items-center text-center pb-5 border-b border-slate-100">
              <img src="/images/face.2.jpg" className="w-16 h-16 rounded-full mb-3 object-cover" alt="User" />
              <div className="text-lg font-bold text-slate-900">John Deo</div>
              <div className="text-sm text-slate-400 mb-2">Contractor</div>
              <div className="text-2xl font-bold text-slate-900">$24</div>
            </div>

            <div className="pt-5 space-y-4 text-sm text-slate-600">
              <h3 className="font-bold text-slate-900 mb-3">Contact Info</h3>
              <div className="flex items-center gap-3"><Mail size={16} /> <p>{contractor?.email || "john.doe@gmail.com"}</p></div>
              <div className="flex items-center gap-3"><Phone size={16} /> <p>{contractor?.phone || "+0123456789"}</p></div>
              <div className="flex items-start gap-3"><MapPin size={16} /> <p>{contractor?.address || "53C, 14th street, Empire state, USA"}</p></div>
              <div className="flex items-center gap-3"><Building size={16} /> <p>Lawn Rangers</p></div>
              <div className="flex items-center gap-3"><Tractor size={16} /> <p>Lawn Mowing</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}