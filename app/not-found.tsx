import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function NotFound() {
    const t = useTranslations('NotFound');
    
    return (
        <>
            <h1 className="text-3xl font-bold text-center mt-12">{t('title')}</h1>
            <p className="mt-4 text-center text-lg">
                {t('description')}{" "}
                <Link href="/" className="text-blue-600 hover:underline">
                    {t('homepage')}
                </Link>
                .
            </p>
        </>
    );
}
