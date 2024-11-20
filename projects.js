
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Sales Dashboard",
      description: "A Tableau dashboard for analyzing sales performance.",
      link: "https://github.com/yourusername/sales-dashboard",
    },
    {
      title: "ETL Pipeline",
      description: "An ETL pipeline for processing and transforming raw data.",
      link: "https://github.com/yourusername/etl-pipeline",
    },
  ];

  return (
    <div className="py-20">
      <h1 className="text-3xl font-bold text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
