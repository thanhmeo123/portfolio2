import { HERO_CONTENT } from "../constants";
import imgAvatar from "../assets/me5.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import DownloadButton from "./DownloadButton.jsx";
import cvFile from "../file/Cv_NguyenCongThanh_En.pdf";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const cvUrl = cvFile;
  const filename = "Cv_NguyenCongThanh_En.pdf";
  const buttonText = "Download CV";
  
  return (
    <div className="border-b border-neutral-800/50 pb-20 lg:mb-32 pt-8">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`pb-6 font-bold tracking-tight text-white ${currentLanguage === "vi" ? "text-5xl lg:text-6xl" : "text-6xl lg:text-7xl"} drop-shadow-md`}
            >
              {t("myname")}
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-2xl md:text-3xl tracking-tight text-transparent font-semibold"
            >
              Front-End Developer
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="my-6 max-w-xl text-lg font-normal tracking-wide text-neutral-300 leading-relaxed"
            >
              {t(HERO_CONTENT)}
            </motion.p>
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.6 }}
               className="mt-4">
              <DownloadButton cvUrl={cvUrl} filename={filename} buttonText={buttonText} />
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 mt-16 lg:mt-0">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative rounded-[2rem] border-[8px] border-neutral-800/80 shadow-[0_0_40px_rgba(120,119,198,0.3)] overflow-hidden w-64 sm:w-72 md:w-80 lg:w-[380px] bg-neutral-900 inline-block"
            >
              <img
                className="w-full h-auto block"
                src={imgAvatar}
                alt="Avatar"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
