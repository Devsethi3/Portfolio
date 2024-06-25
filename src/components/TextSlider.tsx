const TextSlider = () => {
  const texts1 = [
    "Full Stack Next.js Developer",
    "SEO Optimization Specialist",
    "Performance Tuning Expert",
    "React Component Maestro",
  ];
  const texts2 = [
    "React Component Maestro",
    "Performance Tuning Expert",
    "SEO Optimization Specialist",
    "Full Stack Next.js Developer",
  ];

  return (
    <div>
      <div className="overflow-hidden relative h-[40vh] pt-12">
        <div className="w-full absolute z-[5] -rotate-3 bg-emerald-500 py-4 lg:py-6 sliding-text">
          <div className="sliding-wrapper-reverse">
            {[...texts1, ...texts1].map((text, index) => (
              <span
                key={index}
                className="text-3xl md:text-4xl lg:text-5xl mx-5 whitespace-nowrap font-extrabold text-white sliding-span"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full absolute z-[10] bottom-[20%] bg-indigo-500 rotate-3 py-4 lg:py-6 sliding-text">
          <div className="sliding-wrapper">
            {[...texts2, ...texts2].map((text, index) => (
              <span
                key={index}
                className="text-3xl md:text-4xl lg:text-5xl mx-5 whitespace-nowrap font-extrabold text-white sliding-span"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .sliding-text {
          overflow: hidden;
        }

        .sliding-wrapper {
          display: inline-flex;
          white-space: nowrap;
          animation: slide 30s linear infinite;
        }

        .sliding-wrapper-reverse {
          display: inline-flex;
          white-space: nowrap;
          animation: slide 30s linear infinite reverse;
        }

        .sliding-span {
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default TextSlider;
