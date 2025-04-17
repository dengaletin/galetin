import Image from "next/image";

const experienceData = [
    {
        companyLogo: "/images/venson.jpg",
        companyName: "Ltd. Venson",
        start: "September 2022",
        end: "Present",
        position: "Senior PHP developer",
    },
    {
        companyLogo: "/images/vk.jpg",
        companyName: "VK Team",
        start: "September 2021",
        end: "September 2022",
        position: "Senior PHP developer",
    },
    {
        companyLogo: "/images/albato.jpg",
        companyName: "Albato",
        start: "March 2021",
        end: "September 2021",
        position: "Pre-Senior PHP developer",
    },
    {
        companyLogo: "/images/aya.jpg",
        companyName: "AYA Group",
        start: "January 2020",
        end: "March 2021",
        position: "Pre-Senior PHP developer",
    },
    {
        companyLogo: "/images/ht.png",
        companyName: "Hidden Team",
        start: "February 2019",
        end: "January 2020",
        position: "Middle PHP developer",
    },
];

export default function Home() {
    return (
        <>
            <section className="flex flex-col items-center sm:items-start text-center sm:text-left gap-6 mb-12">
                <Image
                    src="/images/avatar.jpg"
                    alt="My Avatar" width={180}
                    height={180}
                    priority
                    className="rounded-full"
                />
                <div>
                    <h1 className="text-3xl font-bold">
                        About me
                    </h1>
                    <p className="mt-2 text-lg">
                        Hi! My name is Denis Galetin, and I’m a Senior PHP Developer with over 6 years
                        of experience building quality web applications. I have been actively creating
                        reliable, scalable, and high-performance solutions that meet today’s technology standards.
                    </p>
                    <p className="mt-2 text-lg">
                    My work covers the entire development process — from the initial design of architectures
                    to optimizing and maintaining existing systems. I’m always exploring new ideas and technologies.
                    You can check out my work and projects on my{" "}
                    <a
                        href="https://github.com/dengaletin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        GitHub
                    </a>
                    , connect with me on{" "}
                    <a
                        href="https://www.linkedin.com/in/galetin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        LinkedIn
                    </a>
                    , or drop me a message on{" "}
                    <a
                        href="https://t.me/frescojacq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        Telegram
                    </a>
                    .
                </p>
                    <p className="mt-2 text-lg">
                        I enjoy diving deep into technology, exploring new tools, and improving workflows so that every line
                        of code makes a difference. This approach helps me solve problems effectively and build software products
                        that keep up with the ever-changing tech world.
                    </p>
                    <p className="mt-2 text-lg">
                        If you’d like to know more or discuss a potential project, feel free to reach out through any of the
                        platforms mentioned above.
                    </p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-2">Work Experience</h2>
                <h3 className="text-xl font-semibold mb-4">Full-time Positions:</h3>
                <ul className="space-y-6">
                    {experienceData.map((exp, index) => (
                        <li
                            key={index}
                            className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded border border-gray-200 shadow-sm"
                        >
                            <div className="flex-shrink-0 w-16 h-16 relative">
                                <Image
                                    src={exp.companyLogo}
                                    alt={`${exp.companyName} logo`}
                                    width={60}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">{exp.companyName}</h4>
                                <p className="text-md">
                                    {exp.position} • {exp.start} → {exp.end}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
