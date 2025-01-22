import React from "react";
import { CONTACT } from "../constants";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="border-b border-neutral-900 pb-20 pt-20">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.75 }}
          className="my10 text-center text-4xl"
        >
          {t("title4")}
        </motion.div>
        <div className="text-center tracking-tight">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.75 }}
            className="my-4"
          >
            {CONTACT.address}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.75 }}
            className=" "
          >
            {CONTACT.phoneNo}
          </motion.p>
          <a href="#" className="border-b">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
