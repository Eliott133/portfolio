import { useState } from "react";
import { motion } from "framer-motion";

function SkillsPage({ items, className }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = [
    { id: "all", label: "Tous" },
    { id: "web", label: "Web" },
    { id: "ia", label: "IA" },
    { id: "application", label: "Application" },
    { id: "database", label: "Base de données" },
    { id: "css_ui", label: "CSS & UI" },
  ];

  // Filtrage des éléments selon la catégorie active
  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className={`min-h-screen p-8 ${className}`}>
      <h1 className="text-4xl font-bold mb-4 text-center">
       Mes Compétences
      </h1>

      <p className="text-center text-lg mb-8">
        Voici une liste de mes compétences organisées par catégorie. Cliquez sur une catégorie pour filtrer.
      </p>

      {/* Onglets avec animation */}
      <div className="relative flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`relative z-10 px-4 py-2 text-sm font-medium transition ${activeCategory === category.id
                ? "text-white"
                : "text-gray-400"
              }`}
          >
            {activeCategory === category.id && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-blue-500 rounded-full"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-20">{category.label}</span>
          </button>
        ))}
      </div>

      {/* Grille des compétences */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="card glass rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 p-6"
          >
            {item.icon && (
              <div className="flex items-center justify-center mb-4 ">
                <img
                  src={`/logo/${item.icon}.svg`}
                  alt={item.icon}
                  width={"100px"}
                  height={"100px"}
                />
              </div>
            )}

            <h2 className="text-2xl font-bold mb-4 text-center">{item.title}</h2>

            {item.description && (
              <p className="text-gray-300 text-center text-sm mb-6">
                {item.description}
              </p>
            )}

            {item.link && (
              <div className="text-center">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary px-6 py-2 rounded-full"
                >
                  En savoir plus
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPage;
