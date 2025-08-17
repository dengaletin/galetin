"use client";

import { motion } from "framer-motion";
import { Database, Server, Zap, Shield } from "lucide-react";

const techSkills = [
    {
        category: "Backend Development",
        icon: <Server className="w-6 h-6" />,
        skills: [
            { name: "PHP", level: "Expert", years: "6+" },
            { name: "Go (Golang)", level: "Expert", years: "4+" },
            { name: "Laravel", level: "Expert", years: "5+" },
            { name: "Symfony", level: "Advanced", years: "3+" },
            { name: "Gin/Echo", level: "Expert", years: "3+" },
            { name: "REST APIs", level: "Expert", years: "5+" },
            { name: "GraphQL", level: "Advanced", years: "2+" },
        ]
    },
    {
        category: "Databases & Storage",
        icon: <Database className="w-6 h-6" />,
        skills: [
            { name: "MySQL", level: "Expert", years: "6+" },
            { name: "PostgreSQL", level: "Expert", years: "4+" },
            { name: "Redis", level: "Expert", years: "4+" },
            { name: "MongoDB", level: "Advanced", years: "2+" },
            { name: "ClickHouse", level: "Advanced", years: "2+" },
            { name: "Elasticsearch", level: "Intermediate", years: "2+" },
        ]
    },
    {
        category: "DevOps & Infrastructure",
        icon: <Shield className="w-6 h-6" />,
        skills: [
            { name: "Docker", level: "Expert", years: "4+" },
            { name: "Kubernetes", level: "Advanced", years: "3+" },
            { name: "AWS", level: "Advanced", years: "3+" },
            { name: "CI/CD", level: "Expert", years: "4+" },
            { name: "Jenkins", level: "Advanced", years: "3+" },
            { name: "GitLab CI", level: "Advanced", years: "3+" },
            { name: "Terraform", level: "Intermediate", years: "2+" },
        ]
    },
    {
        category: "Architecture & Performance",
        icon: <Zap className="w-6 h-6" />,
        skills: [
            { name: "Microservices", level: "Expert", years: "4+" },
            { name: "API Gateway", level: "Expert", years: "3+" },
            { name: "Message Queues", level: "Expert", years: "4+" },
            { name: "RabbitMQ", level: "Advanced", years: "3+" },
            { name: "Apache Kafka", level: "Advanced", years: "2+" },
            { name: "Load Balancing", level: "Advanced", years: "3+" },
            { name: "Nginx", level: "Advanced", years: "4+" },
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};

export default function TechStack() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Technical Expertise</h2>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {techSkills.map((category, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="text-blue-600">
                                {category.icon}
                            </div>
                            <h3 className="text-lg font-semibold">{category.category}</h3>
                        </div>
                        <div className="space-y-3">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="flex justify-between items-center">
                                    <span className="font-medium">{skill.name}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-600">{skill.years}</span>
                                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                                            skill.level === 'Expert' ? 'bg-green-100 text-green-800' :
                                            skill.level === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                                            'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            {skill.level}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
