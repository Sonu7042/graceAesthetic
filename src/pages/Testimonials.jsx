// import { useEffect, useState } from "react";

// const testimonials = [
//   {
//     name: "Aryan Bansal",
//     text: `Grace Aesthetic transformed our new home into a peaceful, nature-inspired space. Every detail feels thoughtfully designed, blending modern elegance with natural beauty. The result is a home that feels calm, fresh, and truly welcoming.`,
//   },
//   {
//     name: "Isha Malhotra",
//     text: `The team did an incredible job bringing our vision of a serene and beautiful home to life. The design feels open, airy, and connected to nature, while still maintaining a premium and modern touch. Their work reflects both creativity and precision.`
//   },
//   {
//     name: "Nikhil Sharma",
//     text: `We wanted a home that feels relaxing and close to nature, and Grace Aesthetic delivered beyond expectations. The balance of simplicity, natural elements, and refined design makes every space feel warm and harmonious.`
//   },
//   {
//     name: "Ananya Kapoor",
//     text: `From concept to execution, Grace Aesthetic created a home that feels like a perfect blend of beauty and comfort. The design is minimal yet impactful, with a strong focus on natural aesthetics and peaceful living. Truly exceptional work.`
//   },
// ];

// export default function Testimonials() {
//   const [index, setIndex] = useState(0);
//   const [fade, setFade] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(false); // fade out
//       setTimeout(() => {
//         setIndex((prev) => (prev + 1) % testimonials.length);
//         setFade(true); // fade in
//       }, 500);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-[#F5F4EF] py-16 px-4">
//       {/* Heading */}
//       <h2 className="text-center text-sm tracking-[0.3em] text-black mb-12">
//         WHAT OUR CLIENTS SAY
//       </h2>

//       {/* Cards */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
//         {[0, 1].map((card) => {
//           const data = testimonials[(index + card) % testimonials.length];

//           return (
//             <div
//               key={card}
//               className={`bg-[#EEECE4] p-8 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"
//                 }`}
//             >
//               <p className="text-xs tracking-widest text-gray-600 mb-4">
//                 {data.name}
//               </p>

//               <p className="text-xs leading-[1.8] tracking-wide text-gray-700">
//                 {data.text}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }



// import { useEffect, useState } from "react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Aryan Bansal",
    text: `We never thought a home could feel this peaceful. Grace Aesthetic took our new house and turned it into something that genuinely feels like a breath of fresh air. Modern, elegant, and deeply connected to nature. Every corner feels intentional. We walk in and instantly exhale.`,
  },
  {
    name: "Isha Malhotra",
    text: `We had a vision in our heads but couldn't quite put it into words. Grace Aesthetic understood it anyway. The result is a home that feels open, light-filled, and alive, without losing that premium, polished finish. Honestly, it exceeded what we imagined.`
  },
  {
    name: "Nikhil Sharma",
    text: `We told them we wanted to feel close to nature without sacrificing style. They nailed it. There's this beautiful balance between simplicity and warmth that makes every room feel like a place you actually want to stay in. No clutter, no chaos. Just calm.`
  },
  {
    name: "Ananya Kapoor",
    text: `From the very first conversation to the final reveal, Grace Aesthetic was thoughtful, precise, and genuinely creative. The design is minimal but it makes a statement. It's the kind of home that guests walk into and immediately ask, who did this?`
  },






  





];


export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef(null);

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 500);
    }, 5000);
  };

  const stopSlider = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, []);

  return (
    <section
      className="bg-[#F5F4EF] py-16 px-4"
      onMouseEnter={stopSlider}
      onMouseLeave={startSlider}
    >
      <h2 className="text-center text-sm tracking-[0.3em] text-black mb-12">
        WHAT OUR CLIENTS SAY
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {[0, 1].map((card) => {
          const data = testimonials[(index + card) % testimonials.length];

          return (
            <div
              key={card}
              className={`bg-[#EEECE4] p-8 transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
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