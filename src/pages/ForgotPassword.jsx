import { useState } from "react";

// 🔥 onGoToOTP prop ko yahan receive kiya hai
export default function ForgotPassword({ onBackToLogin, onGoToOTP }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // 🔥 Submit hone par direct OTP verification page open hoga
      if (onGoToOTP) onGoToOTP();
    }
  };

  return (
    // Edge-to-edge Full Screen Wrapper Layout
    <div className="flex min-h-screen w-full bg-white font-sans overflow-hidden">
      
      {/* ❄️ Left Section: Full Height Snow Thrower Image */}
      <div className="w-1/2 relative hidden md:block min-h-screen">
        <img 
          src="/images/reset.jpg" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Snow Removal Service"
        />
        <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
      </div>

      {/* 📝 Right Section: Full Height Form Panel */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 sm:px-16 lg:px-24 bg-white min-h-screen relative">
        
        <button 
          type="button"
          onClick={onBackToLogin}
          className="absolute left-8 sm:left-16 lg:left-24 top-12 w-9 h-9 rounded-full border border-gray-100 bg-[#F0F4F8] flex items-center justify-center cursor-pointer text-slate-700 hover:bg-slate-200 transition-all font-bold text-sm border-none shadow-sm"
        >
          ←
        </button>

        <div className="w-full max-w-md">
          <h2 className="text-[32px] font-bold text-slate-900 mb-1 tracking-tight text-left">
            Forgot Password
          </h2>
          <p className="text-[12px] text-gray-400 font-medium mb-8 text-left">
            Please enter your email to reset your password
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-2 text-left">
                Email Address
              </label>
              <div className="relative">
                <input 
                  type="email" 
                  id="email"            // 🔥 Added for accessibility
                  name="email"          // 🔥 Added for browser autofill
                  autoComplete="email"  // 🔥 Added for better browser support
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-4 pr-10 text-xs outline-none focus:border-[#1866B4] text-slate-800 transition-all"
                  required
                />
                <span className="absolute right-3.5 top-3.5 text-gray-400 text-sm pointer-events-none">
                  
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                className="w-full py-3.5 bg-[#1866B4] text-white font-bold rounded-xl text-xs cursor-pointer hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all transform active:scale-[0.99] border-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}