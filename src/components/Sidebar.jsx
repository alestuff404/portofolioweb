import { Link } from "react-router-dom";
import { FaFloppyDisk } from "react-icons/fa6";
import { PiButterflyFill } from "react-icons/pi";

export default function Sidebar() {
  return (
    <aside className="h-full flex flex-col text-black bg-[#EAD8C0]">
      {/* Sidebar header */}
      <div className="flex justify-between items-center p-5 shadow-sm ">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-lg hover:underline hover:decoration-[#876445] transition duration-100"
        >
          <FaFloppyDisk />
          nanda.dev
        </Link>
        <PiButterflyFill className="text-lg" />
      </div>

      {/* Konten sidebar */}
      <div className="p-6 text-sm space-y-4 text-black ">
        <section>
          <h2 className="font-semibold mb-2">🌸 About Me Rawr</h2>
          <p>
            I'm <span className="text-black font-medium underline decoration-solid">Nanda</span>, ur future AI engineer. Welcome to my digital garden where i grow ideas, build smart systems, and explore the edge of intelligence through code.
          </p>

          <hr className="border-t border-[#876445] my-4" />

          <h2 className="font-semibold mb-2">📍 What I'm Doing Now</h2>
          <ul className="list-disc pl-5 text-sm text-black leading-relaxed space-y-0.5">
            <li>
              Currently: 2nd year student
            </li>
            <li>
              Learning: Python, Computer Visison, React, Tailwind CSS
            </li>
            <li>
              Reading: “Artificial Intelligence for Dummies"
            </li>
          </ul>

          <hr className="border-t border-[#876445] my-4" />

          <h2 className="font-semibold mb-2">✨ Fun Facts</h2>
          <p>
            Loves lofi & RnB
          </p>
          <p>
            Favorite movie: Fantasy, Sci-Fi, Action
          </p>
          <p>
            Believes in tech that cares
          </p>
          <p>
            Dreams of building Baymax IRL
          </p>
          
          <hr className="border-t border-[#876445] my-4" />

          <h2 className="font-semibold mb-2">📚 Tools I Use Daily</h2>
          <p>
            🖥️ VSCode, Github
          </p>
          <p>
            🎨 Canva, Freepik
          </p>
          <p>
            🧠 ChatGPT (of course!)
          </p>
        </section>
      </div>
    </aside>
  );
}