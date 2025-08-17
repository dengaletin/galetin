import Image from "next/image";
import TechStack from "../components/TechStack";
import Achievements from "../components/Achievements";
import StatsSection from "../components/StatsSection";
import DownloadCVButton from "../components/DownloadCVButton";
import Education from "../components/Education";
import SoftSkills from "../components/SoftSkills";

const experienceData = [
    {
        companyLogo: "/images/venson.jpg",
        companyName: "Ltd. Venson",
        start: "September 2022",
        end: "Present",
        position: "Senior Full-Stack Developer (PHP/Go)",
        achievements: [
            "Architected microservices migration from PHP to Go, improving performance by 300% and reducing operational costs by $50k annually",
            "Led team of 6 developers in building high-load financial APIs handling 10M+ transactions daily, enabling company expansion to 3 new markets",
            "Implemented CI/CD pipelines reducing deployment time from hours to minutes, increasing team productivity by 40%",
            "Reduced production incidents by 70% through comprehensive test coverage, saving 20+ hours/week in debugging time",
            "Automated payment integration processes using standardized templates, reducing new integration time from 2 weeks to 2 days",
            "Conducted technical interviews for 15+ developer candidates and managed team performance evaluations, improving team retention by 85%"
        ]
    },
    {
        companyLogo: "/images/vk.jpg",
        companyName: "VK Team",
        start: "September 2021",
        end: "September 2022",
        position: "Senior Backend Developer (PHP/Go)",
        note: "Left to pursue better career growth opportunities in fintech sector",
        achievements: [
            "Developed Go-based real-time messaging system serving 50M+ users, supporting company's core social platform",
            "Optimized PHP legacy code improving API response times by 400%, directly improving user experience metrics",
            "Mentored 3 junior developers in modern backend practices, with all receiving promotions within 6 months",
            "Implemented comprehensive code review process enforcing SOLID principles, reducing bug reports by 45%",
            "Optimized critical SQL queries reducing database load by 60%, saving $30k annually in infrastructure costs",
            "Established automated testing pipeline covering 85% of core functionality, preventing 20+ critical bugs from reaching production"
        ]
    },
    {
        companyLogo: "/images/albato.jpg",
        companyName: "Albato",
        start: "March 2021",
        end: "September 2021",
        position: "PHP Developer",
        note: "Short-term contract role; completed all project deliverables ahead of schedule",
        achievements: [
            "Built integration platform handling 1M+ API calls daily with 99.5% uptime, enabling customer automation workflows",
            "Developed high-performance PHP services for CPU-intensive operations improving efficiency by 200%, reducing server costs by $15k",
            "Implemented robust error handling and monitoring systems, reducing customer support tickets by 60%",
            "Delivered new system features using modern design patterns, completing 3-month project in 5 months",
            "Refactored legacy codebase reducing technical debt by 40%, improving future development velocity",
            "Integrated 5 major payment systems with unified API interface, expanding platform capabilities"
        ]
    },
    {
        companyLogo: "/images/aya.jpg",
        companyName: "AYA Group",
        start: "January 2020",
        end: "March 2021",
        position: "PHP Team Lead / PHP Developer",
        achievements: [
            "Led backend development processes and team of 5 developers",
            "Researched and evaluated Go language for future performance-critical components",
            "Conducted technical interviews and onboarded 8+ new developers",
            "Established application architecture standards and ensured compliance",
            "Developed complex SQL queries and database optimization strategies",
            "Organized technical meetups and knowledge sharing sessions",
            "Implemented code review standards and development best practices"
        ]
    },
    {
        companyLogo: "/images/ht.png",
        companyName: "Hidden Team",
        start: "February 2019",
        end: "January 2020",
        position: "PHP Developer",
        achievements: [
            "Built scalable web applications using modern PHP frameworks (Laravel, Symfony)",
            "Developed new administrative panel features and fixed existing system bugs",
            "Researched emerging technologies and modern development practices",
            "Optimized complex SQL queries improving system performance by 150%",
            "Integrated payment systems and maintained legacy code",
            "Collaborated with cross-functional teams on product development"
        ]
    },
];

export default function Home() {
    return (
        <>
            <section className="flex flex-col items-center sm:items-start text-center sm:text-left gap-6 mb-12">
                <Image
                    src="/images/avatar.jpg"
                    alt="Denis Galetin - Senior PHP & Go Developer"
                    width={180}
                    height={180}
                    priority
                    className="rounded-full"
                />
                <div>
                    <h1 className="text-3xl font-bold">
                        About me
                    </h1>
                    <p className="mt-2 text-lg">
                        Hi! My name is Denis Galetin, and I&apos;m a Senior Backend Developer with 6+ years
                        of experience specializing in <strong>PHP</strong> and <strong>Go</strong>. I build
                        high-performance, scalable web applications that handle millions of requests daily.
                    </p>
                    <p className="mt-2 text-lg">
                        My expertise spans the entire backend ecosystem — from architecting microservices
                        and optimizing database performance to implementing CI/CD pipelines and leading
                        development teams. I&apos;ve successfully migrated legacy PHP systems to modern Go
                        microservices, achieving significant performance improvements and cost reductions.
                    </p>
                    <p className="mt-2 text-lg">
                        You can explore my open-source contributions on{" "}
                        <a
                            href="https://github.com/dengaletin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            GitHub
                        </a>
                        , connect professionally on{" "}
                        <a
                            href="https://www.linkedin.com/in/galetin/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            LinkedIn
                        </a>
                        , or reach out directly via{" "}
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
                        I&apos;m passionate about solving complex technical challenges, mentoring teams,
                        and building systems that make a real business impact. Let&apos;s discuss how
                        I can contribute to your next big project.
                    </p>

                    <div className="mt-6 flex justify-center">
                        <DownloadCVButton />
                    </div>
                </div>
            </section>

            <StatsSection />
            <TechStack />
            <SoftSkills />
            <Achievements />
            <Education />

            <section>
                <h2 className="text-2xl font-bold mb-2">Professional Experience</h2>
                <h3 className="text-xl font-semibold mb-6">Career Progression & Impact:</h3>
                <ul className="space-y-6">
                    {experienceData.map((exp, index) => (
                        <li
                            key={index}
                            className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">{exp.companyName}</h4>
                                <p className="text-lg text-blue-600 font-semibold mb-2">
                                    {exp.position}
                                </p>
                                <p className="text-sm text-gray-600 mb-3">
                                    {exp.start} → {exp.end}
                                </p>
                                {exp.note && (
                                    <p className="text-sm text-blue-600 italic mb-3 bg-blue-50 p-2 rounded">
                                        {exp.note}
                                    </p>
                                )}
                                <div className="space-y-2">
                                    {exp.achievements.map((achievement, achIndex) => (
                                        <div key={achIndex} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                                            <span className="text-sm text-gray-700 leading-relaxed">{achievement}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
