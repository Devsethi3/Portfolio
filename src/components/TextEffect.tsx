"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const TextEffect: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 0px)", () => {
      // Text animation
      const textLines = container.querySelectorAll(".text-line");
      textLines.forEach((line) => {
        const chars = line.querySelectorAll(".char");
        const stagger = window.innerWidth < 768 ? 0.01 : 0.02;

        gsap.fromTo(
          chars,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            stagger: stagger,
            scrollTrigger: {
              trigger: line,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1,
            },
          }
        );
      });

      // Image animation
      const imageTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 90%",
          end: "bottom 20%",
          // markers: true,
          scrub: 1,
        },
      });

      const images = container.querySelectorAll(".sample-image");
      images.forEach((img, index) => {
        imageTl.to(
          img,
          {
            top: "60%",
            left: `${(index + 1) * 20 - 10}%`,
            xPercent: -50,
            yPercent: -50,
            rotate: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
          },
          "start"
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
        imageTl.kill();
      };
    });

    // Larger screens
    mm.add("(min-width: 768px)", () => {
      const images = container.querySelectorAll(".sample-image");
      images.forEach((img: any) => {
        gsap.set(img, { width: "250px", height: "250px" });
      });
    });

    // Smaller screens
    mm.add("(max-width: 767px)", () => {
      const images = container.querySelectorAll(".sample-image");
      images.forEach((img: any) => {
        gsap.set(img, { width: "150px", height: "150px" });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen text-effect-hero w-full container relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="relative mt-20 sm:mt-24 md:mt-32 lg:mt-40 overflow-hidden">
        <h2 className="text-4xl lg:text-7xl font-extrabold leading-tight">
          <div className="text-line">
            {"Elevate your online presence".split("").map((char, index) => (
              <span key={index} className="char inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          <div className="text-line mt-2 sm:mt-4">
            {"with cutting edge solutions.".split("").map((char, index) => (
              <span key={index} className="char inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </h2>
      </div>
      <div className="absolute inset-0 top-[20%] -z-10">
        {[1, 2, 3, 4, 5].map((num) => (
          <Image
            key={num}
            src={`/showcase-${num}.webp`}
            layout="intrinsic"
            width={180}
            height={180}
            alt={`sample ${num}`}
            className={`rounded-md opacity-0 sample-image absolute top-full left-1/2 -translate-x-1/2 rotate-${
              num % 2 === 0 ? "12" : "-12"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TextEffect;
