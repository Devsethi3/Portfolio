import React from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import InputField from "./ui/InputField";

const Contact = () => {
  return (
    <>
      <div>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <div className="inline-block rounded-lg cbg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Contact
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </h1>
              <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I'm always excited to connect with new people and discuss
                potential projects. Feel free to reach out using the form below.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
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
                  Submit
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
