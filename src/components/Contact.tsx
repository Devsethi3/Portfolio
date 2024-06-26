import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <div className="flex items-center container justify-center w-full min-h-screen mt-12 lg:mt-0">
        <div className="">
          <div
            className="w-[30%]
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/20
          -z-10
          top-22
        "
          />
          <h2 className="text-4xl text-center font-bold">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-center mt-2">
            Got a question or interested in collaborating with us? We&apos;re
            here to help! <br /> Simply fill out the form below or drop us an
            email.
          </p>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
