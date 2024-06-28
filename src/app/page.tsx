"use client";

import React from "react";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Model from "@/components/Model";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import TextEffect from "@/components/TextEffect";
import MobileTextEffect from "@/components/MobileTextEffect";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <>
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
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
