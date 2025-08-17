"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
    {
        degree: "Specialist in Information Security of Automated Systems",
        institution: "North Caucasus Technical University",
        year: "2011 - 2016",
        type: "degree",
        description: "5-year specialized program covering cybersecurity, system administration, and software development fundamentals"
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

export default function Education() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Education & Certifications</h2>
            <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {education.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex items-start gap-4 p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex-shrink-0 mt-1">
                            {item.type === 'degree' ? (
                                <GraduationCap className="w-6 h-6 text-blue-600" />
                            ) : (
                                <Award className="w-6 h-6 text-green-600" />
                            )}
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                {item.degree}
                            </h3>
                            <p className="text-gray-600 mb-2">
                                {item.institution}
                            </p>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                                <Calendar className="w-4 h-4" />
                                <span>{item.year}</span>
                            </div>
                            <p className="text-gray-500 text-sm mt-1">
                                {item.description}
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                item.type === 'degree' 
                                    ? 'bg-blue-100 text-blue-800' 
                                    : 'bg-green-100 text-green-800'
                            }`}>
                                {item.type === 'degree' ? 'Degree' : 'Certification'}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
