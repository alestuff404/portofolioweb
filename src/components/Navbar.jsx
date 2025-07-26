import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon, FaGithub } from "react-icons/fa";
import { PiButterflyFill } from "react-icons/pi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaRegNewspaper, FaLaptopCode, FaFloppyDisk } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export default function Navbar({ onToggleSidebar, isSidebarVisible }) {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        px-6 py-4 flex justify-between items-center
        transition-all duration-300
        ${scrolled
          ? "bg-[#FFF2E1]/40 dark:bg-gray-900/30 backdrop-blur-md shadow-lg border-[#d1bb9e]"
          : "bg-[#FFF2E1] dark:bg-gray-900 shadow-sm"}
        text-gray-800 dark:text-white
      `}
      style={{ marginLeft: isSidebarVisible ? "16rem" : "0" }} // 16rem = w-64
    >
      {/* Kiri: Toggle Sidebar + Search */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="text-white bg-[#A79277] hover:bg-[#D1BB9E] p-2 rounded-full text-xl"
          aria-label="Toggle Sidebar"
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </button>

        <div className="flex">
          <input
            type="text"
            placeholder="Search posts..."
            className="rounded-l-md px-4 py-1 bg-cream border border-black text-sm focus:outline-none"
          />
          <button className="rounded-r-md px-4 py-1 bg-cream border border-l-0 border-black text-sm">
            Go
          </button>
        </div>
      </div>

      {/* Kanan: Nav Links */}
      <div className="flex items-center gap-6 text-sm font-bold">
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            `flex items-center gap-1 p-2 rounded-md ${
              isActive ? "text-[#876445] font-bold border-b-2 border-[#876445]" : "hover:bg-[#EAD8C0]"
            }`
          }
        >
          <HiOutlineDocumentText className="text-xl" />
          Experience
        </NavLink>

        <NavLink
          to="/futuregoals"
          className={({ isActive }) =>
            `flex items-center gap-1 p-2 rounded-md ${
              isActive ? "text-[#876445] font-bold border-b-2 border-[#876445]" : "hover:bg-[#EAD8C0]"
            }`
          }
        >
          <FaRegNewspaper className="text-xl" />
          Future Goals
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex items-center gap-1 p-2 rounded-md ${
              isActive ? "text-[#876445] font-bold border-b-2 border-[#876445]" : "hover:bg-[#EAD8C0]"
            }`
          }
        >
          <FaFloppyDisk className="text-xl" />
          About Me
        </NavLink>

        <button onClick={toggleDarkMode}>
          <FaMoon className="text-lg hover:bg-[#EAD8C0] rounded-md" />
        </button>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[#EAD8C0] rounded-md"
        >
          <FaGithub className="text-lg" />
        </a>

        <PiButterflyFill className="text-lg hover:bg-[#EAD8C0] rounded-md" />
      </div>
    </nav>
  );
}
