import TopBar from "../components/TopBar";
import { useState } from "react";
import EditService from "./EditService";
import EditSnowRemoval from "./EditSnowRemoval";

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
    <div className=" pt-0">
      <div className="mb-2">
        <TopBar />
      </div>
      
      {/* Heading: mt-[-20px] se upar shift kiya aur ml-2 se left align rakha */}
      <h2 className="text-xl font-bold text-slate-900 mt-[-40px] mb-6 text-left ml-2 text-left">
        Service Management
      </h2>

      <div className="flex gap-5 flex-wrap ml-2">
        {initialServices.map((service) => (
          <div key={service.id} className="w-60 bg-white rounded-2xl shadow-lg border border-gray-100 text-left transition-all hover:shadow-xl">
            <div className="relative p-2">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-32 object-cover rounded-xl" 
              />
              <button
                onClick={() => setEditingService(service)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white border border-gray-100 cursor-pointer flex items-center justify-center shadow-md text-sm hover:bg-gray-50 transition-colors"
              >
                ✏️
              </button>
            </div>
            
            <div className="px-4 pb-4 pt-1 text-left">
              <div className="text-sm font-bold text-slate-800 mb-1">{service.title}</div>
              <div className="text-xs text-gray-500">
                Service Commission: <span className="font-bold text-blue-600">{service.commission}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}