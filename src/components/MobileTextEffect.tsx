"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextEffect: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const textElement = textRef.current;
    if (!container || !textElement) return;

    // Split text into words and characters
    const words = textElement.innerText.split(" ");
    textElement.innerHTML = words
      .map(
        (word) =>
          `<span class="word">${word
            .split("")
            .map((char) => `<span class="char">${char}</span>`)
            .join("")}</span>`
      )
      .join(" ");

    const chars = textElement.querySelectorAll(".char");
    const wordSpans = textElement.querySelectorAll(".word");

    gsap.set(chars, { perspective: 400 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        markers: false,
      },
    });

    tl.from(chars, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01,
    });

    // Parallax effect on words
    wordSpans.forEach((word, i) => {
      gsap.to(word, {
        y: (i + 1) * 10,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    //
    const images = container.querySelectorAll(".sample-image");
    images.forEach((img, index) => {
      gsap.fromTo(
        img,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotation: index % 2 === 0 ? 10 : -10,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full container relative overflow-hidden px-4 sm:px-6 lg:px-8 flex items-center"
    >
      <div className="relative z-10">
        <h2
          ref={textRef}
          className="text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight dark:text-white text-black mix-blend-difference"
        >
          Elevate your online presence with cutting edge solutions.
        </h2>
      </div>
      <div className="absolute inset-0 flex justify-center items-center flex-wrap -z-10">
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} className="w-1/3 sm:w-1/4 md:w-1/5 p-2">
            <Image
              src={`/showcase-${num}.webp`}
              width={300}
              height={300}
              alt={`sample ${num}`}
              className="rounded-md sample-image w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextEffect;
