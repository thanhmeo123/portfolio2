import { motion } from "framer-motion";
import logo from "../assets/dark1.png";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import LanguageSwitcher from "./MultipleLanguage";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 flex items-center justify-between py-4 px-6 mb-12 rounded-b-2xl bg-neutral-900/60 backdrop-blur-md border-b border-x border-neutral-800/50 shadow-lg"
    >
      <div className="flex flex-shrink-0 items-center">
        <img className="w-24 md:w-32 object-contain" src={logo} alt="logo" />
      </div>
      <div className="flex items-center gap-5 text-xl md:text-2xl text-neutral-400">
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="#" className="hover:text-white transition-colors duration-300"><FaLinkedin /></motion.a>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="#" className="hover:text-white transition-colors duration-300"><FaGithub /></motion.a>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="#" className="hover:text-white transition-colors duration-300"><FaFacebook /></motion.a>
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="#" className="hover:text-white transition-colors duration-300"><FaInstagram /></motion.a>
        <span className="w-[1px] h-6 bg-neutral-700 hidden md:block"></span>
        <LanguageSwitcher />
      </div>
    </motion.nav>
  );
};

export default Navbar;
