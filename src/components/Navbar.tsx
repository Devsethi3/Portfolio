import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import { HiMenu } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <div className="border-b dark:bg-[#030014] bg-white sticky top-0 z-40">
        <div className="container flex items-center h-[10vh] justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
          </Link>
          <div className="nav-menu flex items-center gap-16">
            <Link href="/">Home</Link>
            <Link href="/projects">Explore Projects</Link>
            <Link href="/about">About</Link>
          </div>
          <div className="flex items-center gap-4 md:gap-8 lg:gap-16">
            <ThemeSwitcher />
            <div className="flex items-center gap-6">
              <Link
                href="https://github.com/Devsethi3"
                target="_blank"
                className=""
              >
                <FaGithub size={30} className="text-white/90" />
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
                <Button variant="secondary" size="icon">
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
