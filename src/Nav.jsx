import { FaLinkedin, FaGithub } from "react-icons/fa";

function Nav() {

  const switchTheme = (e) => {
    const theme = e.target.checked ? 'dark' : 'winter';
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <>
      <ul className="menu menu-horizontal rounded-box p-2 mt-8 border hidden lg:flex items-center justify-center gap-4 bg-white/10 fixed bottom-4 left-1/2 -translate-x-1/2 transition-transform duration-300 ease-in-out hover:scale-x-105 hover:translate-y-[-5px] min-w-[755px]">
        <li className="transition-all duration-300 ease-in-out hover:px-2">
          <a className="tooltip" data-tip="Home" href="#home" aria-label="Home">
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
          </a>
        </li>
        <li className="transition-all duration-300 ease-in-out hover:px-2">
          <a className="tooltip" data-tip="Compétences" href="#skills" aria-label="Compétences">
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5">
              <path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
          </a>
        </li>
        <li className="transition-all duration-300 ease-in-out hover:px-2">
          <a className="tooltip" data-tip="Projet" href="#projects" aria-label="Projet">
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
          </a>
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
          <a className="tooltip" data-tip="Contact" href="#contact" aria-label="Contact">
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
            href="https://www.linkedin.com/in/eliott-m-680404251/"
            target="_blank"
            aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
        </li>

        <div>
          <div className="divider divider-vertical h-6 border-gray-400">|</div>
        </div>

        <li className="transition-all duration-300 ease-in-out hover:px-2">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-sm">
              FR
            </label>
            <ul tabIndex={0} className="dropdown-content p-2 shadow bg-base-100 rounded-box w-24">
              <li className="transition-all duration-300 ease-in-out hover:px-2">
                <p>FR</p>
              </li>
              <li className="transition-all duration-300 ease-in-out hover:px-2">
                <p>EN</p>
              </li>
            </ul>
          </div>
        </li>
        
        <li className="transition-all duration-300 ease-in-out hover:px-2">
          <label className="swap swap-rotate" aria-label='Switch theme'>
            <input type="checkbox" className="theme-controller" onChange={switchTheme} />

            <svg
              className="swap-off h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-on h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </li>
      </ul>
    </>
  );
}

export default Nav;
