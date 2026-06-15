import React, { useState } from "react";
import { Pencil } from "lucide-react"; 

export default function Settings({ initialView = "main" }) {
  const [subView, setSubView] = useState(initialView); 
  
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New Password and Confirm Password do not match!");
      return;
    }
    alert("Password updated successfully!");
    setSubView("main");
  };

  const getHeading = () => {
    if (subView === "password") return "Change Password";
    if (subView === "privacy") return "Privacy & Policy";
    if (subView === "terms") return "Terms & Conditions";
    if (subView === "about") return "About Us";
    return subView.replace("-", " ");
  };

  return (
    <div className="pt-0 pr-8 pb-8 pl-0">
      
      {subView === "main" && (
        <div className="mb-8">
          <h2 className="text-1xl font-bold text-slate-800">Settings</h2>
        </div>
      )}

      {subView === "main" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div onClick={() => setSubView("password")} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all text-sm font-bold text-slate-700">Change Password</div>
          <div onClick={() => setSubView("terms")} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all text-sm font-bold text-slate-700">Terms & Conditions</div>
          <div onClick={() => setSubView("privacy")} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all text-sm font-bold text-slate-700">Privacy Policy</div>
          <div onClick={() => setSubView("about")} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all text-sm font-bold text-slate-700">About Us</div>
        </div>
      )}

      {subView !== "main" && (
        <div className="w-full">
          {/* Back Button with Gray Background */}
          <div className="mb-4">
            <button 
              onClick={() => setSubView("main")} 
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors font-bold bg-gray-200"
            >
              ←
            </button>
          </div>

          {/* Heading + Edit Icon */}
          <div className="mb-6 flex justify-between items-center w-full">
            <h2 className="text-xl font-bold text-slate-800 capitalize">{getHeading()}</h2>
            {(subView === "privacy" || subView === "terms" || subView === "about") && (
              <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors border border-gray-100 shadow-sm">
                <Pencil className="w-4 h-4 text-black" />
              </button>
            )}
          </div>
          
          {/* Content Container with Shadow */}
          <div className="  w-full">
            {subView === "password" && (
              <form onSubmit={handlePasswordUpdate} className="space-y-5 max-w-xl">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">Current Password</label>
                  <input type="password" placeholder="**********" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">New Password</label>
                  <input type="password" placeholder="**********" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">Confirm Password</label>
                  <input type="password" placeholder="**********" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 text-sm" />
                </div>
                <button type="submit" className="w-full py-3.5 bg-[#1866B4] text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors">Update Password</button>
              </form>
            )}

            {(subView === "privacy" || subView === "terms" || subView === "about") && (
              <div className="text-sm text-slate-600 leading-relaxed space-y-4 w-full">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur nisl sapien. Vestibulum arcu metus, vestibulum eu egestas quis, facilisis vel nisl. Curabitur aliquam felis et ullamcorper ultrices. Mauris iaculis sapien fermentum eros finibus, id interdum nulla scelerisque. Nulla lacinia volutpat bibendum. Nullam vitae urna ultricies, commodo tellus eu, tempor tellus eu, tempor tellus eu, tempor tellus eu, tempor tellus eu, pellentesque lorem augue, viverra et eleifend eget, volutpat vitae mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Donec non feugiat mi, vestibulum tincidunt ex.</p>
                <p>Proin nec leo viverra, sollicitudin felis in, luctus dui. Nullam erat nisl, tempor at est id, consequat fringilla velit. Sed id nunc ligula. Suspendisse at massa consectetur, efficitur dui vel, eleifend libero. Aenean elementum sapien at metus finibus, vel placerat ac nulla sagittis ullamcorper erat vel placerat. Curabitur id molestie arcu, non porta magna. Donec ultrices gravida dui, nec blandit sem tincidunt sed. Vestibulum ornare neque non felis sodales lacinia.</p>
                <p>Aenean ullamcorper, turpis vel vehicula porta, ex lacus faucibus risus, non pellentesque tortor turpis vulputate nunc. Curabitur porta congue purus, vel fringilla libero tincidunt a. Aenean faucibus ut magna in iaculis. Fusce accumsan diam lectus, eleifend elementum enim sit amet. Etiam feugiat lobortis fusce volutpat elementum pretium. In semper ac purus consectetur vestibulum. Aenean elementum sapien at metus finibus, vel placerat ac nulla sagittis hendrerit in nec ligula. Suspendisse feugiat diam sit amet faucibus molestie. Donec nisl orci, interdum id consectetur vitae, tincidunt sit amet leo. Ut in semper justo. Donec molestie varius elit ut rutrum. Maecenas ornare ante a rutrum maximus. Pellentesque eleifend felis sed viverra commodo.</p>
                <p>Nunc in rhoncus sem, at mollis metus. Etiam laoreet, nisl at sagittis tincidunt, ex diam malesuada turpis, a bibendum leo sem id orci. Vivamus accumsan malesuada libero nec blandit. Maecenas volutpat ipsum nibh, a elementum purus varius tincidunt. Nullam facilisis dignissim dui, vitae suscipit nunc facilisis ac. Proin faucibus elit ullamcorper libero efficitur pretium. Nulla tempus nulla vulputate nibh scelerisque, vitae pretium nulla facilisis. Nulla augue tellus, mattis non tempor et, volutpat nec tellus. Nunc maximus vel ut vulputate pulvinar.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}