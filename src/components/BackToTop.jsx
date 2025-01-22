import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Sử dụng react-icons

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Thêm hiệu ứng cuộn mượt
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Hiển thị nút khi cuộn xuống hơn 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 cursor-pointer transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
    >
      <button className="rounded-full bg-transparent border border-gray-400 p-3 text-white hover:bg-gray-700 hover:border-gray-700 ">
        <FaArrowUp size={20} />
      </button>
    </div>
  );
};

export default BackToTopButton;
