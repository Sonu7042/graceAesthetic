import {
  Dumbbell,
  Building2,
  Trees,
  ShieldCheck,
  Baby,
  Table,
  ConciergeBell,
  Flower2,
  Tent,
  Users,
  Briefcase,
  BatteryCharging,
  HeartHandshake,
  Sparkles,
  Leaf,
  Landmark,
  Accessibility,
  Bed,
} from "lucide-react";

const amenities = [
  { title: "Luxury Clubhouse", icon: Building2 },
  { title: "Gym", icon: Dumbbell },
  { title: "Infinity Pool", icon: Sparkles },
  { title: "Restaurant", icon: ConciergeBell },
  { title: "Acres of Greenery", icon: Trees },

  { title: "2-Tier Security", icon: ShieldCheck },
  { title: "Kids Play Area", icon: Baby },
  { title: "Table Tennis / Badminton", icon: Table },
  { title: "Concierge", icon: ConciergeBell },
  { title: "Spiritual Haven", icon: Flower2 },

  { title: "Gazebo", icon: Tent },
  { title: "Banquet Hall", icon: Users },
  { title: "Business Center", icon: Briefcase },
  { title: "24/7 Power Backup", icon: BatteryCharging },
  { title: "Door to Door Staff", icon: HeartHandshake },

  { title: "Luxury Salon & Spa", icon: Sparkles },
  { title: "Organic Farm", icon: Leaf },
  { title: "Temple", icon: Landmark },
  { title: "Wheelchair Friendly", icon: Accessibility },
  { title: "Medical Room", icon: Bed },
];

export default function AmenitiesSection() {
  return (
    <section className="bg-luxury-dark text-luxury-light py-16 px-4 md:px-10 font-sans">
      
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-serif tracking-[0.2em] text-primary mb-12">
        AMENITIES
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {amenities.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-luxury-light text-luxury-dark rounded-2xl p-5 flex flex-col items-center justify-center text-center border border-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition duration-300"
            >
              <Icon size={32} className="mb-3 text-primary" />
              <p className="text-xs md:text-sm font-medium leading-tight">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom Text */}
      <div className="mt-14 text-center">
        <div className="w-40 h-[1px] bg-primary mx-auto mb-4 opacity-60"></div>
        <p className="tracking-[0.3em] text-sm md:text-base font-serif text-primary">
          A BEAUTIFUL WAY TO LIVE
        </p>
      </div>
    </section>
  );
}