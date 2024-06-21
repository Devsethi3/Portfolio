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
        <section className="w-full gap-16 h-[90vh] grid grid-cols-1 lg:grid-cols-2 py-12 lg:py-20 container">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/stars.png"
              width={50}
              height={50}
              alt="stars"
              loading="lazy"
              className="absolute top-[10%] left-[5%] lg:top-[30%] lg:left-[10%]"
            />
            <div className="text-4xl lg:text-5xl text-center mx-auto font-bold dark:text-white/90 text-black/90">
              Build
              <span className="ml-1 lg:ml-2">
                <FlipWords words={words} />
              </span>
              <br />
              websites with Me
            </div>
            <p className="max-w-lg text-center text-base lg:text-xl text-neutral-500 dark:text-neutral-300 mt-4">
              If you are looking to create stunning and efficient web
              experiences, reach out to me. Whether it's a personal project, a
              business website, or a complex web application.
            </p>
            <div className="flex mx-auto max-w-[500px] text-center mt-5 flex-col gap-4">
              <Link
                href="https://github.com/Devsethi3"
                target="_blank"
                className="flex items-center gap-4 py-2 bg-secondary mx-auto px-3 rounded-lg hover:underline transition-colors"
              >
                <FaGithub size={30} />
                <span className="text-lg">github.com/devsethi3</span>
              </Link>
              <Link
                href="mailto:work.devsethi@gmail.com"
                className="flex items-center py-2 bg-secondary mx-auto px-3 rounded-lg gap-4  hover:underline transition-colors"
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
