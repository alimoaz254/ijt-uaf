"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiTag, FiSearch, FiArrowRight } from "react-icons/fi";
import { NewsCard } from "@/components/ui/CustomCard";

const categories = ["All", "Events", "Programs", "Education", "Community", "Career", "Achievements"];

const newsItems = [
  {
    id: 1,
    title: "Annual Leadership Summit 2024 Successfully Concluded",
    excerpt: "Our three-day leadership summit brought together over 500 students from across the university for workshops, seminars, and networking opportunities. The event featured renowned speakers and interactive sessions.",
    content: "The Annual Leadership Summit 2024 was a resounding success, bringing together students, faculty, and industry leaders for an unforgettable experience of learning and growth...",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&h=500&fit=crop",
    date: "Dec 15, 2024",
    category: "Events",
    author: "IJT-UAF Media Team",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "New Capacity Building Program Launched",
    excerpt: "We're excited to announce our new comprehensive program focusing on professional skills development, including communication, leadership, and technical training.",
    content: "IJT-UAF is proud to launch our most comprehensive capacity building program to date. This initiative aims to equip students with the skills needed for today's competitive job market...",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop",
    date: "Dec 10, 2024",
    category: "Programs",
    author: "Academic Affairs",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Islamic Studies Workshop Series Begins",
    excerpt: "Join us for our weekly Islamic studies workshop covering topics from spirituality to practical application of Islamic values in modern life.",
    content: "Our new Islamic Studies Workshop Series aims to deepen students' understanding of their faith and its application in contemporary life. Led by renowned scholars...",
    image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=800&h=500&fit=crop",
    date: "Dec 5, 2024",
    category: "Education",
    author: "Spiritual Development",
    readTime: "3 min read",
  },
  {
    id: 4,
    title: "Community Service Initiative - Clean Pakistan",
    excerpt: "Our members participated in a massive community cleanup drive, demonstrating our commitment to social responsibility and environmental stewardship.",
    content: "Over 200 IJT-UAF members came together for the Clean Pakistan initiative, collecting over 500kg of waste and raising awareness about environmental responsibility...",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=500&fit=crop",
    date: "Nov 28, 2024",
    category: "Community",
    author: "Community Outreach",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Career Fair 2024 - Connecting Students with Opportunities",
    excerpt: "Over 50 companies participated in our annual career fair, providing students with internship and job opportunities across various industries.",
    content: "The Career Fair 2024 was our biggest yet, with representatives from leading companies in technology, finance, healthcare, and more. Students had the opportunity...",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop",
    date: "Nov 20, 2024",
    category: "Career",
    author: "Career Services",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "Student Team Wins National Debate Competition",
    excerpt: "Our debate team secured first place at the National University Debate Championship, bringing pride to IJT-UAF and the university.",
    content: "Congratulations to our debate team for their outstanding performance at the National University Debate Championship. Their victory is a testament to the hard work...",
    image: "https://images.unsplash.com/photo-1577993367239-8b8918dd3ad7?w=800&h=500&fit=crop",
    date: "Nov 15, 2024",
    category: "Achievements",
    author: "Student Activities",
    readTime: "3 min read",
  },
  {
    id: 7,
    title: "Ramadan Iftar Gathering Brings Community Together",
    excerpt: "Hundreds gathered for our annual Ramadan Iftar, fostering brotherhood and community spirit among students and faculty.",
    content: "Our annual Ramadan Iftar was a beautiful celebration of faith, community, and togetherness. The event provided an opportunity for students from diverse backgrounds...",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=500&fit=crop",
    date: "Mar 25, 2024",
    category: "Events",
    author: "IJT-UAF Events",
    readTime: "4 min read",
  },
  {
    id: 8,
    title: "New Partnership with Tech Companies Announced",
    excerpt: "IJT-UAF announces strategic partnerships with leading tech companies to provide internship opportunities and mentorship for students.",
    content: "We're thrilled to announce new partnerships with leading technology companies that will provide our members with valuable internship opportunities and mentorship...",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
    date: "Mar 18, 2024",
    category: "Career",
    author: "Partnerships Team",
    readTime: "5 min read",
  },
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNews, setSelectedNews] = useState<typeof newsItems[0] | null>(null);

  const filteredNews = newsItems.filter((news) => {
    const matchesCategory = selectedCategory === "All" || news.category === selectedCategory;
    const matchesSearch =
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Latest Updates
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
              News & Events
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Stay informed about our latest activities, achievements, and upcoming events.
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search news and events..."
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
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-[var(--color-primary)] text-white shadow-lg"
                    : "bg-[var(--color-background-alt)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
                }`}
              >
                <FiTag />
                <span>{category}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      {selectedCategory === "All" && !searchQuery && newsItems[0] && (
        <section className="py-12 bg-[var(--color-background-alt)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[3rem] overflow-hidden cursor-pointer group"
              onClick={() => setSelectedNews(newsItems[0])}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-auto">
                  <img
                    src={newsItems[0].image}
                    alt={newsItems[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-12 flex flex-col justify-center bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]">
                  <span className="px-4 py-1.5 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold text-sm w-fit mb-4">
                    Featured
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {newsItems[0].title}
                  </h2>
                  <p className="text-white/80 mb-6">{newsItems[0].excerpt}</p>
                  <div className="flex items-center gap-6 text-white/70 mb-6">
                    <span className="flex items-center gap-2">
                      <FiCalendar />
                      {newsItems[0].date}
                    </span>
                    <span>{newsItems[0].readTime}</span>
                  </div>
                  <span className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                    Read Full Story <FiArrowRight />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-12 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[var(--color-primary)]">
              {selectedCategory === "All" ? "All News" : selectedCategory}
            </h2>
            <span className="text-[var(--color-text-muted)]">
              {filteredNews.length} articles found
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.slice(1).map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <NewsCard
                  image={news.image}
                  title={news.title}
                  excerpt={news.excerpt}
                  date={news.date}
                  category={news.category}
                  delay={index * 0.1}
                />
              </motion.div>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--color-background-alt)] flex items-center justify-center">
                <FiSearch className="text-4xl text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">
                No news found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Never Miss an Update
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Subscribe to our newsletter and stay informed about all IJT-UAF activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white text-[var(--color-primary)] placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="px-8 py-4 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] font-bold hover:scale-105 transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Detail Modal */}
      {selectedNews && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 overflow-y-auto"
          onClick={() => setSelectedNews(null)}
        >
          <div className="min-h-screen flex items-start justify-center p-4 pt-20" onClick={(e) => e.stopPropagation()}>
            <div className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden">
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all"
              >
                <span className="text-2xl">×</span>
              </button>
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold text-sm">
                    {selectedNews.category}
                  </span>
                  <span className="text-gray-500 flex items-center gap-2">
                    <FiCalendar />
                    {selectedNews.date}
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-6">
                  {selectedNews.title}
                </h2>
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-600 mb-4">{selectedNews.excerpt}</p>
                  <p className="text-gray-700 leading-relaxed">{selectedNews.content}</p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </main>
  );
}
