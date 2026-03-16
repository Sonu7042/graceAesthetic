import { ArrowRight } from "lucide-react";
import swastixaLogo from "../assets/gracefooter.png";

const AboutSection = () => {
  return (
    <section
      id="story"
      className="bg-[#f8f8f5] md:h-screen h-auto py-10   flex items-center justify-center"
    >
      <div className="w-[90%] max-w-300 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* LEFT CONTENT */}
        <div className="flex flex-col max-w-xl">
          <h3 className="tracking-[0.6em] 
              sm:tracking-[1rem] 
              md:tracking-[1.6rem] 
              lg:tracking-[2.25rem] 
              text-xl 
              sm:text-2xl 
              md:text-3xl 
              lg:text-[37px] 
              text-gray-500 pb-6">
            OUR STORY
          </h3>

          <p className="text-gray-500 leading-relaxed text-sm  md:text-base mb-10">
            Life feels different when space, silence, and nature take the lead. Grace Aesthetic designs second homes that offer a beautiful way to live, away from the noise of the city.
            Set within the calm landscapes of Uttarakhand, our homes are shaped by their surroundings  with careful attention to light, openness, and proportion. Each development is planned to feel natural and unhurried, creating spaces that support peace, balance, and everyday comfort while staying connected to modern living.
          </p>

          {/* <button
            className="
              flex items-center gap-3
              bg-[#2F5D50]
              text-white
              px-6 py-3 w-fit
              text-xs uppercase tracking-widest
              transition-all duration-300
              hover:bg-white hover:text-black
               "
          >
            {<ArrowRight size={14} />}
            Discover More
          </button> */}
        </div>

        {/* RIGHT LOGO */}
        <div className="flex justify-center items-center w-full md:w-auto">
          <img
            src={swastixaLogo}
            alt="Brand Symbol"
            className="w-64 md:w-80 lg:w-72 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
