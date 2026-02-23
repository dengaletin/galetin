"use client";

import Image from "next/image";
import { Mail, MapPin, Wifi, Github, Linkedin, Send } from "lucide-react";
import DownloadCVButton from "./DownloadCVButton";
import { useTranslations } from 'next-intl';
import { SOCIAL_LINKS } from "../constants/links";

export default function About() {
    const t = useTranslations('About');

    return (
        <section id="about" className="mb-12 scroll-mt-20">
            <div className="p-6 rounded-2xl border border-gray-200">
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 mb-6">
                    <Image
                        src="/images/avatar.jpg"
                        alt={t('imageAlt')}
                        width={180}
                        height={180}
                        priority
                        className="rounded-full ring-1 ring-blue-300 ring-offset-[5px] flex-shrink-0"
                    />
                    <div className="text-center sm:text-left">
                        <h1 className="text-4xl font-bold text-gray-900">
                            {t('name')}
                        </h1>
                        <p className="mt-1 text-lg text-gray-600">
                            {t('role')}
                        </p>
                    </div>
                </div>
                
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {t('title')}
                    </h2>
                    <p className="mt-2 text-lg">
                        {t('p1')}
                    </p>
                    <p className="mt-4 text-lg">
                        {t('p2')}
                    </p>
                    <p className="mt-4 text-lg">
                        {t('p3')}
                    </p>
                </div>

                <div className="mt-6">
                    <DownloadCVButton />
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('contactTitle')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        <div className="flex items-center gap-3">
                            <Wifi className="w-5 h-5 text-gray-600 flex-shrink-0" />
                            <span className="text-gray-700">{t('remoteAvailable')}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-gray-600 flex-shrink-0" />
                            <span className="text-gray-700">{t('locationValue')}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-gray-600 flex-shrink-0" />
                            <a href={`mailto:${SOCIAL_LINKS.EMAIL}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                                {SOCIAL_LINKS.EMAIL}
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Send className="w-5 h-5 text-gray-600 flex-shrink-0" />
                            <a href={SOCIAL_LINKS.TELEGRAM} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                                {t('telegram')}
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Github className="w-5 h-5 text-gray-600 flex-shrink-0" />
                            <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                                {t('github')}
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Linkedin className="w-5 h-5 text-gray-600 flex-shrink-0" />
                            <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                                {t('linkedin')}
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
