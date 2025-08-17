"use client";

import { motion } from "framer-motion";

const stats = [
    {
        number: "6+",
        label: "Years Experience",
        sublabel: "PHP & Go Development"
    },
    {
        number: "15+",
        label: "Microservices",
        sublabel: "Built & Deployed"
    },
    {
        number: "8+",
        label: "Team Members",
        sublabel: "Led & Mentored"
    },
    {
        number: "3",
        label: "Major Migrations",
        sublabel: "PHP to Go Systems"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function StatsSection() {
    return (
        <section className="mb-12">
            <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:border-blue-200 transition-colors"
                    >
                        <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                            {stat.number}
                        </div>
                        <div className="text-sm font-semibold text-gray-800 mb-1">
                            {stat.label}
                        </div>
                        <div className="text-xs text-gray-600">
                            {stat.sublabel}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
