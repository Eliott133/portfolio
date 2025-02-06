import React, { useState } from "react";
import { VscDebugStart } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";

function Card({ preview, name, description, langage, className }) {
  const [hoveredLangage, setHoveredLangage] = useState(""); // État pour stocker le texte alt en cours

  const handleMouseEnter = (altText) => {
    setHoveredLangage(altText); // Met à jour le texte quand on survole
  };

  const handleMouseLeave = () => {
    setHoveredLangage(""); // Réinitialise le texte quand on quitte
  };

  return (
    <div className={`card glass relative shadow-lg hover:shadow-xl transition-shadow overflow-hidden group ${className}`}>
      <figure className="relative">
        <img
          src={preview}
          alt="car!"
          className="h-48 w-full object-cover transition-transform duration-300 ease-in-out group-hover:-translate-y-20"
        />
      </figure>
      <div className="card-body relative transition-transform duration-300 ease-in-out group-hover:-translate-y-20">
        <h2 className="card-title animate-fade-in-down text-blue-600">{name}</h2>
        <p className="animate-fade-in-down delay-200">{description}</p>
      </div>
      <div className="card-footer-collapse absolute bottom-0 px-8 transform-gpu translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 w-full">
        <div className="mr-2 flex items-center justify-between list-langage">
          <div className="flex gap-1 text-xs">
            {langage.map((img, index) => (
              <img
                key={index}
                src={`/src/assets/logo/${img}.svg`}
                alt={img}
                width="30"
                height="30"
                onMouseEnter={() => handleMouseEnter(img)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
          <p className="font-semibold neutral-400 text-right opacity-80">
            {hoveredLangage}
          </p>
        </div>
        <div className="card-actions justify-between items-center">
          <button className="btn btn-primary my-2">
            En savoir plus
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right ml-2 size-4"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
          <div className="flex gap-4 items-center ">
          <a
                href="https://github.com/Eliott133"
                target="_blank"
                rel="noopener noreferrer"
                className="relative tooltip p-3 bg-opacity-40 backdrop-blur-md text-gray-800 rounded-lg shadow-md hover:scale-115 hover:shadow-lg transition-transform duration-300 ease-in-out"
                data-tip="repo du projet"
                >
                <FaGithub size={20} />
          </a>
          <a
            href="https://github.com/Eliott133"
            target="_blank"
            rel="noopener noreferrer"
            className="relative tooltip group/btn-run p-3 bg-opacity-40 backdrop-blur-md text-gray-800 rounded-lg shadow-md hover:scale-115 hover:shadow-lg transition-transform duration-300 ease-in-out hover:bg-green-500"
            data-tip="Lancer le projet">
            <VscDebugStart
              size={20}
              className="text-gray-800 transition-colors duration-300 ease-in-out group-hover/btn-run:text-white"
            />
          </a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
