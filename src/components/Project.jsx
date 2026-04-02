import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { t } = useTranslation();
  return (
    <div className="border-b border-neutral-800/50 pb-20 pt-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="my-16 text-center text-4xl md:text-5xl font-bold text-white tracking-tight"
      >
        {t("title3")}
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-700/50 hover:border-blue-500/50 transition-colors shadow-lg"
          >
            <div className="w-full h-64 overflow-hidden bg-neutral-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h6 className="mb-4 text-2xl font-bold text-white">{project.title}</h6>
              <p className="mb-6 text-neutral-400 font-normal flex-grow text-base">
                {t(project.description)}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-blue-900/40 text-blue-300 px-3 py-1 text-sm font-semibold border border-blue-800/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
