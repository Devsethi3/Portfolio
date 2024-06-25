"use client";

import React from "react";
import { FaCode, FaRegLightbulb } from "react-icons/fa6";
import { BsPuzzleFill } from "react-icons/bs";
import { FiType } from "react-icons/fi";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import TechStack from "@/components/TechStack";
import TextSlider from "@/components/TextSlider";

const AboutPage = () => {
  const words = ["Perfectionist", "Alchemist", "Whisperer"];

  return (
    <div>
      <div>
        <section className="w-full pt-14 md:py-24 lg:pt-32 relative">
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
          <div className="text-[2rem] leading-[2rem] md:text-5xl lg:text-7xl text-center mx-auto font-bold text-neutral-600 dark:text-neutral-400">
            Meet the Maker <br />
            The Code
            <span className="ml-1 lg:ml-2">
              <FlipWords words={words} />
            </span>
            <br />
          </div>
        </section>
      </div>

      <TextSlider />

      <section className="py-10 container">
        <p className="text-2xl md:text-3xl lg:text-5xl text-center mb-12 font-bold">
          I am Dev Prasad Sethi, a seasoned Full Stack Next.js Developer based
          in India, specializing in crafting high-performance, SEO-optimized web
          applications. Leveraging Next.js&apos;s cutting-edge capabilities, I
          have consistently delivered exceptional results:
        </p>
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
        <ul className="list-disc space-y-4 text-xl lg:text-2xl pl-5 pb-8 text-gray-800 dark:text-gray-200">
          <li className="">
            <span className="font-bold text-gray-900 dark:text-white">
              Enhanced SEO strategies
            </span>
            <span className="ml-2 text-gray-700 dark:text-gray-300">
              resulting in a 68% increase in organic traffic over a 6-month
              period.
            </span>
          </li>
          <li className="">
            <span className="font-bold text-gray-900 dark:text-white">
              Implemented responsive designs
            </span>
            <span className="ml-2 text-gray-700 dark:text-gray-300">
              that improved mobile user engagement by 42%, significantly
              reducing bounce rates.
            </span>
          </li>
          <li className="">
            <span className="font-bold text-gray-900 dark:text-white">
              Optimized database queries
            </span>
            <span className="ml-2 text-gray-700 dark:text-gray-300">
              cutting API response times by 45% and enhancing overall system
              efficiency.
            </span>
          </li>
          <li className="">
            <span className="font-bold text-gray-900 dark:text-white">
              Developed and integrated custom React components
            </span>
            <span className="ml-2 text-gray-700 dark:text-gray-300">
              accelerating development cycles by 28%.
            </span>
          </li>
        </ul>

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

      <TechStack />
    </div>
  );
};

export default AboutPage;
