"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function DownloadCVButton() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/cv/Denis_Galetin_CV.pdf';
        link.download = 'Denis_Galetin_Senior_PHP_Go_Developer_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            <Download className="w-5 h-5" />
            Download CV (PDF)
        </motion.button>
    );
}
