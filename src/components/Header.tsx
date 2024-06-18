"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { BiSolidDashboard } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { MdOutlineClose } from "react-icons/md";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const router = useRouter();

  return (
    <div className="border-b-2 shadow-lg z-40 sticky top-0">
      <header className="container">
        <div className="backdrop-blur-sm">
          <div className="flex h-[4.5rem] items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="logo" width={50} height={50} />
              <p className="text-2xl md:text-3xl lg:text-3xl font-extrabold pl-4 border-l-2 pt-[.4rem] border-gray-500   logo-text">
                Dev Prasad Sethi
              </p>
            </Link>
            <div className={`nav-menu ${isMenu ? "show-menu" : "nav-menu"}`}>
              <nav aria-label="Global" className="">
                <ul className="flex items-center gap-10">
                  <button
                    onClick={() => setIsMenu(!isMenu)}
                    className="block md:hidden"
                  >
                    <MdOutlineClose className="nav-close" />
                  </button>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 transition nav-link hover:text-gray-700/75"
                    >
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 transition nav-link hover:text-gray-700/75"
                    >
                      {" "}
                      About{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 transition nav-link hover:text-gray-700/75"
                    >
                      {" "}
                      Pricing{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 transition nav-link hover:text-gray-700/75"
                    >
                      {" "}
                      Dashboard{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 transition nav-link hover:text-gray-700/75"
                    >
                      {" "}
                      Team{" "}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <button
                  onClick={() => setIsMenu(!isMenu)}
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <HiMenu className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
