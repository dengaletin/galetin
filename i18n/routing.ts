import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { SUPPORTED_LANGUAGES } from "../constants/links";

export const locales = SUPPORTED_LANGUAGES.map((lang) => lang.code);
export const defaultLocale = locales[0];

export const routing = defineRouting({
    locales,
    defaultLocale,
    localePrefix: "as-needed",
    localeDetection: true,
});

export const { Link, usePathname } = createNavigation(routing);
