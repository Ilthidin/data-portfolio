import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Data Analysis",
    skills: ["Python", "R", "SQL", "Excel", "Statistical Analysis"],
  },
  {
    title: "Visualization",
    skills: ["Tableau", "Power BI", "Looker Studio", "Matplotlib", "Plotly"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Jupyter", "Google Colab", "BigQuery", "Google Sheets", "Git"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-18 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {SKILL_CATEGORIES.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className="bg-gray-50 p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-gray-100"
            >
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-5">
                {cat.title}
              </h3>
              <ul className="space-y-2 sm:space-y-2.5">
                {cat.skills.map((skill, j) => (
                  <motion.li
                    key={skill}
                    className="flex items-center gap-2.5 text-sm sm:text-base text-gray-700"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.08 }}
                  >
                    <span className="w-2 h-2 bg-gray-900 rounded-full shrink-0" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}