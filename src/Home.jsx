import './App.css'
import Card from './Card'
import Profile from './Profile'
import TechnicalSkills from './TechnicalSkills'
import Nav from './Nav'
import Contact from './Contact'
import Footer from './Footer'
import Formation from './Formation'
import { GrCubes } from "react-icons/gr";
import { BsController } from "react-icons/bs";
import { LiaCarSideSolid } from "react-icons/lia";
import OrbitSkills from "./OrbitSkills";
import Faq from './Faq'
import Hobbies from './Hobbies'
import Loader from './Loader'

function Home() {
  const faqItems = [
    {
      question: "Pourquoi avoir choisi de me spécialiser en intelligence artificielle ?",
      answer: "React est une bibliothèque JavaScript pour créer des interfaces utilisateur.",
    },
    {
      question: "Comment je décrirerai mon style de travail ?",
      answer: "Tailwind CSS est un framework CSS utilitaire-first pour construire des designs rapides et réactifs.",
    },
    {
      question: "Quelles technologies ou tendances j'aimerai explorer dans les prochaines années ?",
      answer: "Un accordéon permet d'afficher des contenus dans des sections pliables et dépliables.",
    },
  ];

  const formations = [
    {
      title: "Master Informatique - IA",
      date: "2023 - Présent",
      description: "Formation spécialisée en intelligence artificielle, orientée vers l’apprentissage automatique, la vision par ordinateur, et le traitement du langage naturel. Développement de projets innovants en IA et compétences avancées en conception d'applications intelligentes.",
      location: "UFR Sciences et Techniques, Université du Mans",
      lien: "https://www.univ-lemans.fr/fr/formation/catalogue-des-formations/master-lmd-MLMD/sciences-technologies-sante-0004/master-informatique-IXQ1QBYN.html"
    },
    {
      title: "BUT Informatique",
      date: "2020 - 2023",
      description: "Formation polyvalente couvrant le développement logiciel, les bases de données, les réseaux, et la gestion de projets. Réalisation de projets concrets en équipe, consolidant les compétences techniques et pratiques en programmation et en architecture des systèmes.",
      location: "IUT de Laval, Université du Maine",
      lien: "https://iut-laval.univ-lemans.fr/fr/nos-formations/catalogue-des-formations/bachelor-universitaire-de-technologie-but-BUT/sciences-technologies-sante-0004/but-informatique-KIOQ4VHY.html"
    },
  ];

  const experience = [
    {
      title: "Alternance Développeur full stack",
      date: "septembre 2023 - aout 2024",
      description: "Développement d'une application web de gestion de stock en équipe. Conception de l'architecture logicielle, développement des fonctionnalités, et tests unitaires. Utilisation de React, Node.js, et MongoDB.",
      location: "DEUS SPORT, Fougères",
      lien: ""
    },
    {
      title: "Stage Développeur full stack",
      date: "avril 2023 - aout 2023",
      description: "Développement d'une application web de gestion de stock en équipe. Conception de l'architecture logicielle, développement des fonctionnalités, et tests unitaires. Utilisation de React, Node.js, et MongoDB.",
      location: "DEUS SPORT, Fougères",
      lien: ""
    },
  ]

  const projects = [
    {
      preview: "/src/assets/project/music-together-project.webp",
      name: "Music together",
      description: "Application web permettant l’écoute collaborative de musique en temps réel. Les utilisateurs peuvent créer ou rejoindre une salle via un code unique, partager des liens YouTube pour diffuser des morceaux synchronisés et discuté via un chat intégré.",
      langage: ["react", "nodejs", "tailwind"]
    },
    {
      preview: "/src/assets/projet/projet_1.webp",
      name: "Évaluation de l’interprétabilité des représentations vectorielles",
      description: "Projet de recherche avec le LIUM sur l’évaluation des représentations neuronales en identification du locuteur. Développement de filtres audio (genre, énergie, F0, débit phonémique, etc.) et analyse des dimensions du modèle SPINE pour améliorer l’interprétabilité. Conception d’une plateforme de test perceptif sous forme de quiz. Projet mené en méthodologie Agile (Scrum) avec des itérations régulières et des revues de sprint.",
      langage: ["react", "postgresql", "nodejs", "tailwind", "python"]
    },
    {
      preview: "/src/assets/projet/projet_2.webp",
      name: "Maze simulator",
      description: "If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?",
      langage: ["react", "vite"]
    },
    {
      preview: "/src/assets/projet/projet_3.webp",
      name: "Bingo politique",
      description: "If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?",
      langage: ["react", "vite"]
    }
  ];

  return (
    <>
      <div className="grid w-full gap-4 grid-cols-1 md:grid-cols-4 auto-rows-auto">
        <Profile className="col-span-1 md:col-span-2 md:row-span-2" />
        <TechnicalSkills
          className="col-span-1 md:col-span-2 md:row-span-2"
          title={"Compétences"}
          description={"React, Python, Java et bien plus"}
          logo={<GrCubes size={32} />}
          background={<OrbitSkills />}
        />
        {projects.map((project, index) => (
          <Card
            key={index}
            preview={project.preview}
            name={project.name}
            description={project.description}
            langage={project.langage}
            className="col-span-1 md:col-span-2 md:row-span-2 lg:col-span-1 lg:row-span-2"
          />
        ))}
        <Formation className="col-span-1 md:col-span-2 md:row-span-3" items={formations} title_section={"🎓Formations"}></Formation>
        <Formation className="col-span-1 md:col-span-2 md:row-span-3" items={experience} title_section={"💼Expériences"}></Formation>
        <Contact className="col-span-1 md:col-span-2 md:row-span-4"></Contact>
        <div className='col-span-1 md:col-span-2 md:row-span-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Hobbies
            className=""
            title={"Jeux vidéo"}
            logo={<BsController size={32} />}
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
            className=""
            title={"Sport automobile"}
            logo={<LiaCarSideSolid size={32} />}
            background={
              <div
                className="absolute w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://c.tenor.com/Q1abMqvDBZ0AAAAd/tenor.gif')`,
                }}
              ></div>
            }
          />
        </div>
        <Faq items={faqItems} className={"col-span-1 md:col-span-4"}></Faq>
      </div>
    </>
  )
}

export default Home
