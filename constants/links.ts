export const SOCIAL_LINKS = {
  GITHUB: "https://github.com/dengaletin",
  LINKEDIN: "https://www.linkedin.com/in/galetin/",
  TELEGRAM: "https://t.me/frescojacq",
  EMAIL: "denis@galetin.dev",
} as const;

export const PERSONAL_INFO = {
  NAME: "Denis Galetin",
  LOCATION: "Tbilisi, Georgia",
} as const;

export const SITE_URL = "https://galetin.dev" as const;

export const COMPANY_NAME = "Venson Ltd." as const;

export const CV_PATH = "/cv/Denis_Galetin_CV.pdf" as const;
export const CV_DOWNLOAD_NAME = "Denis_Galetin_Senior_PHP_Go_Developer_CV.pdf" as const;

export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "ka", label: "KA" },
] as const;

export const EXPERIENCE_COMPANIES = [
  {
    id: "venson",
    name: COMPANY_NAME,
    location: "Cyprus",
    start: "July 2023",
    end: undefined,
    achievementsCount: 8,
  },
  {
    id: "logy",
    name: "eLogy",
    location: "Rome, Italy",
    start: "April 2022",
    end: "July 2023",
    achievementsCount: 6,
  },
  {
    id: "albato",
    name: "Albato",
    location: "Setúbal, Portugal",
    start: "June 2021",
    end: "April 2022",
    achievementsCount: 3,
  },
  {
    id: "paykassma",
    name: "Paykassma",
    location: "Worldwide",
    start: "February 2019",
    end: "June 2021",
    achievementsCount: 8,
  },
  {
    id: "freelance",
    name: "Freelance & Startup Projects",
    location: "",
    start: "January 2017",
    end: "February 2019",
    achievementsCount: 4,
  },
] as const;
