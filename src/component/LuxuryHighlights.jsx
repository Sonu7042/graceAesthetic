import { Diamond } from "lucide-react";

const LuxuryHighlights = () => {
  const items = [
    "Designed for Life",
    "Built with Care",
    "Your Second Home",
  ];


  



  return (
    <section className="w-full bg-[#f8f8f5] py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16 px-6">

        {items.map((text, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full"
          >
            {/* TOP LINE */}
            <div className="w-full max-w-[260px] h-[3px] bg-[#E0A82E] mb-6 rounded-full"></div>

            {/* ICON + TEXT */}
            <div className="flex items-center gap-3 text-[#E0A82E] uppercase tracking-widest text-sm md:text-base font-medium">
              <Diamond size={20} />
              <span>{text}</span>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default LuxuryHighlights;
