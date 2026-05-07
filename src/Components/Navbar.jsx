import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = ["Home", "About", "Experiences", "Projects", "Contact"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Brand */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-base sm:text-lg font-bold text-gray-900 truncate max-w-[160px] sm:max-w-none cursor-default"
          >
            Yunita Sulistiyowati
          </motion.span>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item}
                onClick={() => scrollTo(item)}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-150 cursor-pointer"
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              {[
                mobileOpen ? "rotate-45 translate-y-[7px]" : "",
                mobileOpen ? "opacity-0" : "",
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : "",
              ].map((cls, i) => (
                <span
                  key={i}
                  className={`block w-full h-0.5 bg-gray-900 transition-all duration-200 ${cls}`}
                />
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="w-full text-left px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}