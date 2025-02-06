import React, { useState } from 'react';
import { Card } from './common/Card';
import { Button } from './common/Button';
import { Icon } from './common/Icon';

function ProjectCard({
  preview,
  name,
  description,
  langage,
  githubUrl,
  demoUrl,
  className = ''
}){
  const [hoveredLangage, setHoveredLangage] = useState('');

  return (
    <Card className={`relative overflow-hidden group ${className}`}>
      <figure className="relative">
        <img
          src={preview}
          alt={name}
          className="h-48 w-full object-cover transition-transform duration-300 ease-in-out group-hover:-translate-y-20"
        />
      </figure>
      
      <div className="card-body relative transition-transform duration-300 ease-in-out group-hover:-translate-y-20">
        <h2 className="card-title text-blue-600">{name}</h2>
        <p>{description}</p>
      </div>

      <div className="absolute bottom-0 px-8 transform-gpu translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 w-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            {langage.map((tech) => (
              <img
                key={tech}
                src={`/src/assets/logo/${tech}.svg`}
                alt={tech}
                width="30"
                height="30"
                onMouseEnter={() => setHoveredLangage(tech)}
                onMouseLeave={() => setHoveredLangage('')}
              />
            ))}
          </div>
          <span className="text-sm font-medium">{hoveredLangage}</span>
        </div>

        <div className="flex justify-between items-center">
          <Button variant="primary">
            En savoir plus
            <Icon name="FaArrowRight" size={16} />
          </Button>
          
          <div className="flex gap-4">
            {githubUrl && (
              <Button href={githubUrl} variant="ghost" className="tooltip" data-tip="Code source">
                <Icon name="FaGithub" size={20} />
              </Button>
            )}
            {demoUrl && (
              <Button 
                href={demoUrl} 
                variant="ghost" 
                className="tooltip group/btn-run hover:bg-green-500" 
                data-tip="Voir la démo"
              >
                <Icon name="VscDebugStart" size={20} className="group-hover/btn-run:text-white" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard