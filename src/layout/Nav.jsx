import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Nav() {

  const switchTheme = (e) => {
    const theme = e.target.checked ? 'dark' : 'winter';
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <>
      <ul className="menu menu-horizontal rounded-box p-2 mt-8 border hidden lg:flex items-center justify-center gap-4 bg-white/10 fixed bottom-4 left-1/2 -translate-x-1/2 transition-transform duration-300 ease-in-out hover:scale-x-105 hover:translate-y-[-5px]">
        <li className="transition-all duration-300 ease-in-out hover:px-2">
          <Link to="/" className="tooltip" data-tip="Accueil">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
        </li>
        <li className="transition-all duration-300 ease-in-out hover:px-2">
          <Link to="/skills" className="tooltip" data-tip="Compétences">
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5">
              <path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
          </Link>
        </li>
        <li className="transition-all duration-300 ease-in-out hover:px-2">
          <Link to="/projects" className="tooltip" data-tip="Projets">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
            </svg>
          </Link>
        </li>
        <li className="transition-all duration-300 ease-in-out hover:px-2">
          <a className="tooltip" data-tip="A propos" href="#about" aria-label="A propos">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A7.97 7.97 0 0112 15c2.317 0 4.386.986 5.879 2.546M15 10a3 3 0 11-6 0 3 3 0 016 0zM21 12a9 9 0 10-18 0 9 9 0 0018 0z" />
            </svg>
          </a>
        </li>

        <li className="transition-all duration-300 ease-in-out hover:px-2">
          <a className="tooltip" data-tip="Contact" href="mailto:mauberteliott9@gmail.com" aria-label="Contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          </a>
        </li>

        <div>
          <div className="divider divider-vertical h-6 border-gray-400">|</div>
        </div>

        <li className="transition-all duration-300 ease-in-out hover:px-2">
          <a
            className="tooltip"
            data-tip="Github"
            href="https://github.com/Eliott133"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Github">
            <FaGithub size={20} />
          </a>
        </li>

        <li className="transition-all duration-300 ease-in-out hover:px-2">
          <a
            className="tooltip"
            data-tip="LinkedIn"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/eliott-maubert/"
            target="_blank"
            aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
        </li>
      </ul>
    </>
  );
}

export default Nav;
