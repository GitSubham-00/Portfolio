
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-20 text-center">
      <motion.h1
        className="text-3xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>
      <motion.p
        className="mt-4 text-gray-600 text-lg"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        I am Subham Maity an aspiring Data Analyst and Engineer with a passion for solving
        complex problems using data. I love working with tools like Python,
        SQL, and Power BI to uncover insights and build impactful solutions.
      </motion.p>
    </div>
  );
}
