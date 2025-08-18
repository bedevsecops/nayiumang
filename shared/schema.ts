import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const registrations = pgTable("registrations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  mobile: varchar("mobile", { length: 15 }).notNull(),
  email: text("email").notNull(),
  interests: jsonb("interests").$type<string[]>().default([]),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertRegistrationSchema = createInsertSchema(registrations).omit({
  id: true,
  createdAt: true,
}).extend({
  fullName: z.string().min(2, "पूर्ण नाव किमान २ अक्षरांचे असावे"),
  mobile: z.string().regex(/^[0-9]{10}$/, "मोबाइल नंबर अचूक १० अंकांचा असावा"),
  email: z.string().email("कृपया वैध ईमेल पत्ता टाका"),
  interests: z.array(z.string()).optional().default([]),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;
export type Registration = typeof registrations.$inferSelect;
