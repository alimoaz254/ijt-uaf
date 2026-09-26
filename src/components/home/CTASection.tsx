"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiUsers, FiHeart, FiTarget } from "react-icons/fi";

export function CTASection() {
  const benefits = [
    { icon: <FiUsers />, text: "Join a community of like-minded students" },
    { icon: <FiHeart />, text: "Grow spiritually and personally" },
    { icon: <FiTarget />, text: "Develop leadership skills" },
  ];

  return (
    <section className="py-16 bg-[var(--color-primary)] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-semibold text-white mb-5">
            Ready to Be Part of Something Greater?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl">
            Join IJT-UAF and embark on a journey of personal growth, spiritual
            development, and community service. Together, we build the leaders of tomorrow.
          </p>

          {/* Benefits */}
          <div className="grid gap-3 mb-8 sm:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 border border-[var(--color-accent)] px-4 py-3"
              >
                <span className="text-white text-xl">{benefit.icon}</span>
                <span className="text-white font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <Link
              href="/register"
              className="group inline-flex items-center gap-3 bg-[var(--color-accent)] px-5 py-3 font-semibold text-[var(--color-primary)] transition-colors"
            >
              Register Now
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="border border-[var(--color-on-primary)] px-5 py-3 font-semibold text-white transition-colors"
            >
              Learn More
            </Link>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[var(--color-accent)] pt-5 text-white text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--color-accent)]" />
              Free Membership
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--color-accent)]" />
              No Commitment
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--color-accent)]" />
              Instant Access
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
