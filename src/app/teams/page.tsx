"use client";

import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiTwitter, FiGlobe } from "react-icons/fi";
import { TeamCard } from "@/components/ui/CustomCard";

// Team hierarchy data
const executiveTeam = [
  {
    name: "Muhammad Ahmed",
    position: "President",
    bio: "Leading IJT-UAF with vision and dedication. Passionate about student development and Islamic values.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    email: "president@ijtuaf.org",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Fatima Khan",
    position: "Vice President",
    bio: "Dedicated to fostering unity and collaboration among all members. Expert in event management.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    email: "vp@ijtuaf.org",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Omar Hassan",
    position: "General Secretary",
    bio: "Managing organizational operations and ensuring smooth coordination across all departments.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    email: "sec@ijtuaf.org",
    social: { linkedin: "#" },
  },
  {
    name: "Ayesha Malik",
    position: "Treasurer",
    bio: "Overseeing financial matters with transparency and accountability. Committed to resource optimization.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    email: "treasurer@ijtuaf.org",
    social: { linkedin: "#" },
  },
];

const departmentHeads = [
  {
    name: "Bilal Sheikh",
    position: "Head - Academic Affairs",
    department: "Academic Affairs",
    bio: "Organizing workshops, seminars, and academic support programs for students.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Zainab Ali",
    position: "Head - Spiritual Development",
    department: "Spiritual Development",
    bio: "Leading Islamic studies programs and spiritual growth initiatives.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    name: "Usman Khan",
    position: "Head - Events & Activities",
    department: "Events & Activities",
    bio: "Creating memorable experiences through well-organized events and activities.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  },
  {
    name: "Hira Ahmed",
    position: "Head - Public Relations",
    department: "Public Relations",
    bio: "Building bridges between IJT-UAF and the wider community.",
    image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f31?w=400&h=400&fit=crop",
  },
  {
    name: "Kamran Ali",
    position: "Head - Capacity Building",
    department: "Capacity Building",
    bio: "Developing resources and programs for skill enhancement and career growth.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    name: "Sara Imran",
    position: "Head - Media & Design",
    department: "Media & Design",
    bio: "Creating compelling content and visual identity for the organization.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
  },
];

const advisoryBoard = [
  {
    name: "Dr. Muhammad Iqbal",
    position: "Faculty Advisor",
    bio: "Professor of Islamic Studies with 25+ years of experience guiding student organizations.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  },
  {
    name: "Prof. Ahmed Raza",
    position: "Senior Advisor",
    bio: "Former Dean of Students, providing strategic guidance and mentorship.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  },
];

export default function TeamsPage() {
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
              Our Leadership
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
              Meet the Team
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Dedicated individuals working together to build a brighter future
              for students through Islamic values and progressive leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Executive Committee */}
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
              Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mt-4 mb-4">
              Executive Committee
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              The core leadership team driving IJT-UAF's vision and mission forward.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-[2rem]">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-primary)]/90 z-10" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Floating position badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent)] flex items-center justify-center shadow-lg">
                        <span className="text-[var(--color-primary)] font-bold text-xl">★</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                      <h3 className="text-white font-bold text-xl mb-1">{member.name}</h3>
                      <p className="text-[var(--color-accent)] font-semibold text-sm mb-3">
                        {member.position}
                      </p>
                      <p className="text-white/80 text-sm line-clamp-2 mb-4">
                        {member.bio}
                      </p>
                      
                      {/* Social links */}
                      <div className="flex gap-3">
                        <a
                          href={member.email}
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all"
                        >
                          <FiMail />
                        </a>
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all"
                          >
                            <FiLinkedin />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all"
                          >
                            <FiTwitter />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Heads */}
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
              Departments
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mt-4 mb-4">
              Department Heads
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Leading various departments to ensure comprehensive student development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departmentHeads.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TeamCard
                  image={member.image}
                  name={member.name}
                  position={member.position}
                  bio={member.bio}
                  delay={index * 0.1}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
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
              Guidance
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mt-4 mb-4">
              Advisory Board
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Experienced mentors providing strategic guidance and support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisoryBoard.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-6 bg-white rounded-3xl p-6 shadow-lg border border-[var(--color-border)]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-2xl object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-xl text-[var(--color-primary)]">
                      {member.name}
                    </h3>
                    <p className="text-[var(--color-secondary)] font-semibold mb-2">
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              We're always looking for passionate individuals to contribute to our mission.
            </p>
            <a
              href="/register"
              className="inline-block px-10 py-4 rounded-full bg-white text-[var(--color-primary)] font-bold text-lg shadow-2xl hover:scale-105 transition-all"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
