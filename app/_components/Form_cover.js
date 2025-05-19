import { motion } from "framer-motion";

export default function Form_cover({ handleNext }) {
  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0 }}
          className="text-2xl font-bold mb-8 text-gray-700"
        >
          Hi! Welcome to
          <span className="bg-gradient-to-r from-[#0fa3b1] to-[#f7a072] bg-clip-text text-transparent font-bold">
            {" "}
            Papertrove.ai{" "}
          </span>
        </motion.div>
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-[18px] mb-4 text-gray-700"
        >
          Let
          <span className="bg-gradient-to-r from-[#0fa3b1] to-[#f7a072] bg-clip-text text-transparent font-bold">
            {" "}
            Papertrove{" "}
          </span>
          be your personal companion when it comes to finding new and exciting
          research.
        </motion.div>
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-[18px] mb-4 text-gray-700 justify-center"
        >
          Set your preferences, and wait for the latest research digest to land
          in your inbox! Handpicked articles fresh off the press, all tailored
          to your interests by a little ML algorithm running behind the scenes.
        </motion.div>
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="text-[18px] mb-8 text-gray-700 justify-center"
        >
          And it's free! All you need to do is fill out one tiny form, so...
        </motion.div>
      </div>

      <div className="w-full flex justify-left">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          onClick={handleNext}
          className="bg-[#0fa3b1] text-white text-[18px] px-6 py-2 rounded shadow-md origin-top-left transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          Let's start! (Works best on a computer.)
        </motion.button>
      </div>
    </>
  );
}
