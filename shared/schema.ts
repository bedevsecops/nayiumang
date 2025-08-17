import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const volunteers = pgTable("volunteers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  interests: jsonb("interests").$type<string[]>().notNull(),
  availability: text("availability").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const donations = pgTable("donations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  amount: integer("amount").notNull(), // Amount in cents
  donationType: text("donation_type").notNull(), // "one-time" | "monthly"
  designation: text("designation").notNull(),
  paymentMethod: text("payment_method").notNull(),
  donorEmail: text("donor_email"),
  donorName: text("donor_name"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const eventRegistrations = pgTable("event_registrations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  eventId: text("event_id").notNull(),
  attendeeName: text("attendee_name").notNull(),
  attendeeEmail: text("attendee_email").notNull(),
  attendeePhone: text("attendee_phone"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertVolunteerSchema = createInsertSchema(volunteers).omit({
  id: true,
  createdAt: true,
});

export const insertDonationSchema = createInsertSchema(donations).omit({
  id: true,
  createdAt: true,
});

export const insertEventRegistrationSchema = createInsertSchema(eventRegistrations).omit({
  id: true,
  createdAt: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
});

export type InsertVolunteer = z.infer<typeof insertVolunteerSchema>;
export type Volunteer = typeof volunteers.$inferSelect;
export type InsertDonation = z.infer<typeof insertDonationSchema>;
export type Donation = typeof donations.$inferSelect;
export type InsertEventRegistration = z.infer<typeof insertEventRegistrationSchema>;
export type EventRegistration = typeof eventRegistrations.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const adminUsers = pgTable("admin_users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  fullName: text("full_name").notNull(),
  role: text("role").notNull(), // super_admin, admin, moderator, viewer
  status: text("status").notNull().default("active"), // active, inactive
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertAdminUserSchema = createInsertSchema(adminUsers).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertAdminUser = z.infer<typeof insertAdminUserSchema>;
export type AdminUser = typeof adminUsers.$inferSelect;
