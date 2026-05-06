import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";

const SOCIALS = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:yunitasulistiyo@gmail.com",
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yunitasulistiyo/",
    external: true,
  },
  {
    icon: Phone,
    label: "WhatsApp",
    href: "https://wa.me/6281225331567",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-14 sm:py-18 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10">
            Ready to turn your data into insights? Get in touch with me today.
          </p>

          <div className="flex justify-center gap-4 sm:gap-5">
            {SOCIALS.map(({ icon: Icon, label, href, external }) => (
              <motion.a
                key={label}
                href={href}
                {...(external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
                className="bg-gray-900 text-white p-3 sm:p-4 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
