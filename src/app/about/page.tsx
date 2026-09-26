"use client";

import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiHeart,
  FiTarget,
  FiUsers,
  FiAward,
  FiBook,
  FiEye,
} from "react-icons/fi";
import { CustomCard } from "@/components/ui/CustomCard";

const values = [
  {
    icon: <FiHeart />,
    title: "Islamic Values",
    description:
      "We believe in building character through Islamic principles, fostering spirituality, and maintaining moral excellence in all aspects of life.",
  },
  {
    icon: <FiUsers />,
    title: "Unity & Collaboration",
    description:
      "Facing challenges together and building strong bonds of brotherhood and sisterhood among students from diverse backgrounds.",
  },
  {
    icon: <FiTarget />,
    title: "Leadership Development",
    description:
      "Nurturing future leaders through practical experience, mentorship, and opportunities to take on responsibilities.",
  },
  {
    icon: <FiBook />,
    title: "Excellence in Education",
    description:
      "Promoting academic excellence while balancing spiritual growth and personal development.",
  },
  {
    icon: <FiAward />,
    title: "Character Building",
    description:
      "Developing integrity, honesty, and ethical behavior that prepares students for successful careers and meaningful lives.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Community Service",
    description:
      "Contributing positively to society through volunteer work, awareness campaigns, and social responsibility initiatives.",
  },
];

const timeline = [
  {
    year: "2014",
    title: "Foundation",
    description: "IJT-UAF was established with a vision to create an Islamic learning environment for students.",
  },
  {
    year: "2016",
    title: "First Major Event",
    description: "Organized our first annual leadership summit, attracting over 200 participants.",
  },
  {
    year: "2018",
    title: "Expansion",
    description: "Launched capacity building programs and expanded membership across multiple departments.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Established online learning platforms and virtual events during challenging times.",
  },
  {
    year: "2022",
    title: "Recognition",
    description: "Received university recognition as the top student organization for leadership development.",
  },
  {
    year: "2024",
    title: "Growth Milestone",
    description: "Reached 500+ active members and launched comprehensive resource library.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary)] to-[var(--color-secondary)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              For over a decade, IJT-UAF has been dedicated to nurturing students
              into well-rounded individuals who contribute positively to society
              through Islamic values and academic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <CustomCard variant="floating" className="p-10 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white text-3xl mb-6">
                  <FiTarget />
                </div>
                <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                  Our Mission
                </h2>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                  To create a purely Islamic and progressive environment for students
                  where they can develop their spiritual, academic, and personal
                  capabilities. We aim to build future leaders who face challenges
                  together and create sustainable solutions for society.
                </p>
                <ul className="space-y-3">
                  {[
                    "Foster Islamic values in student life",
                    "Promote academic excellence",
                    "Develop leadership skills",
                    "Build character and integrity",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <FiCheckCircle className="text-[var(--color-primary)]" />
                      <span className="text-[var(--color-text-muted)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </CustomCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <CustomCard variant="gradient" className="p-10 h-full text-white">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl mb-6">
                  <FiEye />
                </div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  To be the leading student organization that shapes future leaders
                  through Islamic ideology, progressive thinking, and collaborative
                  growth. We envision a community where every student discovers their
                  potential and plays a productive role in society.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["Future Leaders", "Islamic Values", "Progressive Mindset", "Sustainable Solutions"].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white/10 rounded-xl p-4 text-center"
                    >
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </CustomCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[var(--color-background-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-wider">
              Our Principles
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mt-4">
              Core Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CustomCard variant="floating" className="p-8 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white text-2xl mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-xl text-[var(--color-primary)] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CustomCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mt-4">
              Milestones
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)]" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "order-last pl-8 text-left"}`}>
                  <CustomCard variant="floating" className="p-6">
                    <span className="text-4xl font-bold text-[var(--color-secondary)]">
                      {item.year}
                    </span>
                    <h3 className="font-bold text-xl text-[var(--color-primary)] mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CustomCard>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[var(--color-primary)] border-4 border-[var(--color-background)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Become part of a community dedicated to growth, learning, and service.
            </p>
            <a
              href="/register"
              className="inline-block px-10 py-4 rounded-full bg-white text-[var(--color-primary)] font-bold text-lg shadow-2xl hover:scale-105 transition-all"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
