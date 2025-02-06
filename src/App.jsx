import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Home from "./Home";
import SkillsPage from "./SkillsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const skills = [
    {
      title: "React",
      description: "Création d'interfaces utilisateur dynamiques et réactives.",
      icon: "react",
      details: "React est une bibliothèque JavaScript populaire pour développer des interfaces utilisateur performantes, basées sur des composants réutilisables.",
      category: "web",
    },
    {
      title: "Node.js",
      description: "Exécution de JavaScript côté serveur.",
      icon: "nodejs",
      details: "Node.js permet de construire des applications serveur rapides et scalables, en particulier pour les API REST et les applications temps réel.",
      category: "web",
    },
    {
      title: "Vite",
      description: "Outil de build rapide pour les applications modernes.",
      icon: "vite",
      details: "Vite est un outil de développement qui améliore la productivité en offrant un démarrage ultra-rapide et un rafraîchissement à chaud pour le développement frontend.",
      category: "web",
    },
    {
      title: "Python",
      description: "Langage polyvalent pour l'intelligence artificielle, le développement web et plus.",
      icon: "python",
      details: "Python est apprécié pour sa simplicité et ses nombreuses bibliothèques, parfait pour des projets en machine learning, automatisation ou web avec Django/Flask.",
      category: "ia",
    },
    {
      title: "Java",
      description: "Langage robuste pour des applications multiplateformes.",
      icon: "java",
      details: "Java est utilisé pour développer des applications d'entreprise, des applications Android et des systèmes distribués grâce à sa portabilité et sa performance.",
      category: "application",
    },
    {
      title: "HTML",
      description: "Structure de base des pages web.",
      icon: "html",
      details: "HTML (HyperText Markup Language) est utilisé pour structurer le contenu des sites web, incluant des titres, des paragraphes, des images et des liens.",
      category: "web",
    },
    {
      title: "CSS",
      description: "Personnalisation et design des sites web.",
      icon: "css",
      details: "CSS (Cascading Style Sheets) permet de styliser des pages web avec des couleurs, des animations, des mises en page adaptatives et plus encore.",
      category: "web",
    },
    {
      title: "Docker",
      description: "Conteneurisation des applications.",
      icon: "docker",
      details: "Docker est une plateforme qui permet d'emballer, de déployer et d'exécuter des applications dans des conteneurs légers, garantissant la portabilité et la cohérence.",
      category: "devops",
    },
    {
      title: "MongoDB",
      description: "Base de données NoSQL flexible et scalable.",
      icon: "mongodb",
      details: "MongoDB stocke des données sous forme de documents JSON, idéal pour des applications modernes nécessitant une grande flexibilité.",
      category: "database",
    },
    {
      title: "PostgreSQL",
      description: "Base de données relationnelle puissante et fiable.",
      icon: "postgresql",
      details: "PostgreSQL est une base de données relationnelle open-source reconnue pour ses performances et ses fonctionnalités avancées.",
      category: "database",
    },
    {
      title: "MySQL",
      description: "Base de données relationnelle populaire.",
      icon: "mysql",
      details: "MySQL est utilisé pour gérer les données dans des projets de petite à grande échelle, particulièrement pour des applications web.",
      category: "database",
    },
    {
      title: "Git",
      description: "Contrôle de version pour la collaboration sur les projets.",
      icon: "git",
      details: "Git permet de suivre les modifications du code source et de collaborer efficacement avec d'autres développeurs.",
      category: "devops",
    },
    {
      title: "Php",
      description: "Contrôle de version pour la collaboration sur les projets.",
      icon: "php",
      details: "Git permet de suivre les modifications du code source et de collaborer efficacement avec d'autres développeurs.",
      category: "web",
    },
    {
      title: "Javascript",
      description: "Contrôle de version pour la collaboration sur les projets.",
      icon: "js",
      details: "Git permet de suivre les modifications du code source et de collaborer efficacement avec d'autres développeurs.",
      category: "web",
    },
    {
      title: "Figma",
      description: "Contrôle de version pour la collaboration sur les projets.",
      icon: "figma",
      details: "Git permet de suivre les modifications du code source et de collaborer efficacement avec d'autres développeurs.",
      category: "css_ui",
    },
    {
      title: "Tailwind CSS",
      description: "Contrôle de version pour la collaboration sur les projets.",
      icon: "tailwind",
      details: "Git permet de suivre les modifications du code source et de collaborer efficacement avec d'autres développeurs.",
      category: "css_ui",
    },
    {
      title: "C++",
      description: "Contrôle de version pour la collaboration sur les projets.",
      icon: "cpp",
      details: "Git permet de suivre les modifications du code source et de collaborer efficacement avec d'autres développeurs.",
      category: "application",
    },
    {
      title: "Kotlin",
      description: "Contrôle de version pour la collaboration sur les projets.",
      icon: "kotlin",
      details: "Git permet de suivre les modifications du code source et de collaborer efficacement avec d'autres développeurs.",
      category: "application",
    },
  ];


  useEffect(() => {
    // Simuler un délai pour le chargement des ressources (par exemple, 2 secondes)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Nettoyage
  }, []);

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<SkillsPage items={skills} title_section={"Compétences"} description_section="Voici une liste de mes compétences organisées par catégorie. Cliquez sur une catégorie pour filtrer." />} />
          </Routes>
        </Layout>
      </Router>
      {/*isLoading ? <Loader /> : <Home />*/}
    </>
  );
}

export default App;
