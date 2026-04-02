import { RiReactjsLine } from "react-icons/ri";
import { DiJavascript, DiHtml5, DiNodejs } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const { t } = useTranslation();
  return (
    <div className="border-b border-neutral-800/50 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl md:text-5xl font-light text-white tracking-tight"
      >
        {t("title5")}
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
      >
        {[
          { Icon: RiReactjsLine, color: "text-cyan-400", delay: 2.5 },
          { Icon: DiJavascript, color: "text-yellow-400", delay: 2.75 },
          { Icon: DiHtml5, color: "text-orange-400", delay: 3 },
          { Icon: DiNodejs, color: "text-green-500", delay: 3.25 },
          { Icon: FaVuejs, color: "text-emerald-400", delay: 3.5 },
        ].map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.delay)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(38,38,38,0.8)" }}
            className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur-sm shadow-lg transition-colors duration-300"
          >
            <tech.Icon className={`text-6xl md:text-7xl ${tech.color} drop-shadow-md`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
