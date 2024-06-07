"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";

const Projects = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
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
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  // useGSAP(() => {
  //   const crsr = document.querySelector(
  //     ".project-cursor"
  //   ) as HTMLElement | null;
  //   const projectImage = document.querySelector(
  //     ".project-image"
  //   ) as HTMLElement | null;

  //   projectImage?.addEventListener("mousemove", (dets) => {
  //     gsap.to(crsr, {
  //       x: dets.x,
  //       y: dets.y,
  //     });
  //   });

  //   projectImage?.addEventListener("mouseenter", (dets) => {
  //     gsap.to(crsr, {
  //       scale: 1,
  //       opacity: 1,
  //     });
  //   });
  //   projectImage?.addEventListener("mouseleave", (dets) => {
  //     gsap.to(crsr, {
  //       scale: 0,
  //       opacity: 0,
  //     });
  //   });
  // }, []);

  useGSAP(() => {
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-section",
        // markers: true,
        start: "top 40%",
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
    tl2.to(".project-stroke", {
      width: "80%",
      ease: "power1.in",
    });
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
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section container gap-16 flex-col md:flex-row">
            <div className="w-[50%]">
              <div className="relative project-text">
                <span>Tech Expertise</span>
                <div className="absolute w-0 project-stroke h-[2px] bg-gradient-to-r from-fuchsia-500 to-cyan-500 transform -translate-x-1/2 -translate-y-1/2 top-[50%] left-[60%]"></div>
              </div>
              <div className="flex gap-10 flex-col mt-10">
                <h3 className="text-[2.5rem] project-text leading-[2.25rem] font-extrabold">
                  Proven Webflow Skills that come with extra peace of mind
                </h3>
                <p className="text-justify project-text">
                  More than 5 years of professional experience with No-Code
                  tools has equipped me with valuable skills. I'm honored to be
                  recognized by the industry, including my clients and
                  colleagues. <br /> When you work with me, you can be confident
                  that your expectations will be met and that your project will
                  adhere to the highest industry standards.
                </p>
                <div className="flex items-center gap-5 project-text">
                  <Button variant="secondary">
                    <Link href="/" className="flex items-center gap-5 text-lg">
                      <FaGithub />
                      Github
                    </Link>
                  </Button>
                  <Button variant="secondary">
                    <Link href="/" className="flex items-center gap-5 text-lg">
                      <FaArrowUpRightFromSquare />
                      Visit Site
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-[40%] project-showcase min-h-[70%] rounded-lg border shadow-2xl shadow-indigo-600/50">
              <div className="flex items-start relative p-5 gap-6 justify-center flex-col">
                <div className="w-[100%] project-image h-[40vh] relative rounded-md">
                  {/* <Link
                    href={"/"}
                    className="text-white flex flex-col items-center justify-center text-center gap-3 text-sm"
                  >
                    View
                    <FaArrowUpRightFromSquare />
                  </Link> */}
                  <Image
                    src="/project-1.webp"
                    fill
                    alt="project-1"
                    className="rounded-lg"
                  />
                </div>
                <div className="flex items-start flex-col gap-5">
                  <h4 className="text-xl font-semibold underline">
                    Tech Stack
                  </h4>
                  <div className="flex items-center gap-4 flex-wrap">
                    <Image
                      src="/nextjs.webp"
                      width={50}
                      height={50}
                      objectFit="cover"
                      className="p-2 bg-white rounded-full"
                      alt="nextjs"
                    />
                    <Image
                      src="/supabase.webp"
                      width={50}
                      height={50}
                      objectFit="cover"
                      className="p-2 bg-white rounded-full"
                      alt="nextjs"
                    />
                    <Image
                      src="/drizzle.svg"
                      width={50}
                      height={50}
                      objectFit="cover"
                      className="p-2 bg-white rounded-full"
                      alt="nextjs"
                    />
                    <Image
                      src="/tailwind.svg"
                      width={50}
                      height={50}
                      objectFit="cover"
                      className="p-2 bg-white rounded-full"
                      alt="nextjs"
                    />
                    <Image
                      src="/postgresql.svg"
                      width={50}
                      height={50}
                      objectFit="cover"
                      className="p-2 bg-white rounded-full"
                      alt="nextjs"
                    />
                    <Image
                      src="/shadcn.webp"
                      width={50}
                      height={50}
                      objectFit="cover"
                      className="p-2 bg-white rounded-full"
                      alt="nextjs"
                    />
                    <Image
                      src="/react.webp"
                      width={50}
                      height={50}
                      objectFit="cover"
                      className="p-2 bg-white rounded-full"
                      alt="nextjs"
                    />
                    <Image
                      src="/typescript.svg"
                      width={50}
                      height={50}
                      objectFit="cover"
                      className="p-2 bg-white rounded-full"
                      alt="nextjs"
                    />
                    <Image
                      src="/figma.svg"
                      width={50}
                      height={50}
                      objectFit="cover"
                      className="p-2 bg-white rounded-full"
                      alt="nextjs"
                    />
                    <Image
                      src="/vercel.webp"
                      width={50}
                      height={50}
                      objectFit="cover"
                      className="p-2 bg-white rounded-full"
                      alt="nextjs"
                    />
                    <Image
                      src="/html-5.webp"
                      width={50}
                      height={50}
                      objectFit="cover"
                      className="p-2 bg-white rounded-full"
                      alt="nextjs"
                    />
                    <Image
                      src="/css-3.webp"
                      width={50}
                      height={50}
                      objectFit="cover"
                      className="p-2 bg-white rounded-full"
                      alt="nextjs"
                    />
                    <Image
                      src="/github.svg"
                      width={50}
                      height={50}
                      objectFit="cover"
                      className="p-2 bg-white rounded-full"
                      alt="nextjs"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-section">
            <h3>Section 2</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 3</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
