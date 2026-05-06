import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Activity, ChevronDown } from "lucide-react";

function DataViz() {
  const [pts, setPts] = useState([]);

  useEffect(() => {
    setPts(
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        x: Math.random() * 88 + 6,
        y: Math.random() * 70 + 10,
        size: Math.random() * 14 + 8,
        delay: Math.random() * 2,
        repeatDelay: Math.random() * 3,
      })),
    );
  }, []);

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" aria-hidden>
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={i}>
            <motion.line
              x1="0"
              y1={`${(i + 1) * 11}%`}
              x2="100%"
              y2={`${(i + 1) * 11}%`}
              stroke="#000"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: i * 0.08 }}
            />
            <motion.line
              x1={`${(i + 1) * 11}%`}
              y1="0"
              x2={`${(i + 1) * 11}%`}
              y2="100%"
              stroke="#000"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: i * 0.08 }}
            />
          </g>
        ))}
      </svg>

      {/* Data points */}
      {pts.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gray-900"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 0.7, 0.5] }}
          transition={{
            duration: 1.8,
            delay: p.delay,
            repeat: Infinity,
            repeatDelay: p.repeatDelay,
          }}
        />
      ))}

      {/* Trend line */}
      <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
        <svg viewBox="0 0 200 50" className="w-full h-10 sm:h-14">
          <motion.path
            d="M0,45 L25,38 L50,25 L75,30 L100,18 L125,22 L150,12 L175,16 L200,5"
            fill="none"
            stroke="#111827"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
          />
        </svg>
      </div>

      {/* Floating icons */}
      {[
        {
          Icon: BarChart3,
          pos: "top-4 right-4 sm:top-6 sm:right-6",
          anim: { y: [0, -8, 0] },
          dur: 3,
        },
        {
          Icon: TrendingUp,
          pos: "top-1/2 left-4 sm:left-6",
          anim: { y: [0, 8, 0] },
          dur: 4,
        },
        {
          Icon: Activity,
          pos: "bottom-16 right-10 sm:bottom-20 sm:right-14",
          anim: { y: [0, -10, 0] },
          dur: 3.5,
        },
      ].map(({ Icon, pos, anim, dur }) => (
        <motion.div
          key={pos}
          className={`absolute ${pos}`}
          animate={anim}
          transition={{ duration: dur, repeat: Infinity }}
        >
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900 opacity-20" />
        </motion.div>
      ))}
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-14 sm:pt-16 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
              Data Analyst
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
              I transform complex data into actionable business insights that
              drive growth and minimize risk.
            </p>
            <motion.button
              onClick={() => scrollTo("contact")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block bg-gray-900 text-white px-7 py-3 sm:px-8 sm:py-3.5 rounded-full font-semibold hover:bg-gray-800 transition-colors text-sm sm:text-base"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-1 md:order-2"
          >
            <DataViz />
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-10 sm:mt-14 lg:mt-16"
        >
          <button
            onClick={() => scrollTo("about")}
            aria-label="Scroll to about"
            className="rounded-full border-2 border-gray-700 hover:border-gray-600 transition-colors hover:cursor-pointer animate-bounce"
          >
            <ChevronDown className="w-8 h-8 sm:w-12 sm:h-12 text-gray-800" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
