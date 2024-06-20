import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
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
          <p className="text-lg text-center mt-2 mb-8">
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
