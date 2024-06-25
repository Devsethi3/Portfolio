"use client";

import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        end: "top 20%",
        scrub: 1,
      },
    });

    tl.from(".about-title", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    });

    tl.from(
      ".about-description",
      {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );

    gsap.from(".about-card", {
      scrollTrigger: {
        trigger: ".about-cards",
        start: "top 70%",
        end: "bottom 70%",
        scrub: 1,
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3,
    });

    gsap.from(".magic-button", {
      scrollTrigger: {
        trigger: ".about-cards",
        start: "bottom 80%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <div className="min-h-screen w-full container">
      <div
        className="min-h-[80%] py-8 lg:py-14 flex items-center justify-center flex-col lg:px-16 px-6 text-white/90 about bg-gradient-to-r
          from-brand-primaryBlue
          to-brand-primaryPurple text-center w-full rounded-lg"
      >
        <h2 className="text-3xl md:text-4xl lg:text-6xl about-title font-bold text-white">
          Why Choose Me !
        </h2>
        <p className="text-sm lg:text-lg py-8 about-description max-w-[50rem] lg:max-w-2xl leading-tight">
          I build websites for your needs. Whether you&apos;re a business,
          organization or an individual looking for a website. In the age of
          information technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 lg:gap-10 pt-6 about-cards">
          {[
            {
              number: "01",
              title: "Creative Design",
              description:
                "I work closely with clients to understand their goals and gather feedback from users to identify pain points and areas for improvement.",
            },
            {
              number: "02",
              title: "Smart Coding Style",
              description:
                "I prioritize understanding clients goals and actively gather user feedback to identify pain points and areas for improvement.",
            },
            {
              number: "03",
              title: "Well Documentation",
              description:
                "I ensure comprehensive and clear documentation, facilitating seamless collaboration and understanding, while empowering users.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`flex about-card flex-col items-center gap-8 ${
                index < 2 ? "lg:border-r border-none" : ""
              } py-6 border-white/50 lg:pr-10 pr-0`}
            >
              <h4 className="grid place-items-center w-20 h-20 rounded-full bg-white text-black text-2xl font-bold">
                {card.number}
              </h4>
              <h2 className="text-2xl lg:text-3xl font-bold">{card.title}</h2>
              <p className="lg:text-xl text-lg">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="magic-button mt-10">
          <MagicButton
            title="Let's Talk"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
