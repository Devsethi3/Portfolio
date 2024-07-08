"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import { HiMenu } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({
    href,
    label,
    index,
  }: {
    href: string;
    label: string;
    index: number;
  }) => (
    <a
      href={href}
      className={`nav-link ${index === 0 ? "pt-[4rem] md:pt-0" : "md:pt-0"} ${
        pathname === href
          ? "text-primary font-bold border-b-2 border-primary"
          : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
      }`}
      onClick={() => setIsOpen(false)}
    >
      {label}
    </a>
  );

  return (
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
          {navLinks.map((link, index) => (
            <NavLink key={link.href} {...link} index={index} />
          ))}
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
            <a href="/contact">
              <Button variant="secondary">Say Hello 👋</Button>
            </a>

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
  );
};

export default Navbar;
