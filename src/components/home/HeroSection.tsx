"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiUsers, FiBook, FiTarget } from "react-icons/fi";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[42rem] items-center overflow-hidden bg-[var(--color-primary)] py-16">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 border border-[var(--color-accent)] px-3 py-2"
        >
          <span className="text-[var(--color-on-primary)] font-medium">IJT-UAF · Student Organization</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl text-5xl font-semibold text-white mb-6 leading-tight"
        >
          Building Future Islamic Leaders
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-lg text-white mb-9"
        >
          IJT-UAF nurtures students through Islamic values, academic excellence, and
          character development. Together we grow, together we lead.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-start gap-3 mb-12"
        >
          <Link
            href="/register"
            className="group inline-flex items-center gap-3 border border-[var(--color-accent)] bg-[var(--color-accent)] px-5 py-3 font-semibold text-[var(--color-primary)] transition-colors"
          >
            Join IJT-UAF
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/about"
            className="border border-[var(--color-on-primary)] px-5 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-primary)]"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 gap-x-8 gap-y-5 border-t border-[var(--color-accent)] pt-6 sm:grid-cols-4"
        >
          <StatCard icon={<FiUsers />} value="500+" label="Active Members" delay={0.9} />
          <StatCard icon={<FiTarget />} value="50+" label="Events Annually" delay={1.0} />
          <StatCard icon={<FiBook />} value="200+" label="Learning Resources" delay={1.1} />
          <StatCard icon={<FiUsers />} value="10+" label="Years of Service" delay={1.2} />
        </motion.div>
      </div>

    </section>
  );
}

function StatCard({
  icon,
  value,
  label,
  delay,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="mb-2 flex items-center gap-2 text-white text-xl">
        {icon}
        <span className="text-2xl font-semibold">{value}</span>
      </div>
      <div className="text-white text-sm">{label}</div>
    </motion.div>
  );
}
