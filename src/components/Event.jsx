// src/pages/Event.jsx
// import React from "react";

const Event = () => {
  return (
    <div className="px-6 py-4 max-w-5xl mx-auto text-black">
      <h1 className="text-4xl font-bold mb-14 text-center bg-[#EAD8C0] rounded-sm">Where I Left a Mark</h1>

      {/* Paragraf 1 */}
      <div className="pb-6">
        <h4 className="text-lg font-semibold mb-2">💡 Core Team | AI Workshop 2025</h4>
        <p className="text-md leading-relaxed">
          I have had several opportunities to be a workshop speaker, assisting a lecturer in demonstrating an AI project. The demo we presented was an intelligent system capable of detecting clothing, designed in response to our campus regulations that prohibit wearing shorts or crop tops. This AI project was developed by one of our alumni who now works at BCA Digital. The project is certified and has been integrated into a Scopus-indexed journal.


        </p>
        <hr className="mt-6 border-[#876445]" />
      </div>

      {/* Paragraf 2 */}
      <div className="pb-6">
        <h4 className="text-lg font-semibold mb-2">🌐 Volunteer | Garuda Hacks 6.0</h4>
        <p className="text-md leading-relaxed">
          Garuda Hacks is Southeast Asia's largest hackathon, with over 6000 total participants and
          nonprofit dedicated to empowering young Indonesians with the skills and motivation to solve the country's most urgent issues. Despite their skill and ideas, many talented programmers lack the resources to succeed in the job market.
          My role in this event was as a Liaison Officer, serving as a point of contact between key parties during the event (participants, committee, and judges). I also learned how to communicate in a professional environment, including how to explain systems and regulations to the judges. In addition, I had the opportunity to learn through direct access to the workshops aligned with this year’s track and the career fair, which featured many leading companies.
        </p>
        <hr className="mt-6 border-[#876445]" />
      </div>

      {/* Paragraf 3 */}
      <div className="pb-6">
        <h4 className="text-lg font-semibold mb-2">🎯 Coordinator | Sponsorship Division</h4>
        <p className="text-md leading-relaxed">
          I led the sponsorship division for the FIKOM NIGHT'25 student gathering event. My responsibilities included establishing strategic partnerships with local brands, drafting proposals, and managing external relations to ensure smooth event funding.
        </p>
        <hr className="mt-6 border-[#876445]" />
      </div>
    </div>
  );
};

export default Event;
