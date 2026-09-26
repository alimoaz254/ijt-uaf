"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CustomCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "gradient" | "glass" | "floating";
  hoverEffect?: boolean;
  delay?: number;
}

export function CustomCard({
  children,
  className = "",
  variant = "default",
  hoverEffect = true,
  delay = 0,
}: CustomCardProps) {
  const baseStyles = "relative overflow-hidden academic-card";

  const variantStyles = {
    default: "bg-white border border-[var(--color-border)]",
    gradient: "bg-[var(--color-primary)] text-white",
    glass: "bg-white border border-[var(--color-border)]",
    floating: "bg-white border border-[var(--color-border)]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={
        hoverEffect
          ? {
              y: -3,
              transition: { duration: 0.2 },
            }
          : {}
      }
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Team Member Card with unique shape
export function TeamCard({
  image,
  name,
  position,
  bio,
  delay = 0,
}: {
  image: string;
  name: string;
  position: string;
  bio: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative"
    >
      <div className="academic-card overflow-hidden border border-[var(--color-border)] bg-white">
        <img
          src={image}
          alt={name}
          className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <div className="p-5">
          <h3 className="font-semibold text-lg text-[var(--color-primary)] mb-1">{name}</h3>
          <p className="text-[var(--color-primary)] text-sm font-medium mb-3">{position}</p>
          <p className="text-[var(--color-text-muted)] text-sm line-clamp-3">{bio}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Resource Card with icon
export function ResourceCard({
  icon,
  title,
  description,
  count,
  delay = 0,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  count: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -3 }}
      className="relative group cursor-pointer"
    >
      <div className="academic-card bg-white p-6 border border-[var(--color-border)] transition-colors duration-200">
        {/* Icon container */}
        <div className="w-12 h-12 bg-[var(--color-primary)] flex items-center justify-center mb-5">
          <div className="text-white text-2xl">{icon}</div>
        </div>

        <h3 className="font-bold text-xl text-[var(--color-primary)] mb-3">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-[var(--color-text-muted)]">
            {count} Resources
          </span>
          <span className="text-[var(--color-primary)] font-semibold group-hover:translate-x-2 transition-transform">
            Explore →
          </span>
        </div>

      </div>
    </motion.div>
  );
}

// News/Event Card
export function NewsCard({
  image,
  title,
  excerpt,
  date,
  category,
  delay = 0,
}: {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div className="academic-card bg-white overflow-hidden border border-[var(--color-border)] transition-colors duration-200">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="px-4 py-1.5 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold text-sm">
              {category}
            </span>
          </div>
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <span className="text-sm font-medium text-[var(--color-primary)]">{date}</span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">{excerpt}</p>
          <button className="text-[var(--color-primary)] font-semibold hover:text-[var(--color-accent)] transition-colors">
            Read More →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// Gallery Image Card
export function GalleryCard({
  image,
  title,
  description,
  delay = 0,
}: {
  image: string;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden cursor-pointer border border-[var(--color-border)]"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/90 via-[var(--color-primary)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
