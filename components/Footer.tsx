import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SOCIAL_LINKS } from "../constants/links";

const SOCIAL_ICONS = [
    { href: SOCIAL_LINKS.GITHUB, Icon: FaGithub, label: "GitHub" },
    { href: SOCIAL_LINKS.LINKEDIN, Icon: FaLinkedin, label: "LinkedIn" },
    { href: SOCIAL_LINKS.TELEGRAM, Icon: FaTelegram, label: "Telegram" },
] as const;

export default function Footer() {
    return (
        <footer className="w-full mt-12 p-4 text-center">
            <div className="flex justify-center items-center gap-4">
                {SOCIAL_ICONS.map(({ href, Icon, label }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="hover:text-blue-600 transition-colors text-2xl"
                    >
                        <Icon />
                    </a>
                ))}
            </div>
        </footer>
    );
}
