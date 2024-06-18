"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        // markers: true,
        start: "top 10%",
        end: "top 0%",
        scrub: 3,
      },
    });

    tl.to(
      ".home-text1",
      {
        x: -100,
        ease: "power1.in",
      },
      "a"
    );
    tl.to(
      ".home-text2",
      {
        x: 100,
        ease: "power1.in",
      },
      "a"
    );
  }, []);

  useGSAP(() => {
    gsap.from(".home-text", {
      opacity: 0,
      y: 150,
      duration: 1,
      stagger: 0.18,
      ease: "power2.inOut",
    });
  }, []);

  // useGSAP(() => {
  //   gsap.to(".highlight", {
  //     width: 565,
  //     delay: 1,
  //     duration: 1,
  //     ease: "power2.inOut",
  //   });
  // }, []);

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        // markers: true,
        start: "top 10%",
        end: "top 0%",
        scrub: 4,
      },
    });

    tl.to(
      ".hero-code-1",
      {
        y: -200,
        opacity: 0,
        ease: "power1.in",
      },
      "a"
    );
    tl.to(
      ".hero-code-2",
      {
        y: -200,
        opacity: 0,
        ease: "power1.in",
      },
      "a"
    );
  }, []);

  // useEffect(() => {
  //   const main = document.querySelector(".main") as HTMLElement | null;
  //   const crsr = document.querySelector(".cursor") as HTMLElement | null;

  //   const mouseMove = () => {
  //     if (main && crsr) {
  //       main.addEventListener("mousemove", (dets: MouseEvent) => {
  //         crsr.style.left = `${dets.clientX}px`;
  //         crsr.style.top = `${dets.clientY}px`;
  //         console.log(dets);
  //       });
  //     }
  //   };

  //   mouseMove();

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     if (main) {
  //       main.removeEventListener("mousemove", mouseMove);
  //     }
  //   };
  // }, []);

  return (
    <div className="main relative">
      {/* <div className="cursor fixed transition duration-400 pointer-events-none ease-in-out -translate-x-1/2 -translate-y-1/2 transform bg-white w-10 h-10 mix-blend-difference rounded-full"></div> */}
      <div className="relative -z-10 top-[30%]">
        <div className="absolute w-full h-[90vh] inset-0 bg-[url('/herobg.webp')] dark:opacity-40 opacity-0 bg-cover"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-75"></div> */}
      </div>

      <section className="h-[90vh] hero w-full dark:bg-grid-white/[0.05] bg-grid-black/[0.05] z-[-10] relative flex items-center justify-center">
        {/* // Radial gradient for the container to give a faded look */}
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#030014] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}

        <div className="flex mt-[-3rem] items-center flex-col z-[-10] gap-8">
          <article
            className="rounded-full
          p-[1.5px]
          text-sm
          bg-gradient-to-r
          from-brand-primaryBlue
          to-brand-primaryPurple
        "
          >
            <div
              className="rounded-full 
            px-3
            py-1
            dark:bg-black text-white dark:text-white/80"
            >
              ✨ Dynamic Web Magic with Next JS
            </div>
          </article>

          <div className="absolute hero-object top-[5%] right-[10%]">
            <Image
              src="/cude-illustration.webp"
              width={100}
              height={100}
              loading="lazy"
              alt="illustration"
            />
          </div>

          <div className="-mt-10">
            <Image
              src="/b5.svg"
              width={400}
              height={400}
              alt="b4"
              className="absolute hero-code-1 top-[0%] left-[0%] -z-10 "
            />
            <div
              className="bottom-0
            top-[50%]
            bg-gradient-to-t
            dark:from-background
            left-0
            right-0
            absolute
            z-10
          "
            ></div>
          </div>

          <p className="text-xl lg:text-2xl text-center font-normal mb-5 text-white/90">
            {" "}
            Ready to craft innovative web experiences?
          </p>

          <div className="max-w-6xl text-center mt-[-2rem] xl:text-[3.95rem] text-4xl leading-[1] font-extrabold">
            <h1 className="home-text home-text1 relative dark:text-white/90 mb-4">
              Let's collaborate!
              <div className="highlight absolute top-0 left-[11.5rem] -z-10 bg-primary h-full w-0"></div>
              <span className="hero-text p-3 rounded-md">
                Hi, I'm Dev Sethi,
              </span>{" "}
            </h1>
            <h1 className="home-text home-text2 dark:text-white/90">
              A Next.js developer based in India
            </h1>
          </div>
          <div className="absolute hero-object bottom-[25%] left-[10%]">
            <Image
              src="/triangle-illustration.webp"
              width={100}
              height={100}
              loading="lazy"
              alt="illustration"
            />
          </div>
          <div className="absolute hero-object bottom-[14%] right-[15%]">
            <Image
              src="/illustration-ball.webp"
              width={100}
              height={100}
              loading="lazy"
              alt="illustration"
            />
          </div>
          <h4 className="text-xl text-center font-medium">
            Hi! I&apos;m Dev Sethi, a Next.js Developer based in India.
          </h4>
          <div
            className="w-full
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/30
          top-56
        "
          />
          <a href="#about" className="z-10">
            <MagicButton
              title="See my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          {/* <Button>See My Work {"  "}🚀</Button> */}
        </div>
      </section>
    </div>
  );
};

export default Hero;
