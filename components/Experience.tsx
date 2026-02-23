"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { EXPERIENCE_COMPANIES } from "../constants/links";

export default function Experience() {
    const t = useTranslations("Experience");

    const experienceData = useMemo(
        () =>
            EXPERIENCE_COMPANIES.map((company) => ({
                id: company.id,
                companyName: company.name,
                location: company.location,
                start: company.start,
                end: company.end || t("present"),
                position: t(`${company.id}Position`),
                achievements: Array.from({ length: company.achievementsCount }, (_, i) =>
                    t(`${company.id}Ach${i + 1}`)
                ),
            })),
        [t]
    );

    return (
        <section id="experience" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">{t("title")}</h2>
            <ul className="space-y-6">
                {experienceData.map((exp) => (
                    <li
                        key={exp.id}
                        className="p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                    >
                        <h4 className="text-xl font-bold text-gray-900">{exp.companyName}</h4>
                        {exp.location && (
                            <p className="text-xs text-gray-500 mb-1">{exp.location}</p>
                        )}
                        <p className="text-lg text-blue-600 font-semibold mb-2">{exp.position}</p>
                        <p className="text-sm text-gray-600 mb-3">
                            {exp.start} → {exp.end}
                        </p>
                        <div className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                                <div key={achIndex} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2" />
                                    <span className="text-sm text-gray-700 leading-relaxed">
                                        {achievement}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
