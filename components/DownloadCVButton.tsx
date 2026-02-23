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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer"
        >
            <Download className="w-5 h-5" />
            {t('button')}
        </a>
    );
}
