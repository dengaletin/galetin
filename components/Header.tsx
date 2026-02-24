"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "../i18n/routing";
import { SUPPORTED_LANGUAGES } from "../constants/links";

const SECTIONS = [
    { id: "experience", labelKey: "experience" as const },
    { id: "skills", labelKey: "skills" as const },
    { id: "soft-skills", labelKey: "softSkills" as const },
] as const;

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const langMenuRef = useRef<HTMLDivElement>(null);
    const mobileLangRef = useRef<HTMLDivElement>(null);
    const t = useTranslations("Header");
    const locale = useLocale();
    const pathname = usePathname();

    const currentLang = SUPPORTED_LANGUAGES.find((lang) => lang.code === locale) || SUPPORTED_LANGUAGES[0];

    const handleSectionClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        if (!isLangMenuOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                !langMenuRef.current?.contains(event.target as Node) &&
                !mobileLangRef.current?.contains(event.target as Node)
            ) {
                setIsLangMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isLangMenuOpen]);

    const renderLanguageLinks = (onClickHandler?: () => void) => (
        <>
            {SUPPORTED_LANGUAGES.map((lang) => (
                <Link
                    key={lang.code}
                    href={pathname}
                    locale={lang.code}
                    onClick={onClickHandler}
                    className={`block w-full text-center px-3 py-1.5 rounded hover:bg-gray-100 transition-colors ${
                        locale === lang.code ? "text-blue-600 font-semibold" : "text-gray-700"
                    }`}
                >
                    <span className="text-sm">{lang.label}</span>
                </Link>
            ))}
        </>
    );

    return (
        <header className="fixed top-0 left-0 w-full mb-8 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
            <nav className="p-4 max-w-7xl mx-auto">
                <div className="flex items-center justify-between gap-8">
                    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
                        <span className="text-2xl font-mono font-bold">
                            <span className="text-blue-600">{"{"}</span>
                            <span className="text-gray-900">$DG</span>
                            <span className="text-blue-600">{"}"}</span>
                        </span>
                        <span className="hidden sm:block text-xs text-gray-500 font-mono">~/galetin.dev</span>
                    </Link>

                    <ul className="hidden md:flex gap-6 text-base flex-1 justify-center">
                        {SECTIONS.map((section) => (
                            <li key={section.id}>
                                <button
                                    onClick={() => handleSectionClick(section.id)}
                                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
                                >
                                    {t(section.labelKey)}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div ref={langMenuRef} className="hidden md:block relative flex-shrink-0">
                        <button
                            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                            aria-label="Change language"
                        >
                            <span className="text-sm font-medium text-gray-700">{currentLang.label}</span>
                        </button>
                        {isLangMenuOpen && (
                            <div className="absolute right-0 mt-1 min-w-[4rem] bg-white rounded-lg border border-gray-200 py-0.5 z-50 shadow-lg">
                                {renderLanguageLinks(() => setIsLangMenuOpen(false))}
                            </div>
                        )}
                    </div>

                    <div className="md:hidden ml-auto flex items-center gap-2">
                        <div ref={mobileLangRef} className="relative">
                        <button
                            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                            className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                            aria-label="Change language"
                        >
                            <span className="text-sm font-medium text-gray-700">{currentLang.label}</span>
                        </button>
                        {isLangMenuOpen && (
                            <div className="absolute right-0 top-full mt-1 min-w-[4rem] bg-white rounded-lg border border-gray-200 py-0.5 z-50 shadow-lg">
                                {renderLanguageLinks(() => setIsLangMenuOpen(false))}
                            </div>
                        )}
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
                        <ul className="flex flex-col gap-3">
                            {SECTIONS.map((section) => (
                                <li key={section.id}>
                                    <button
                                        onClick={() => handleSectionClick(section.id)}
                                        className="block py-2 text-gray-700 hover:text-blue-600 transition-colors text-left w-full font-medium cursor-pointer"
                                    >
                                        {t(section.labelKey)}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}
