import { Users, MessageCircle, Target, Lightbulb } from "lucide-react";
import { useTranslations } from "next-intl";

const SOFT_SKILLS = [
    {
        icon: Users,
        titleKey: "communication" as const,
        descKey: "communicationDesc" as const,
    },
    {
        icon: MessageCircle,
        titleKey: "responsibility" as const,
        descKey: "responsibilityDesc" as const,
    },
    {
        icon: Target,
        titleKey: "organization" as const,
        descKey: "organizationDesc" as const,
    },
    {
        icon: Lightbulb,
        titleKey: "adaptability" as const,
        descKey: "adaptabilityDesc" as const,
    },
] as const;

export default function SoftSkills() {
    const t = useTranslations("SoftSkills");

    return (
        <section id="soft-skills" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">{t("title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SOFT_SKILLS.map((skill) => {
                    const Icon = skill.icon;
                    return (
                        <div
                            key={skill.titleKey}
                            className="p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="text-blue-600">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold">{t(skill.titleKey)}</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">{t(skill.descKey)}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
