"use client";

import ProjectCards from "@/components/ProjectCards";
import React from "react";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Synkron advanced collaboration with real-time features.",
      description:
        "Synkron, a SaaS project, has honed my expertise in delivering advanced collaboration solutions. With real-time updates, customizable workspaces, and seamless file management, Synkron ensures an exceptional user experience. Leveraging modern technologies like Next.js 14, Drizzle ORM, Socket.io, TypeScript, Supabase, PostgreSQL, and Shadcn UI, this app embodies the highest standards of productivity and innovation.",
    },
    {
      title:
        "Presenting a real-time messaging with chat and management features.",
      description:
        "A Real-time messaging with advanced chat and management features. This Next.js-based application supports one-on-one messaging, group chat creation, and profile management. Leveraging Prisma, MongoDB, NextAuth, and Pusher, it delivers robust performance and real-time capabilities. When you use this chat app, you can be confident that your project meets the highest standards of performance and reliability.",
    },
    {
      title:
        "Engaging content discovery with infinite scrolling, custom feeds, and seamless voting features.",
      description:
        "Engaging content discovery with infinite scrolling, custom feeds, and seamless voting features. This application offers a user-friendly experience similar to Reddit, allowing users to explore and interact with content effortlessly. With features designed to enhance user engagement and interaction, the app ensures a dynamic and interactive experience. Built with a focus on performance and scalability, this upvote app guarantees your project meets the highest standards of engagement and functionality.",
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
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
