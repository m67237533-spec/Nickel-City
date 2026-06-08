import TopBar from "../components/TopBar";
import { useState } from "react";
import EditService from "./EditService";

const initialServices = [
  {
    id: 1,
    title: "Lawn Mowing",
    commission: 20,
    image: "https://picsum.photos/seed/snow/400/200",
  },
  {
    id: 2,
    title: "Snow Removal",
    commission: 20,
    image: "https://picsum.photos/seed/lawn/400/200",
  },
];

export default function ServiceManagement() {
  const [editingService, setEditingService] = useState(null);

  if (editingService) {
    return <EditService service={editingService} onBack={() => setEditingService(null)} />;
  }

  return (
    <div className="p-8">
      <TopBar />
      <h2 className="text-xl font-semibold text-slate-800 mb-6">Service Management</h2>

      <div className="flex gap-5 flex-wrap">
        {initialServices.map((service) => (
          <div key={service.id} className="w-60 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <div className="relative">
              <img src={service.image} alt={service.title} className="w-full h-40 object-cover block" />
              <button
                onClick={() => setEditingService(service)}
                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white border-none cursor-pointer flex items-center justify-center shadow-md text-sm"
              >
                ✏️
              </button>
            </div>
            <div className="px-3.5 py-3">
              <div className="text-sm font-semibold text-slate-800 mb-1">{service.title}</div>
              <div className="text-xs text-gray-500">
                Service Commission: <span className="font-bold text-slate-800">{service.commission}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}