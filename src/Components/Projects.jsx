import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "../assets/certificates/certificates.js";

const TABS = [
  { key: "all", label: "All" },
  { key: "intern", label: "Intern" },
  { key: "learn", label: "Learning" },
  { key: "volunteer", label: "Volunteer" },
];

function ExperienceCard({ item }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 32 }}
      transition={{ duration: 0.35 }}
      className="w-full sm:w-1/2 xl:w-1/4 px-3 mb-6"
    >
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col">
        <div className="aspect-video w-full overflow-hidden bg-gray-100">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 sm:p-5 flex flex-col flex-1">
          <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 line-clamp-2">
            {item.title}
          </h3>
          {item.desc && (
            <p className="text-xs sm:text-sm text-gray-600 mb-4 flex-1 line-clamp-3">
              {item.desc}
            </p>
          )}
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs sm:text-sm text-white bg-gray-900 py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors mt-auto self-start"
          >
            View More
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? certificates
      : certificates.filter((item) => item.category === activeTab);

  return (
    <section id="blog" className="py-14 sm:py-18 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-sm sm:text-base font-semibold text-gray-500 mb-1 sm:mb-2 uppercase tracking-wide">
            Internships & Involvement
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Grow Through Doing
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
            Practical experience that connects theory with real-world impact.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? "bg-gray-900 text-white shadow-sm"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <motion.div layout className="flex flex-wrap -mx-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <ExperienceCard key={item.title + i} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
