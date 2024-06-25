"use client";

import React from "react";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Model from "@/components/Model";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import TextEffect from "@/components/TextEffect";
import Navbar from "@/components/Navbar";

const HomePage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <TextEffect />
      <About />
      <Grid />
      {/* <Model /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
    </>
  );
};

export default HomePage;
