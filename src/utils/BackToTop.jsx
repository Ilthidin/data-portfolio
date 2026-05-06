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
        // show only after leaving hero section
        setShowButton(!entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {showButton && (
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:block fixed bottom-10 right-10 z-50"
        >
          <ChevronUp className="w-10 h-10 border-2 border-gray-800 rounded-full animate-bounce text-black" />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;