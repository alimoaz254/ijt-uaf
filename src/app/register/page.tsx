"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiUser, FiMail, FiLock, FiPhone, FiBook, FiArrowRight, FiTarget, FiUsers } from "react-icons/fi";
import { CustomCard } from "@/components/ui/CustomCard";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    university: "",
    department: "",
    semester: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center bg-[var(--color-background)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-12"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-5xl">✓</span>
          </div>
          <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
            Welcome to IJT-UAF!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your registration was successful. Please check your email to verify your account.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-bold text-lg hover:scale-105 transition-all"
          >
            Go to Login <FiArrowRight />
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="pt-20 min-h-screen bg-[var(--color-background)]">
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary)] to-[var(--color-secondary)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-white mb-4">
              Join IJT-UAF
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Take the first step towards personal growth, spiritual development,
              and building meaningful connections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CustomCard variant="floating" className="p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                    Personal Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                          placeholder="Muhammad"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                        Last Name *
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({ ...formData, lastName: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                          placeholder="Ahmed"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                          placeholder="muhammad@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                          placeholder="+92 300 1234567"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Academic Information */}
                <div>
                  <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                    Academic Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                        University *
                      </label>
                      <div className="relative">
                        <FiBook className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={formData.university}
                          onChange={(e) =>
                            setFormData({ ...formData, university: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                          placeholder="UAF"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                        Department *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.department}
                        onChange={(e) =>
                          setFormData({ ...formData, department: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                        placeholder="Computer Science"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                        Semester *
                      </label>
                      <select
                        required
                        value={formData.semester}
                        onChange={(e) =>
                          setFormData({ ...formData, semester: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors bg-white"
                      >
                        <option value="">Select Semester</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                          <option key={s} value={s}>
                            Semester {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Security */}
                <div>
                  <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                    Security
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                        Password *
                      </label>
                      <div className="relative">
                        <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="password"
                          required
                          value={formData.password}
                          onChange={(e) =>
                            setFormData({ ...formData, password: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="password"
                          required
                          value={formData.confirmPassword}
                          onChange={(e) =>
                            setFormData({ ...formData, confirmPassword: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </button>

                {/* Login Link */}
                <p className="text-center text-gray-600">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-[var(--color-primary)] font-semibold hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </CustomCard>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[var(--color-background-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
              Why Join IJT-UAF?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiBook />,
                title: "Academic Excellence",
                description: "Access study materials, tutoring, and academic support programs.",
              },
              {
                icon: <FiTarget />,
                title: "Leadership Training",
                description: "Develop leadership skills through workshops and practical experience.",
              },
              {
                icon: <FiUsers />,
                title: "Community",
                description: "Join a supportive network of like-minded students.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CustomCard variant="floating" className="p-8 text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center bg-[var(--color-primary)] text-xl text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-xl text-[var(--color-primary)] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CustomCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
