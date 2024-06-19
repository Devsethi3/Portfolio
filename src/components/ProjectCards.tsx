"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface ProjectCardsProps {
  title: string;
  description: string;
  image: string;
  techstack: string[];
  links: { github: string; site: string };
}

const ProjectCards: React.FC<ProjectCardsProps> = ({
  title,
  description,
  image,
  techstack,
  links,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
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
      <p className="text-sm lg:text-lg truncate mt-2">{description}</p>
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
      <div className="flex mt-4 gap-4">
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          GitHub
        </a>
        <a
          href={links.site}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Visit Site
        </a>
      </div>
    </div>
  );
};

export default ProjectCards;