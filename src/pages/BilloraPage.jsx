import React from "react";
import AOS from "aos";
import heroImg1 from "../assets/billoraImgs/heroImg1.png";
import heroImg2 from "../assets/billoraImgs1/tiger_New.jpeg";
import heroImg3 from "../assets/billoraImgs/heroImg3.png";
import {
  Waves,
  PawPrint,
  Utensils,
  Bed,
  MapPin,
  Car,
  Trees,
  Dumbbell,
  Wifi,
  Mountain,
} from "lucide-react";


import beyond1 from "../assets/billoraImgs/beyondWordsImgs/beyond2.png";
import beyond2 from "../assets/billoraImgs1/bird1.png";
import beyond3 from "../assets/billoraImgs1/envato-labs-image-edit (26).png";
import beyond4 from "../assets/billoraImgs1/autumn-landscape-with-birch-forest-and-mountain-ra-2026-01-08-07-23-59-utc.jpg";
import beyond5 from "../assets/billoraImgs1/hut_New.png";
import beyond6 from "../assets/billoraImgs1/garden with chair.jpg";
import beyond7 from "../assets/billoraImgs1/beyond7 1.png";
import beyond8 from "../assets/billoraImgs1/summer-landscape-with-fir-forest-in-mountains-2026-01-08-07-13-55-utc.jpg";
import beyond9 from "../assets/billoraImgs1/balkani.jpg";
import beyond10 from "../assets/billoraImgs1/red_Panda.jpeg";
import beyond01 from "../assets/billoraImgs1/beyond_1.png";
import beyond02 from "../assets/billoraImgs1/beyond_02.png";
import beyond03 from "../assets/billoraImgs1/beyond_03.png";
import beyond04 from "../assets/billoraImgs1/beyond_04.png";
import beyond05 from "../assets/billoraImgs1/beyond_05.png";
import interior from "../assets/billoraImgs1/interior.png";




const BilloraPage = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-[#EFEFEE] py-24 md:py-32 lg:py-36 px-4 md:px-6 overflow-hidden">
        <div className="relative z-10 max-w-[1600px] mx-auto">
          {/* Heading */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-center mb-16 md:mb-20"
          >
            <h1 className="text-3xl md:text-5xl font-medium tracking-widest text-[#4A4A4A]">
              BILLORA
            </h1>
            <p className="mt-4 text-[10px] md:text-sm tracking-[4px] font-medium text-[#F1A605] uppercase">
              A New Beginning Rooted In Greenery, Space, And Quiet Comfort.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="w-full h-[320px] md:h-[500px] lg:h-[600px] overflow-hidden"
            >
              <img src={"https://www.triponhimalaya.com/wp-content/uploads/2024/07/harkidun.jpg"} className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col gap-5">
              <div
                data-aos="fade-left"
                data-aos-duration="1500"
                className="w-full h-[320px] md:h-[340px] lg:h-[290px] overflow-hidden"
              >
                <img src={heroImg2} className="w-full h-full object-cover" />
              </div>

              <div
                data-aos="fade-left"
                data-aos-duration="1500"
                className="w-full h-[320px] md:h-[340px] lg:h-[290px] overflow-hidden"
              >
                <img src={"https://www.bizarexpedition.com/api/uploads/package/details/files-1770727380173-100239010.webp"} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND WORDS */}
      {/* BEYOND WORDS */}
      <section className="bg-[#e9e6e2] py-16 md:py-20 px-4 md:px-10 mb-28 md:mb-32 overflow-hidden">
        <div className="max-w-[1500px] mx-auto">
          {/* Heading */}
          <h2
            data-aos="fade-up"
            className="text-2xl md:text-3xl tracking-[12px] text-black mb-12"
          >
            BEYOND WORDS.
          </h2>

          <div className="flex flex-col gap-6">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="md:w-2/3 h-[300px] md:h-[455px]"
              >
                <img src={"https://bigcatsindia.com/wp-content/uploads/2025/04/oriental-dwarf-kingfisher.webp"} className="w-full h-full object-cover" />
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className="md:w-1/3 h-[300px] md:h-[455px]"
              >
                <img src={"https://images.unsplash.com/photo-1677924519638-7add87a25cb0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8"} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="md:w-1/3 h-[300px] md:h-[455px]"
              >
                <img src={beyond3} className="w-full h-full object-cover" />
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className="md:w-2/3 h-[300px] md:h-[455px]"
              >
                <img src={"https://femina.wwmindia.com/content/2020/jul/dehradun1594906809.jpg"} className="w-full h-full object-cover
                 " />
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="md:w-2/3 h-[300px] md:h-[455px]"
              >
                <img src={beyond5} className="w-full h-full object-cover" />
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className="md:w-1/3 h-[300px] md:h-[455px]"
              >
                <img src={beyond02} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="md:w-1/3 h-[300px] md:h-[455px]"
              >
                <img src={beyond03} className="w-full h-full object-cover object-[right_2%]" />
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className="md:w-2/3 h-[300px] md:h-[455px]"
              >
                <img src={beyond04} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Row 5 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div
                data-aos="fade-right"
                className="md:w-2/3 h-[300px] md:h-[455px]"
              >
                <img src={beyond9} className="w-full h-full object-cover" />
              </div>
              <div
                data-aos="fade-left"
                className="md:w-1/3 h-[300px] md:h-[455px]"
              >
                <img src={beyond05} className="w-full h-full object-cover " />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-[#EFEFEE] py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto mb-28 md:mb-32">
          <h2
            data-aos="fade-up"
            className="text-2xl md:text-3xl tracking-[12px] text-[#4A4A4A] mb-16 md:mb-20"
          >
            Amenities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-20 gap-x-16 md:gap-x-20">
            <div data-aos="zoom-in">
              <Waves
                size={60}
                className="text-teal-600 mb-10 md:mb-12"
                strokeWidth={1.5}
              />
              <h3 className="tracking-[4px] font-medium mb-4">POOL</h3>
              <p className="text-[#3D3D3D] text-sm leading-relaxed font-light max-w-md">
                A serene swimming pool designed for relaxation and leisure. An
                ideal space to unwind while surrounded by nature.
              </p>
            </div>

            <div data-aos="zoom-in" data-aos-delay="100">
              <PawPrint
                size={60}
                className="text-teal-600 mb-10 md:mb-12"
                strokeWidth={1.5}
              />
              <h3 className="tracking-[6px] font-medium mb-4">PET-FRIENDLY</h3>
              <p className="text-[#3D3D3D] text-sm leading-relaxed font-light max-w-md">
                Welcoming spaces thoughtfully planned for you and your pets.
                Because home should feel complete for every member of the
                family.
              </p>
            </div>
          </div>

          <div className="border-t border-[#0b5e4c35] my-14 md:my-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-20 gap-x-16 md:gap-x-20">
            <div data-aos="zoom-in">
              <Utensils
                size={60}
                className="text-teal-600 mb-10 md:mb-12"
                strokeWidth={1.5}
              />
              <h3 className="tracking-[6px] font-medium mb-4">RESTAURANT</h3>
              <p className="text-[#3D3D3D] text-sm leading-relaxed font-light max-w-md">
                An on-site dining space offering comfort and convenience. Enjoy
                curated meals without stepping away from home.
              </p>
            </div>

            <div data-aos="zoom-in" data-aos-delay="200">
              <Bed
                size={60}
                className="text-teal-600 mb-10 md:mb-12"
                strokeWidth={1.5}
              />
              <h3 className="tracking-[6px] font-medium mb-4">
                CONNECTING ROOMS AVAILABLE
              </h3>
              <p className="text-[#3D3D3D] text-sm leading-relaxed font-light max-w-md">
                Flexible living spaces designed for families and guests. Perfect
                for comfort, privacy, and togetherness.
              </p>
            </div>
          </div>



           <div className="border-t border-[#0b5e4c35] my-14 md:my-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-20 gap-x-16 md:gap-x-20">
            {/* LANDSCAPED GARDENS */}

            <div data-aos="zoom-in">
              <Trees
                size={60}
                className="text-teal-600 mb-10 md:mb-12"
                strokeWidth={1.5}
              />
              <h3 className="tracking-[6px] font-medium mb-4">
                LANDSCAPED GARDENS
              </h3>
              <p className="text-[#3D3D3D] text-sm leading-relaxed font-light max-w-md">
                Beautifully designed landscaped gardens offering peaceful green
                spaces, walking paths, and a refreshing natural environment.
              </p>
            </div>

            {/* GYM */}
            <div data-aos="zoom-in" data-aos-delay="200">
              <Dumbbell
                size={60}
                className="text-teal-600 mb-10 md:mb-12"
                strokeWidth={1.5}
              />
              <h3 className="tracking-[6px] font-medium mb-4">GYM</h3>
              <p className="text-[#3D3D3D] text-sm leading-relaxed font-light max-w-md">
                A fully equipped modern gym with advanced fitness equipment to
                support a healthy and active lifestyle.
              </p>
            </div>
          </div>

          <div className="border-t border-[#0b5e4c35] my-14 md:my-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-20 gap-x-16 md:gap-x-20">

            {/* PRIVATE BALCONIES */}
            <div data-aos="zoom-in" data-aos-delay="200">
              <Mountain
                size={60}
                className="text-teal-600 mb-10 md:mb-12"
                strokeWidth={1.5}
              />
              <h3 className="tracking-[6px] font-medium mb-4">
                PRIVATE BALCONIES WITH MOUNTAIN VIEWS
              </h3>
              <p className="text-[#3D3D3D] text-sm leading-relaxed font-light max-w-md">
                Spacious private balconies offering breathtaking mountain views,
                creating the perfect setting to relax and unwind.
              </p>
            </div>
            {/* 24x7 WI-FI */}
            <div data-aos="zoom-in">
              <Wifi
                size={60}
                className="text-teal-600 mb-10 md:mb-12"
                strokeWidth={1.5}
              />
              <h3 className="tracking-[6px] font-medium mb-4">24x7 WI-FI</h3>
              <p className="text-[#3D3D3D] text-sm leading-relaxed font-light max-w-md">
                Enjoy uninterrupted high-speed internet connectivity throughout
                the property for seamless work and entertainment.
              </p>
            </div>

            
          </div>

         
        </div>
      </section>
      {/* ABOUT AREA */}
      <section className="bg-[#EFEFEE] py-16 md:py-20 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <div className="w-full h-[300px] md:h-[400px] lg:h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4353.744398929771!2d79.09750683833299!3d29.60645347011841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a1987c49e37a5%3A0xe32484b88696a4a!2sTerratrek%20Billora!5e0!3m2!1sen!2sin!4v1771914821975!5m2!1sen!2sin"
                  className="w-full h-full"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4">
                About the area
              </h2>

              <p className="text-gray-600 mb-8 text-sm md:text-base">
                Jim Corbett National Park, Marchula,
                <br />
                Uttarakhand, 244715
              </p>

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={20} />
                  <h3 className="text-lg md:text-xl font-light">
                    What’s nearby
                  </h3>
                </div>
                <ul className="text-gray-600 space-y-2 text-sm md:text-base">
                  <li>• Corbett National Park - 11 min walk - 1.0 km</li>
                  <li>• Dhangarhi Museum - 54 min drive - 14.3 km</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Car size={20} />
                  <h3 className="text-lg md:text-xl font-light">
                    Getting around
                  </h3>
                </div>
                <ul className="text-gray-600 text-sm md:text-base">
                  <li>• Ramnagar Station - 65 min drive</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="mt-20 md:mt-28 text-center"
          >
            <h2 className="text-lg md:text-2xl lg:text-3xl tracking-[4px] md:tracking-[8px] uppercase">
              Built on Vision.
              <br className="hidden md:block" />
              Delivered with Excellence.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default BilloraPage;
