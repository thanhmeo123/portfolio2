import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="pb-10 pt-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="my-10 text-center text-4xl md:text-5xl font-light text-white tracking-tight"
      >
        {t("title4")}
      </motion.h2>
      <div className="text-center tracking-tight flex flex-col items-center">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="my-4 text-neutral-400 font-light text-lg"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="my-4 text-neutral-400 font-light text-lg"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          href={`mailto:${CONTACT.email}`}
          className="mt-6 border-b border-transparent hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-lg font-medium"
        >
          {CONTACT.email}
        </motion.a>
      </div>
      <motion.div 
        whileInView={{ opacity: 1, scaleX: 1 }}
        initial={{ opacity: 0, scaleX: 0 }}
        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        className="w-1/2 md:w-1/4 h-px bg-neutral-800 mx-auto mt-12"
      ></motion.div>
    </div>
  );
};

export default Contact;
