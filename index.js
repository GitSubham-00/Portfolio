
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="text-center py-20">
      <motion.h1
        className="text-4xl font-bold"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        className="mt-4 text-gray-600 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Aspiring Data Analyst and Engineer | Building insights from data
      </motion.p>
      <motion.div
        className="mt-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <a
          href="/projects"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          View My Projects
        </a>
      </motion.div>
    </div>
  );
}
