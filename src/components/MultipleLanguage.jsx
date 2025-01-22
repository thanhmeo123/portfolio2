import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import flagsVn from "../assets/flags/vn.png";
import flagsUs from "../assets/flags/us.png";
import flagsFr from "../assets/flags/ko.png";
import { FaChevronDown } from "react-icons/fa";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    localStorage.setItem("i18nextLng", lng); // Lưu ngôn ngữ vào localStorage
    setIsOpen(false);
  };

  // Function xử lý click bên ngoài dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="border border-gray-300 rounded-md px-1 py-1 text-gray-800 focus:outline-none focus:border-blue-500 flex items-center gap-2"
      >
        {currentLanguage === "en" && (
          <img className="w-6 h-auto" src={flagsUs} alt="en" />
        )}
        {currentLanguage === "vi" && (
          <img className="w-6 h-auto" src={flagsVn} alt="vi" />
        )}
        {currentLanguage === "fr" && (
          <img className="w-6 h-auto" src={flagsFr} alt="fr" />
        )}
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          size={14}
          color="white"
        />
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-1 bg-transparent border border-gray-300 rounded-md shadow-md w-10 overflow-y-auto max-h-30 ">
          <li
            className="px-2 py-1 cursor-pointer hover:bg-gray-100 flex items-center gap-2"
            onClick={() => changeLanguage("en")}
          >
            <img className="w-6 h-auto" src={flagsUs} alt="en" />
          </li>
          <li
            className="px-2 py-1 cursor-pointer hover:bg-gray-100 flex items-center gap-2"
            onClick={() => changeLanguage("vi")}
          >
            <img className="w-6 h-auto" src={flagsVn} alt="vn" />
          </li>
          <li
            className="px-2 py-1 cursor-pointer hover:bg-gray-100 flex items-center gap-2"
            onClick={() => changeLanguage("fr")}
          >
            <img className="w-6 h-auto" src={flagsFr} alt="fr" />
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
