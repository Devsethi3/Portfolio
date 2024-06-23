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
      // Text effect animation
      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });

      textTl.to(".text-hover", {
        width: "100%",
        ease: "none",
      });

      // Image animation (kept as is)
      const imageTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      const images = container.querySelectorAll(".sample-image");
      images.forEach((img, index) => {
        imageTl.to(
          img,
          {
            top: "50%",
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
        textTl.kill();
        imageTl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen text-effect-hero w-full container relative overflow-hidden"
    >
      <div className="relative mt-[8rem] h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
        <h2 className="text-3xl md:text-5xl lg:text-7xl absolute top-0 left-0 w-full opacity-20 font-extrabold leading-tight">
          Elevate your online presence with
          <br className="hidden sm:inline" /> cutting areas for improvement.
        </h2>
        <h2 className="text-3xl md:text-5xl lg:text-7xl absolute top-0 left-0 w-[0%] text-hover overflow-hidden opacity-100 whitespace-nowrap font-extrabold leading-tight">
          Elevate your online presence with
          <br className="hidden sm:inline" /> cutting areas for improvement.
        </h2>
      </div>
      <div className="absolute inset-0 -z-10">
        {[1, 2, 3, 4, 5].map((num) => (
          <Image
            key={num}
            src={`/showcase-${num}.webp`}
            width={200}
            height={200}
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
