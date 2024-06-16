import React from "react";
import InputField from "./ui/InputField";
import { Button } from "./ui/button";
import { GrSend } from "react-icons/gr";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  return (
    <div className="mt-8">
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
      <div className="rounded-lg border border-gray-200 bg-white px-6 pt-12 pb-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
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
          <div className="mt-4">
            <InputField
              id="email"
              name="email"
              type="text"
              placeholder="Enter Email"
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

          <Button
            type="submit"
            className="justify-center flex items-center gap-2"
          >
            Send
            <GrSend />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
