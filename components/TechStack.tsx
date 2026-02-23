"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";

const SKILLS = [
    "PHP",
    "Go",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Laravel",
    "Symfony",
    "REST APIs",
    "Microservices",
    "Docker",
    "Kubernetes",
    "RabbitMQ",
    "CI/CD",
    "Linux",
    "AI",
    "AWS",
    "Azure",
] as const;

export default function TechStack() {
    const t = useTranslations("TechStack");
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

    const handleSkillClick = (skill: string) => {
        setSelectedSkill(selectedSkill === skill ? null : skill);
    };

    return (
        <section id="skills" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">{t("title")}</h2>
            <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                    <button
                        key={skill}
                        onClick={() => handleSkillClick(skill)}
                        className={`px-4 py-2 rounded-lg border font-medium text-sm transition-all cursor-pointer ${
                            selectedSkill === skill
                                ? "border-blue-300 bg-white text-blue-700"
                                : "border-gray-200 bg-white text-gray-700 hover:border-blue-300"
                        }`}
                    >
                        {skill}
                    </button>
                ))}
            </div>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    selectedSkill ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
                }`}
            >
                {selectedSkill && (
                    <div className="p-4 rounded-lg border border-blue-300 bg-white">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">{selectedSkill}</h4>
                                <p className="text-sm text-gray-700 leading-relaxed">{t(selectedSkill)}</p>
                            </div>
                            <button
                                onClick={() => setSelectedSkill(null)}
                                className="text-gray-600 hover:text-gray-800 transition-colors flex-shrink-0"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
