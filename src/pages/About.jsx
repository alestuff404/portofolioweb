// import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/SideBar';
import Biography from '../components/Biography';
// import aboutBg from '../assets/bgforaboutme2.png'; 

const About = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(prev => !prev);
  };

  return (
    <div className="flex bg-[#FFF2E1] dark:bg-gray-900 relative overflow-hidden">

      {/* 🔳 Background Transparan */}
      {/* <img
        src={aboutBg}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70 pointer-events-none z-0"
      /> */}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen transition-transform duration-300 ease-in-out overflow-hidden
          ${isSidebarVisible ? 'translate-x-0 w-64' : '-translate-x-full w-0'}
        `}
      >
        <Sidebar />
      </div>

      {/* Konten Utama */}
      <div
        className="flex-1 flex flex-col relative z-10"
        style={{ marginLeft: isSidebarVisible ? "16rem" : "0" }}
      >
        <Navbar onToggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />

        <div className="mt-20 p-6">
          <Biography />
        </div>
      </div>
    </div>
  );
};

export default About;
