"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";

interface ProjectCardsProps {
  title: string;
  description: string;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ title, description }) => {
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
      className="project-card p-5 rounded-lg shadow-lg transition-transform transform-gpu perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ProjectCards;
