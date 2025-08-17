"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full mb-8 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
            <nav className="p-4">
                <div className="flex items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                                <span className="text-white font-bold text-lg tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
                                    DG
                                </span>
                            </div>
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="hidden sm:flex flex-col">
                            <span className="text-sm font-semibold text-gray-900 leading-none">Denis Galetin</span>
                            <span className="text-xs text-gray-500 leading-none">galetin.com</span>
                        </div>
                    </Link>

                    {/* Desktop Menu - Centered */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <ul className="flex gap-8 text-lg font-medium">
                            <li>
                                <Link href="/" className="hover:text-blue-600 transition-colors">
                                    About me
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-blue-600 transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://buymeacoffee.com/defo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    Buy me a coffee
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden ml-auto">
                        <button
                            onClick={toggleMenu}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
                        <ul className="flex flex-col gap-4 text-lg font-medium">
                            <li>
                                <Link
                                    href="/"
                                    className="block py-2 hover:text-blue-600 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About me
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="block py-2 hover:text-blue-600 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://buymeacoffee.com/defo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block py-2 hover:text-blue-600 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Buy me a coffee
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}
