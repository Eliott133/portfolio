import React from 'react';
import { projects } from './data/projects';
import { formations, experience } from './data/education';
import { faqItems } from './data/faq';
import { ProjectCard } from './components/ProjectCard';
import Profile from './Profile';
import TechnicalSkills from './TechnicalSkills';
import OrbitSkills from './OrbitSkills'
import Contact from './Contact';
import Formation from './Formation';
import Faq from './Faq';
import Hobbies from './Hobbies';
import { Icon } from './components/common/Icon';

function Home() {

  return (
    <div className="grid w-full gap-4 grid-cols-1 md:grid-cols-4 auto-rows-auto">
      <Profile className="col-span-1 md:col-span-2 md:row-span-2" />
      
      <TechnicalSkills
        className="col-span-1 md:col-span-2 md:row-span-2"
        title="Compétences"
        description="React, Python, Java et bien plus"
        logo={<Icon name="GrCubes" size={32} />}
        background={<OrbitSkills />}
      />

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
          className="col-span-1 md:col-span-2 md:row-span-2 lg:col-span-1 lg:row-span-2"
        />
      ))}

      <Formation 
        className="col-span-1 md:col-span-2 md:row-span-3" 
        items={formations} 
        title_section="🎓 Formations"
      />
      
      <Formation 
        className="col-span-1 md:col-span-2 md:row-span-3" 
        items={experience} 
        title_section="💼 Expériences"
      />

      <Contact className="col-span-1 md:col-span-2 md:row-span-4" />
      
      <div className="col-span-1 md:col-span-2 md:row-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Hobbies
          title="Jeux vidéo"
          logo={<Icon name="BsController" size={32} />}
          background={
            <div
              className="absolute w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://c.tenor.com/-OiahIYVp_AAAAAd/tenor.gif')`,
              }}
            ></div>
          }
        />
        <Hobbies
          title="Sport automobile"
          logo={<Icon name="LiaCarSideSolid" size={32} />}
          background={
            <div
              className="absolute w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://c.tenor.com/Q1abMqvDBZ0AAAAd/tenor.gif')`,
              }}
            ></div>}
        />
      </div>

      <Faq items={faqItems} className="col-span-1 md:col-span-4" />
    </div>
  );
}

export default Home;