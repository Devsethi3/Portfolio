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
import MobileTextEffect from "@/components/MobileTextEffect";

const HomePage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <div className="hidden md:block">
        <TextEffect />
      </div>
      <div className="block md:hidden">
        <MobileTextEffect />
      </div>
      <About />
      <Grid />
      {/* <Model /> */}
      <Projects />
      {/* <Contact /> */}
    </>
  );
};

export default HomePage;
