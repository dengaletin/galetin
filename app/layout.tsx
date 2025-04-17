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
    title: "Denis Galetin — Home",
    description:
        "Transforming Code into Success: Insights from Senior PHP Developer Denis Galetin",
    openGraph: {
        title: "Denis Galetin — Home",
        description:
            "Transforming Code into Success: Insights from Senior PHP Developer Denis Galetin",
        url: "https://galetin.com",
        siteName: "Denis Galetin",
        images: [
            {
                url: "https://galetin.com/images/preview-image.jpg",
                width: 1200,
                height: 630,
                alt: "Denis Galetin Preview Image",
            },
        ],
        locale: "en_US",
        type: "website",
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
    return (
        <html lang="en">
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