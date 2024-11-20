
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-4 sticky top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
        <div className="flex space-x-4">
          <Link href="/"><a className="text-white hover:text-blue-400">Home</a></Link>
          <Link href="/about"><a className="text-white hover:text-blue-400">About</a></Link>
          <Link href="/projects"><a className="text-white hover:text-blue-400">Projects</a></Link>
          <Link href="/contact"><a className="text-white hover:text-blue-400">Contact</a></Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
