import "./../styles/TechnicalSkills.css";
import { Link } from "react-router-dom";

function TechnicalSkills({ title, description, className, logo, background }) {
  return (
    <div className={`relative card glass group overflow-hidden shadow-lg hover:shadow-xl transition-shadow min-h-64 ${className}`} >
      <div className="absolute w-full h-full flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-20 group-hover:blur-sm">
        {background}
      </div>
      <div className="absolute flex flex-row gap-6 p-6 bottom-0 left-0 transition-transform duration-300 ease-in-out group-hover:py-0 group-hover:-translate-y-20">
        <div className="flex items-center">
          <div className="rounded-full border-2 border-blue-600 p-2 flex items-center justify-center">
            {logo}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          {description ? <p className="text-gray-600">{description}</p> : null}
        </div>
      </div>
      <div className="card-actions justify-start absolute bottom-0 left-0 w-full px-4 py-2 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
        <Link to="/skills">
          <button className="btn btn-primary my-2">
            En savoir plus
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right ml-2 size-4"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TechnicalSkills;
