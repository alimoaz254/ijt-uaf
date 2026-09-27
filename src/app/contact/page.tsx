"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiSend,
} from "react-icons/fi";
import { CustomCard } from "@/components/ui/CustomCard";

const contactInfo = [
  {
    icon: <FiMapPin />,
    title: "Visit Us",
    content: "University of Arid Agriculture\nRawalpindi, Pakistan",
    action: "Get Directions",
  },
  {
    icon: <FiMail />,
    title: "Email Us",
    content: "info@ijtuaf.org\nsupport@ijtuaf.org",
    action: "Send Email",
  },
  {
    icon: <FiPhone />,
    title: "Call Us",
    content: "+92 300 1234567\n+92 51 1234567",
    action: "Call Now",
  },
];

const socialLinks = [
  { icon: FiFacebook, href: "#", label: "Facebook" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
  { icon: FiTwitter, href: "#", label: "Twitter" },
  { icon: FiYoutube, href: "#", label: "YouTube" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSubmitted(false), 5000);
  };

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
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Have questions or want to get involved? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-[var(--color-background)] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CustomCard variant="floating" className="p-8 text-center group cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-xl text-[var(--color-primary)] mb-3">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 whitespace-pre-line mb-4">{info.content}</p>
                  <span className="text-[var(--color-primary)] font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                    {info.action} →
                  </span>
                </CustomCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-[var(--color-background-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <CustomCard variant="floating" className="p-10">
                <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-2">
                  Send us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-4xl">✓</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors resize-none"
                        placeholder="Your message here..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </CustomCard>
            </motion.div>

            {/* Map & Social */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <CustomCard variant="floating" className="overflow-hidden h-80">
                <div className="w-full h-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDBMNDAgME0wIDQwTDQwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNjI2NjAiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
                  <div className="text-center z-10">
                    <FiMapPin className="text-6xl text-[var(--color-primary)] mx-auto mb-4" />
                    <p className="text-[var(--color-primary)] font-semibold">
                      University of Arid Agriculture
                    </p>
                    <p className="text-[var(--color-text-muted)]">
                      Rawalpindi, Pakistan
                    </p>
                  </div>
                </div>
              </CustomCard>

              {/* Social Links */}
              <CustomCard variant="floating" className="p-8">
                <h3 className="font-bold text-xl text-[var(--color-primary)] mb-6">
                  Follow Us on Social Media
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 border border-[var(--color-border)] bg-[var(--color-background-alt)] flex items-center justify-center text-[var(--color-primary)] text-xl hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </CustomCard>

              {/* Office Hours */}
              <CustomCard variant="floating" className="p-8">
                <h3 className="font-bold text-xl text-[var(--color-primary)] mb-6">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-[var(--color-border)]">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-[var(--color-primary)]">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[var(--color-border)]">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-[var(--color-primary)]">
                      10:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-[var(--color-primary)]">
                      Closed
                    </span>
                  </div>
                </div>
              </CustomCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[var(--color-text-muted)]">
              Quick answers to common questions about IJT-UAF
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "How can I become a member of IJT-UAF?",
                a: "Simply fill out the registration form on our website. Our team will review your application and get back to you within 48 hours.",
              },
              {
                q: "Is membership free?",
                a: "Yes, membership is completely free for all registered students of the university.",
              },
              {
                q: "What activities does IJT-UAF organize?",
                a: "We organize leadership workshops, Islamic studies programs, career development sessions, community service events, and cultural activities throughout the year.",
              },
              {
                q: "Can I join if I'm not a Muslim?",
                a: "Yes, we welcome students from all backgrounds who share our values of character development, academic excellence, and community service.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CustomCard variant="floating" className="p-6">
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600">{faq.a}</p>
                </CustomCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
