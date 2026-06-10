import TopBar from "../components/TopBar";

function statusStyle(status) {
  if (status === "Pending")   return "text-yellow-500 bg-yellow-50";
  if (status === "Approved")  return "text-green-600 bg-green-50";
  if (status === "Cancelled") return "text-red-500 bg-red-50";
  return "";
}

export default function ContractorVerificationDetail({ contractor, onBack, onCancel, onApprove }) {
  return (
    <div className="p-8">
      <TopBar />

      {/* Back + Title + Status */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center cursor-pointer text-slate-600 hover:bg-gray-50"
          >
            ←
          </button>
          <h2 className="text-xl font-semibold text-slate-800">Details</h2>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyle(contractor.status)}`}>
          {contractor.status}
        </span>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

        <h3 className="text-sm font-semibold text-slate-700 mb-4">Contractor Information</h3>
        <div className="flex items-center gap-4 mb-8">
          <img
            src={`https://picsum.photos/seed/cv${contractor.id}/70/70`}
            alt="contractor"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <div className="text-base font-bold text-slate-800">{contractor.name}</div>
            <div className="text-sm text-gray-500 mt-0.5">{contractor.email}</div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          <div>
            <div className="text-sm font-semibold text-slate-700 mb-1">Phone Number</div>
            <div className="text-sm text-gray-500">{contractor.phone}</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-700 mb-1">Services</div>
            <div className="text-sm text-gray-500">Lawn Mowing, Snow Removal</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-700 mb-1">Service Area</div>
            <div className="text-sm text-gray-500">Lorem ipsum dolor, Lorem ipsum</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-700 mb-1">Address</div>
            <div className="text-sm text-gray-500">{contractor.address}</div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-10">
          <div>
            <div className="text-sm font-semibold text-slate-700 mb-1">Company Name</div>
            <div className="text-sm text-gray-500">{contractor.company}</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-700 mb-1">Article</div>
            <img
              src="https://picsum.photos/seed/article1/60/60"
              alt="article"
              className="w-14 h-14 rounded-lg object-cover mt-1"
            />
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-700 mb-1">EIN Letter</div>
            <img
              src="https://picsum.photos/seed/ein1/60/60"
              alt="ein"
              className="w-14 h-14 rounded-lg object-cover mt-1"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={onCancel}
            className="px-10 py-3 rounded-xl text-white text-sm font-semibold border-none cursor-pointer bg-gray-900 hover:bg-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={onApprove}
            className="px-10 py-3 rounded-xl text-white text-sm font-semibold border-none cursor-pointer"
            style={{ background: "#1866B4" }}
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
}