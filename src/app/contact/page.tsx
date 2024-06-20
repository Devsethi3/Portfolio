import ContactForm from "@/components/ContactForm";
import { FlipWords } from "@/components/ui/flip-words";

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
        <section className="w-full grid grid-cols-2 py-12 md:py-24 lg:py-32 container">
          <div className="text-4xl text-center mx-auto font-bold text-neutral-600 dark:text-neutral-400">
            Build
            <span className="ml-1 lg:ml-2">
              <FlipWords words={words} />
            </span>
            <br />
            websites with Dev Sethi
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
