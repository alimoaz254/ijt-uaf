"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiFilter, FiMaximize2, FiX } from "react-icons/fi";
import { GalleryCard } from "@/components/ui/CustomCard";

// Gallery categories
const categories = ["All", "Events", "Workshops", "Islamic Programs", "Community Service", "Sports", "Cultural"];

// Sample gallery images
const galleryItems = [
  {
    id: 1,
    title: "Annual Leadership Summit 2024",
    description: "Three-day intensive leadership training program",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&h=600&fit=crop",
    category: "Events",
  },
  {
    id: 2,
    title: "Islamic Studies Workshop",
    description: "Weekly spiritual development sessions",
    image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=800&h=600&fit=crop",
    category: "Islamic Programs",
  },
  {
    id: 3,
    title: "Community Cleanup Drive",
    description: "Students participating in environmental service",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop",
    category: "Community Service",
  },
  {
    id: 4,
    title: "Career Development Seminar",
    description: "Professional skills workshop with industry experts",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
    category: "Workshops",
  },
  {
    id: 5,
    title: "Inter-University Football Tournament",
    description: "Annual sports competition",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop",
    category: "Sports",
  },
  {
    id: 6,
    title: "Cultural Night 2024",
    description: "Celebrating diversity through arts and music",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    category: "Cultural",
  },
  {
    id: 7,
    title: "Quran Recitation Competition",
    description: "Annual religious event",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&h=600&fit=crop",
    category: "Islamic Programs",
  },
  {
    id: 8,
    title: "Team Building Exercise",
    description: "Outdoor activities for bonding",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop",
    category: "Events",
  },
  {
    id: 9,
    title: "Public Speaking Workshop",
    description: "Developing communication skills",
    image: "https://images.unsplash.com/photo-1544531696-285f0fcc4754?w=800&h=600&fit=crop",
    category: "Workshops",
  },
  {
    id: 10,
    title: "Charity Food Drive",
    description: "Distributing meals to the needy",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
    category: "Community Service",
  },
  {
    id: 11,
    title: "Debate Competition",
    description: "Intellectual discourse on current affairs",
    image: "https://images.unsplash.com/photo-1577993367239-8b8918dd3ad7?w=800&h=600&fit=crop",
    category: "Events",
  },
  {
    id: 12,
    title: "Art Exhibition",
    description: "Student artwork showcase",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop",
    category: "Cultural",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

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
              Photo Gallery
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
              Our Moments
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Capturing memories from our events, programs, and activities that
              shape the IJT-UAF experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-[var(--color-background)] sticky top-20 z-30 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <FiFilter className="text-[var(--color-primary)] flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-[var(--color-primary)] text-white shadow-lg"
                    : "bg-[var(--color-background-alt)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <GalleryCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  delay={index * 0.05}
                />
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <FiX className="text-white text-2xl" />
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-2xl font-bold mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-white/70">{selectedImage.description}</p>
              <span className="inline-block mt-2 px-4 py-1 rounded-full bg-white/20 text-white text-sm">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Load More */}
      <section className="py-12 bg-[var(--color-background-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button className="px-10 py-4 rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-all">
            Load More Photos
          </button>
        </div>
      </section>
    </main>
  );
}
