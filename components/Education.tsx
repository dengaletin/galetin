"use client";

import { useTranslations } from "next-intl";

export default function Education() {
    const t = useTranslations("Education");

    return (
        <section id="education" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">{t("title")}</h2>
            <ul className="space-y-6">
                <li className="p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                    <h4 className="text-xl font-bold text-gray-900">{t("university")}</h4>
                    <p className="text-xs text-gray-500 mb-1">{t("location")}</p>
                    <p className="text-lg text-blue-600 font-semibold mb-1">{t("field")}</p>
                    <p className="text-sm text-gray-600">{t("degree")} · {t("year")}</p>
                </li>
            </ul>
        </section>
    );
}
