import React, { useState, useMemo } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

function ProjectsPage () {
  const [selectedTech, setSelectedTech] = useState('all');

  // Extraire toutes les technologies uniques de tous les projets
  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach(project => {
      project.langage.forEach(tech => techSet.add(tech));
    });
    return ['all', ...Array.from(techSet)];
  }, []);

  // Filtrer les projets en fonction de la technologie sélectionnée
  const filteredProjects = useMemo(() => {
    if (selectedTech === 'all') return projects;
    return projects.filter(project => project.langage.includes(selectedTech));
  }, [selectedTech]);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Mes Projets</h1>
        
        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedTech === tech
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              {tech === 'all' ? 'Tous' : (
                <div className="flex items-center gap-2">
                  <img
                    src={`/src/assets/logo/${tech}.svg`}
                    alt={tech}
                    className="w-5 h-5"
                  />
                  <span className="capitalize">{tech}</span>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              className="h-full"
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Aucun projet ne correspond à ce filtre.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage