import TopBar from "../components/TopBar";
import { useState } from "react";
import EditService from "./EditService";
import EditSnowRemoval from "./EditSnowRemoval";
import { Pencil } from "lucide-react";

const initialServices = [
  {
    id: 1,
    title: "Lawn Mowing",
    commission: 20,
    image: "/images/service.1.jpg",
    ranges: [
      {
        state: "California",
        cities: ["Los Angeles"],
        areaRange: "100-500 sq ft",
        price: "$100",
      },
    ],
  },
  {
    id: 2,
    title: "Snow Removal",
    commission: 20,
    image: "/images/service.2.jpg",
    ranges: [
      {
        state: "Texas",
        cities: ["Houston"],
        areaRange: "200-800 sq ft",
        price: "$150",
      },
    ],
  },
];

export default function ServiceManagement() {
  const [editingService, setEditingService] = useState(null);

  if (editingService) {
    if (editingService.title === "Snow Removal") {
      return (
        <EditSnowRemoval
          service={editingService}
          onBack={() => setEditingService(null)}
        />
      );
    } else {
      return (
        <EditService
          service={editingService}
          onBack={() => setEditingService(null)}
        />
      );
    }
  }

  return (
    <div className="p-4 space-y-6  min-h-screen">

      <TopBar />

      {/* HEADER */}
      <h2 className="text-2xl font-bold text-slate-900 mt-[-20px]">
        Service Management
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {initialServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
          >

            {/* IMAGE */}
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-t-xl"
              />

              <button
                onClick={() => setEditingService(service)}
                className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-white shadow flex items-center justify-center hover:bg-gray-50"
              >
                <Pencil size={14} className="text-gray-600" />
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-4 space-y-1">

              <h3 className="text-base font-semibold text-slate-800">
                {service.title}
              </h3>

              <p className="text-xs text-gray-500">
                Service Commission:
                <span className="text-blue-600 font-bold ml-1">
                  {service.commission}%
                </span>
              </p>

              <div className="text-[11px] text-gray-400 pt-2">
                {service.ranges[0]?.state} • {service.ranges[0]?.cities?.[0]}
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}