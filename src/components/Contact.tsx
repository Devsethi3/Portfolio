import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  return (
    <div className="h-screen flex items-center justify-center w-full">
      <section className="w-full max-w-2xl mx-auto py-12 md:py-24 lg:py-32">
        <div className="px-4 md:px-6 space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-4xl font-bold">Get in Touch</h2>
            <p className="text-gray-500 text-lg font-semibold dark:text-gray-400">
              Have a question or want to work together? Fill out the form below
              and I'll get back to you as soon as possible.
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <span>Name</span>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <span>Email</span>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="space-y-2">
              <span>Message</span>
              <Textarea
                id="message"
                placeholder="Enter your message"
                rows={5}
              />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
