"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Award } from "lucide-react";

const achievements = [
    {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "Legacy System Modernization",
        description: "Successfully migrated 3 monolithic PHP applications to Go microservices, reducing server costs by 50% and improving response times by 400%",
        impact: "50% cost reduction"
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Cross-Team Technical Leadership",
        description: "Led technical decisions across 3 development teams, established coding standards and mentored 12+ junior developers in PHP/Go best practices",
        impact: "12+ developers mentored"
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "High-Load Systems Architecture",
        description: "Designed and implemented distributed systems handling 100M+ API requests daily with auto-scaling and circuit breaker patterns",
        impact: "100M+ requests/day"
    },
    {
        icon: <Award className="w-6 h-6" />,
        title: "DevOps Pipeline Implementation",
        description: "Built CI/CD pipelines and containerized applications, reducing deployment time from 2 hours to 5 minutes with zero-downtime deployments",
        impact: "95% faster deployments"
    }
];

const projects = [
    {
        title: "European Payment Gateway System",
        technologies: ["PHP", "Laravel", "MySQL", "Redis", "Docker", "AWS"],
        description: "Developed secure payment processing platform serving millions of users across Europe with multi-currency support, fraud detection, and PCI DSS compliance",
        role: "Senior Backend Developer"
    },
    {
        title: "Automation & Integration Platform (Zapier-like)",
        technologies: ["PHP", "Laravel", "MySQL", "Redis", "Docker"],
        description: "Built scalable workflow automation platform connecting 200+ APIs with real-time data synchronization and custom trigger-action chains",
        role: "Backend Lead Developer"
    },
    {
        title: "iGaming High-Load Platform",
        technologies: ["Go", "Redis", "ClickHouse", "Kafka", "Kubernetes"],
        description: "Architected real-time gaming platform handling multi-million user base with microsecond latency requirements and 99.99% uptime",
        role: "Senior Backend Developer"
    },
    {
        title: "AI-Powered Analytics Platform",
        technologies: ["Go", "Python", "TensorFlow", "PostgreSQL", "Redis", "Kubernetes"],
        description: "Contributed to enterprise AI platform development in 15+ member team, implementing machine learning pipelines processing 50M+ data points daily with real-time predictions",
        role: "Senior Backend Developer"
    },
    {
        title: "Tap-to-Earn Gaming Platform (Hamster Combat-style)",
        technologies: ["Go", "Redis Cluster", "PostgreSQL", "Kafka", "Docker"],
        description: "Built high-performance clicker game backend handling 100M+ taps daily with advanced anti-cheat systems, leaderboards, and reward distribution for 10M+ active users",
        role: "Senior Backend Developer"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6
        }
    }
};

export default function Achievements() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Achievements & Impact</h2>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                    >
                        <div className="flex items-start gap-3">
                            <div className="text-blue-600 mt-1">
                                {achievement.icon}
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">{achievement.title}</h3>
                                <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">
                                    {achievement.impact}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <h3 className="text-xl font-semibold mb-4">Notable Projects</h3>
            <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                            <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                            <span className="text-sm text-blue-600 font-medium mt-1 sm:mt-0">{project.role}</span>
                        </div>
                        <p className="text-gray-600 mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
