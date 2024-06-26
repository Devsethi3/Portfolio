"use client";

import React, { useRef, useState } from "react";
import InputField from "./ui/InputField";
import { Button } from "./ui/button";
import { GrSend } from "react-icons/gr";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const form = formRef.current;
    const email = form.user_email.value;
    const message = form.user_message.value;

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (message.trim() === "") {
      toast.error("Message cannot be empty.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm("service_b9d6ri8", "template_d7m2lpn", formRef.current, {
        publicKey: "wjG0qEbYkoa3KZJSJ",
      })
      .then(
        () => {
          toast.success("Email sent successfully!");
          setLoading(false);
          formRef.current?.reset(); // Reset form fields
        },
        (error) => {
          toast.error("Failed to send email. Please try again later.");
          console.error("Failed to send email:", error);
          setLoading(false);
        }
      );
  };

  return (
    <div className="py-10">
      <div className="rounded-lg border shadow-2xl shadow-indigo-600/50 border-gray-200 bg-white px-6 pt-12 pb-6 dark:border-gray-800 dark:bg-gray-950">
        <form ref={formRef} onSubmit={sendEmail} className="grid gap-4">
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
              className="min-h-[150px] text-black dark:text-white"
              name="user_message"
              required
            />
          </div>
          <Button
            type="submit"
            className="justify-center flex items-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <>
                Sending...
                <LuLoader2 className="animate-spin w-4 h-4" />
              </>
            ) : (
              <>
                Send
                <GrSend />
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
