"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiCalendar, FiTag } from "react-icons/fi";
import { NewsCard } from "../ui/CustomCard";

const newsItems = [
  {
    id: 1,
    title: "Annual Leadership Summit 2024 Successfully Concluded",
    excerpt: "Our three-day leadership summit brought together over 500 students from across the university for workshops, seminars, and networking opportunities.",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&h=500&fit=crop",
    date: "Dec 15, 2024",
    category: "Events",
  },
  {
    id: 2,
    title: "New Capacity Building Program Launched",
    excerpt: "We're excited to announce our new comprehensive program focusing on professional skills development, including communication, leadership, and technical training.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop",
    date: "Dec 10, 2024",
    category: "Programs",
  },
  {
    id: 3,
    title: "Islamic Studies Workshop Series Begins",
    excerpt: "Join us for our weekly Islamic studies workshop covering topics from spirituality to practical application of Islamic values in modern life.",
    image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=800&h=500&fit=crop",
    date: "Dec 5, 2024",
    category: "Education",
  },
  {
    id: 4,
    title: "Community Service Initiative - Clean Pakistan",
    excerpt: "Our members participated in a massive community cleanup drive, demonstrating our commitment to social responsibility and environmental stewardship.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=500&fit=crop",
    date: "Nov 28, 2024",
    category: "Community",
  },
  {
    id: 5,
    title: "Career Fair 2024 - Connecting Students with Opportunities",
    excerpt: "Over 50 companies participated in our annual career fair, providing students with internship and job opportunities across various industries.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop",
    date: "Nov 20, 2024",
    category: "Career",
  },
];

export function NewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoplayRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section
      className="py-24 bg-[var(--color-background-alt)] relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)] to-[var(--color-background-alt)]" />

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
            Latest Updates
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mt-4 mb-6">
            News & Announcements
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Stay updated with our latest events, programs, and achievements
          </p>
        </motion.div>

        {/* Featured News Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-[3rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative h-[500px]">
                  <img
                    src={newsItems[currentIndex].image}
                    alt={newsItems[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/60 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-4 py-1.5 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold">
                        {newsItems[currentIndex].category}
                      </span>
                      <span className="flex items-center gap-2 text-white/80">
                        <FiCalendar />
                        {newsItems[currentIndex].date}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      {newsItems[currentIndex].title}
                    </h3>
                    <p className="text-lg text-white/80 max-w-2xl mb-6">
                      {newsItems[currentIndex].excerpt}
                    </p>
                    <button className="px-6 py-3 rounded-full bg-white text-[var(--color-primary)] font-semibold hover:bg-[var(--color-accent)] transition-colors">
                      Read Full Story
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all"
          >
            <FiChevronLeft className="text-xl text-[var(--color-primary)]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all"
          >
            <FiChevronRight className="text-xl text-[var(--color-primary)]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-[var(--color-primary)]" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.slice(0, 3).map((news, index) => (
            <NewsCard
              key={news.id}
              image={news.image}
              title={news.title}
              excerpt={news.excerpt}
              date={news.date}
              category={news.category}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-all">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}
