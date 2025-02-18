import { FaLinkedin, FaGithub } from "react-icons/fa";

function Profile({ className }) {
  return (
    <div className={`card glass p-6 flex flex-col gap-6 group min-w-96 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${className}`}>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
        <div className="flex flex-col items-center">
          <div className="avatar indicator animate-fade-in-down">
          <span className="indicator-item badge badge-success">Disponible</span>
            <div className="w-32 rounded-lg">
              <img
                src="/pp.png"
                alt="Profile"
              />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <p className="mt-2 animate-fade-in-down">
            Passionné par le développement web et l'intelligence artificielle,
            je crée des solutions modernes et performantes. Curieux et motivé,
            je cherche toujours à apprendre de nouvelles technologies pour
            relever des défis complexes.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center border-t pt-4 relative">
        <div>
          <h2 className="text-xl font-bold rature">Eliott MAUBERT</h2>
          <p className="text-gray-600">Développeur Full Stack</p>
        </div>
        <div className="absolute right-0 px-4 py-2 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
            <div className="flex justify-end gap-4">
                <a
                href="https://www.linkedin.com/in/eliott-m-680404251/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/tooltip p-3 bg-white bg-opacity-40 backdrop-blur-md text-gray-800 rounded-lg shadow-md hover:scale-115 hover:shadow-lg transition-transform duration-300 ease-in-out"
                >
                <FaLinkedin size={20} />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300">
                    LinkedIn
                </span>
                </a>
                <a
                href="https://github.com/Eliott133"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/tooltip p-3 bg-white bg-opacity-40 backdrop-blur-md text-gray-800 rounded-lg shadow-md hover:scale-115 hover:shadow-lg transition-transform duration-300 ease-in-out"
                >
                <FaGithub size={20} />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300">
                    Github
                </span>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
