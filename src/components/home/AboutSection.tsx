"use client";

import { motion } from "framer-motion";
import { FiAward, FiBook, FiCheckCircle, FiHeart, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";
import { CustomCard } from "../ui/CustomCard";

export function AboutSection() {
  const values = [
    {
      icon: <FiHeart />,
      title: "Islamic Values",
      description: "Rooted in Islamic ideology, fostering spiritual growth and moral character.",
    },
    {
      icon: <FiZap />,
      title: "Innovation",
      description: "Encouraging creative thinking and progressive solutions for modern challenges.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Growth",
      description: "Continuous personal and professional development for every member.",
    },
    {
      icon: <FiCheckCircle />,
      title: "Excellence",
      description: "Striving for the highest standards in all our endeavors.",
    },
  ];

  return (
    <section className="py-24 bg-[var(--color-background)] relative overflow-hidden">
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
            About IJT-UAF
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mt-4 mb-6">
            Building Tomorrow's Leaders
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Since our inception, we have been dedicated to grooming students into
            well-rounded individuals who contribute positively to society.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop"
                alt="Students collaborating"
                className="w-full aspect-[4/3] object-cover"
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-4 flex w-fit max-w-full items-center gap-4 border border-[var(--color-border)] bg-white p-4"
              >
                <div className="flex h-12 w-12 items-center justify-center bg-[var(--color-primary)]">
                  <FiAward className="text-2xl text-white" />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-[var(--color-primary)]">10+</div>
                  <div className="text-sm text-gray-500">Years of Excellence</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
              Our Mission & Vision
            </h3>
            <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed">
              IJT-UAF is committed to creating a purely Islamic and progressive
              environment for students. We believe in building character through
              collaboration, facing challenges together, and developing sustainable
              solutions.
            </p>
            <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">
              Our organization serves as a perfect training ground for students'
              professional journeys, fostering leadership mindset, brainstorming
              capabilities, and a spirit of devotion and sacrifice for the greater good.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <CustomCard variant="glass" hoverEffect={false} className="p-4">
                <FiTrendingUp className="mb-2 text-xl text-[var(--color-primary)]" />
                <div className="font-semibold text-[var(--color-primary)]">Leadership</div>
                <div className="text-xs text-gray-500">Future Leaders</div>
              </CustomCard>
              <CustomCard variant="glass" hoverEffect={false} className="p-4">
                <FiUsers className="mb-2 text-xl text-[var(--color-primary)]" />
                <div className="font-semibold text-[var(--color-primary)]">Collaboration</div>
                <div className="text-xs text-gray-500">Team Spirit</div>
              </CustomCard>
              <CustomCard variant="glass" hoverEffect={false} className="p-4">
                <FiBook className="mb-2 text-xl text-[var(--color-primary)]" />
                <div className="font-semibold text-[var(--color-primary)]">Education</div>
                <div className="text-xs text-gray-500">Continuous Learning</div>
              </CustomCard>
              <CustomCard variant="glass" hoverEffect={false} className="p-4">
                <FiZap className="mb-2 text-xl text-[var(--color-primary)]" />
                <div className="font-semibold text-[var(--color-primary)]">Innovation</div>
                <div className="text-xs text-gray-500">Creative Solutions</div>
              </CustomCard>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CustomCard variant="floating" className="p-6 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white text-2xl mb-4">
                  {value.icon}
                </div>
                <h4 className="font-bold text-lg text-[var(--color-primary)] mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </CustomCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
