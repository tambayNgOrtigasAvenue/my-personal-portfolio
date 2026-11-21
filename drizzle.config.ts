import { defineConfig } from "drizzle-kit";

// Migrations need the direct Neon URL. The pooled DATABASE_URL is for the app.
const databaseUrl = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("Set DATABASE_URL_UNPOOLED before running Drizzle Kit.");
}

export default defineConfig({
  schema: "./database/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
});