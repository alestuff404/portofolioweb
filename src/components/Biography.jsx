// import React from 'react';
import heroImage from '../assets/profilewebsite.png'; 

const AboutNanda = () => {
  return (
    <>
      {/* Section: About Nanda */}
      <section className="bg-[#EAD8C0] text-gray-800 shadow border border-gray-200 rounded-xl mx-4 md:mx-10 my-4 p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-x-4 gap-y-10">

          {/* Kiri: Teks */}
          <div className="w-full md:w-3/4 md:pl-10">
            <p className="text-md text-black mb-2">
              👋 <span className="underline decoration-[#876445]">Hi, I'm Nanda Valeri!</span>
            </p> 
            <h1 className="text-xl md:text-3xl font-extrabold text-gray-900 leading-snug pb-2">
              Informatics student with
              <span className="text-[#876445]"> a growing passion for artificial intelligence,</span> currently studying and exploring intelligent systems.
            </h1>

            <p className="text-sm md:text-md text-black leading-relaxed pb-5">
              Hi! I'm Nanda, a second-year Informatics student with a deep interest in how technology can serve humanity in more thoughtful and emotional ways.
              Currently, I'm exploring the intersection between artificial intelligence, healthcare, and user-centered design. My journey into tech started with curiosity,
              not confidence. I was once someone who felt out of place in this world of machines and codes. But the more I learned, the more I realized that I didn’t
              have to fit in—I could create my own space. One where technology feels human, warm, and even healing. <br />
              Outside of code, you’ll find me daydreaming, journaling, or quietly imagining robots that give calming hugs 🤖💗.
              I’m still learning. I’m still building.
            </p>

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
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt="Nanda Valeri"
              className="w-60 md:w-72 h-auto object-cover rounded-b-full"
            />
          </div>
        </div>
      </section>

      {/* Section: What I'm Doing Now */}
      <div id="now-section" className="max-w-7xl mx-auto px-4 md:px-10 pt-6 mt-6">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 border-b border-[#85603F5] pb-2 mb-4">
          💡What I'm Doing Now
        </h2>
        <p className="text-sm underline text-gray-700 mb-4">
          Updated July 25, 2025
        </p>
        <ul className="list-disc pl-5 space-y-2 text-black text-sm md:text-md">
          <li className='bg-[#D1BB9E] rounded-sm px-2'>Developing personal portfolio using React + Tailwind CSS</li>
          <li className='bg-[#EAD8C0] rounded-sm px-2'>Learning Python for AI</li>
          <li className='bg-[#D1BB9E] rounded-sm px-2'>
            Currently, I'm preparing for my AI workshop (about computer vision for detecting dresscode in my university) as assistant lecturer
          </li>
          <li className='bg-[#EAD8C0] rounded-sm px-2'>Learning computer vision</li>
          <li className='bg-[#D1BB9E] rounded-sm px-2'>Writing essays to apply for scholarships</li>
          <li className='bg-[#EAD8C0] rounded-sm px-2'>Busy as a volunteer in Garuda Hacks 6.0 (24–26 July)</li>
        </ul>
      </div>

      {/* Section: Academic Journey */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 pt-6 mt-6">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 border-b border-[#85603F5] pb-2 mb-4">
          🧠 Academic Journey
        </h2>
        <p className="text-sm md:text-md text-black mb-4">
          📍 SMAN 2 Kota Serang (2020–2022) <br />
          📍 Informatics Student at Multimedia Nusantara University (2024–present)
        </p>
      </div>
    </>
  );
};

export default AboutNanda;

