import React from "react";
import { FaCode, FaRegLightbulb } from "react-icons/fa6";
import { BsPuzzleFill } from "react-icons/bs";
import { FiType } from "react-icons/fi";
import { FlipWords } from "@/components/ui/flip-words";

const AboutPage = () => {
  const words = [
    "responsive",
    "innovative",
    "efficient",
    "intuitive",
    "user-friendly",
    "scalable",
    "interactive",
    "fast",
    "reliable",
    "creative",
  ];

  return (
    <div>
      <div>
        <section className="w-full py-12 md:py-24 lg:py-32 container">
          <div className="text-3xl md:text-5xl lg:text-7xl text-center mx-auto font-bold text-neutral-600 dark:text-neutral-400">
            Build
            <span className="ml-1 lg:ml-2"><FlipWords words={words} /></span><br />
            websites with Dev Sethi
          </div>
        </section>
      </div>
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
