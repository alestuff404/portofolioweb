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
      <div className="bg-[#EAD8C0] text-gray-800 shadow border border-gray-200 rounded-xl mx-4 sm:mx-6 lg:mx-10 my-2 p-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
          {/* Kiri: Teks */}
          <div className="w-full lg:w-2/3 text-black space-y-4 px-2">
            <h1 className="text-3xl sm:text-4xl font-bold mt-2">Hi Everyone, I'm Nanda -!</h1>
            <p className="text-base leading-relaxed">
              Welcome to my digital garden, a little space on the internet where I grow ideas,
              experiment with code, and share my journey in tech. My biggest goal? To one day
              build an Intelligent Medical Personal Assistant — a smart healthcare robot that can
              truly help people.
            </p>
            <p className="text-base leading-relaxed">
              When I'm not coding, you'll probably find me vibing to some chill lofi music or
              getting lost in thriller-action, romance-comedy, fantasy movies. And hey, thanks for stopping by and reading
              this. It means a lot. Yes, you. I like you already 🫣
            </p>
            <p className="text-sm text-[#85603F]">
              Ssstt, this isn't just a portfolio. It's a quiet piece of me.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to='/about'>
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#876445] hover:bg-[#A79277] text-white rounded-3xl shadow text-md transition duration-300">
                  📍 Let's Know About Me More
                </button>
              </Link>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#876445] hover:bg-[#A79277] text-white rounded-3xl shadow text-md transition duration-300">
                📬 Contacts
              </button>
            </div>
          </div>

          {/* Kanan: Gambar */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start px-2">
            <img
              src={headerImage}
              alt="Header illustration"
              className="w-40 sm:w-48 md:w-52 h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Experience & Short-Term Goals */}
      <div className="grid lg:grid-cols-2 gap-x-10 px-4 sm:px-6 lg:px-10 pb-16 pt-10">
        {/* Experience */}
        <div className="min-w-0">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-black ml-2">Experience</h2>
            <Link
              to="/experience"
              className="text-sm text-[#85603F] hover:underline hover:text-blue-700 transition mt-2"
            >
              See All →
            </Link>
          </div>
          <p className="text-[#85603F] mb-4 ml-2">
            Life, collaboration, projects, and everything else
          </p>
          <div className="divide-y divide-[#85603F]">
            <div className="py-3 group hover:bg-[#EAD8C0] px-2 rounded transition">
              <Link to="/experience#ai-workshop" className="text-[#124076] font-medium underline group-hover:text-blue-800 transition">
                Core Team | AI Workshop 2025
              </Link>
              <p className="text-xs text-[#85603F]">Since June 2025</p>
            </div>
            <div className="py-3 group hover:bg-[#EAD8C0] px-2 rounded transition">
              <Link to="/experience#sponsorship" className="text-[#124076] font-medium underline group-hover:text-blue-800 transition">
                Volunteer | Garuda Hacks 6.0
              </Link>
              <p className="text-xs text-[#85603F]">July 2025</p>
            </div>
            <div className="py-3 group hover:bg-[#EAD8C0] px-2 rounded transition">
              <Link to="/experience#internship" className="text-[#124076] font-medium underline group-hover:text-blue-800 transition">
                Coordinator | Sponsorship Division
              </Link>
              <p className="text-xs text-[#85603F]">Since December 2024</p>
            </div>
          </div>
        </div>

        {/* Goals */}
        <div className="lg:border-l border-[#85603F] px-2 lg:px-10 min-w-0 mt-10 lg:mt-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-1">Short-Term Goals:</h2>
          <p className="text-[#85603F] mb-4 ml-2">
            I don’t have it all figured out, but I’m building my future
          </p>
          <div className="divide-y divide-[#85603F]">
            {[
              {
                title: "Build my first real AI project",
                desc: "Something simple, helpful, and working. Even if it’s messy at first."
              },
              {
                title: "Become a Beasiswa Unggulan awardee",
                desc: "So I can grow not only as a student, but as someone who contributes back to Indonesia through technology."
              },
              {
                title: "Participate in the Huawei ICT Competition",
                desc: "To challenge myself, connect with like-minded learners, and explore real-world tech problems."
              }
            ].map((item, i) => (
              <div key={i} className="py-3 hover:bg-[#EAD8C0] px-2 rounded transition">
                <p className="font-medium text-gray-800">{item.title}</p>
                <p className="text-xs text-[#85603F]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Now */}
      <SectionGrid
        title="What I'm learning Now"
        subtitle="Building the foundation; Pieces of knowledge, slowly forming something bigger."
        items={[
          { icon: jsIcon, title: "JavaScript", link: "/deepdives/javascript", description: "Understanding how the web thinks, behaves, and connects." },
          { icon: reactIcon, title: "React", link: "/deepdives/react", description: "Building interactive user interfaces with reusable components." },
          { icon: cIcon, title: "C", link: "/deepdives/c", description: "Understanding how programs work at their core." },
          { icon: pythonIcon, title: "Python", link: "/deepdives/python", description: "Writing clean code for data, automation, and future AI dreams." },
          { icon: tailwindIcon, title: "Tailwind CSS", link: "/deepdives/tailwindcss", description: "Writing beautiful UI faster with utility-first styling." },
          { icon: linuxIcon, title: "Linux", link: "/deepdives/linux", description: "How real developers talk to their machines." }
        ]}
      />

      {/* Learning Next */}
      <SectionGrid
        title="What Will I learn Next"
        subtitle="Here's what’s waiting on my roadmap; I don’t rush it — but I make sure I grow."
        items={[
          { icon: laravelIcon, title: "Laravel", link: "/deepdives/laravel", description: "Elegant PHP framework for backend." },
          { icon: mysqlIcon, title: "MySQL", link: "/deepdives/mysql", description: "Managing and querying structured data." },
          { icon: phpIcon, title: "PHP", link: "/deepdives/php", description: "Classic server-side scripting." },
          { icon: NumPyIcon, title: "NumPy", link: "/deepdives/numpy", description: "Numerical computing in Python." },
          { icon: tensorflowIcon, title: "TensorFlow", link: "/deepdives/tensorflow", description: "Deep learning framework." },
          { icon: nodejsIcon, title: "Node.js", link: "/deepdives/nodejs", description: "Server-side JS for full-stack." }
        ]}
      />
    </>
  );
};

const SectionGrid = ({ title, subtitle, items }) => (
  <div className="px-4 sm:px-6 lg:px-10 pb-20 pt-5">
    <h2 className="text-3xl sm:text-4xl font-bold text-black mb-1 ml-2">{title}</h2>
    <p className="text-[#85603F] mb-8 ml-2">{subtitle}</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <Link
          key={i}
          to={item.link}
          className="flex items-center gap-4 p-4 rounded-xl shadow-md transition-transform transform hover:scale-[1.02] hover:shadow-lg"
          style={{ backgroundColor: "#EAD8C0", color: "black" }}
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
);

export default Header;
