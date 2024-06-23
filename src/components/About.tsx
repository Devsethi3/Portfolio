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
        // markers: true,
        start: "top 60%",
        end: "top 0%",
      },
    });

    tl.from(".about-title", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: "power2.in",
      stagger: 0.05,
    });
  }, []);

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        // markers: true,
        start: "top 40%",
        end: "top 0%",
      },
    });

    tl.from(".about-card1", {
      x: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.in",
    });
    tl.from(".about-card2", {
      x: -200,
      opacity: 0,
      duration: 0.8,

      ease: "power2.in",
    });
    tl.from(".about-card3", {
      x: -300,
      duration: 0.8,
      opacity: 0,
      ease: "power2.in",
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
        <p className="text-sm lg:text-lg py-8 about-title max-w-[50rem] lg:max-w-2xl leading-tight">
          I build websites for your needs. Whether you&apos;re a business,
          organization or an individual looking for a website. In the age of
          information technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 pt-6">
          <div className="flex about-card1 flex-col items-center gap-8 lg:border-r border-none py-6 border-white/50 lg:pr-10 pr-0">
            <h4 className="grid place-items-center w-20 h-20 rounded-full bg-white text-black text-2xl font-bold">
              01
            </h4>
            <h2 className="text-2xl lg:text-3xl font-bold">Creative Design</h2>
            <p className="lg:text-xl text-lg">
              I work closely with clients to understand their goals and gather
              feedback from users to identify pain points and areas for
              improvement.
            </p>
          </div>
          <div className="flex about-card2 flex-col items-center gap-8 lg:border-r border-none py-6 border-white/50 lg:pr-10 pr-0">
            <h4 className="grid place-items-center w-20 h-20 rounded-full bg-white text-black text-2xl font-bold">
              02
            </h4>
            <h2 className="text-2xl lg:text-3xl font-bold">
              Smart Coding Style
            </h2>
            <p className="lg:text-xl text-lg">
              I prioritize understanding clients goals and actively gather user
              feedback to identify pain points and areas for improvement.
            </p>
          </div>
          <div className="flex about-card3 flex-col items-center gap-8 py-6">
            <h4 className="grid place-items-center w-20 h-20 rounded-full bg-white text-black text-2xl font-bold">
              03
            </h4>
            <h2 className="text-2xl lg:text-3xl font-bold">
              Well Documentation
            </h2>
            <p className="lg:text-xl text-lg">
              I ensure comprehensive and clear documentation, facilitating
              seamless collaboration and understanding, while empowering users.
            </p>
          </div>
        </div>
        <MagicButton
          title="Let's Talk"
          icon={<FaLocationArrow />}
          position="right"
        />
      </div>
    </div>
  );
};

export default About;
