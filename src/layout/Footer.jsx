import { RiExternalLinkLine } from "react-icons/ri";
function Footer() {
    return (
        <footer className="md:mt-28 mt-10  border-t border-border py-8">
            <div className="container mx-auto px-4">
                <p>© 2025 Eliott MAUBERT. All rights reserved.</p>
                <a
                    href="https://github.com/Eliott133"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-effect flex items-center">
                    Lien du repo <RiExternalLinkLine className="ml-1" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;