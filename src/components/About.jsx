import React from "react";
import imgAbout from "../assets/pic2.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          {t("title")}
          {/* <span className="text-neutral-500"> Me</span> */}
        </motion.h1>
        <div className="flex flex-wrap">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.75 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="flex items-center justify-center py-0 lg:py-20  ">
              <img className="rounded-2xl " src={imgAbout} alt="imgAbout" />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.85 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className=" items-center justify-center lg:justify-start">
              <p className="my-2 max-w-xl text-xl py-2">{t(ABOUT_TEXT)}</p>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-wrap">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.75 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className=" items-center justify-center lg:justify-start">
              <p className="my-2 max-w-xl text-xl py-2">{t("targetTitle")}</p>
              <p className="my-2 max-w-xl text-xl py-2">{t("descTarget")}</p>
              <p className="my-2 max-w-xl text-xl py-2">{t("targetTitle1")}</p>
              <p className="my-2 max-w-xl text-xl py-2">{t("descTarget1")}</p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.85 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="lg:flex items-center justify-center hidden py-20 ">
              <img className="rounded-2xl " src={imgAbout} alt="imgAbout" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
