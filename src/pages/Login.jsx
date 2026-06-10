import React, { useState } from "react";

// 🔥 onForgotPasswordClick prop ko yahan receive kiya hai
export default function Login({ onLoginSuccess, onForgotPasswordClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // 🔐 Production-ready matching authentication checks
      if (email === "admin.admin@gmail.com" && password === "admin123") {
        if (onLoginSuccess) onLoginSuccess();
      } else {
        alert("Invalid credentials! Please use correct admin login.");
      }
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-[#F8F8F8]">
      
      {/* Left Section: Image Side */}
      <div className="hidden md:block w-1/2 relative min-h-screen">
        <img 
          src="https://images.unsplash.com/photo-1592417817098-8f3d6eb18865?auto=format&fit=crop&w=1000&q=80" 
          alt="Lawn Mowing Professional" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
      </div>

      {/* Right Section: Form Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 sm:px-16 lg:px-24 bg-white">
        <div className="w-full max-w-md">
          
          {/* Welcome Heading */}
          <h2 className="text-[32px] font-bold text-slate-900 mb-8 tracking-tight">
            Welcome Back!
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-4 pr-10 text-xs outline-none focus:border-[#1866B4] transition-all text-slate-800"
                  required
                />
                <span className="absolute right-3.5 top-3.5 text-gray-400 text-sm pointer-events-none">
                  ✉️
                </span>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Your Password"
                  className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-4 pr-10 text-xs outline-none focus:border-[#1866B4] transition-all text-slate-800"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-gray-400 text-sm hover:text-slate-600 cursor-pointer border-none bg-transparent"
                >
                  {showPassword ? "🔒" : "👁️"}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="sr-only peer"
                  />
                  {/* Custom Toggle Switch */}
                  <div className="w-7 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#1866B4]"></div>
                </div>
                <span className="text-[11px] font-medium text-slate-500">Remember me</span>
              </label>
              
              {/* 🔥 Static Alert Hata Kar App.jsx ki state control trigger laga di hai */}
              <button 
                type="button" 
                onClick={onForgotPasswordClick} 
                className="text-[11px] font-semibold text-[#1866B4] hover:underline cursor-pointer border-none bg-transparent"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#1866B4] text-white text-xs font-bold rounded-xl border-none shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all cursor-pointer transform active:scale-[0.99]"
              >
                Login
              </button>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
}