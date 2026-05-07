import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Managing Data & Operations in Organization",
    desc: [
      "Managed budgeting and financial tracking using structured data records",
      "Maintained accurate financial documentation to ensure transparency and accountability",
      "Supported decision-making through organized financial reporting",
      "Coordinated operational activities using structured planning and resource allocation",
    ],
  },
  {
    title: "Content Optimization Using Data & SEO",
    desc: [
      "Created SEO-driven content based on keyword research and audience data",
      "Improved article performance through data-informed optimization strategies",
      "Applied basic content analytics to evaluate readability and engagement",
      "Transformed content based on insights from search trends and user behavior",
    ],
  },
  {
    title: "Data Annotation for Machine Learning Systems",
    desc: [
      "Annotated and structured product data to improve search and recommendation accuracy",
      "Performed image labeling for machine learning and visual search systems",
      "Ensured high data quality with consistent accuracy above 95%",
      "Contributed to reliable datasets that support model performance and user experience",
    ],
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

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="py-8 lg:py-20 px-4 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12"
        >
          Exploring Data Through Real Experience
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {SKILL_CATEGORIES.map((ex) => (
            <motion.div
              key={ex.title}
              variants={cardVariants}
              className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-gray-100"
            >
              <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-4 sm:mb-5 text-center ">
                {ex.title}
              </h3>
              <ul className="divide-y divide-gray-400">
                {ex.desc.map((desc, j) => (
                  <motion.li
                    key={desc}
                    className="flex items-center gap-2 text-sm sm:text-base py-2.5"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.08 }}
                  >
                    <span className="w-2 h-2 bg-gray-900 rounded-full shrink-0" />
                    {desc}
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
