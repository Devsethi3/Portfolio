"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { MdOutlineFileDownload } from "react-icons/md";

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
        opacity: 0,
        ease: "power1.in",
      },
      "a"
    );
    tl.to(
      ".home-text2",
      {
        x: 100,
        opacity: 0,
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
  }, []);

  const handleViewResume = () => {
    window.open("/Resume.pdf", "_blank");
  };

  return (
    <div className="">
      <div className="relative -z-10 top-[30%]">
        <div className="absolute w-full h-[90vh] inset-0 bg-[url('/herobg.webp')] dark:opacity-40 opacity-0 bg-cover"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-75"></div> */}
      </div>
      <section className="h-[90vh] container hero w-full relative flex items-center justify-center">
        {/* // Radial gradient for the container to give a faded look */}
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#030014] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}

        <div className="flex mt-[-3rem] items-center flex-col gap-8">
          <div
            className="w-[30%]
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/20
          -z-10
          top-22
        "
          />
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

          <div className="absolute hero-object opacity-30 lg:opacity-100 top-[5%] right-[10%]">
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
              className="absolute hidden md:block hero-code-1 top-[0%] left-[0%] -z-10 "
            />
          </div>

          <p className="text-xl lg:text-2xl text-center font-normal mb-5">
            {" "}
            Ready to craft innovative web experiences?
          </p>

          <div className="max-w-6xl text-center mt-[-2rem] xl:text-[3.95rem] text-4xl leading-[1] font-extrabold">
            <h1 className="home-text z-10 home-text1 relative dark:text-white/90 mb-4">
              Let&apos;s collaborate!
              <div className="highlight absolute top-0 left-[11.5rem] -z-10 bg-primary h-full w-0"></div>
              <span className="hero-text p-3 rounded-md">
                Hi, I&apos;m <span className="px-2 -z-10">Dev Sethi</span>
              </span>{" "}
            </h1>
            <h1 className="home-text home-text2 dark:text-white/90">
              A{" "}
              <span className="px-2 rounded-lg text-emerald-500 underline -z-10">
                Web Developer
              </span>{" "}
              based in India
            </h1>
          </div>
          <div className="absolute hero-object opacity-30 lg:opacity-100 bottom-[25%] left-[10%]">
            <Image
              src="/triangle-illustration.webp"
              width={100}
              height={100}
              loading="lazy"
              alt="illustration"
            />
          </div>
          <div className="absolute hidden md:block hero-object bottom-[14%] right-[15%]">
            <Image
              src="/illustration-ball.webp"
              width={100}
              height={100}
              loading="lazy"
              alt="illustration"
            />
          </div>
          <h4 className="text-lg lg:text-xl text-center font-medium">
            I specialize in crafting performant, scalable, and beautiful web
            applications that bring your vision to life.
          </h4>
          <div className="flex items-center gap-5 lg:gap-8">
            <Link href="/contact" passHref legacyBehavior>
              <MagicButton
                title="Let's Talk"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
            <Button size="lg" onClick={handleViewResume}>
              Resume
              <MdOutlineFileDownload className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
