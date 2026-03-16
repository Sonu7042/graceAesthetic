import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import img1 from "../assets/natureCoursal/bus.jpeg";
import img2 from "../assets/natureCoursal/mountain3.jpeg";
import img3 from "../assets/natureCoursal/mountain_img.jpeg";
import img4 from "../assets/natureCoursal/bird.jpeg";

const NatureCarousel = () => {
  const images = [img1, img2, img3, img4];

  return (
    <section className="bg-[#f8f8f5] py-12">

      {/* HEADER */}
      <div className="w-[90%] max-w-[1400px] mx-auto mb-8">
        <h2 className="tracking-[0.6em] 
          sm:tracking-[1rem] 
          md:tracking-[1.6rem] 
          lg:tracking-[2.25rem] 
          text-xl 
          sm:text-2xl 
          md:text-3xl 
          lg:text-[37px] 
          text-gray-500 uppercase text-center xl:mb-12">
          Closer to Nature
        </h2>
      </div>

      {/* FADE SLIDER */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect="fade"                     // 🔥 fade effect
        fadeEffect={{ crossFade: true }}  // 🔥 smooth fade in/out
        speed={1200}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-screen h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-screen h-[70vh]">
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NatureCarousel;
