"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import { HiMenu } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  window.addEventListener("scroll", () => {
    setIsOpen(false);
  });

  return (
    <div>
      <div className="border-b dark:bg-[#030014] bg-white sticky top-0 z-40">
        <div className="container flex items-center h-[10vh] justify-between">
          <Link href="/" className="relative flex items-center gap-10">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <div className="absolute h-full w-[2px] left-[25%] bg-black dark:bg-white/40 hidden md:block"></div>
            <p className="text-xl hidden md:block">Dev Prasad Sethi</p>
          </Link>
          <div
            className={`nav-menu flex flex-col lg:flex-row items-center gap-16 ${
              isOpen ? "show-menu" : "nav-menu"
            }`}
          >
            <div className="block md:hidden">
              <MdOutlineClose
                onClick={() => setIsOpen(false)}
                size={35}
                className="bg-white nav-close font-extrabold text-gray-700 p-2 rounded-lg"
              />
            </div>
            <Link
              className="nav-link"
              href="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              className="nav-link"
              href="/projects"
              onClick={() => setIsOpen(false)}
            >
              Explore Projects
            </Link>
            <Link
              className="nav-link"
              href="/about"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
          <div className="flex items-center gap-4 md:gap-8 lg:gap-16">
            <ThemeSwitcher />
            <div className="flex items-center gap-6">
              <Link
                href="https://github.com/Devsethi3"
                target="_blank"
                className=""
              >
                <FaGithub size={30} className="dark:text-white/90 text-black" />
              </Link>
              <Link
                href="mailto:work.devsethi@gmail.com"
                className="hidden md:block"
              >
                <Image src="/gmail.png" width={30} height={30} alt="gmail" />
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/contact">
                <Button variant="secondary">Say Hello 👋</Button>
              </Link>

              <div className="block md:hidden">
                <Button
                  variant="secondary"
                  onClick={() => setIsOpen(true)}
                  size="icon"
                >
                  <HiMenu size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
