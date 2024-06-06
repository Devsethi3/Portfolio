import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

const Model = () => {
  return (
    <>
      <div className="h-screen relative w-full flex items-center justify-center">
        <div className="z-20 flex flex-col items-center gap-16">
          <h1 className="text-3xl font-bold text-white">
            Explore Amazing Projects of Mine
          </h1>
          <div>
            <a href="#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="absolute inset-0 z-10">
          <Spline scene="https://prod.spline.design/mL8mUbzNdkXZMLhg/scene.splinecode" />
        </div>
      </div>
    </>
  );
};

export default Model;
