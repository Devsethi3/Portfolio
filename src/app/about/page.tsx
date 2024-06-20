"use client";

import React from "react";
import { FaCode, FaRegLightbulb } from "react-icons/fa6";
import { BsPuzzleFill } from "react-icons/bs";
import { FiType } from "react-icons/fi";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const AboutPage = () => {
  const words = ["Perfectionist", "Alchemist", "Whisperer"];
  const developement = [
    {
      id: 1,
      name: "HTML",
      designation: "Software Engineer",
      image: "/html-5.webp",
    },
    {
      id: 2,
      name: "CSS",
      designation: "Product Manager",
      image: "/css-3.webp",
    },
    {
      id: 3,
      name: "JavaScript",
      designation: "Data Scientist",
      image: "/js.png",
    },
    {
      id: 4,
      name: "TypeScript",
      designation: "UX Designer",
      image: "/typescript.svg",
    },
    {
      id: 5,
      name: "React JS",
      designation: "Soap Developer",
      image: "/react.webp",
    },
    {
      id: 6,
      name: "Next JS",
      designation: "The Explorer",
      image: "/nextjs.webp",
    },
    {
      id: 7,
      name: "Tailwind CSS",
      designation: "The Explorer",
      image: "/tailwind.svg",
    },
    {
      id: 8,
      name: "Firebase",
      designation: "The Explorer",
      image: "/firebase.svg",
    },
    // {
    //   id: 9,
    //   name: "Appwrite",
    //   designation: "The Explorer",
    //   image: "/appwrite.png",
    // },
    {
      id: 10,
      name: "Prisma ORM",
      designation: "The Explorer",
      image: "/prisma.png",
    },
    {
      id: 11,
      name: "Drizzle ORM",
      designation: "The Explorer",
      image: "/drizzle.svg",
    },
    {
      id: 12,
      name: "Convex",
      designation: "The Explorer",
      image: "/convex.png",
    },
    {
      id: 13,
      name: "Postgres SQL",
      designation: "The Explorer",
      image: "/postgresql.svg",
    },
    {
      id: 14,
      name: "Mongo DB",
      designation: "The Explorer",
      image: "/mongodb.webp",
    },
  ];

  const tools = [
    {
      id: 1,
      name: "Shadcn UI",
      designation: "The Explorer",
      image: "/shadcn.webp",
    },
    {
      id: 2,
      name: "Figma",
      designation: "The Explorer",
      image: "/figma.svg",
    },
    {
      id: 3,
      name: "VS Code",
      designation: "The Explorer",
      image: "/vscode.svg",
    },
    {
      id: 4,
      name: "Vercel",
      designation: "The Explorer",
      image: "/vercel.png",
    },
    {
      id: 5,
      name: "Github",
      designation: "The Explorer",
      image: "/github.svg",
    },
    {
      id: 6,
      name: "GSAP",
      designation: "The Explorer",
      image: "/gsap.png",
    },
    {
      id: 7,
      name: "Postman",
      designation: "The Explorer",
      image: "/postman.png",
    },
    {
      id: 8,
      name: "Next Auth",
      designation: "The Explorer",
      image: "/nextauth.png",
    },
    {
      id: 9,
      name: "Google Cloud",
      designation: "The Explorer",
      image: "/google-cloud.svg",
    },
  ];

  return (
    <div>
      <div>
        <section className="w-full pt-14 md:py-24 lg:pt-32 container relative">
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
          <Image
            src="/stars.png"
            width={50}
            height={50}
            alt="stars"
            loading="lazy"
            className="absolute lg:top-[30%] lg:left-[25%] top-[5%] left-[5%]"
          />
          <Image
            src="/star-icon.png"
            width={50}
            height={50}
            alt="star-icon"
            loading="lazy"
            className="absolute lg:top-[20%] bottom-[-20%] lg:right-[25%] right-0 -z-10 rotate-180"
          />
          <div className="text-4xl md:text-5xl lg:text-7xl text-center mx-auto font-bold text-neutral-600 dark:text-neutral-400">
            Meet the Maker <br />
            The Code
            <span className="ml-1 lg:ml-2">
              <FlipWords words={words} />
            </span>
            <br />
          </div>
        </section>
      </div>

      <div className="overflow-hidden relative h-[40vh] pt-12">
        <div className="w-full absolute z-[5] -rotate-3 bg-emerald-500 py-6 sliding-text">
          <div className="flex items-center sliding-wrapper-reverse">
            <span className="text-3xl md:text-4xl lg:text-5xl mx-5 whitespace-nowrap font-extrabold text-white sliding-span">
              I am Dev Prasad Sethi
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl mx-5 whitespace-nowrap font-extrabold text-white sliding-span">
              I am Dev Prasad Sethi
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl mx-5 whitespace-nowrap font-extrabold text-white sliding-span">
              I am Dev Prasad Sethi
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl mx-5 whitespace-nowrap font-extrabold text-white sliding-span">
              I am Dev Prasad Sethi
            </span>
          </div>
        </div>
        <div className="w-full absolute z-[10] bottom-[20%] bg-indigo-500 rotate-3 py-6 sliding-text">
          <div className="flex items-center sliding-wrapper">
            <span className="text-3xl md:text-4xl lg:text-5xl mx-5 whitespace-nowrap font-extrabold text-white sliding-span">
              I am Dev Prasad Sethi
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl mx-5 whitespace-nowrap font-extrabold text-white sliding-span">
              I am Dev Prasad Sethi
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl mx-5 whitespace-nowrap font-extrabold text-white sliding-span">
              I am Dev Prasad Sethi
            </span>
            <span className="text-3xl md:text-4xl lg:text-5xl mx-5 whitespace-nowrap font-extrabold text-white sliding-span">
              I am Dev Prasad Sethi
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes slide-reverse {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .sliding-text {
          overflow: hidden;
        }

        .sliding-wrapper {
          display: flex;
          white-space: nowrap;
          animation: slide 20s linear infinite;
        }

        .sliding-wrapper-reverse {
          display: flex;
          white-space: nowrap;
          animation: slide-reverse 20s linear infinite;
        }

        .sliding-span {
          display: inline-block;
        }
      `}</style>

      <section className="py-10 container">
        <p className="text-2xl md:text-3xl lg:text-5xl text-center mb-12 font-bold">
          Hi! I'm Dev Sethi, a full stack web developer and a freelance UI/UX
          designer. I've been a part of Sheryians for 2 years and taught more
          than 500+ students full-stack web development, As a web developer, my
          best work is Sheryians's website which is a course-selling website
          similar to awwwards or udemy. Along with that I've also created more
          than 50+ websites for my clients in Bhopal.
        </p>
        <div className="grid gap-4 text-white">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-indigo-600 p-4 flex flex-col items-center justify-center">
              <FaCode className="w-8 h-8" />
              <h3 className="text-xl font-bold mt-2">Coding</h3>
              <p className="text-sm lg:text-base mt-2 text-center">
                Proficient in modern web development technologies.
              </p>
            </div>
            <div className="rounded-lg bg-rose-500 p-4 flex flex-col items-center justify-center">
              <FiType className="w-8 h-8" />
              <h3 className="text-xl font-bold mt-2">Design</h3>
              <p className="text-sm lg:text-base mt-2 text-center">
                Passionate about creating visually appealing designs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-emerald-600 p-4 flex flex-col items-center justify-center">
              <BsPuzzleFill className="w-8 h-8" />
              <h3 className="text-xl font-bold mt-2 text-center">
                Problem Solving
              </h3>
              <p className="text-sm lg:text-base mt-2 text-center">
                Enjoy tackling complex challenges and finding creative
                solutions.
              </p>
            </div>
            <div className="rounded-lg bg-cyan-600 p-4 flex flex-col items-center justify-center">
              <FaRegLightbulb className="w-8 h-8" />
              <h3 className="text-xl font-bold mt-2">Innovation</h3>
              <p className="text-sm lg:text-base mt-2 text-center">
                Constantly exploring new ideas and technologies to push the
                boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-10">
        <h2 className="text-4xl md:text-6xl lg:text-8xl mb-10 font-extrabold">
          Things I'm <span className="text-emerald-500 underline">good</span> at
        </h2>
        <span className="text-base lg:text-xl px-3 lg:px-4 py-2 border-2 dark:border-gray-400 border-gray-200 bg-secondary rounded-lg">
          Development
        </span>
        <div className="flex flex-wrap items-center gap-5 my-10">
          {developement.map((dev) => (
            <div className="relative w-12 h-12 lg:w-20 lg:h-20" key={dev.id}>
              <Image
                src={dev.image}
                alt={dev.name}
                fill
                className="object-cover rounded-xl p-2 dark:bg-white bg-secondary border"
              />
            </div>
          ))}
        </div>
        <span className="text-base lg:text-xl px-3 lg:px-4 py-2 border-2 dark:border-gray-400 border-gray-200 bg-secondary rounded-lg">
          Tools
        </span>
        <div className="flex flex-wrap items-center gap-5 my-10">
          {tools.map((tool) => (
            <div className="relative w-12 h-12 lg:w-20 lg:h-20" key={tool.id}>
              <Image
                src={tool.image}
                alt={tool.name}
                fill
                className="object-cover rounded-xl p-2 dark:bg-white bg-secondary border"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

{
  /* <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl dark:text-white/90  font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="max-w-[600px] text-gray-800 dark:text-gray-400 text-justify md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm a passionate frontend developer with a keen eye for design
                and a love for creating intuitive and visually appealing user
                experiences. With a strong foundation in HTML, CSS, and
                JavaScript, I'm constantly exploring new technologies and
                frameworks to enhance my skills and deliver exceptional results.
              </p>
            </div>
            <div className="grid gap-4 text-white">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-indigo-600 p-4 flex flex-col items-center justify-center">
                  <FaCode className="w-8 h-8" />
                  <h3 className="text-xl font-bold mt-2">Coding</h3>
                  <p className="text-sm lg:text-base mt-2 text-center">
                    Proficient in modern web development technologies.
                  </p>
                </div>
                <div className="rounded-lg bg-rose-500 p-4 flex flex-col items-center justify-center">
                  <FiType className="w-8 h-8" />
                  <h3 className="text-xl font-bold mt-2">Design</h3>
                  <p className="text-sm lg:text-base mt-2 text-center">
                    Passionate about creating visually appealing designs.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-emerald-600 p-4 flex flex-col items-center justify-center">
                  <BsPuzzleFill className="w-8 h-8" />
                  <h3 className="text-xl font-bold mt-2 text-center">
                    Problem Solving
                  </h3>
                  <p className="text-sm lg:text-base mt-2 text-center">
                    Enjoy tackling complex challenges and finding creative
                    solutions.
                  </p>
                </div>
                <div className="rounded-lg bg-cyan-600 p-4 flex flex-col items-center justify-center">
                  <FaRegLightbulb className="w-8 h-8" />
                  <h3 className="text-xl font-bold mt-2">Innovation</h3>
                  <p className="text-sm lg:text-base mt-2 text-center">
                    Constantly exploring new ideas and technologies to push the
                    boundaries.
                  </p>
                </div>
              </div>
            </div>
          </div> */
}
