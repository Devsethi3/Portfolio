import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <div>
      <div className="border-b dark:bg-[#030014] bg-white sticky top-0 z-40">
        <div className="container flex items-center h-[10vh] justify-between">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <div className="nav-menu flex items-center gap-16">
            <Link href="/">Home</Link>
            <Link href="/projects">Explore Projects</Link>
            <Link href="/about">About</Link>
          </div>
          <div className="flex items-center gap-4 md:gap-8 lg:gap-16">
            <ThemeSwitcher />
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
