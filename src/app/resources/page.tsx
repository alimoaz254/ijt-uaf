"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiBook,
  FiVideo,
  FiFileText,
  FiGlobe,
  FiLayers,
  FiAward,
  FiSearch,
  FiDownload,
  FiPlay,
  FiEye,
  FiClock,
} from "react-icons/fi";
import { CustomCard } from "@/components/ui/CustomCard";

// Resource categories
const categories = [
  {
    id: "all",
    name: "All Resources",
    icon: <FiLayers />,
    count: 580,
  },
  {
    id: "books",
    name: "Books & Reading",
    icon: <FiBook />,
    count: 150,
  },
  {
    id: "videos",
    name: "Video Library",
    icon: <FiVideo />,
    count: 85,
  },
  {
    id: "courses",
    name: "Online Courses",
    icon: <FiAward />,
    count: 42,
  },
  {
    id: "documents",
    name: "Study Materials",
    icon: <FiFileText />,
    count: 200,
  },
  {
    id: "career",
    name: "Career Resources",
    icon: <FiGlobe />,
    count: 75,
  },
  {
    id: "islamic",
    name: "Islamic Studies",
    icon: <FiBook />,
    count: 28,
  },
];

// Sample resources
const resources = [
  {
    id: 1,
    title: "Leadership Excellence: A Comprehensive Guide",
    description: "Master the art of leadership with practical strategies and real-world examples.",
    type: "pdf",
    category: "books",
    author: "Dr. Muhammad Iqbal",
    thumbnail: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=500&fit=crop",
    downloadCount: 1250,
    duration: "250 pages",
  },
  {
    id: 2,
    title: "Islamic Ethics in Modern Workplace",
    description: "Learn how to apply Islamic principles in your professional life.",
    type: "video",
    category: "videos",
    author: "Sheikh Ahmed",
    thumbnail: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&h=250&fit=crop",
    downloadCount: 890,
    duration: "45 min",
  },
  {
    id: 3,
    title: "Communication Skills Masterclass",
    description: "Develop effective communication skills for personal and professional success.",
    type: "course",
    category: "courses",
    author: "Prof. Sarah Khan",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
    downloadCount: 2100,
    duration: "8 weeks",
  },
  {
    id: 4,
    title: "Resume Writing Guide 2024",
    description: "Create a standout resume that gets you noticed by employers.",
    type: "pdf",
    category: "career",
    author: "Career Team",
    thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop",
    downloadCount: 3500,
    duration: "25 pages",
  },
  {
    id: 5,
    title: "Understanding the Quran: Tafsir Series",
    description: "Deep dive into Quranic teachings and their practical applications.",
    type: "video",
    category: "islamic",
    author: "Dr. Yasir Qadhi",
    thumbnail: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=400&h=250&fit=crop",
    downloadCount: 4200,
    duration: "12 hours",
  },
  {
    id: 6,
    title: "Time Management for Students",
    description: "Balance your academic, spiritual, and personal life effectively.",
    type: "pdf",
    category: "documents",
    author: "Student Success Team",
    thumbnail: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=500&fit=crop",
    downloadCount: 1800,
    duration: "40 pages",
  },
  {
    id: 7,
    title: "Public Speaking Confidence",
    description: "Overcome stage fright and deliver impactful presentations.",
    type: "video",
    category: "videos",
    author: "Toastmasters Club",
    thumbnail: "https://images.unsplash.com/photo-1544531696-285f0fcc4754?w=400&h=250&fit=crop",
    downloadCount: 1560,
    duration: "60 min",
  },
  {
    id: 8,
    title: "Digital Marketing Fundamentals",
    description: "Learn the basics of digital marketing and social media strategy.",
    type: "course",
    category: "courses",
    author: "Marketing Institute",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    downloadCount: 2800,
    duration: "6 weeks",
  },
  {
    id: 9,
    title: "Hadith Studies: Selected Topics",
    description: "Explore important Hadith and their relevance in daily life.",
    type: "pdf",
    category: "islamic",
    author: "Ustadh Abdullah",
    thumbnail: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&h=500&fit=crop",
    downloadCount: 2200,
    duration: "180 pages",
  },
];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      selectedCategory === "all" || resource.category === selectedCategory;
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FiFileText />;
      case "video":
        return <FiVideo />;
      case "course":
        return <FiAward />;
      default:
        return <FiFileText />;
    }
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary)] to-[var(--color-secondary)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">
              Capacity Building
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
              Learning Resources
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Access our comprehensive collection of learning materials designed
              to empower your journey to excellence.
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search for resources, courses, books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-4 rounded-full bg-white text-[var(--color-primary)] placeholder-gray-400 shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-[var(--color-background)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? "bg-[var(--color-primary)] text-white shadow-lg"
                    : "bg-[var(--color-background-alt)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[var(--color-primary)]">
              {categories.find((c) => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-[var(--color-text-muted)]">
              {filteredResources.length} resources found
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CustomCard variant="floating" className="overflow-hidden">
                  {/* Thumbnail */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={resource.thumbnail}
                      alt={resource.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-[var(--color-primary)] text-xl shadow-lg">
                        {getTypeIcon(resource.type)}
                      </span>
                    </div>
                    {resource.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                          <FiPlay className="text-[var(--color-primary)] text-2xl ml-1" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-[var(--color-primary)] mb-2 line-clamp-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {resource.description}
                    </p>

                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <FiClock />
                        {resource.duration}
                      </span>
                      <span>{resource.author}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                      <span className="text-sm text-[var(--color-text-muted)]">
                        {resource.downloadCount.toLocaleString()} downloads
                      </span>
                      <div className="flex gap-2">
                        <button className="p-2 rounded-lg bg-[var(--color-background-alt)] hover:bg-[var(--color-primary)] hover:text-white transition-all">
                          <FiEye />
                        </button>
                        <button className="p-2 rounded-lg bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-all">
                          <FiDownload />
                        </button>
                      </div>
                    </div>
                  </div>
                </CustomCard>
              </motion.div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--color-background-alt)] flex items-center justify-center">
                <FiSearch className="text-4xl text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">
                No resources found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Want More Resources?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Become a member to access exclusive content, courses, and mentorship programs.
            </p>
            <a
              href="/register"
              className="inline-block px-10 py-4 rounded-full bg-white text-[var(--color-primary)] font-bold text-lg shadow-2xl hover:scale-105 transition-all"
            >
              Join IJT-UAF
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
