"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  image: string;
  stack: string[];
  links: {
    github: string;
    site: string;
  };
}

const projects = [
  {
    title: "Synkron: A SaaS platform for collaborative workspaces",
    description: `Synkron, a SaaS project, has honed my expertise in delivering advanced collaboration solutions. With real-time updates, customizable workspaces, and seamless file management.`,
    image: "/project-1.webp",
    stack: [
      "Next.js",
      "Tailwind",
      "Supabase",
      "Drizzle ORM",
      "Socket.io",
      "Shadcn UI",
      "PostgreSQL",
      "Vercel",
      "GitHub",
    ],
    links: {
      github: "https://github.com/your-repo/upvot",
      site: "https://upvot.example.com",
    },
  },
  {
    title: "ArtiGen: An AI powered SaaS Application",
    description: `Synkron, a SaaS project, has honed my expertise in delivering advanced collaboration solutions. With real-time updates, customizable workspaces, and seamless file management.`,
    image: "/project-1.webp",
    stack: [
      "Next.js",
      "Neon DB",
      "Drizzle",
      "Tailwind",
      "PostgreSQL",
      "Shadcn UI",
      "Gemini API",
    ],
    links: {
      github: "https://github.com/your-repo/upvot",
      site: "https://upvot.example.com",
    },
  },
  {
    title: "QuickForm : A Drag & Drop Form Builder",
    description: `A Real-time messaging with advanced chat and management features. This Next.js-based application supports one-on-one messaging, group chat creation, and profile management.`,
    image: "/project-2.webp",
    stack: [
      "Next.js",
      "Prisma",
      "Shadcn UI",
      "Tailwind",
      "PostgreSQL",
      "Vercel",
      "GitHub",
      "Zod",
      "React Hook Form",
    ],
    links: {
      github: "https://github.com/your-repo/upvot",
      site: "https://upvot.example.com",
    },
  },
  {
    title: "UpVote : Content discovery with voting features.",
    description: `Engaging content discovery with infinite scrolling, custom feeds, and seamless voting features. This application offers a user-friendly experience similar to Reddit.`,
    image: "/project-4.webp",
    stack: [
      "Next.js",
      "Upstash",
      "Tailwind",
      "Redis",
      "Shadcn UI",
      "Prisma",
      "Next Auth",
      "react-query",
      "Editor JS",
    ],
    links: {
      github: "https://github.com/your-repo/upvot",
      site: "https://upvot.example.com",
    },
  },
  {
    title: "NexChat : A Realtime chatting Web Application",
    description: `Effortless form creation and management with drag-and-drop functionality. This application simplifies the process of building and customizing forms, offering intuitive drag-and-drop features.`,
    image: "/project-3.webp",
    stack: ["Next.js", "Pusher JS", "Prisma", "Axios", "Cloudinary", "Zustand", "Shadcn UI", "Node JS", "react-hook-form"],
    links: {
      github: "https://github.com/your-repo/upvot",
      site: "https://upvot.example.com",
    },
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div
      className={`project-card min-h-[60vh] bg-[#030014] w-[80vw] md:w-[60vw] flex-shrink-0 mx-6 p-6 rounded-lg shadow-lg ${
        index === projects.length - 1 ? "mr-6" : ""
      }`}
    >
      <h3 className="text-xl lg:text-4xl line-clamp-3 font-bold mb-4">
        {project.title}
      </h3>
      <div className="flex flex-col-reverse md:flex-row gap-6">
        <div className="md:w-1/2">
          <p className="text-sm lg:text-base my-4 line-clamp-4">
            {project.description}
          </p>
          <div className="flex gap-4 my-6">
            <Button variant="default">
              <Link
                href={project.links.github}
                className="flex items-center gap-2"
                target="_blank"
              >
                <FaGithub />
                Github
              </Link>
            </Button>
            <Button variant="secondary">
              <Link
                href={project.links.site}
                className="flex items-center gap-2"
                target="_blank"
              >
                <FaArrowUpRightFromSquare />
                Visit Site
              </Link>
            </Button>
          </div>
          <div className="hidden md:block">
            <h4 className="text-lg font-semibold mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-secondary px-2 text-black py-1 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-5">
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

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-section",
        // markers: true,
        start: "top 50%",
        end: "top 20%",
        scrub: 1,
      },
    });
    tl.to(".project-section", {
      backgroundColor: "#6F00FF",
      color: "#fff",
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen project-section overflow-hidden"
    >
      <h2 className="text-4xl font-bold text-center py-10">
        Here are few of my favourite <span className="underline">Projects</span>
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
