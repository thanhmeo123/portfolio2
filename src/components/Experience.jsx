import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Experience = () => {
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
        {t("title2")}
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-between group">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/4 mb-4 lg:mb-0"
            >
              <p className="text-sm border border-neutral-800 bg-neutral-900/50 rounded-full inline-block px-4 py-1.5 text-neutral-400 ">
                {t(experience.year)}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-3/4 lg:pl-8 border-l border-neutral-800/50 group-hover:border-neutral-600 transition-colors duration-500 pb-8"
            >
              <div className="pl-6 relative">
                {/* Timeline Dot */}
                <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-cyan-400 transition-colors duration-500"></span>
                <h6 className="mb-2 text-xl font-medium text-white">
                  {experience.role} <span className="text-sm font-normal text-neutral-500 px-2">•</span> 
                  <span className="text-lg font-light text-cyan-500 tracking-wide">
                    {experience.company}
                  </span>
                </h6>
                <p className="mb-6 text-neutral-400 font-light leading-relaxed">
                  {t(experience.description)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-neutral-900/80 border border-neutral-800 px-3 py-1 text-xs font-medium text-purple-400 tracking-wide"
                    >
                      {t(tech)}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
