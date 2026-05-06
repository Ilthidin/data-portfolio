import { motion } from "framer-motion";
import { Phone, Linkedin, Mail } from "lucide-react";

const SOCIAL_LINKS = [
  {
    Icon: Phone,
    href: "https://wa.me/6281225331567",
    label: "Whatsapp",
    external: true,
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/yunitasulistiyo/",
    label: "LinkedIn",
    external: true,
  },
  {
    Icon: Mail,
    href: "mailto:yunitasulistiyo@gmail.com",
    label: "Email",
    external: false,
  },
];

const FOCUS_AREAS = [
  "Data Analysis & Storytelling",
  "Business Intelligence Strategy",
  "Data-Driven Decision Making",
  "Dashboarding (Looker Studio, Tableau)",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 lg:gap-100 items-start py-2">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-justify">
              Thanks for Scrolling This Far
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0">
              This website is a reflection of my journey as a data enthusiast,
              shaped by real-world projects, learning experiences, and the drive
              to turn numbers into narratives.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                  {...(external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Key focus */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
              Key Focus Areas
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 ">
              {FOCUS_AREAS.map((area) => (
                <li
                  key={area}
                  className="text-sm sm:text-base text-gray-400 flex items-center gap-2 justify-center md:justify-start hover:text-gray-100"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-10 border-t border-gray-700 pt-5 text-center text-xs sm:text-sm text-gray-500"
        >
          © {year} Yunita Sulistiyowati. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
