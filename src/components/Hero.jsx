import React from "react";
import { HERO_CONTENT } from "../constants";
import imgAvatar from "../assets/me5.png";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import DownloadButton from "./DownloadButton.jsx";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const { t } = useTranslation();

  const cvUrl = "../file/CV_NguyenCongThanh-fresher.pdf"; // Đường dẫn đến CV của bạn
  const filename = "CV_NguyenCongThanh-fresher.pdf";
  const buttonText = "Download CV";
  return (
    <>
      <div className="bored-b border-neutral-900 pb-4 lg:mb-35 ">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center  lg:items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
              >
                {t("myname")}
              </motion.h1>
              <motion.span
                variants={container(0.25)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text 
                text-3xl tracking-tight text-transparent"
              >
                Front-End Developer
              </motion.span>
              <motion.p
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl text-xl py-6 font-light tracking-tighter"
              >
                {t(HERO_CONTENT)}
              </motion.p>
              <div className="">
                <DownloadButton
                  cvUrl={cvUrl}
                  filename={filename}
                  buttonText={buttonText}
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center ">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.1, delay: 0.3 }}
                className="rounded-2xl  h-full lg:h-[35rem]  "
                src={imgAvatar}
                alt="AvatarFinn"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
