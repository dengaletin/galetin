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
    description: "Transforming Code into Success: Insights from Senior PHP Developer Denis Galetin",
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