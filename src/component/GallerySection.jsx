import { useEffect, useRef } from 'react';
import HarmonyOne from "../assets/images/image30.jpeg";
import HarmonyTwo from "../assets/images/Harmony_second.jpg";
import Wellbeing from "../assets/images/Wellbeing.jpg";
import rooted from "../assets/images/rooted.jpg";
import Enduring from "../assets/images/Enduring.jpg";
import Thoughtful from "../assets/images/images50.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

gsap.registerPlugin(ScrollTrigger);

const GallerySection = () => {
  const wrappersRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !wrappersRef.current.includes(el)) {
      wrappersRef.current.push(el);
    }
  };

  const leftItems = useRef([]);
  const rightItems = useRef([]);

  const addToLeft = (el) => {
    if (el && !leftItems.current.includes(el)) {
      leftItems.current.push(el);
    }
  };

  const addToRight = (el) => {
    if (el && !rightItems.current.includes(el)) {
      rightItems.current.push(el);
    }
  };
  // useEffect(() => {
  //   wrappersRef.current.forEach((wrapper) => {
  //     const img = wrapper.querySelector("img");

  //     gsap.fromTo(
  //       img,
  //       {
  //         scaleY: 0,
  //         transformOrigin: "bottom",
  //       },
  //       {
  //         scaleY: 1,
  //         duration: 1.2,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: wrapper,
  //           start: "top 90%",
  //           end : "top 2%",
  //           // scrub : 1,
  //           // markers: true,
  //           toggleActions: "play none none none",
  //         },
  //       }
  //     );
  //   });
  // }, []);

  return (
    <section className="pb-32 bg-[#f8f7f3]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-24">
          <h2 className="
                  tracking-[0.6em] 
                  sm:tracking-[1rem] 
                  md:tracking-[1.6rem] 
                  lg:tracking-[2.25rem] 
                  text-xl 
                  sm:text-2xl 
                  md:text-3xl 
                  lg:text-[37px] 
                  text-gray-500
          ">
            ELEVATED EVERYDAY
          </h2>

          <p className="
                  mt-2 
                  sm:mt-3 
                  md:mt-4 
                  text-[10px] 
                  sm:text-[11px] 
                  md:text-xs 
                  tracking-[0.2em] 
                  sm:tracking-[0.25em] 
                  md:tracking-[0.3em] 
                  text-gray-400
          ">
            LEGACY FOR TOMORROW
          </p>
        </div>


        {/* Gallery */}
        <div className='w-full flex gap-4 flex-col overflow-hidden'>

          {/* FIRST SECTION */}
          <div className='w-full h-auto md:h-152 grid grid-cols-1 md:grid-cols-2 gap-4 top_section'>

            <div data-aos="fade-right" data-aos-duration="2000" className='w-full aspect-square md:h-full'>
              <img
                src={HarmonyOne}
                alt=""
                className='w-full h-full object-cover'
              />
            </div>

            <div data-aos="fade-left" data-aos-duration="2000" className='w-full h-full flex flex-col justify-between'>
              <p className='w-full font-serif text-[clamp(1.1rem,2vw,1.9rem)] tracking-[clamp(4px,1vw,14px)]'>
                Harmony
              </p>

              <div className='w-full h-1/2 overflow-hidden' ref={addToRefs}>
                <img
                  src={HarmonyTwo}
                  alt="img"
                  className='w-full md:w-1/2 h-full object-cover'
                />
              </div>
            </div>
          </div>

          {/* SECOND SECTION */}
          <div className='w-full h-auto md:h-152 grid grid-cols-1 md:grid-cols-2 gap-4 top_second_section'>

            <div data-aos="fade-right" data-aos-duration="2000" className='w-full grid grid-cols-1 md:grid-cols-2 h-full left_second_images'>
              <p className='font-serif text-[clamp(1.1rem,2vw,1.9rem)] tracking-[clamp(4px,1vw,14px)]'>
                Wellbeing
              </p>

              <div className='grid grid-cols-1 md:grid-rows-2' ref={addToRefs}>
                <img
                  src={Wellbeing}
                  alt="img"
                  className='w-full aspect-square lg:h-full md:h-1/2 object-cover'
                />
                <p className='w-full font-serif text-[clamp(1.1rem,2vw,1.9rem)] tracking-[clamp(4px,1vw,14px)]'>
                  Thoughtful
                </p>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="2000" className='w-full aspect-square md:h-full'>
              <img
                src={Thoughtful}
                className='w-full h-full object-cover'
              />
            </div>
          </div>

          {/* THIRD SECTION */}
          <div className='w-full h-auto md:h-76 grid grid-cols-1 md:grid-cols-2 gap-4 top_third_section'>

            <div data-aos="fade-right" data-aos-duration="2000" className='w-full grid grid-cols-1 md:grid-cols-2 h-full'>
              <p className='font-serif text-[clamp(1.1rem,2vw,1.9rem)] tracking-[clamp(4px,1vw,14px)] w-full flex justify-end'>
                Rooted
              </p>
              <img
                src={rooted}
                alt="img"
                className='w-full aspect-square md:h-full object-cover'
              />
            </div>

            <div data-aos="fade-left" data-aos-duration="2000" className='w-full grid grid-cols-1 md:grid-cols-2 flex gap-2'>
              <img
                src={Enduring}
                alt="img"
                className='w-full aspect-square md:h-full object-cover'
              />
              <p className='font-serif text-[clamp(1.1rem,2vw,1.9rem)] tracking-[clamp(4px,1vw,14px)]'>
                Enduring
              </p>
            </div>

          </div>

        </div>


      </div>
    </section>
  );
};

export default GallerySection;
