import { pgTable, serial, varchar, text, timestamp, boolean, integer, pgEnum } from "drizzle-orm/pg-core";

// Enums
export const userRoleEnum = pgEnum("user_role", ["admin", "member", "guest"]);
export const resourceTypeEnum = pgEnum("resource_type", ["video", "pdf", "image", "link", "document"]);

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  university: varchar("university", { length: 255 }),
  department: varchar("department", { length: 255 }),
  semester: varchar("semester", { length: 50 }),
  profileImage: text("profile_image"),
  bio: text("bio"),
  role: userRoleEnum("role").default("guest"),
  isActive: boolean("is_active").default(true),
  emailVerified: boolean("email_verified").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Team positions/hierarchy
export const teamPositions = pgTable("team_positions", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  description: text("description"),
  level: integer("level").default(1),
  parentId: integer("parent_id"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Team members
export const teamMembers = pgTable("team_members", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  positionId: integer("position_id").references(() => teamPositions.id),
  joinDate: timestamp("join_date").defaultNow(),
  isActive: boolean("is_active").default(true),
  bio: text("bio"),
  socialLinks: text("social_links"),
  createdAt: timestamp("created_at").defaultNow(),
});

// News/Announcements
export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  featuredImage: text("featured_image"),
  category: varchar("category", { length: 100 }),
  tags: text("tags"),
  isPublished: boolean("is_published").default(true),
  isFeatured: boolean("is_featured").default(false),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Events
export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: text("description").notNull(),
  eventType: varchar("event_type", { length: 100 }),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date"),
  location: varchar("location", { length: 255 }),
  coverImage: text("cover_image"),
  galleryImages: text("gallery_images"),
  isPast: boolean("is_past").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Resource Categories
export const resourceCategories = pgTable("resource_categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  description: text("description"),
  icon: varchar("icon", { length: 50 }),
  sortOrder: integer("sort_order").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Learning Resources
export const resources = pgTable("resources", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  categoryId: integer("category_id").references(() => resourceCategories.id),
  type: resourceTypeEnum("type").notNull(),
  url: text("url"),
  filePath: text("file_path"),
  thumbnail: text("thumbnail"),
  duration: varchar("duration", { length: 50 }),
  author: varchar("author", { length: 100 }),
  tags: text("tags"),
  sortOrder: integer("sort_order").default(0),
  downloadCount: integer("download_count").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// User Progress/Bookmarks
export const userResources = pgTable("user_resources", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  resourceId: integer("resource_id").references(() => resources.id),
  isBookmarked: boolean("is_bookmarked").default(false),
  progress: integer("progress").default(0),
  lastAccessed: timestamp("last_accessed"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Contact Messages
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  subject: varchar("subject", { length: 255 }).notNull(),
  message: text("message").notNull(),
  isRead: boolean("is_read").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

// Gallery
export const gallery = pgTable("gallery", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }),
  description: text("description"),
  imageUrl: text("image_url").notNull(),
  eventId: integer("event_id").references(() => events.id),
  category: varchar("category", { length: 100 }),
  sortOrder: integer("sort_order").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Settings for theme customization
export const siteSettings = pgTable("site_settings", {
  id: serial("id").primaryKey(),
  key: varchar("key", { length: 100 }).notNull().unique(),
  value: text("value"),
  type: varchar("type", { length: 50 }).default("string"),
  updatedAt: timestamp("updated_at").defaultNow(),
});
