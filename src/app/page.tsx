"use client";

import { Navbar } from "@/components/Navbar";
import React from "react";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Model from "@/components/Model";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import TextEffect from "@/components/TextEffect";

const HomePage = () => {
  // useGSAP(() => {
  //   gsap.from(".background", {
  //     top: 0,
  //     duration: 1,
  //     ease: "power1.in",
  //     opacity: 0,
  //   });
  // }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <TextEffect />
      <About />
      <Grid />
      <Projects />
      {/* <Model /> */}
      <Contact />
    </>
  );
};

export default HomePage;
