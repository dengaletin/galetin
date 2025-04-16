import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <h1 className="text-3xl font-bold text-center mt-12">Page not found</h1>
            <p className="mt-4 text-center text-lg">
                Unfortunately, this page does not exist. Please try returning to the{" "}
                <Link href="/" className="text-blue-600 hover:underline">
                    homepage
                </Link>
                .
            </p>
        </>
    );
}
