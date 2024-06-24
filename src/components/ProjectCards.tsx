"use client";

import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techstack: string[];
  links: { github: string; site: string };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  techstack,
  links,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      gsap.to(card, {
        rotationY: (x / rect.width - 0.5) * 30,
        rotationX: (0.5 - y / rect.height) * 30,
        ease: "power1.out",
      });
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        ease: "power1.out",
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className="project-card p-5 rounded-lg flex flex-col justify-between border shadow-2xl shadow-indigo-600/10 transition-transform transform-gpu perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-[30vh]">
        <Image
          src={image}
          alt={title}
          fill
          loading="lazy"
          className="rounded-lg object-cover"
        />
      </div>
      <h3 className="text-xl lg:text-2xl font-bold mt-4">{title}</h3>
      <p className="text-sm lg:text-lg mt-2 line-clamp-2">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {techstack.map((tech, index) => (
          <span
            key={index}
            className="bg-secondary px-2 py-1 rounded-md text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex mt-4 gap-4 justify-end">
        <Button variant="secondary" size="icon">
          <FaGithub size={20} />
        </Button>
        <Button className="flex items-center gap-2">
          Visit Site
          <MdArrowOutward size={20} />
        </Button>
      </div>
    </div>
  );
};

interface ProjectCardsProps {
  projects: ProjectCardProps[];
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              className="mx-1"
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCards;
