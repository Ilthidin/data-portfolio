import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("#home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowButton(!entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  const handleScrollToTop = () => {
    const hero = document.querySelector("#home");
    if (hero) {
      hero.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // fallback
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          onClick={handleScrollToTop}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" lg:block fixed bottom-10 right-10 z-50 cursor-pointer"
        >
          <ChevronUp className="w-8 h-8 md:w-8 md:h-8 border-2 border-gray-800 rounded-full animate-bounce text-black" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;