import React from "react";

const GraceAestheticPage = () => {
  return (
    <div className="w-full font-sans text-[#2f2f2f]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Header */}
        <header className="absolute top-0 left-0 z-10 flex w-full items-center justify-between px-6 py-5 text-white md:px-12">
          <h1 className="text-lg font-semibold tracking-wide">
            Grace Aesthetic
          </h1>

          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact Us</a>
          </nav>
        </header>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-black shadow-lg backdrop-blur">
            ▶
          </button>
        </div>
      </section>

      {/* ================= PROJECT OVERVIEW ================= */}
      <section className="bg-[#fbfbf8] px-6 py-20 text-center md:px-20">
        <h2 className="mb-6 tracking-[0.35em] text-[#d7a850]">
          PROJECT OVERVIEW
        </h2>

        <p className="mx-auto max-w-3xl text-sm leading-7 text-gray-600">
          Designed for those who value space, greenery, and balance, this project
          seamlessly blends modern living with Uttrakhand’s natural surroundings.
          Thoughtfully planned layouts, open environments, and a peaceful setting
          come together to create a lifestyle rooted in comfort and calm.
        </p>
      </section>

      {/* ================= VISUAL JOURNEY ================= */}
      <section className="bg-[#fbfbf8] px-6 pb-20 md:px-20">
        <h2 className="mb-12 text-center tracking-[0.4em]">
          VISUAL JOURNEY
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013"
            alt="Interior"
            className="h-full w-full rounded-xl object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6"
            alt="Exterior"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      </section>

      {/* ================= AMENITIES ================= */}
      <section className="bg-[#fbfbf8] px-6 pb-20 md:px-20">
        <h2 className="mb-12 text-center tracking-[0.4em]">
          PROJECT AMENITIES
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Round the Clock Security",
            "24 Hours Electricity & Water",
            "100% Power Backup",
            "Piped Gas System",
            "Open & Covered Parking",
            "Landscaped Green Areas",
            "Convenience Store",
            "Resident Lounge / Gym",
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center rounded-lg border border-[#8aa39b] px-4 py-6 text-center text-sm"
            >
              <div className="mb-3 h-8 w-8 rounded-full border border-[#8aa39b]"></div>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ================= FULL WIDTH IMAGE ================= */}
      <section className="w-full">
        <img
          src="https://images.unsplash.com/photo-1449844908441-8829872d2607"
          alt="Nature House"
          className="h-[70vh] w-full object-cover"
        />
      </section>

      {/* ================= CONTACT ================= */}
      <section className="bg-[#e7e1d7] px-6 py-20 md:px-20">
        <h2 className="mb-4 text-center tracking-[0.4em]">CONTACT</h2>

        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-gray-600">
          Reach out today to explore waterside residences in Uttrakhand. Our team
          is ready to guide you through luxury living surrounded by nature.
        </p>

        <form className="mx-auto max-w-4xl space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <input
              type="text"
              placeholder="FULL NAME"
              className="w-full border-b border-gray-500 bg-transparent p-2 outline-none"
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="w-full border-b border-gray-500 bg-transparent p-2 outline-none"
            />
            <input
              type="tel"
              placeholder="PHONE NUMBER"
              className="w-full border-b border-gray-500 bg-transparent p-2 outline-none"
            />
          </div>

          <textarea
            placeholder="MESSAGE"
            className="w-full border-b border-gray-500 bg-transparent p-2 outline-none"
          ></textarea>

          <div className="flex items-center gap-2 text-xs">
            <input type="checkbox" />
            <span>I accept the privacy policy and terms of use</span>
          </div>

          <button className="mt-6 bg-[#2f5d50] px-10 py-3 text-sm text-white">
            SUBMIT
          </button>
        </form>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#fbfbf8] px-6 py-16 md:px-20">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-[#d7a850]">
              Grace Aesthetic
            </h3>
            <p className="text-sm text-gray-600">
              Guiding you from chaos to serene living in Uttrakhand.
            </p>
          </div>

          <div>
            <p className="font-medium">Trade the Noise for Nature</p>
            <p className="text-xl font-semibold">Move to Uttrakhand.</p>
            <button className="mt-4 border border-[#2f5d50] px-6 py-2 text-sm">
              Start Your Property Journey
            </button>
          </div>

          <div className="text-sm text-gray-600">
            <p>Contact</p>
            <p>Home • About • Projects • Blog • Insights</p>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-gray-500">
          © 2026 Grace Aesthetic. Privacy Policy · Terms & Conditions
        </div>
      </footer>
    </div>
  );
};

export default GraceAestheticPage;
