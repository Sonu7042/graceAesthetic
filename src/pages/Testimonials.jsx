import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "COCO",
    text: `AT WATERSIDE RESIDENCES, STRIKING EXTERIORS MEET
    ELEGANT, THOUGHTFULLY DESIGNED INTERIORS.
    NESTLED IN UTTRAKHAND'S MOUNTAINS AND NATURAL
    BEAUTY, EVERY HOME BLENDS LUXURY, COMFORT, AND
    SERENITY.`,
  },
  {
    name: "ROCK",
    text: `AT WATERSIDE RESIDENCES, STRIKING EXTERIORS MEET
    ELEGANT, THOUGHTFULLY DESIGNED INTERIORS.
    NESTLED IN UTTRAKHAND'S MOUNTAINS AND NATURAL
    BEAUTY, EVERY HOME BLENDS LUXURY, COMFORT, AND
    SERENITY.`,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        setFade(true); // fade in
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F5F4EF] py-16 px-4">
      {/* Heading */}
      <h2 className="text-center text-sm tracking-[0.3em] text-black mb-12">
        WHAT OUR CLIENTS SAY
      </h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {[0, 1].map((card) => {
          const data = testimonials[(index + card) % testimonials.length];

          return (
            <div
              key={card}
              className={`bg-[#EEECE4] p-8 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"
                }`}
            >
              <p className="text-xs tracking-widest text-gray-600 mb-4">
                {data.name}
              </p>

              <p className="text-xs leading-[1.8] tracking-wide text-gray-700">
                {data.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
