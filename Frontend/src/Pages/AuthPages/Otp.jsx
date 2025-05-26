import React from "react";

const Otp = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-100 dark:bg-[#0a081f] px-4">
      <div className="w-full max-w-md bg-white dark:bg-[#1a1a2e] p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Enter OTP
        </h2>

        <form className="space-y-5">
          {/* OTP Input (6 boxes) */}
          <div className="flex justify-between gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                maxLength={1}
                type="text"
                className="w-12 h-12 text-center text-xl border rounded-lg dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#0f0f1c] dark:text-white"
              />
            ))}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#4fd1d9] hover:bg-[#417678] text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Verify OTP
          </button>
        </form>

        {/* Info */}
        <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
          Didn't receive code?{" "}
          <a href="#" className="text-[#4fd1d9] font-bold hover:underline">
            Resend
          </a>
        </p>
      </div>
    </div>
  );
};

export default Otp;
