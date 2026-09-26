"use client";

import { motion } from "framer-motion";
import { FiBook, FiVideo, FiFileText, FiGlobe, FiLayers, FiAward } from "react-icons/fi";
import { ResourceCard } from "../ui/CustomCard";
import Link from "next/link";

const resourceCategories = [
  {
    icon: <FiBook />,
    title: "Books & Reading",
    description: "Curated collection of Islamic literature, academic resources, and self-development books.",
    count: 150,
  },
  {
    icon: <FiVideo />,
    title: "Video Library",
    description: "Educational lectures, workshops, and inspirational content from renowned speakers.",
    count: 85,
  },
  {
    icon: <FiLayers />,
    title: "Online Courses",
    description: "Structured learning programs covering leadership, skills, and spiritual development.",
    count: 42,
  },
  {
    icon: <FiFileText />,
    title: "Study Materials",
    description: "Notes, guides, and resources for academic excellence and exam preparation.",
    count: 200,
  },
  {
    icon: <FiGlobe />,
    title: "Career Resources",
    description: "Resume templates, interview guides, and job placement assistance materials.",
    count: 75,
  },
  {
    icon: <FiAward />,
    title: "Certification Programs",
    description: "Recognized certificates to boost your professional profile and credentials.",
    count: 28,
  },
];

export function ResourcesSection() {
  return (
    <section className="py-24 bg-[var(--color-background)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-secondary)]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-wider">
            Capacity Building
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mt-4 mb-6">
            Learning Resources
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Access our comprehensive collection of learning materials designed to
            empower you on your journey to excellence.
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {resourceCategories.map((category, index) => (
            <ResourceCard
              key={category.title}
              icon={category.icon}
              title={category.title}
              description={category.description}
              count={category.count}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Featured Resources Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]" />
          <div className="relative z-10 py-16 px-8 md:px-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Start Your Learning Journey Today
                </h3>
                <p className="text-white/80 mb-8">
                  Join thousands of students who have transformed their skills and
                  careers through our resources. Access everything from Islamic studies
                  to professional development.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/resources"
                    className="px-8 py-4 rounded-full bg-white text-[var(--color-primary)] font-semibold hover:bg-[var(--color-accent)] transition-all"
                  >
                    Browse All Resources
                  </Link>
                  <Link
                    href="/register"
                    className="px-8 py-4 rounded-full bg-transparent border-2 border-white text-white font-semibold hover:bg-white/10 transition-all"
                  >
                    Become a Member
                  </Link>
                </div>
              </div>
              <div className="hidden md:grid grid-cols-2 gap-3">
                {resourceCategories.slice(0, 4).map((category) => (
                  <div key={category.title} className="flex min-h-20 items-center justify-between gap-3 border border-[var(--color-accent)] px-4 py-3">
                    <span className="text-sm font-medium text-white">{category.title}</span>
                    <span className="text-sm text-white">{category.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
