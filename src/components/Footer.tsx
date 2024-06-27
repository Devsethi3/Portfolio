import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="border-t-2">
      <div className="container flex w-full items-center justify-between h-[8vh]">
        <p className="flex items-center gap-2">
          Made with{" "}
          <span>
            <FaHeart className="text-rose-500" />
          </span>
          by <span className="font-bold">Dev Prasad Sethi</span>
        </p>
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
      </div>
    </div>
  );
};

export default Footer;
