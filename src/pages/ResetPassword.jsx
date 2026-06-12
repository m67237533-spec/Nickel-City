import { useState } from "react";

export default function ResetPassword({ onBackToOTP, onResetSuccess }) {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword && password.length > 0) {
            alert("Password reset successfully!");
            if (onResetSuccess) onResetSuccess(); // Reset ke baad Login page par bhej dein
        } else {
            alert("Passwords do not match or are empty!");
        }
    };

    return (
        <div className="flex min-h-screen w-full bg-white font-sans overflow-hidden">
            {/* Left Image Section */}
            <div className="w-1/2 relative hidden md:block min-h-screen">
                <img
                    src="/images/reset.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Reset Password"
                />
                <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
            </div>

            {/* Right Form Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 sm:px-16 lg:px-24 bg-white min-h-screen relative">
                <button onClick={onBackToOTP} className="absolute left-8 top-12 w-9 h-9 rounded-full bg-[#F0F4F8] border-none cursor-pointer">←</button>

                <div className="w-full max-w-md">
                    <h2 className="text-[32px] font-bold text-slate-900 mb-1 text-left">Reset Password</h2>
                    <p className="text-[12px] text-gray-400 mb-8 text-left">Please type your new password</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-2 text-left">Password</label>
                            <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-gray-200 rounded-xl py-3 pl-4 text-xs outline-none focus:border-[#1866B4]" required />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-2 text-left">Re-Type Password</label>
                            <input type="password" placeholder="••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full border border-gray-200 rounded-xl py-3 pl-4 text-xs outline-none focus:border-[#1866B4]" required />
                        </div>

                        <button type="submit" className="w-full py-3.5 bg-[#1866B4] text-white font-bold rounded-xl text-xs cursor-pointer hover:bg-blue-700 border-none mt-4">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}