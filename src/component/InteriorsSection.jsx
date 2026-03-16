
import { motion } from 'framer-motion';
// import Harmonyestatenature from "../assets/images/beautiful-volcano-landscape.jpeg";
// import Ease from "../assets/images/rural-area-with-wooden-houses-surrounded-by-forests-with-hills-covered-fog.jpeg";
// import Grounded from "../assets/images/closeup-shot-sparrow-tree-log.jpeg";
// import Warmth from "../assets/images/wild-deer-nature.jpeg";


import Harmonyestatenature from "../assets/images/image10.jpg";
import Ease from "../assets/images/image7.jpg";
import Grounded from "../assets/images/image1.jpg";
import Warmth from "../assets/images/image40.jpg";
const InteriorsSection = () => {
  const interiors = [
    {
      title: "Harmony",   
      image: Harmonyestatenature,
      desc: "Balanced forms and natural materials come together to create calm, well-proportioned living spaces."
    },
    {
      title: "Warmth",
      image: Warmth,
      desc: "Soft textures and earthy tones shape welcoming interiors designed for comfort and connection."
    },
    {
      title: "Grounded",
      image: Grounded,
      desc: "Organic elements and thoughtful detailing create homes that feel stable, natural, and timeless."
    },
    {
      title: "Ease",
      image: Ease,
      desc: "Light-filled layouts and practical design choices support relaxed, effortless everyday living."
    }
  ];

  return (
    <section id="aesthetics" className="bg-luxury-dark text-white">
      {interiors.map((item, idx) => (
        <div key={idx} className="relative h-[80vh] min-h-[500px] overflow-hidden group">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover opacity-60 transition-transform duration-[2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent"></div>

          <div className="absolute bottom-20 left-4 md:left-24 lg:left-32 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-5xl font-serif mb-4 tracking-wide">{item.title}</h3>
              <p className="text-lg text-white/70 mb-8 font-light italic">{item.desc}</p>
              {/* <button className="btn-primary">View Project</button> */}
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
};


export default InteriorsSection;