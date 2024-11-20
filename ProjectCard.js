
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, link }) => (
  <motion.div
    className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    whileHover={{ scale: 1.05 }}
  >
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <a
      href={link}
      className="text-blue-500 underline mt-2 block"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project
    </a>
  </motion.div>
);

export default ProjectCard;
