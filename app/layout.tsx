import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Denis Galetin — Senior PHP & Go Developer | Backend Expert",
    description:
        "Senior Backend Developer with 6+ years of experience in PHP and Go. Expert in microservices, high-load systems, and team leadership. Available for challenging projects.",
    keywords: "Denis Galetin, PHP Developer, Go Developer, Golang, Backend Developer, Microservices, API Development, Senior Developer, Team Lead",
    openGraph: {
        title: "Denis Galetin — Senior PHP & Go Developer",
        description:
            "Senior Backend Developer specializing in PHP and Go. Expert in building scalable, high-performance systems serving millions of users daily.",
        url: "https://galetin.com",
        siteName: "Denis Galetin - Backend Developer",
        images: [
            {
                url: "https://galetin.com/images/preview-image.jpg",
                width: 1200,
                height: 630,
                alt: "Denis Galetin - Senior PHP & Go Developer",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Denis Galetin — Senior PHP & Go Developer",
        description: "Senior Backend Developer specializing in PHP and Go. Expert in building scalable, high-performance systems.",
        images: ["https://galetin.com/images/preview-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://galetin.com",
    },
};

export default function RootLayout({children}: { children: React.ReactNode; }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Denis Galetin",
        "jobTitle": "Senior Backend Developer",
        "description": "Senior Backend Developer with 6+ years of experience specializing in PHP and Go development",
        "url": "https://galetin.com",
        "image": "https://galetin.com/images/avatar.jpg",
        "sameAs": [
            "https://github.com/dengaletin",
            "https://www.linkedin.com/in/galetin/",
            "https://t.me/frescojacq"
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
            "name": "Ltd. Venson"
        },
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "North Caucasus Technical University"
        }
    };

    return (
        <html lang="en">
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow max-w-2xl mx-auto px-4 sm:px-0 pt-20">
                <Header/>
                <main className="py-4">
                    {children}
                </main>
            </div>
            <Footer/>
        </div>
        </body>
        </html>

    );
}