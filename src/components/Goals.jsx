// import React from 'react';
import baymax from "../assets/baymaxicon.png";

const Goals = () => {
  return (
    <section className="w-full bg-[#fef1e6] text-black py-10 px-4 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold underline decoration-[#876445] mb-2">
            Future Goals: Bridging AI and Medicine for Humanity
          </h2>
          <p className="text-base leading-relaxed text-neutral-800">
            My passion for Artificial Intelligence and Machine Learning is not just an academic pursuit—it’s
            a way to reconnect with my childhood dream of becoming a doctor. Over time, I realized that technology and humanity
            are not opposite ends; instead, technology can enhance and humanize healthcare.
          </p>

          <h2 className="text-2xl font-bold underline decoration-[#876445] mt-4 mb-2">
            Long-Term Vision: Intelligent Medical Personal Assistant (IMPA)
          </h2>
          <p className="text-base leading-relaxed text-neutral-800">
            My ultimate goal is to build IMPA, a smart system that assists humans in managing both their
            physical and emotional health. IMPA is not just another chatbot—it will combine the power of
            NLP (Natural Language Processing), Computer Vision, and personalized medical modeling to provide
            empathetic interactions, user condition analysis, and adaptive early medical advice.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-300 h-auto"></div>

        {/* Right Content */}
        <div className="md:w-1/2 flex justify-center items-center -mt-4">
          <img
            src={baymax}
            alt="Short-term goals or about"
            className="w-[220px] md:w-[280px] lg:w-[300px] object-contain"
          />
        </div>
      </div>

      {/* Section Bawah: Dua Kotak */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Box Kiri */}
        <div className="bg-[#EAD8C0] p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold underline decoration-[#876445] mb-3">
            🔍 Key Capabilities of IMPA
          </h3>
          <ul className="list-disc pl-5 text-sm text-black leading-relaxed space-y-3">
            <li>
              <strong>Natural and Emotional Interaction:</strong> Understand tone, word choices, and facial expressions to respond like a human companion.
            </li>
            <li>
              <strong>Real-Time Condition Monitoring:</strong> Sync with wearable devices or user input (heart rate, sleep data, stress level).
            </li>
            <li>
              <strong>Responsible Early Medical Advice:</strong> Give health recommendations based on verified medical data and refer users to professionals if needed.
            </li>
            <li>
              <strong>Personalized Response Based on History:</strong> Learn from previous interactions to understand the user better over time.
            </li>
          </ul>
        </div>

        {/* Box Kanan */}
        <div className="bg-[#EAD8C0] p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold underline decoration-[#876445] mb-3">
            💡 My Strategic Roadmap
          </h3>
          <ul className="list-decimal pl-5 text-sm text-black leading-relaxed space-y-3">
            <li>
              <strong>Mastering AI Tools and Human-Centered Design:</strong><br />
              I’m focused on advancing my skills in NLP, Reinforcement Learning, and health recommendation systems.
            </li>
            <li>
              <strong>Building a Scaled-Down Prototype of IMPA:</strong><br />
              Starting with a text-based chatbot that responds emotionally, and gradually expanding to accept biometric inputs.
            </li>
            <li>
              <strong>Joining Collaborative Research in Digital Health:</strong><br />
              I aim to contribute to research or startup projects applying AI to real-world healthcare problems.
            </li>
            <li>
              <strong>Pursuing Advanced Studies or Certifications in AI for Health:</strong><br />
              Within the next 3 years, I plan to enroll in programs like a Master’s in Health Informatics or obtain certifications from Stanford/Coursera/Harvard.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Goals;

