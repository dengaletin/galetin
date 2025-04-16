import React from "react";
import {FaGithub, FaLinkedin, FaTelegram} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full mt-12 p-4 text-center">
            <div className="mt-2 flex justify-center items-center gap-4 mb-4">
                <a
                    href="https://github.com/dengaletin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors text-2xl"
                >
                    <FaGithub/>
                </a>
                <a
                    href="https://www.linkedin.com/in/galetin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors text-2xl"
                >
                    <FaLinkedin/>
                </a>
                <a
                    href="https://t.me/frescojacq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors text-2xl"
                >
                    <FaTelegram/>
                </a>
            </div>
            <p>
                Made with{" "}
                <span className="text-red-500" aria-label="love" title="love">
          ❤️
        </span>{" "}
                by Denis Galetin
            </p>
        </footer>
    );
}
