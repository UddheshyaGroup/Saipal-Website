import React from "react";
import { motion } from "framer-motion";

export default function TypingIndicator({ botName = "Saipal Assistant" }) {
  const dotVariants = {
    initial: { y: 0 },
    animate: { y: -6 },
  };

  const dotTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="flex items-end gap-2.5 my-3"
    >
      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-[#2E3192] text-white flex items-center justify-center text-xs font-bold shadow-md shrink-0">
        AI
      </div>
      <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-1.5">
        <span className="text-xs text-slate-500 font-medium mr-1.5">{botName} is typing</span>
        <motion.span
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{ ...dotTransition, delay: 0 }}
          className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]"
        />
        <motion.span
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{ ...dotTransition, delay: 0.15 }}
          className="w-1.5 h-1.5 rounded-full bg-[#2E3192]"
        />
        <motion.span
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{ ...dotTransition, delay: 0.3 }}
          className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]"
        />
      </div>
    </motion.div>
  );
}
