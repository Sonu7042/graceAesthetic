
import { motion } from 'framer-motion';
import thoughtfulLocations from "../assets/images/thoughtful-Locations.jpg";
import DesignedWithPurpose from "../assets/images/Designed-with-Purpose.jpg";
import LivingResponsibly from "../assets/images/Living-Responsibly.jpg";
const WhyChooseSection = () => {
  const points = [
    {
      title: "Thoughtful Locations",
      image: thoughtfulLocations,
      text: "Places chosen with care for their natural setting, accessibility, and quality of everyday living."
    },
    {
      title: "Designed with Purpose",
      image: DesignedWithPurpose,
      text: "Homes shaped by clarity, proportion, and a deep respect for their surroundings."
    },
    {
      title: "Living Responsibly",
      image: LivingResponsibly,
      text: "A mindful approach that values environmental balance, local context, and lasting well-being."
    }
  ];

  return (
    <section id="destinations" className="py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="tracking-[0.6em] 
    sm:tracking-[1rem] 
    md:tracking-[1.6rem] 
    lg:tracking-[2.25rem] 
    text-xl 
    sm:text-2xl 
    md:text-3xl 
    lg:text-[37px] 
    text-gray-500 uppercase text-center xl:mb-12">Why Grace Aesthetic</h2>
          <p className="text-luxury-dark/60 max-w-4xl mx-auto">
            Uttrakhand offers a rare harmony between natural beauty and contemporary living. Surrounded by hills, forests, and clean air, it supports a slower, healthier lifestyle while still providing essential urban connectivity. It is a place where people can settle with confidence, find balance, and feel genuinely at home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {points.map((point, idx) => (
            <motion.div
              key={idx}


              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group text-center"
            >
              <div className="relative h-64 overflow-hidden rounded-sm mb-6">
                <img
                  src={point.image}
                  alt={point.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h4 className="text-xl font-serif mb-3 tracking-wide">{point.title}</h4>
              <p className="text-sm text-luxury-dark/70 leading-relaxed px-4">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;