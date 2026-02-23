import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import { SITE_URL } from "../constants/links";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Denis Galetin - Senior Backend Developer | PHP & Go",
  description: "Senior Backend Developer with 9+ years of experience specializing in PHP and Go. Building high-load financial systems.",
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
