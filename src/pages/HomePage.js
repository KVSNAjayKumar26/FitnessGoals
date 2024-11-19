import React from 'react'
import { motion } from 'framer-motion'
const HomePage = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    style={{ textAlign: "center", padding: "2rem" }}
    >
        <h1>Welcome to Your Fitness App</h1>
        <p>Track your goals and stay motivated!</p>
    </motion.div>
  );
};

export default HomePage;