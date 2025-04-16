import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full mb-8">
            <nav className="p-4">
                <ul className="flex justify-start gap-8 text-lg font-medium">
                    <li>
                        <Link href="/" className="hover:text-blue-600 transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="hover:text-blue-600 transition-colors">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://buymeacoffee.com/defo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition-colors"
                        >
                            Buy me a coffee
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
