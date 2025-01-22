import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { DiJavascript, DiHtml5, DiNodejs } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import { motion } from "motion/react";
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
    <>
      <div className="border-b border-neutral-800 pb-24">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          {t("title5")}
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(2.75)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <DiJavascript className="text-7xl text-yellow-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <DiHtml5 className="text-7xl text-orange-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(3.25)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <DiNodejs className="text-7xl text-green-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <FaVuejs className="text-7xl text-green-400" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Technologies;
