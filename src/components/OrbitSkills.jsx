import {FaDatabase, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {BiLogoPostgresql} from "react-icons/bi";

function OrbitSkills() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="pointer-events-none absolute inset-0 size-full">
                <circle className="stroke-black/10 stroke-1 dark:stroke-white/10" cx="50%" cy="50%" r="70" fill="none" strokeDasharray="4 4"></circle>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="pointer-events-none absolute inset-0 size-full">
                <circle className="stroke-black/10 stroke-1 dark:stroke-white/10" cx="50%" cy="50%" r="140" fill="none" strokeDasharray="4 4"></circle>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="pointer-events-none absolute inset-0 size-full">
                <circle className="stroke-black/10 stroke-1 dark:stroke-white/10" cx="50%" cy="50%" r="200" fill="none" strokeDasharray="4 4"></circle>
            </svg>
            <div className="orbit-container orbit-large">
                <FaReact size={32} className="orbit-item-small" />
            </div>

            <div className="orbit-container orbit-small">
                <FaNodeJs size={32} className="orbit-item-small" />
            </div>

            <div className="orbit-container orbit-small">
                <FaPython size={32} className="orbit-item-medium" />
            </div>

            <div className="orbit-container orbit-medium">
                <FaDatabase size={32} className="orbit-item-medium" />
            </div>

            <div className="orbit-container orbit-large">
                <BiLogoPostgresql size={32} className="orbit-item-large" />
            </div>
        </>
    );
}

export default OrbitSkills;