"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";

const projects = [
  {
    title: "Synkron advanced collaboration with real-time features.",
    description: `Synkron, a SaaS project, has honed my expertise in delivering advanced collaboration solutions. With real-time updates, customizable workspaces, and seamless file management, Synkron ensures an exceptional user experience. Leveraging modern technologies like Next.js 14, Drizzle ORM, Socket.io, TypeScript, Supabase, PostgreSQL, and Shadcn UI, this app embodies the highest standards of productivity and innovation.`,
    image: "/project-1.webp",
    stack: [
      "/nextjs.webp",
      "/supabase.webp",
      "/drizzle.svg",
      "/tailwind.svg",
      "/postgresql.svg",
      "/shadcn.webp",
      "/react.webp",
      "/typescript.svg",
      "/figma.svg",
      "/vercel.webp",
      "/html-5.webp",
      "/css-3.webp",
      "/github.svg",
    ],
  },
  {
    title:
      "Presenting a real-time messaging with chat and management features.",
    description: `A Real-time messaging with advanced chat and management features. This Next.js-based application supports one-on-one messaging, group chat creation, and profile management. Leveraging Prisma, MongoDB, NextAuth, and Pusher, it delivers robust performance and real-time capabilities. When you use this chat app, you can be confident that your project meets the highest standards of performance and reliability.`,
    image: "/project-2.webp",
    stack: [
      "/nextjs.webp",
      "/supabase.webp",
      "/drizzle.svg",
      "/tailwind.svg",
      "/postgresql.svg",
      "/shadcn.webp",
      "/react.webp",
      "/typescript.svg",
      "/figma.svg",
      "/vercel.webp",
      "/html-5.webp",
      "/css-3.webp",
      "/github.svg",
    ],
  },
  {
    title:
      "Engaging content discovery with infinite scrolling, custom feeds, and seamless voting features.",
    description: `Engaging content discovery with infinite scrolling, custom feeds, and seamless voting features. This application offers a user-friendly experience similar to Reddit, allowing users to explore and interact with content effortlessly. With features designed to enhance user engagement and interaction, the app ensures a dynamic and interactive experience. Built with a focus on performance and scalability, this upvote app guarantees your project meets the highest standards of engagement and functionality.`,
    image: "/project-4.webp",
    stack: [
      "/nextjs.webp",
      "/supabase.webp",
      "/drizzle.svg",
      "/tailwind.svg",
      "/postgresql.svg",
      "/shadcn.webp",
      "/react.webp",
      "/typescript.svg",
      "/figma.svg",
      "/vercel.webp",
      "/html-5.webp",
      "/css-3.webp",
      "/github.svg",
    ],
  },
  {
    title: "Effortless form creation and management with drag-and-drop",
    description: `Effortless form creation and management with drag-and-drop functionality. This application simplifies the process of building and customizing forms, offering intuitive drag-and-drop features, theme toggling, and a personalized dashboard. Designed to enhance productivity and user experience, the app ensures your project meets the highest standards of efficiency and ease of use.`,
    image: "/project-3.webp",
    stack: [
      "/nextjs.webp",
      "/supabase.webp",
      "/drizzle.svg",
      "/tailwind.svg",
      "/postgresql.svg",
      "/shadcn.webp",
      "/react.webp",
      "/typescript.svg",
      "/figma.svg",
      "/vercel.webp",
      "/html-5.webp",
      "/css-3.webp",
      "/github.svg",
    ],
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-300vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            // markers: true,
            scrub: 0.6,
            pin: true,
          },
        }
      );
      return () => {
        pin.kill();
      };
    }
  }, []);

  useGSAP(() => {
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-section",
        start: "top 70%",
        end: "top 0%",
      },
    });
    tl2.from(
      ".project-text",
      {
        y: 300,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
      },
      "a"
    );
    tl2.to(
      ".project-stroke",
      {
        width: "80%",
        ease: "power1.in",
        delay: 0.8,
      },
      "a"
    );
    tl2.from(
      ".project-showcase",
      {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "power1.in",
      },
      "a"
    );
  }, []);

  return (
    <section className="scroll-section-outer project-section">
      <div
        className="w-[30%]
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/50
          -z-10
          top-22
        "
      />
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="scroll-section-inner flex flex-col md:flex-row"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="scroll-section py-10 justify-center items-center container gap-6 lg:gap-16 flex flex-col-reverse md:flex-row"
            >
              <div className="md:w-[50%] w-full">
                <div className="relative project-text">
                  <span className="text-sm lg:text-base">Tech Expertise</span>
                  <div className="absolute w-0 project-stroke h-[2px] bg-gradient-to-r from-fuchsia-500 to-cyan-500 transform -translate-x-1/2 -translate-y-1/2 top-[50%] left-[60%]"></div>
                </div>
                <div className="flex gap-5 lg:gap-10 flex-col mt-4">
                  <h3 className="text-[1.4rem] leading-tight lg:text-[2.5rem] lg:leading-[2.25rem] font-extrabold project-text">
                    {project.title}
                  </h3>
                  <p className="text-sm lg:text-lg text-justify project-text">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-5 project-text">
                    <Button variant="secondary">
                      <Link
                        href="/"
                        className="flex items-center gap-5 text-lg"
                      >
                        <FaGithub />
                        Github
                      </Link>
                    </Button>
                    <Button variant="secondary">
                      <Link
                        href="/"
                        className="flex items-center gap-5 text-lg"
                      >
                        <FaArrowUpRightFromSquare />
                        Visit Site
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="md:w-[50%] w-full p-4 flex flex-col gap-6 project-showcase border shadow-2xl shadow-indigo-600/50 rounded-lg min-h-[60vh]">
                <div className="relative w-full h-[35vh]">
                  <Image
                    src={project.image}
                    fill
                    alt={`project-${index + 1}`}
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h4 className="text-xl font-semibold underline">Tech Stack</h4>
                <div className="flex items-center gap-4 flex-wrap">
                  {project.stack.map((tech, i) => (
                    <Image
                      key={i}
                      src={tech}
                      width={50}
                      height={50}
                      objectFit="cover"
                      className="p-2 bg-white rounded-full"
                      alt={`tech-${i}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
