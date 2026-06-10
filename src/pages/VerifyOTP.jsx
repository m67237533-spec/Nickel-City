import { useState, useEffect } from "react";

export default function VerifyOTP({ onBackToForgot, onOTPSuccess }) {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(40); // 00:40 seconds countdown timer

  // Timer logic ring countdown
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Automatically focus next box
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (otpCode.length === 6) {
      alert(`Verifying OTP: ${otpCode}`);
      if (onOTPSuccess) onOTPSuccess();
    } else {
      alert("Please enter a valid 6-digit OTP");
    }
  };

  // Format seconds to 00:XX view
  const formatTime = (seconds) => {
    return `00:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="flex min-h-screen w-full bg-white font-sans overflow-hidden">
      
      {/* Left Section: Full Height Snow Blowing Banner Image */}
      <div className="w-1/2 relative hidden md:block min-h-screen">
        <img 
          src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=1000&q=80" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Snow Service OTP"
        />
        <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
      </div>

      {/* Right Section: OTP verification form panel */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 sm:px-16 lg:px-24 bg-white min-h-screen relative">
        
        {/* Back Arrow button (←) */}
        <button 
          type="button"
          onClick={onBackToForgot}
          className="absolute left-8 sm:left-16 lg:left-24 top-12 w-9 h-9 rounded-full border border-gray-100 bg-[#F0F4F8] flex items-center justify-center cursor-pointer text-slate-700 hover:bg-slate-200 transition-all font-bold text-sm border-none shadow-sm"
        >
          ←
        </button>

        <div className="w-full max-w-md text-center md:text-left">
          
          <h2 className="text-[32px] font-bold text-slate-900 mb-1 tracking-tight">
            Enter OTP
          </h2>
          <p className="text-[12px] text-gray-400 font-medium mb-8">
            Please enter OTP send to your email
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* 6 Digit Input Fields Boxes row */}
       {/* 6 Digit Input Fields Boxes row */}
<div className="flex justify-between gap-2 max-w-sm mx-auto md:mx-0">
  {otp.map((data, index) => (
    <input
      key={index}
      type="text"
      name={`otp-${index + 1}`}        // 🔥 Added unique name
      id={`otp-${index + 1}`}          // 🔥 Added unique id
      maxLength="1"
      value={data}
      onChange={(e) => handleChange(e.target, index)}
      onFocus={(e) => e.target.select()}
      className="w-12 h-12 border border-gray-200 rounded-xl text-center font-bold text-sm text-slate-800 outline-none focus:border-[#1866B4] transition-all"
    />
  ))}
</div>

            {/* Submit Action Button */}
            <button 
              type="submit"
              className="w-full py-3.5 bg-[#1866B4] text-white font-bold rounded-xl text-xs cursor-pointer hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all border-none"
            >
              Submit
            </button>
          </form>

          {/* Countdown Loading Circular Ring Tracker Panel */}
          <div className="mt-8 flex flex-col items-center justify-center">
            <div className="relative w-16 h-16 flex items-center justify-center">
              {/* Simple pure circular border indicator ring SVG */}
              <svg className="absolute w-full h-full transform -rotate-90">
                <circle cx="32" cy="32" r="28" stroke="#E2E8F0" strokeWidth="3" fill="transparent" />
                <circle cx="32" cy="32" r="28" stroke="#1866B4" strokeWidth="3" fill="transparent" 
                        strokeDasharray={176} strokeDashoffset={176 - (176 * timeLeft) / 40}
                        className="transition-all duration-1000" />
              </svg>
              <span className="text-[10px] font-bold text-[#1866B4]">{formatTime(timeLeft)}</span>
            </div>

            <p className="text-[11px] text-gray-400 mt-4 font-medium">
              Didn't receive OTP?{" "}
              <button 
                type="button" 
                onClick={() => setTimeLeft(40)} 
                disabled={timeLeft > 0}
                className={`font-bold border-none bg-transparent cursor-pointer ml-1 ${timeLeft > 0 ? 'text-gray-300' : 'text-[#1866B4] hover:underline'}`}
              >
                Send Again
              </button>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}