"use client";

import React, { useRef, useState } from "react";
import InputField from "./ui/InputField";
import { Button } from "./ui/button";
import { GrSend } from "react-icons/gr";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";
import { Input } from "./ui/input";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY!
        )
        .then(
          () => {
            setSuccess(true);
            form.current?.reset();
          },
          () => {
            setError(true);
          }
        );
    }
  };

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
        <form ref={form} onSubmit={sendEmail} className="grid gap-4">
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
              id="user_email"
              name="user_email"
              type="email"
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message">Message</label>
            <Textarea
              placeholder="Enter your message"
              className="min-h-[150px]"
              name="user_message"
              required
            />
          </div>
          <Button
            type="submit"
            className="justify-center flex items-center gap-2"
          >
            Send
            <GrSend />
          </Button>
          {success && (
            <p className="text-green-500 mt-4">Email sent successfully!</p>
          )}
          {error && (
            <p className="text-red-500 mt-4">
              There was an error sending the email.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
