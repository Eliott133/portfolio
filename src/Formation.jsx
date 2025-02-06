import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { RiExternalLinkLine } from "react-icons/ri";
import './styles/animation.css'


function Formation({ className, items, title_section }) {

  return (
    <div className={`relative ${className}`}>
      <h2 className="text-2xl font-bold mb-4 md:text-left text-center">
        {title_section}
      </h2>

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative flex items-start group">

            <div className="w-full p-6 glass rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200 min-h-56">
              <div className="text-xs font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full inline-block mb-2">
                {item.date}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                <a
                  href={item.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-effect flex items-center">
                  {item.title} <RiExternalLinkLine className="ml-1" />
                </a>
              </h3>
              <p className="text-sm text-slate-500 mb-4">
                {item.description}
              </p>
              <div className="text-sm text-slate-400 flex items-center">
                <IoLocationSharp size={20} className="mr-2 text-indigo-500" />
                {item.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Formation;
