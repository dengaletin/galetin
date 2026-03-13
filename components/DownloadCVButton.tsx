"use client";

import { Download } from "lucide-react";
import { useTranslations } from 'next-intl';
import { CV_PATH, CV_DOWNLOAD_NAME } from "../constants/links";

export default function DownloadCVButton() {
    const t = useTranslations('DownloadCV');

    return (
        <a
            href={CV_PATH}
            download={CV_DOWNLOAD_NAME}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors cursor-pointer shadow-sm"
        >
            <Download className="w-4 h-4" />
            {t('button')}
        </a>
    );
}
