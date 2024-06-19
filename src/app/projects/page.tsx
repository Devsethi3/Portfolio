"use client";

import ProjectCards from "@/components/ProjectCards";
import React from "react";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Synkron",
      description:
        "Synkron, a SaaS project, has honed my expertise in delivering advanced collaboration solutions. With real-time updates, customizable workspaces, and seamless file management, Synkron ensures an exceptional user experience. Leveraging modern technologies like Next.js 14, Drizzle ORM, Socket.io, TypeScript, Supabase, PostgreSQL, and Shadcn UI, this app embodies the highest standards of productivity and innovation.",
      image: "/project-1.webp",
      techstack: [
        "Next.js",
        "Supabase",
        "Drizzle",
        "Tailwind",
        "PostgreSQL",
        "Shadcn",
        "React",
        "TypeScript",
      ],
      links: {
        github: "https://github.com/your-repo/synkron",
        site: "https://synkron.example.com",
      },
    },
    {
      title: "NexChat : Chatting App",
      description:
        "A Real-time messaging with advanced chat and management features. This Next.js-based application supports one-on-one messaging, group chat creation, and profile management. Leveraging Prisma, MongoDB, NextAuth, and Pusher, it delivers robust performance and real-time capabilities. When you use this chat app, you can be confident that your project meets the highest standards of performance and reliability.",
      image: "/project-2.webp",
      techstack: [
        "Next.js",
        "Prisma",
        "MongoDB",
        "NextAuth",
        "Pusher",
        "React",
        "TypeScript",
        "Tailwind",
      ],
      links: {
        github: "https://github.com/your-repo/nexchat",
        site: "https://nexchat.example.com",
      },
    },
    {
      title: "Upvot : Voting App",
      description:
        "Engaging content discovery with infinite scrolling, custom feeds, and seamless voting features. This application offers a user-friendly experience similar to Reddit, allowing users to explore and interact with content effortlessly. With features designed to enhance user engagement and interaction, the app ensures a dynamic and interactive experience. Built with a focus on performance and scalability.",
      image: "/project-3.webp",
      techstack: [
        "Next.js",
        "Supabase",
        "Drizzle",
        "Tailwind",
        "PostgreSQL",
      ],
      links: {
        github: "https://github.com/your-repo/upvot",
        site: "https://upvot.example.com",
      },
    },
  ];

  return (
    <div className="container">
      <div className="grid py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCards
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            techstack={project.techstack}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
