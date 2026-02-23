import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {routing} from '../../i18n/routing';
import Script from 'next/script';
import { SOCIAL_LINKS, PERSONAL_INFO, SITE_URL, COMPANY_NAME } from '../../constants/links';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }
  
  setRequestLocale(locale);
  
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PERSONAL_INFO.NAME,
    "jobTitle": "Senior Backend Developer",
    "description": "Senior Backend Developer with 9+ years of experience specializing in PHP and Go development",
    "url": SITE_URL,
    "image": `${SITE_URL}/images/avatar.jpg`,
    "sameAs": [
        SOCIAL_LINKS.GITHUB,
        SOCIAL_LINKS.LINKEDIN,
        SOCIAL_LINKS.TELEGRAM
    ],
    "knowsAbout": [
        "PHP Development",
        "Go Programming",
        "Golang",
        "Microservices Architecture",
        "API Development",
        "Database Optimization",
        "Team Leadership",
        "DevOps",
        "Information Security"
    ],
    "worksFor": {
        "@type": "Organization",
        "name": COMPANY_NAME
    },
    "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Information Security (Specialist degree, 2016)"
    }
  };

  return (
    <NextIntlClientProvider messages={messages}>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow max-w-2xl mx-auto px-4 sm:px-0 pt-20">
          <Header />
          <main className="py-4">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
