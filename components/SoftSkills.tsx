"use client";

import { motion } from "framer-motion";
import { Users, MessageCircle, Target, Lightbulb, Clock, HandHeart } from "lucide-react";

const softSkills = [
    {
        icon: <Users className="w-6 h-6" />,
        title: "Team Leadership",
        description: "Led cross-functional teams of up to 8 developers, conducting performance reviews and career mentoring",
        examples: ["Managed team retention rate of 85%+", "Mentored 12+ junior developers with 100% promotion rate"]
    },
    {
        icon: <MessageCircle className="w-6 h-6" />,
        title: "Technical Communication",
        description: "Bridge technical and business stakeholders, presenting complex solutions in clear, actionable terms",
        examples: ["Conducted 15+ technical interviews", "Led architecture decision meetings"]
    },
    {
        icon: <Target className="w-6 h-6" />,
        title: "Problem Solving",
        description: "Analytical approach to complex system issues, focusing on root cause analysis and long-term solutions",
        examples: ["Reduced production incidents by 70%", "Solved critical performance bottlenecks"]
    },
    {
        icon: <Lightbulb className="w-6 h-6" />,
        title: "Innovation & Learning",
        description: "Continuously evaluate and implement new technologies to improve system performance and team efficiency",
        examples: ["Led PHP to Go migrations", "Introduced modern DevOps practices"]
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Project Management",
        description: "Deliver projects on time and within scope while maintaining high code quality standards",
        examples: ["Reduced deployment time by 95%", "Completed contract projects ahead of schedule"]
    },
    {
        icon: <HandHeart className="w-6 h-6" />,
        title: "Stakeholder Relations",
        description: "Build strong relationships with clients, business teams, and external partners",
        examples: ["Managed API integrations with 200+ partners", "Improved client satisfaction through automation"]
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

export default function SoftSkills() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Leadership & Professional Skills</h2>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {softSkills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="text-blue-600">
                                {skill.icon}
                            </div>
                            <h3 className="text-lg font-semibold">{skill.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                            {skill.description}
                        </p>
                        <div className="space-y-1">
                            {skill.examples.map((example, exIndex) => (
                                <div key={exIndex} className="flex items-start gap-2">
                                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                                    <span className="text-xs text-gray-500">{example}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
