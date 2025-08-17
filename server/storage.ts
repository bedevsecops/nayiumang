import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { 
  type User, 
  type InsertUser,
  type Volunteer,
  type InsertVolunteer,
  type Donation,
  type InsertDonation,
  type EventRegistration,
  type InsertEventRegistration,
  type ContactSubmission,
  type InsertContactSubmission,
  type AdminUser,
  type InsertAdminUser,
  volunteers,
  donations,
  eventRegistrations,
  contactSubmissions,
  users,
  adminUsers
} from "@shared/schema";
import { eq, desc, sql } from "drizzle-orm";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required");
}

const client = postgres(process.env.DATABASE_URL);
const db = drizzle(client);

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createVolunteer(volunteer: InsertVolunteer): Promise<Volunteer>;
  getVolunteers(): Promise<Volunteer[]>;
  deleteVolunteer(id: string): Promise<void>;
  updateVolunteer(id: string, updates: Partial<InsertVolunteer>): Promise<Volunteer>;
  
  createDonation(donation: InsertDonation): Promise<Donation>;
  getDonations(): Promise<Donation[]>;
  getTotalDonations(): Promise<number>;
  deleteDonation(id: string): Promise<void>;
  updateDonation(id: string, updates: Partial<InsertDonation>): Promise<Donation>;
  
  createEventRegistration(registration: InsertEventRegistration): Promise<EventRegistration>;
  getEventRegistrations(eventId?: string): Promise<EventRegistration[]>;
  
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;

  // Admin user management
  createAdminUser(adminUser: InsertAdminUser): Promise<AdminUser>;
  getAdminUsers(): Promise<AdminUser[]>;
  getAdminUserByUsername(username: string): Promise<AdminUser | undefined>;
  getAdminUserByEmail(email: string): Promise<AdminUser | undefined>;
  updateAdminUser(id: string, updates: Partial<InsertAdminUser>): Promise<AdminUser>;
  deleteAdminUser(id: string): Promise<void>;
}

export class PostgresStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createVolunteer(insertVolunteer: InsertVolunteer): Promise<Volunteer> {
    const result = await db.insert(volunteers).values(insertVolunteer).returning();
    return result[0];
  }

  async getVolunteers(): Promise<Volunteer[]> {
    return await db.select().from(volunteers).orderBy(desc(volunteers.createdAt));
  }

  async deleteVolunteer(id: string): Promise<void> {
    await db.delete(volunteers).where(eq(volunteers.id, id));
  }

  async updateVolunteer(id: string, updates: Partial<InsertVolunteer>): Promise<Volunteer> {
    const result = await db.update(volunteers).set(updates).where(eq(volunteers.id, id)).returning();
    return result[0];
  }

  async createDonation(insertDonation: InsertDonation): Promise<Donation> {
    const result = await db.insert(donations).values(insertDonation).returning();
    return result[0];
  }

  async getDonations(): Promise<Donation[]> {
    return await db.select().from(donations).orderBy(desc(donations.createdAt));
  }

  async getTotalDonations(): Promise<number> {
    const result = await db.select({ total: sql<number>`sum(amount)` }).from(donations);
    return result[0]?.total || 0;
  }

  async deleteDonation(id: string): Promise<void> {
    await db.delete(donations).where(eq(donations.id, id));
  }

  async updateDonation(id: string, updates: Partial<InsertDonation>): Promise<Donation> {
    const result = await db.update(donations).set(updates).where(eq(donations.id, id)).returning();
    return result[0];
  }

  async createEventRegistration(insertRegistration: InsertEventRegistration): Promise<EventRegistration> {
    const result = await db.insert(eventRegistrations).values(insertRegistration).returning();
    return result[0];
  }

  async getEventRegistrations(eventId?: string): Promise<EventRegistration[]> {
    if (eventId) {
      return await db.select().from(eventRegistrations).where(eq(eventRegistrations.eventId, eventId));
    }
    return await db.select().from(eventRegistrations).orderBy(desc(eventRegistrations.createdAt));
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const result = await db.insert(contactSubmissions).values(insertSubmission).returning();
    return result[0];
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
  }

  // Admin user management
  async createAdminUser(adminUser: InsertAdminUser): Promise<AdminUser> {
    const result = await db.insert(adminUsers).values(adminUser).returning();
    return result[0];
  }

  async getAdminUsers(): Promise<AdminUser[]> {
    return await db.select().from(adminUsers).orderBy(desc(adminUsers.createdAt));
  }

  async getAdminUserByUsername(username: string): Promise<AdminUser | undefined> {
    const result = await db.select().from(adminUsers).where(eq(adminUsers.username, username)).limit(1);
    return result[0];
  }

  async getAdminUserByEmail(email: string): Promise<AdminUser | undefined> {
    const result = await db.select().from(adminUsers).where(eq(adminUsers.email, email)).limit(1);
    return result[0];
  }

  async updateAdminUser(id: string, updates: Partial<InsertAdminUser>): Promise<AdminUser> {
    const result = await db.update(adminUsers).set(updates).where(eq(adminUsers.id, id)).returning();
    return result[0];
  }

  async deleteAdminUser(id: string): Promise<void> {
    await db.delete(adminUsers).where(eq(adminUsers.id, id));
  }
}

export const storage = new PostgresStorage();
