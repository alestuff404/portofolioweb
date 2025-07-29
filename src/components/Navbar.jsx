import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon, FaGithub } from "react-icons/fa";
import { PiButterflyFill } from "react-icons/pi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaRegNewspaper, FaLaptopCode, FaFloppyDisk } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ onToggleSidebar, isSidebarVisible }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <>
      <NavLink
        to="/experience"
        className={({ isActive }) =>
          `flex items-center gap-2 p-2 rounded-md ${
            isActive
              ? "text-[#876445] font-bold border-b-2 border-[#876445]"
              : "hover:bg-[#EAD8C0] text-[#3e3e3e]"
          }`
        }
      >
        <HiOutlineDocumentText className="text-lg" />
        Experience
      </NavLink>
      <NavLink
        to="/futuregoals"
        className={({ isActive }) =>
          `flex items-center gap-2 p-2 rounded-md ${
            isActive
              ? "text-[#876445] font-bold border-b-2 border-[#876445]"
              : "hover:bg-[#EAD8C0] text-[#3e3e3e]"
          }`
        }
      >
        <FaRegNewspaper className="text-lg" />
        Future Goals
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `flex items-center gap-2 p-2 rounded-md ${
            isActive
              ? "text-[#876445] font-bold border-b-2 border-[#876445]"
              : "hover:bg-[#EAD8C0] text-[#3e3e3e]"
          }`
        }
      >
        <FaFloppyDisk className="text-lg" />
        About Me
      </NavLink>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:bg-[#EAD8C0] text-[#3e3e3e] rounded-md p-2 flex items-center gap-2"
      >
        <FaGithub className="text-lg" />
        GitHub
      </a>
    </>
  );

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          px-6 py-4 flex justify-between items-center
          transition-all duration-300
          ${scrolled
            ? "bg-[#FFF2E1]/40 backdrop-blur-md shadow-lg border-[#d1bb9e]"
            : "bg-[#FFF2E1] shadow-sm"}
          text-gray-800
        `}
        style={{ marginLeft: isSidebarVisible ? "16rem" : "0" }}
      >
        {/* Kiri: Sidebar Toggle + Search */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="text-white bg-[#A79277] hover:bg-[#D1BB9E] p-2 rounded-full text-xl"
            aria-label="Toggle Sidebar"
          >
            <MdOutlineKeyboardDoubleArrowRight />
          </button>

          <div className="hidden md:flex">
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

        {/* Kanan: Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-bold">
          {navLinks}
          <PiButterflyFill className="text-lg hover:bg-[#EAD8C0] rounded-md" />
        </div>

        {/* Responsive Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl text-[#5c4431]"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            fixed top-[64px] right-4 left-4 z-40
            bg-[#FFF2E1] border border-[#d1bb9e] rounded-xl shadow-xl
            p-4 flex flex-col gap-2 text-sm font-bold text-[#3e3e3e]
            md:hidden
          "
        >
          {navLinks}
        </div>
      )}
    </>
  );
}
