// import React from 'react';
import { Link } from 'react-router-dom';
import headerImage from '../assets/header4.png';
import jsIcon from '../assets/javascriptlogo.png';
import reactIcon from '../assets/reactlogo.png';
import cIcon from '../assets/clogo.png';
import pythonIcon from '../assets/pythonlogo.png';
import tailwindIcon from '../assets/tailwindcsslogo.png';
import linuxIcon from '../assets/linuxlogo.png';
import mysqlIcon from '../assets/mysqllogo.png';
import tensorflowIcon from '../assets/tensorflowlogo.png';
import nodejsIcon from '../assets/nodejslogo.png';
import NumPyIcon from '../assets/NumPylogo.png';
import phpIcon from '../assets/phplogo.png';
import laravelIcon from '../assets/laravellogo.png';
const Header = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#EAD8C0] dark:bg-gray-900 text-gray-800 dark:text-white shadow border border-gray-200 dark:border-gray-700 rounded-xl mx-6 md:mx-10 my-2 p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Kiri: Teks */}
          <div className="w-full md:w-2/3 text-black space-y-3 pl-4 pr-4">
            <h1 className="text-4xl font-bold mb-4 mt-4">Hi Everyone, I'm Nanda -!</h1>
            <p className="text-base leading-relaxed">
              Welcome to my digital garden, a little space on the internet where i grow ideas,
              experiment with code, and share my journey in tech. My biggest goal? To one day
              build an Intelligent Medical Personal Assistant — a smart healthcare robot that can
              truly help people.
            </p>
            <p className="text-base leading-relaxed">
              When I'm not coding, you'll probably find me vibing to some chill lofi music or
              getting lost in thriller-action, romance-comedy, fantasy movies. And hey, thanks for stopping by and reading
              this. It means a lot. Yes, you. I like you already 🫣
            </p>
            <p className="text-sm text-[#85603F] dark:text-gray-300">
              Ssstt, this isn't just a portfolio. It's a quiet piece of me.
            </p>
            <div className="flex gap-6 pt-3">
              <Link to='/about'>
              <button className="flex items-center gap-2 px-6 py-3 bg-[#876445] hover:bg-[#A79277] text-white rounded-3xl shadow text-md transition duration-300">
                📍 Let's Know About Me More
              </button>
              </Link>
              <button className="flex items-center gap-2 px-6 py-3 bg-[#876445] hover:bg-[#A79277] text-white rounded-3xl shadow text-md transition duration-300">
                📬 Contacts
              </button>
            </div>
          </div>

          {/* Kanan: Gambar */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start pl-5">
            <img
              src={headerImage}
              alt="Header illustration"
              className="w-45 md:w-55 h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Section: Experience & What I Likes */}
      <div className="grid md:grid-cols-2 gap-x-10 px-6 md:px-10 pb-16 pt-10 items-start ml-8 mr-8">
        {/* Experience Section */}
        <div className="min-w-0">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-4xl font-bold text-black dark:text-white ml-2">Experience</h2>
            <Link
              to="/experience"
              className="text-sm text-[#85603F] hover:underline hover:text-blue-700 transition mt-2"
            >
              See All →
            </Link>
          </div>
          <p className="text-[#85603F] dark:text-gray-300 mb-4 ml-2">
            Life, collaboration, projects, and everything else
          </p>
          <div className="divide-y divide-[#85603F] dark:divide-gray-700">
            <div className="py-3 group hover:bg-[#EAD8C0] dark:hover:bg-gray-800 px-2 rounded transition">
              <Link
                to="/experience#ai-workshop"
                className="text-[#124076] font-medium underline group-hover:text-blue-800 transition"
              >
                Core Team | AI Workshop 2025
              </Link>
              <p className="text-xs text-[#85603F]">Since June 2025</p>
            </div>
            <div className="py-3 group hover:bg-[#EAD8C0] dark:hover:bg-gray-800 px-2 rounded transition">
              <Link
                to="/experience#sponsorship"
                className="text-[#124076] font-medium underline group-hover:text-blue-800 transition"
              >
                Volunteer | Garuda Hacks 6.0 
              </Link>
              <p className="text-xs text-[#85603F]">July 2025</p>
            </div>
            <div className="py-3 group hover:bg-[#EAD8C0] dark:hover:bg-gray-800 px-2 rounded transition">
              <Link
                to="/experience#internship"
                className="text-[#124076] font-medium underline group-hover:text-blue-800 transition"
              >
                Coordinator | Sponsorship Division 
              </Link>
              <p className="text-xs text-[#85603F]">
                Since December 2024
              </p>
            </div>
          </div>
        </div>

        {/* Short-Term Goals Section */}
        <div className="md:border-l border-[#85603F] dark:border-gray-700 pl-6 md:pl-10 min-w-0">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-1 ml-2">Short-Term Goals:</h2>
          <p className="text-[#85603F] dark:text-gray-300 mb-4 ml-2">
            I don’t have it all figured out, but i’m building my future
          </p>
          <div className="divide-y divide-[#85603F] dark:divide-gray-700">
            <div className="py-3 hover:bg-[#EAD8C0] dark:hover:bg-gray-800 px-2 rounded transition">
              <p className="font-medium text-gray-800 dark:text-gray-200">Build my first real AI project</p>
              <p className="text-xs text-[#85603F]">
                Something simple, helpful, and working. Even if it’s messy at first.
              </p>
            </div>
            <div className="py-3 hover:bg-[#EAD8C0] dark:hover:bg-gray-800 px-2 rounded transition">
              <p className="font-medium text-gray-800 dark:text-gray-200">Become a Beasiswa Unggulan awardee</p>
              <p className="text-xs text-[#85603F]">
                So i can grow not only as a student, but as someone who contributes back to Indonesia through technology.
              </p>
            </div>
            <div className="py-3 hover:bg-[#EAD8C0] dark:hover:bg-gray-800 px-2 rounded transition">
              <p className="font-medium text-gray-800 dark:text-gray-200">Participate in the Huawei ICT Competition</p>
              <p className="text-xs text-[#85603F]">
                To challenge myself, connect with like-minded learners, and explore real-world tech problems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section: What I'm learning Now */}
      <div className="px-6 md:px-10 pb-20 pt-5 ml-8 mr-8">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-1 ml-2">What I'm learning Now</h2>
        <p className="text-[#85603F] dark:text-gray-300 mb-8 ml-2">
          Building the foundation; Pieces of knowledge, slowly forming something bigger.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: jsIcon,
              title: "JavaScript",
              link: "/deepdives/javascript",
              bg: "#EAD8C0",
              textColor: "black",
              description : "Understanding how the web thinks, behaves, and connects."
            },
            {
              icon: reactIcon,
              title: "React",
              link: "/deepdives/react",
              bg: "#EAD8C0",
              textColor: "black",
              description : "Building interactive user interfaces with reusable components."
            },
            {
              icon: cIcon,
              title: "C",
              link: "/deepdives/c",
              bg: "#EAD8C0",
              textColor: "black",
              description : "Getting close to the machine and understanding how programs work at their core."
            },
            {
              icon: pythonIcon,
              title: "Python",
              link: "/deepdives/python",
              bg: "#EAD8C0",
              textColor: "black",
              description : "Writing clean code for data, automation, and future AI dreams."
            },
            {
              icon: tailwindIcon,
              title: "Tailwind CSS",
              link: "/deepdives/tailwindcss",
              bg: "#EAD8C0",
              textColor: "black",
              description : "Writing beautiful UI faster with utility-first styling."
            },
            {
              icon: linuxIcon,
              title: "Linux",
              link: "/deepdives/linux",
              bg: "#EAD8C0",
              textColor: "black",
              description : "Learning the terminal, file systems, and how real developers talk to their machines."
            }
          ].map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="flex items-center gap-4 p-4 rounded-xl shadow-md transition-transform transform hover:scale-[1.02] hover:shadow-lg"
              style={{ backgroundColor: item.bg, color: item.textColor }}
            >
              <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm mt-1 opacity-80">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Section: What Will I learn Next */}
      <div className="px-6 md:px-10 pb-20 pt-5 ml-8 mr-8">
        <h2 className="text-4xl font-bold text-black dark:text-white mb-1 ml-2">What Will I learn Next</h2>
        <p className="text-[#85603F] dark:text-gray-300 mb-8 ml-2">
          Here's what’s waiting on my roadmap; I don’t rush it — but i make sure i grow.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: laravelIcon,
              title: "Laravel",
              link: "/deepdives/laravel",
              bg: "#EAD8C0",
              textColor: "black",
              description : "Building clean and powerful backends with elegant PHP frameworks."
            },
            {
              icon: mysqlIcon,
              title: "MySQL",
              link: "/deepdives/mysql",
              bg: "#EAD8C0",
              textColor: "black",
              description : "Learning how to manage and query structured data efficiently."
            },
            {
              icon: phpIcon,
              title: "PHP",
              link: "/deepdives/php",
              bg: "#EAD8C0",
              textColor: "black",
              description : "Understanding how classic server-side web development works under the hood."
            },
            {
              icon: NumPyIcon,
              title: "NumPy",
              link: "/deepdives/Numpy",
              bg: "#EAD8C0",
              textColor: "black",
              description : "Getting better at handling large arrays and doing numerical computing in Python."
            },
            {
              icon: tensorflowIcon,
              title: "Tensor Flow",
              link: "/deepdives/tensorflow",
              bg: "#EAD8C0",
              textColor: "black",
              description : "Stepping into the world of deep learning with one of the most powerful AI frameworks."
            },
            {
              icon: nodejsIcon,
              title: "Node JS",
              link: "/deepdives/nodejs",
              bg: "#EAD8C0",
              textColor: "black",
              description : "Running JavaScript on the server to create full-stack web applications."
            }
          ].map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="flex items-center gap-4 p-4 rounded-xl shadow-md transition-transform transform hover:scale-[1.02] hover:shadow-lg"
              style={{ backgroundColor: item.bg, color: item.textColor }}
            >
              <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm mt-1 opacity-80">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
