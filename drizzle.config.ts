import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./app/db/schema.ts",
  out: "./migrations",
  migrations: {
    table: "migrations",
    schema: "public",
  },
  dbCredentials: {
    url: process.env.DATABASE_URL || ''
  }
});
