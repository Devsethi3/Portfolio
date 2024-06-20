import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";

const ContactsPage = () => {
  const words = [
    "responsive",
    "innovative",
    "efficient",
    "intuitive",
    "user-friendly",
    "scalable",
    "interactive",
    "fast",
    "reliable",
    "creative",
  ];

  return (
    <>
      <div>
        <section className="w-full h-[90vh] grid grid-cols-1 lg:grid-cols-2 items-center py-12 lg:py-20 container">
          <div>
            <div className="text-4xl text-center mx-auto font-bold text-neutral-600 dark:text-neutral-400">
              Build
              <span className="ml-1 lg:ml-2">
                <FlipWords words={words} />
              </span>
              <br />
              websites with Dev Sethi
            </div>
            <div className="flex text-center mt-5 flex-col gap-10">
              <Link
                href="https://github.com/Devsethi3"
                target="_blank"
                className="flex items-center gap-4"
              >
                <FaGithub size={30} />
                <span className="text-lg">github.com/devsethi3</span>
              </Link>
              <Link
                href="/"
                target="_blank"
                className="flex items-center gap-4"
              >
                <Image src="/gmail.png" width={30} height={30} alt="gmail" />
                <span className="text-lg">work.devsethi@gmail.com</span>
              </Link>
            </div>
          </div>
          <div
            className="w-[30%]
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/50
          -z-10
          top-22
        "
          />
          <ContactForm />
        </section>
      </div>
    </>
  );
};

export default ContactsPage;
