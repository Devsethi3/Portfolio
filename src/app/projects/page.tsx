import ProjectCards from "@/components/ProjectCards";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className="container">
      <div className="grid py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
      </div>
    </div>
  );
};

export default ProjectsPage;
