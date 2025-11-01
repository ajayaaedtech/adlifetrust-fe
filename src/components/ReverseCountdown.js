"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ReverseCountdown = () => {
  const targetDate = new Date("2025-11-09T00:00:00"); // 🎯 Target: 4 Nov 2025
  const [timeLeft, setTimeLeft] = useState({});
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setIsComplete(true);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <AnimatePresence>
        {!isComplete ? (
          <motion.div
            key="countdown"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-white text-xl sm:text-3xl font-semibold"
          >
            {["days", "hours", "minutes", "seconds"].map((unit) => (
              <div
                key={unit}
                className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-3 sm:p-5 shadow-lg flex flex-col items-center w-20 sm:w-24"
              >
                <span className="text-3xl sm:text-4xl font-bold">
                  {timeLeft[unit] ?? "00"}
                </span>
                <span className="text-sm sm:text-base capitalize opacity-80">
                  {unit}
                </span>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.h1
              className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 1.5 }}
            >
              🎉 We Are Live 🎉
            </motion.h1>
            <p className="text-lg sm:text-2xl mt-2 text-white">
              Mind Over Miles 2025
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReverseCountdown;
