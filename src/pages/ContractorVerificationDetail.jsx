import React from "react";

export default function ContractorVerificationDetail({ contractor, onBack, onCancel, onApprove }) {
  const isPending = contractor.status === "Pending";
  const isApproved = contractor.status === "Approved";
  const isCancelled = contractor.status === "Cancelled";

  return (
    <div className="p-0">
      {/* Top Header */}
      <div className="flex flex-col items-start gap-2 mb-6">
          <button onClick={onBack} className="w-8 h-8 rounded-full border border-slate-200 bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-slate-50">
            ←
          </button>
        
        {/* Updated Header: Details Left, Status Right */}
        <div className="flex items-center justify-between w-full">
          <h2 className="text-xl font-bold">Details</h2>
          <span className={`px-4 py-1 rounded-full text-xs font-semibold 
            ${isPending ? "bg-yellow-50 text-yellow-500" : 
              isApproved ? "bg-green-50 text-green-500" : "bg-red-50 text-red-500"}`}>
            {contractor.status}
          </span>
        </div>
      </div>

      {/* Contractor Info */}
      <div className="">
        <h3 className="font-bold text-lg mb-4">Contractor Information</h3>
        <div className="flex items-center gap-4 mb-8">
          <img src="/images/face.2.jpg" alt="profile" className="w-14 h-14 rounded-full object-cover" />
          <div>
            <h4 className="font-bold text-lg">{contractor.name}</h4>
            <p className="text-gray-500 text-sm">{contractor.email}</p>
          </div>
        </div>

        {/* Grid Info */}
        <div className="grid grid-cols-4 gap-6 text-sm mb-8">
          <div>
            <p className="text-black font-bold">Phone Number</p>
            <p className="font-semibold text-gray-400">{contractor.phone}</p>
          </div>
          <div>
            <p className="text-black font-bold">Services</p>
            <p className="font-semibold text-gray-400">{contractor.service}</p>
          </div>
          <div>
            <p className="text-black font-bold">Service Area</p>
            <p className="font-semibold text-gray-400">Lorem ipsum dolor...</p>
          </div>
          <div>
            <p className="text-black font-bold">Address</p>
            <p className="font-semibold text-gray-400">{contractor.address}</p>
          </div>
        </div>

        {/* Dynamic Fields */}
        <div className="flex gap-12 text-sm mb-8">
          <div>
            <p className="text-black font-bold">Company Name</p>
            <p className="font-semibold text-gray-400">{contractor.company}</p>
          </div>
          
          {isPending || isCancelled ? (
            <>
              <div>
                <p className="text-black font-bold">Article</p>
                <img src="/images/article.1.jpg" alt="Article" className="w-14 h-14 rounded mt-1 border border-dashed object-cover" />
              </div>
              <div>
                <p className="text-black font-bold">EIN Letter</p>
                <img src="/images/article.2.jpg" alt="EIN Letter" className="w-14 h-14 rounded mt-1 border border-dashed object-cover" />
              </div>
            </>
          ) : (
            <div>
              <p className="text-gray-400">Certifications</p>
              <div className="flex gap-2 mt-1">
                <div className="w-16 h-16 bg-gray-200 rounded border border-dashed"></div>
                <div className="w-16 h-16 bg-gray-200 rounded border border-dashed"></div>
                <div className="w-16 h-16 bg-gray-200 rounded border border-dashed"></div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {isPending && (
          <div className="flex gap-4">
            <button onClick={onCancel} className="px-12 py-3 bg-[#212529] text-white rounded-xl font-bold">Cancel</button>
            <button onClick={onApprove} className="px-12 py-3 bg-[#1866B4] text-white rounded-xl font-bold">Approve</button>
          </div>
        )}
        
        {isApproved && (
          <button onClick={onCancel} className="px-12 py-3 bg-[#1866B4] text-white rounded-xl font-bold">Block Contractor</button>
        )}
      </div>
    </div>
  );
}