import React from 'react'
import { motion } from 'framer-motion'
const ProgressPage = () => {
  return (
    <motion.div
    initial={{ x: "100vw" }}
    animate={{ x: 0 }}
    transition={{ type: "spring", stiffness: 100}}
    style={{ textAlign: "center", padding:"2rem" }}
    >
        <h2>Track your Progress.</h2>
        <p>Feature in progress. Stay tuned!</p>
    </motion.div>
  );
};

export default ProgressPage;