"use client";

import ProjectCards from "@/components/ProjectCards";
import React from "react";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Synkron: A SaaS platform for collaborative workspaces",
      description: `Synkron, a SaaS project, has honed expertise in delivering advanced collaboration solutions. Real-time updates, customizable workspaces, and file management.`,
      image: "/project-1.webp",
      techstack: [
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
        github: "https://github.com/Devsethi3/Synkron",
        site: "https://synkron.vercel.app",
      },
    },
    {
      title: "ArtiGen: An AI powered SaaS Application",
      description: `Developed an innovative AI-powered SaaS application using Next.js, TypeScript, and Gemini AI, resulting tools for content creation tasks.`,
      image: "/project-1.webp",
      techstack: [
        "Next.js",
        "Neon DB",
        "Drizzle ORM",
        "Tailwind",
        "GSAP",
        "PostgreSQL",
        "Shadcn UI",
        "Gemini API",
      ],
      links: {
        github: "https://github.com/Devsethi3/Artigen",
        site: "https://artigen-nine.vercel.app",
      },
    },
    {
      title: "QuickForm : A Drag & Drop Form Builder",
      description: `Effortless form creation and management with drag-and-drop functionality. This application simplifies the process of building and customizing forms, offering intuitive drag-and-drop features.`,
      image: "/project-2.webp",
      techstack: [
        "Next.js",
        "Prisma",
        "Shadcn UI",
        "Tailwind",
        "PostgreSQL",
        "Vercel",
        "GitHub",
        "Zod",
        "dnd Kit",
        "React Hook Form",
      ],
      links: {
        github: "https://github.com/Devsethi3/Quick-Form-Builder",
        site: "https://quick-form-one.vercel.app/",
      },
    },
    {
      title: "UpVote : Content discovery with voting features.",
      description: `Engaging content discovery with infinite scrolling, custom feeds, and seamless voting features. This application offers a user-friendly experience similar to Reddit.`,
      image: "/project-4.webp",
      techstack: [
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
        github:
          "https://github.com/Devsethi3/Upvote-Community-Driven-Discussion",
        site: "https://upvote.vercel.app",
      },
    },
    {
      title: "NexChat : A Realtime chatting Web Application",
      description: `A Real-time messaging with advanced chat and management features. This Next.js-based application supports one-on-one messaging, group chat creation, and profile management.`,

      image: "/project-3.webp",
      techstack: [
        "Next.js",
        "Pusher JS",
        "Prisma",
        "Axios",
        "Cloudinary",
        "Zustand",
        "Shadcn UI",
        "Node JS",
        "react-hook-form",
      ],
      links: {
        github: "https://github.com/Devsethi3/NexChat-Messaging-App",
        site: "https://nexchat-one.vercel.app",
      },
    },
    // {
    //   title: "Upvot : Voting App",
    //   description:
    //     "Engaging content discovery with infinite scrolling, custom feeds, and seamless voting features. This application offers a user-friendly experience similar to Reddit, allowing users to explore and interact with content effortlessly. With features designed to enhance user engagement and interaction, the app ensures a dynamic and interactive experience. Built with a focus on performance and scalability.",
    //   image: "/project-1.webp",
    //   techstack: ["Next.js", "Supabase", "Drizzle", "Tailwind", "PostgreSQL"],
    //   links: {
    //     github: "https://github.com/your-repo/upvot",
    //     site: "https://upvot.example.com",
    //   },
    // },
    // {
    //   title: "Upvot : Voting App",
    //   description:
    //     "Engaging content discovery with infinite scrolling, custom feeds, and seamless voting features. This application offers a user-friendly experience similar to Reddit, allowing users to explore and interact with content effortlessly. With features designed to enhance user engagement and interaction, the app ensures a dynamic and interactive experience. Built with a focus on performance and scalability.",
    //   image: "/project-1.webp",
    //   techstack: ["Next.js", "Supabase", "Drizzle", "Tailwind", "PostgreSQL"],
    //   links: {
    //     github: "https://github.com/your-repo/upvot",
    //     site: "https://upvot.example.com",
    //   },
    // },
    // {
    //   title: "Upvot : Voting App",
    //   description:
    //     "Engaging content discovery with infinite scrolling, custom feeds, and seamless voting features. This application offers a user-friendly experience similar to Reddit, allowing users to explore and interact with content effortlessly. With features designed to enhance user engagement and interaction, the app ensures a dynamic and interactive experience. Built with a focus on performance and scalability.",
    //   image: "/project-1.webp",
    //   techstack: ["Next.js", "Supabase", "Drizzle", "Tailwind", "PostgreSQL"],
    //   links: {
    //     github: "https://github.com/your-repo/upvot",
    //     site: "https://upvot.example.com",
    //   },
    // },
  ];

  return (
    <div className="container py-10">
      <ProjectCards projects={projects} />
    </div>
  );
};

export default ProjectsPage;
