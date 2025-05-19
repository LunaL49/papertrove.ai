"use client";

import { motion } from "framer-motion";

export default function Thank_you() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full h-4/5 rounded-[4rem] overflow-hidden border my-5 bg-gray-50 border-gray-200 shadow-2xl">
        <div className="flex flex-col items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0 }}
            className="text-xl font-bold text-gray-700 text-center mb-2"
          >
            All done! Thank you for using
            <span className="bg-gradient-to-r from-[#0fa3b1] to-[#f7a072] bg-clip-text text-transparent font-bold">
              {" "}
              Papertrove.ai
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0 }}
            className="text-md text-gray-500 text-center mb-2"
          >
            Now sit back, relax - your research digest will be with you soon.
          </motion.div>
        </div>
      </div>
    </div>
  );
}
