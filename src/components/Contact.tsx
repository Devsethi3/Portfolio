import React from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import InputField from "./ui/InputField";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GrSend } from "react-icons/gr";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-page",
        markers: true,
        start: "top 60%",
        end: "top 0%",
        scrub: 2,
      },
    });
    tl1.to(".contact-page", {
      background: "#7c3aed",
      color: "#fff",
    });
  });
  return (
    <>
      <div>
        <section className="w-full h-screen flex items-center justify-center contact-page lg:py-32">
          <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <div className="inline-block rounded-lg cbg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </h2>
              <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                I'm always excited to connect with new people and discuss
                potential projects. Feel free to reach out using the form below.
              </p>
              <h4 className="text-lg font-medium tracking-tighter sm:text-xl md:text-2xl">
                Social Media handles :
              </h4>
              <div className="flex items-center gap-6">
                <FaGithub size={30} />
                <FaInstagram size={30} />
                <FaLinkedin size={30} />
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white px-6 py-12 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <form className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    id="first-name"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                  <InputField
                    id="last-name"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="justify-center">
                  Send
                  <GrSend />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
