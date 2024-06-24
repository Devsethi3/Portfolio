import Image from "next/image";

const TechStack = () => {
  const developement = [
    {
      id: 1,
      name: "HTML",
      designation: "Software Engineer",
      image: "/html-5.webp",
    },
    {
      id: 2,
      name: "CSS",
      designation: "Product Manager",
      image: "/css-3.webp",
    },
    {
      id: 3,
      name: "JavaScript",
      designation: "Data Scientist",
      image: "/js.png",
    },
    {
      id: 4,
      name: "TypeScript",
      designation: "UX Designer",
      image: "/typescript.svg",
    },
    {
      id: 5,
      name: "React JS",
      designation: "Soap Developer",
      image: "/react.webp",
    },
    {
      id: 6,
      name: "Next JS",
      designation: "The Explorer",
      image: "/nextjs.webp",
    },
    {
      id: 7,
      name: "Tailwind CSS",
      designation: "The Explorer",
      image: "/tailwind.svg",
    },
    {
      id: 8,
      name: "Firebase",
      designation: "The Explorer",
      image: "/firebase.svg",
    },
    // {
    //   id: 9,
    //   name: "Appwrite",
    //   designation: "The Explorer",
    //   image: "/appwrite.png",
    // },
    {
      id: 10,
      name: "Prisma ORM",
      designation: "The Explorer",
      image: "/prisma.png",
    },
    {
      id: 11,
      name: "Drizzle ORM",
      designation: "The Explorer",
      image: "/drizzle.svg",
    },
    {
      id: 12,
      name: "Convex",
      designation: "The Explorer",
      image: "/convex.png",
    },
    {
      id: 13,
      name: "Postgres SQL",
      designation: "The Explorer",
      image: "/postgresql.svg",
    },
    {
      id: 14,
      name: "Mongo DB",
      designation: "The Explorer",
      image: "/mongodb.webp",
    },
  ];

  const tools = [
    {
      id: 1,
      name: "Shadcn UI",
      designation: "The Explorer",
      image: "/shadcn.webp",
    },
    {
      id: 2,
      name: "Figma",
      designation: "The Explorer",
      image: "/figma.svg",
    },
    {
      id: 3,
      name: "VS Code",
      designation: "The Explorer",
      image: "/vscode.svg",
    },
    {
      id: 4,
      name: "Vercel",
      designation: "The Explorer",
      image: "/vercel.png",
    },
    {
      id: 5,
      name: "Github",
      designation: "The Explorer",
      image: "/github.svg",
    },
    {
      id: 6,
      name: "GSAP",
      designation: "The Explorer",
      image: "/gsap.png",
    },
    {
      id: 7,
      name: "Postman",
      designation: "The Explorer",
      image: "/postman.png",
    },
    {
      id: 8,
      name: "Next Auth",
      designation: "The Explorer",
      image: "/nextauth.png",
    },
    {
      id: 9,
      name: "Google Cloud",
      designation: "The Explorer",
      image: "/google-cloud.svg",
    },
  ];
  
  return (
    <div>
      <section className="container py-10">
        <h2 className="text-4xl md:text-6xl lg:text-8xl mb-10 font-extrabold">
          Things I&apos;m{" "}
          <span className="text-emerald-500 underline">good</span> at
        </h2>
        <span className="text-base lg:text-xl px-3 lg:px-4 py-2 border-2 dark:border-gray-400 border-gray-200 bg-secondary rounded-lg">
          Development
        </span>
        <div className="flex flex-wrap items-center gap-5 my-10">
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
          {developement.map((dev) => (
            <div className="relative w-12 h-12 lg:w-20 lg:h-20" key={dev.id}>
              <Image
                src={dev.image}
                alt={dev.name}
                fill
                className="object-cover rounded-xl p-2 dark:bg-white bg-secondary border"
              />
            </div>
          ))}
        </div>
        <span className="text-base lg:text-xl px-3 lg:px-4 py-2 border-2 dark:border-gray-400 border-gray-200 bg-secondary rounded-lg">
          Tools
        </span>
        <div className="flex flex-wrap items-center gap-5 my-10">
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
          {tools.map((tool) => (
            <div className="relative w-12 h-12 lg:w-20 lg:h-20" key={tool.id}>
              <Image
                src={tool.image}
                alt={tool.name}
                fill
                className="object-cover rounded-xl p-2 dark:bg-white bg-secondary border"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechStack;
