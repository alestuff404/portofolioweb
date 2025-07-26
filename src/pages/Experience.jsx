import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/SideBar';
import Event from '../components/Event';

const Experience = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(prev => !prev);
  };

  return (
    <div className="flex bg-[#FFF2E1] dark:bg-gray-900">
      
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen transition-transform duration-300 ease-in-out overflow-hidden
          ${isSidebarVisible ? 'translate-x-0 w-64' : '-translate-x-full w-0'}
        `}
      >
        <Sidebar />
      </div>

      {/* Konten Utama */}
      <div className="flex-1 flex flex-col" style={{ marginLeft: isSidebarVisible ? "16rem" : "0" }}>
        <Navbar onToggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />

        {/* Konten halaman */}
        <div className="mt-20 p-6"> {/* mt-20 menyesuaikan tinggi navbar */}
          <Event />
        </div>
      </div>
    </div>
  );
};

export default Experience;