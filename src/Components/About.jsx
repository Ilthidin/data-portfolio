import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Database, PieChart } from "lucide-react";
import profile from "../assets/profile.png";

const STATS = [
  { icon: BarChart3, label: "Data Visualizations", value: "50+" },
  { icon: TrendingUp, label: "Projects Completed", value: "25+" },
  { icon: Database, label: "Datasets Analyzed", value: "100+" },
  { icon: PieChart, label: "Reports Generated", value: "80+" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Avatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto"
    >
      {/* Spinning ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 sm:border-[3px] border-dashed border-gray-400"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
      {/* Photo */}
      <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-200">
        <img src={profile} alt="Profile" className="w-full h-full object-cover" />
      </div>
      {/* Badge */}
      <motion.div
        className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-11 h-11 sm:w-13 sm:h-13 bg-gray-900 rounded-full flex items-center justify-center"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, type: "spring" }}
      >
        <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-18 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12"
        >
          About Me
        </motion.h2>

        <Avatar />

        {/* Body text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-8 sm:mt-10 max-w-2xl mx-auto text-center space-y-4"
        >
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            I'm a passionate data analyst with expertise in extracting meaningful insights
            from complex datasets. With a strong foundation in statistics and data visualization,
            I help organizations make data-driven decisions.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            My approach combines technical proficiency with business acumen to deliver solutions
            that create real impact. I specialize in turning raw data into compelling narratives
            that stakeholders can understand and act upon.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-10 sm:mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {STATS.map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 text-center"
            >
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900 mb-2 sm:mb-3 mx-auto" />
              <div className="text-xl sm:text-2xl font-bold text-gray-900">{value}</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-0.5">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}