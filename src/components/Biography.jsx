// import React from 'react';
import heroImage from '../assets/profilewebsite.png'; 

const AboutNanda = () => {
  return (
    <>
      {/* Section: About Nanda */}
        <section className="bg-[#EAD8C0]  text-gray-800  shadow border border-gray-200  rounded-xl mx-6 md:mx-10 my-2 p-6">

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-x-4 gap-y-6">

          {/* Kiri: Teks */}
          <div className="md:w-3/4 pl-10 pt-6">
            <p className="text-md text-black  mb-1">
              👋 <span className="text-md text-black underline decoration-[#876445]  mb-1">
                Hi, I'm Nanda Valeri !
              </span>
            </p> 
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900  leading-tight pb-2">
              Informatics student with
              <span className="text-[#876445]"> a growing passion for artificial intelligence,</span> currently studying and exploring intelligent systems.
            </h1>

            <p className="text-md text-black leading-relaxed pb-5">
              Hi! I'm Nanda, a second-year Informatics student with a deep interest in how technology can serve humanity in more thoughtful and emotional ways.
              Currently, i'm exploring the intersection between artificial intelligence, healthcare, and user-centered design. My journey into tech started with curiosity,
              not confidence. I was once someone who felt out of place in this world of machines and codes. But the more i learned, the more i realized that i didn’t
              have to fit in, i could create my own space. One where technology feels human, warm, and even healing. <br />
              Outside of code,  you’ll find me daydreaming, journaling, or quietly imagining robots that give calming hugs 🤖💗. 
              I’m still learning. I’m still building.
            </p>

            {/* Tombol */}
            <button
              onClick={() => {
                document.getElementById('now-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#876445] text-white px-6 py-3 rounded-full hover:bg-[#A79277] transition text-sm font-medium"
            >
              Meet Me Properly ↓
            </button>

          </div>

          {/* Kanan: Foto */}
          <div className="md:w-2/4 flex justify-center">
            <img
              src={heroImage}
              alt="Nanda Valeri"
              className="w-68 h-full object-cover rounded-b-full"
            />
          </div>
        </div>
      </section>

      {/* Section: What I'm Doing Now*/}
      <div id="now-section" className="max-w-7xl mx-auto px-10 pt-6 mt-6">
        <h2 className="text-4xl font-bold text-gray-800  border-b border-[#85603F5] pb-2 mb-4">
          What I'm Doing Now
        </h2>
        <p className="text-sm underline text-gray-700  mb-4">
          Updated July 25, 2025
        </p>
        <ul className="list-disc pl-5 space-y-1 text-black  text-md">
          <li className='bg-[#D1BB9E] rounded-sm'>Developing personal portfolio using React + Tailwind CSS</li>
          <li className='bg-[#EAD8C0] rounded-sm'>Learning Python for AI</li>
          <li className='bg-[#D1BB9E] rounded-sm'>Currently, i'm prepare for my workshop AI (is about computer vision for detecting dresscode in my university) <br />
          as assistant lecturer</li>
          <li className='bg-[#EAD8C0] rounded-sm'>Learning computer vision </li>
          <li className='bg-[#D1BB9E] rounded-sm'>Write essay to apply scholarships</li>
          <li className='bg-[#EAD8C0] rounded-sm'>Currently, i'm busy in 24-26 july for being a volunteer in Garuda Hacks 6.0 </li>
        </ul>
      </div>

      <div id="now-section" className="max-w-7xl mx-auto px-10 pt-6 mt-6">
        <h2 className="text-4xl font-bold text-gray-800  border-b border-[#85603F5] pb-2 mb-4">
          🧠 Academic Journey
          
        </h2>
        <p className="text-md text-black mb-4">
          📍 Informatics Student at Multimedia Nusantara University 📍 (2024–present) <br />
        </p>
      </div>
    </>
  );
};

export default AboutNanda;
