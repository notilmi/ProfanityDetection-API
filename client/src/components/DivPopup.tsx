import React from "react";
import { motion } from "framer-motion";

const DivPopup = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      exit={{ scale: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default DivPopup;
