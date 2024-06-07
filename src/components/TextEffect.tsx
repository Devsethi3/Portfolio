"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const TextEffect = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-effect-hero",
        // markers: true,
        start: "-5% 50%",
        end: "100% 50%",
        scrub: 1,
      },
    });
    tl.to(".text-hover", {
      width: "100%",
    });
  }, []);

  useGSAP(() => {
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".text-effect-hero",
        // markers: true,
        start: "-5% 50%",
        end: "80% 50%",
        scrub: 1,
      },
    });
    tl1.to(
      ".sample-1",
      {
        top: 220,
        rotate: 0,
        scale: 1.25,
        opacity: 1,
        left: "2%",
      },
      "a"
    );
    tl1.to(
      ".sample-2",
      {
        top: 220,
        rotate: 0,
        scale: 1.25,
        opacity: 1,
        left: "22%",
      },
      "a"
    );
    tl1.to(
      ".sample-3",
      {
        top: 220,
        rotate: 0,
        scale: 1.25,
        opacity: 1,
        right: "43%",
      },
      "a"
    );
    tl1.to(
      ".sample-4",
      {
        top: 220,
        rotate: 0,
        scale: 1.25,
        opacity: 1,
        right: "23%",
      },
      "a"
    );
    tl1.to(
      ".sample-5",
      {
        top: 220,
        rotate: 0,
        scale: 1.25,
        opacity: 1,
        right: "3%",
      },
      "a"
    );
  }, []);

  // Elevate your online presence with cutting edge development. Hi, I'm Dev Sethi, a Next.js developer in India. Let's build something exceptional!

  return (
    <>
      <div className="h-screen text-effect-hero w-full container">
        <h2 className="text-7xl mt-[8rem] absolute opacity-20 overflow-hidden font-extrabold">
          Elevate your online presence with cutting <br /> adipisicing elit.
          Aperiam,
        </h2>
        <h2 className="text-7xl mt-[8rem] w-[0%] text-hover absolute overflow-hidden opacity-100 whitespace-nowrap font-extrabold">
          Elevate your online presence with cutting <br /> adipisicing elit.
          Aperiam,
        </h2>

        <div className="relative top-[20%] -z-10">
          <Image
            src="/showcase-1.webp"
            width={200}
            height={200}
            alt="sample"
            className="rounded-md opacity-0 sample-1 absolute top-0 left-0 -rotate-12"
          />
          <Image
            src="/showcase-2.webp"
            width={200}
            height={200}
            alt="sample"
            className="rounded-md opacity-0 sample-2 absolute top-10 left-[20%] rotate-12"
          />
          <Image
            src="/showcase-3.webp"
            width={200}
            height={200}
            alt="sample"
            className="rounded-md opacity-0 sample-3 absolute top-24 right-[25%] rotate-12"
          />
          <Image
            src="/showcase-4.webp"
            width={200}
            height={200}
            alt="sample"
            className="rounded-md opacity-0 sample-4 absolute top-10 right-[10%] -rotate-12"
          />
          <Image
            src="/showcase-5.webp"
            width={200}
            height={200}
            alt="sample"
            className="rounded-md opacity-0 sample-5 absolute top-0 right-0 rotate-12"
          />
        </div>
      </div>
    </>
  );
};

export default TextEffect;
