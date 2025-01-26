import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";
import { FileType } from "~/model/media-file";
import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";

const id = varchar("id").primaryKey()

const createdAt = timestamp("created_at", { mode: "date" })
  .notNull()
  .defaultNow();

const updatedAt = timestamp("updated_at", { mode: "date" })
  .notNull()
  .defaultNow()
  .$onUpdate(() => new Date());

const userId = varchar("user_id")
  .notNull()
  .references(() => users.id, { onDelete: "cascade" });

// USERS
export const users = pgTable("users", {
  id,
  firstName: varchar("first_name").notNull(),
  lastName: varchar("last_name").notNull(),
  email: varchar("email").notNull(),
  positionDescription: varchar("position_description"),
  primaryContactEmail: varchar("primary_contact_email"),
  primaryContactPhone: varchar("primary_contact_phone"),
  createdAt,
  updatedAt,
});

// MEDIA FILES
export const mediaFiles = pgTable("media_files", {
  id,
  userId,
  title: varchar("title").notNull(),
  fileUrl: varchar("file_url").notNull(),
  fileType: varchar("file_type").notNull().$type<FileType>(),
  description: varchar("description"),
  createdAt,
  updatedAt,
});

// TRANSCRIPTIONS
export const transcriptions = pgTable("transcriptions", {
  id,
  userId,
  mediaFilesId: varchar("media_files_id")
    .notNull()
    .references(() => mediaFiles.id, { onDelete: "cascade" }),
  content: varchar("content").notNull(),
  createdAt,
  updatedAt,
});

// BLOG POSTS
export const blogPosts = pgTable("blog_posts", {
  id,
  userId,
  title: varchar("title").notNull(),
  content: varchar("content").notNull(),
  thumbNail: varchar("thumbnail"),
  platform: varchar("platform").notNull(),
  status: varchar("status").notNull(), // draft, published, scheduled
  createdAt,
  updatedAt,
});

// SOCIAL MEDIA ACCOUNTS
export const socialMediaAccounts = pgTable("social_media_accounts", {
  id,
  userId,
  platform: varchar("platform").notNull(),
  username: varchar("username").notNull(),
  createdAt,
  updatedAt,
});

// SCHEDULED POSTS
export const scheduledPosts = pgTable("scheduled_posts", {
  id,
  userId,
  platforms: varchar("platforms").notNull(),
  blogPostId: varchar("blog_post_id")
    .notNull()
    .references(() => blogPosts.id, { onDelete: "cascade" }),
  scheduledAt: timestamp("scheduled_at").notNull(),
  createdAt,
  updatedAt,
});

// POST ANALYTICS
export const postAnalytics = pgTable("post_analytics", {
  id,
  userId,
  blogPostId: varchar("blog_post_id")
    .notNull()
    .references(() => blogPosts.id, { onDelete: "cascade" }),
  views: serial("views").notNull(),
  likes: serial("likes").notNull(),
  shares: serial("shares").notNull(),
  createdAt,
  updatedAt,
});

export type DB = PostgresJsDatabase<{
  users: typeof users;
  mediaFiles: typeof mediaFiles;
  transcriptions: typeof transcriptions;
  blogPosts: typeof blogPosts;
  socialMediaAccounts: typeof socialMediaAccounts;
  scheduledPosts: typeof scheduledPosts;
  postAnalytics: typeof postAnalytics;
}>;
