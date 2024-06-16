import React from "react";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ContactForm from "./ContactForm";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-page",
        // markers: true,
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
      <div className="flex contact-page items-center justify-center w-full h-screen">
        <div className="">
          <h2 className="text-4xl text-center font-bold">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-center mt-2">
            Got a question or interested in collaborating with us? We're here to
            help! <br /> Simply fill out the form below or drop us an email.
          </p>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
