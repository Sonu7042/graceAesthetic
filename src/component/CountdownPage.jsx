import { useEffect, useState } from "react";

export default function CountdownPage() {
  const targetDate = new Date("2026-03-19T22:00:00");

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const total = targetDate - new Date();

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 
    bg-gradient-to-br from-yellow-50 via-white to-yellow-100 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px]  rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] rounded-full bottom-[-100px] right-[-100px]"></div>

      <div className="text-center w-full max-w-5xl relative z-10">

        <Header />

        <Timer timeLeft={timeLeft} />

      </div>
    </div>
  );
}

/* ================= HEADER ================= */
function Header() {
  return (
    <>
      <h1 className="text-3xl md:text-6xl mb-14 font-extrabold mb-4 
      bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 
      bg-clip-text text-transparent">
        Launching Soon
      </h1>

      <p className="text-gray-600 mb-12 text-sm md:text-lg">
        19 March • 10:00 PM
      </p>
    </>
  );
}

/* ================= TIMER ================= */
function Timer({ timeLeft }) {
  return (
    <div className="flex flex-wrap justify-center items-end gap-6 md:gap-10">

      <TimeItem value={timeLeft.days} label="Days" />
      <Separator />

      <TimeItem value={timeLeft.hours} label="Hours" />
      <Separator />

      <TimeItem value={timeLeft.minutes} label="Minutes" />
      <Separator />

      <TimeItem value={timeLeft.seconds} label="Seconds" />

    </div>
  );
}

/* ================= TIME ITEM ================= */
function TimeItem({ value, label }) {
  return (
    <div className="text-center">

      <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold 
      bg-gradient-to-r from-yellow-600 to-yellow-400 
      bg-clip-text text-transparent tracking-tight">
        {value < 10 ? `0${value}` : value}
      </h2>

      <p className="text-gray-500 text-xs md:text-sm mt-2 uppercase tracking-widest">
        {label}
      </p>

    </div>
  );
}

/* ================= SEPARATOR ================= */
function Separator() {
  return (
    <span className="text-3xl md:text-5xl font-bold text-yellow-500 mb-6">
      :
    </span>
  );
}