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
    <div>
      <div>
        <section className="w-full py-12 md:py-24 lg:py-32 container">
          <div className="text-3xl md:text-5xl lg:text-7xl text-center mx-auto font-bold text-neutral-600 dark:text-neutral-400">
            Build
            <span className="ml-1 lg:ml-2">
              <FlipWords words={words} />
            </span>
            <br />
            websites with Dev Sethi
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactsPage;