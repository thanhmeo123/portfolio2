import React from "react";
import { FiDownload } from "react-icons/fi";
import { motion } from "motion/react";

const DownloadButton = ({ cvUrl, filename, buttonText }) => {
  const handleDownload = () => {
    if (cvUrl) {
      const link = document.createElement("a");
      link.href = cvUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <motion.button
      variants={container(0.65)}
      initial="hidden"
      animate="visible"
      onClick={handleDownload}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#1b1b28] to-[#333347] group-hover:from-[#1b1b28] group-hover:to-[#333347] hover:text-white focus:ring-4 focus:outline-none focus:ring-[#1b1b28] dark:text-white dark:focus:ring-[#1b1b28]"
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        <FiDownload className="inline-block mr-2" />
        {buttonText}
      </span>
    </motion.button>
  );
};

export default DownloadButton;
