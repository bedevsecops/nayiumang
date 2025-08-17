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
  type InsertContactSubmission
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createVolunteer(volunteer: InsertVolunteer): Promise<Volunteer>;
  getVolunteers(): Promise<Volunteer[]>;
  
  createDonation(donation: InsertDonation): Promise<Donation>;
  getDonations(): Promise<Donation[]>;
  getTotalDonations(): Promise<number>;
  
  createEventRegistration(registration: InsertEventRegistration): Promise<EventRegistration>;
  getEventRegistrations(eventId?: string): Promise<EventRegistration[]>;
  
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private volunteers: Map<string, Volunteer>;
  private donations: Map<string, Donation>;
  private eventRegistrations: Map<string, EventRegistration>;
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.users = new Map();
    this.volunteers = new Map();
    this.donations = new Map();
    this.eventRegistrations = new Map();
    this.contactSubmissions = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createVolunteer(insertVolunteer: InsertVolunteer): Promise<Volunteer> {
    const id = randomUUID();
    const volunteer: Volunteer = { 
      ...insertVolunteer, 
      id,
      createdAt: new Date()
    };
    this.volunteers.set(id, volunteer);
    return volunteer;
  }

  async getVolunteers(): Promise<Volunteer[]> {
    return Array.from(this.volunteers.values());
  }

  async createDonation(insertDonation: InsertDonation): Promise<Donation> {
    const id = randomUUID();
    const donation: Donation = { 
      ...insertDonation, 
      id,
      createdAt: new Date()
    };
    this.donations.set(id, donation);
    return donation;
  }

  async getDonations(): Promise<Donation[]> {
    return Array.from(this.donations.values());
  }

  async getTotalDonations(): Promise<number> {
    const donations = await this.getDonations();
    return donations.reduce((total, donation) => total + donation.amount, 0);
  }

  async createEventRegistration(insertRegistration: InsertEventRegistration): Promise<EventRegistration> {
    const id = randomUUID();
    const registration: EventRegistration = { 
      ...insertRegistration, 
      id,
      createdAt: new Date()
    };
    this.eventRegistrations.set(id, registration);
    return registration;
  }

  async getEventRegistrations(eventId?: string): Promise<EventRegistration[]> {
    const registrations = Array.from(this.eventRegistrations.values());
    if (eventId) {
      return registrations.filter(reg => reg.eventId === eventId);
    }
    return registrations;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = { 
      ...insertSubmission, 
      id,
      createdAt: new Date()
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }
}

export const storage = new MemStorage();
