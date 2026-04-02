import imgAbout from "../assets/pic2.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
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
        {t("title")}
      </motion.h2>
      <div className="flex flex-wrap items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-5/12 lg:pr-12"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-[2rem] border-[4px] border-neutral-800/80 w-full lg:w-[380px] h-auto shadow-[0_10px_30px_rgba(0,0,0,0.5)]" src={imgAbout} alt="About" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-7/12 mt-10 lg:mt-0"
        >
          <div className="text-center lg:text-left text-neutral-300">
            {/* <p className="mb-6 text-lg font-normal leading-relaxed">{t(ABOUT_TEXT)}</p> */}
            
            <div className="mt-8 p-6 bg-neutral-900/60 rounded-xl border border-neutral-800 shadow-md">
              <h3 className="text-xl font-bold text-blue-400 mb-2">{t("targetTitle")}</h3>
              <p className="text-md font-normal text-neutral-300 mb-6">{t("descTarget")}</p>
              
              <h3 className="text-xl font-bold text-purple-400 mb-2">{t("targetTitle1")}</h3>
              <p className="text-md font-normal text-neutral-300">{t("descTarget1")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
