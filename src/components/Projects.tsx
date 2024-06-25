"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  image: string;
  stack: string[];
}

const projects = [
  {
    title: "Synkron advanced collaboration with real-time features.",
    description: `Synkron, a SaaS project, has honed my expertise in delivering advanced collaboration solutions. With real-time updates, customizable workspaces, and seamless file management.`,
    image: "/project-1.webp",
    stack: [
      "/nextjs.webp",
      "/supabase.png",
      "/drizzle.svg",
      "/tailwind.svg",
      "/postgresql.svg",
      "/shadcn.webp",
      "/react.webp",
      "/typescript.svg",
      "/figma.svg",
      "/vercel.png",
      "/html-5.webp",
      "/css-3.webp",
      "/github.svg",
    ],
  },
  {
    title:
      "Presenting a real-time messaging with chat and management features.",
    description: `A Real-time messaging with advanced chat and management features. This Next.js-based application supports one-on-one messaging, group chat creation, and profile management.`,
    image: "/project-2.webp",
    stack: [
      "/nextjs.webp",
      "/supabase.png",
      "/drizzle.svg",
      "/tailwind.svg",
      "/postgresql.svg",
      "/shadcn.webp",
      "/react.webp",
      "/typescript.svg",
      "/figma.svg",
      "/vercel.png",
      "/html-5.webp",
      "/css-3.webp",
      "/github.svg",
    ],
  },
  {
    title:
      "Engaging content discovery with infinite scrolling, custom feeds, and seamless voting features.",
    description: `Engaging content discovery with infinite scrolling, custom feeds, and seamless voting features. This application offers a user-friendly experience similar to Reddit.`,
    image: "/project-4.webp",
    stack: [
      "/nextjs.webp",
      "/supabase.png",
      "/drizzle.svg",
      "/tailwind.svg",
      "/postgresql.svg",
      "/shadcn.webp",
      "/react.webp",
      "/typescript.svg",
      "/figma.svg",
      "/vercel.png",
      "/html-5.webp",
      "/css-3.webp",
      "/github.svg",
    ],
  },
  {
    title: "Effortless form creation and management with drag-and-drop",
    description: `Effortless form creation and management with drag-and-drop functionality. This application simplifies the process of building and customizing forms, offering intuitive drag-and-drop features.`,
    image: "/project-3.webp",
    stack: [
      "/nextjs.webp",
      "/supabase.png",
      "/drizzle.svg",
      "/tailwind.svg",
      "/postgresql.svg",
      "/shadcn.webp",
      "/react.webp",
      "/typescript.svg",
      "/figma.svg",
      "/vercel.png",
      "/html-5.webp",
      "/css-3.webp",
      "/github.svg",
    ],
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div className="project-card min-h-[60vh] w-[80vw] md:w-[60vw] flex-shrink-0 mx-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h3 className="text-2xl line-clamp-3 font-bold mb-4">{project.title}</h3>
      <div className="flex flex-col-reverse md:flex-row gap-6">
        <div className="md:w-1/2">
          <p className="text-sm mb-4 line-clamp-2">{project.description}</p>
          <div className="flex gap-4 mb-4">
            <Button variant="default">
              <Link href="/" className="flex items-center gap-2">
                <FaGithub />
                Github
              </Link>
            </Button>
            <Button variant="secondary">
              <Link href="/" className="flex items-center gap-2">
                <FaArrowUpRightFromSquare />
                Visit Site
              </Link>
            </Button>
          </div>
          <div className="hidden md:block">
            <h4 className="text-lg font-semibold mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <Image
                  key={i}
                  src={tech}
                  width={30}
                  height={30}
                  className="bg-white rounded-full p-1"
                  alt={`tech-${i}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative w-full aspect-video">
            <Image
              src={project.image}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              alt={`project-${index + 1}`}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current || !containerRef.current) return;

    const scrollElement = scrollRef.current;
    const containerElement = containerRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerElement,
        start: "top top",
        end: () => `+=${scrollElement.scrollWidth - window.innerWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(scrollElement, {
      x: () => -(scrollElement.scrollWidth - window.innerWidth),
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen overflow-hidden bg-gray-100 dark:bg-gray-900"
    >
      <h2 className="text-4xl font-bold text-center py-10">
        Here are few of my favourite{" "}
        <span className="text-emerald-500 underline">Projects</span>
      </h2>
      <div ref={scrollRef} className="flex items-center h-[calc(100vh-8rem)]">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

// Improve the animation and styles in this component for better user experience. It should be responsive for every screen sizes
