import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PopupForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    // Show popup exactly after 5 seconds of component mounting (every load/refresh)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsVisible(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Give them time to see success
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop with enhanced blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="relative w-full max-w-[480px] max-h-[calc(100vh-2rem)] overflow-y-auto rounded-[28px] bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] z-10"
          >
            {/* Top decorative gradient bar */}
            <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600" />

            <button
              onClick={handleClose}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100/80 text-slate-500 backdrop-blur-sm transition-all hover:bg-red-500 hover:text-white"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="px-6 pt-8 pb-4 text-center sm:px-8">
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Start Your Journey
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
                Join Nucleii and transform your future with expert guidance.
              </p>
            </div>

            <div className="px-6 pb-8 sm:px-8">
              {hasSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="relative mb-6">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute inset-0 rounded-full bg-green-500/20 blur-xl"
                    />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Success!</h4>
                  <p className="mt-2 text-slate-500 font-medium">
                    Our team will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-[13px] font-bold text-slate-700">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-[14px] text-slate-900 transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[13px] font-bold text-slate-700">Phone Number</label>
                      <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
                        <span className="flex items-center justify-center border-r border-slate-200 bg-slate-100 px-3 text-[13px] font-bold text-slate-500">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          placeholder="9876543210"
                          pattern="[0-9]{10}"
                          className="w-full bg-transparent px-3 py-2.5 text-[14px] text-slate-900 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[13px] font-bold text-slate-700">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-[14px] text-slate-900 transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[13px] font-bold text-slate-700">Select Course</label>
                    <div className="relative">
                      <select
                        required
                        defaultValue=""
                        className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-[14px] text-slate-900 transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                      >
                        <option value="" disabled>
                          Choose a program...
                        </option>
                        <option value="Long Term Coaching">Long Term Coaching</option>
                        <option value="PU Integrated Coaching">PU Integrated Coaching</option>
                        <option value="Foundation Course">Foundation Course</option>
                        <option value="Crash Course">Crash Course</option>
                        <option value="Tuitions">Tuitions</option>
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[13px] font-bold text-slate-700">
                      Message (Optional)
                    </label>
                    <textarea
                      placeholder="Tell us about your goals..."
                      rows={2}
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-[14px] text-slate-900 transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="!mt-6 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 text-[15px] font-bold text-white shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] transition-all hover:from-blue-700 hover:to-indigo-700 hover:shadow-[0_15px_25px_-10px_rgba(37,99,235,0.6)]"
                  >
                    Get Consultation Now
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
