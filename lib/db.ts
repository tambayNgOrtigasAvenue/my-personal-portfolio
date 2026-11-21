import { neon } from "@neondatabase/serverless";
import { drizzle, type NeonHttpDatabase } from "drizzle-orm/neon-http";
import * as schema from "@/database/schema";

let database: NeonHttpDatabase<typeof schema> | undefined;

// Serverless driver talks to Neon over HTTP, which fits a Next.js route handler.
export function getDb() {
  if (database) {
    return database;
  }

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set.");
  }

  database = drizzle(neon(databaseUrl), { schema });
  return database;
}
