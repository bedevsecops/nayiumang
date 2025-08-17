import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertVolunteerSchema,
  insertDonationSchema,
  insertEventRegistrationSchema,
  insertContactSubmissionSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Volunteer registration
  app.post("/api/volunteers", async (req, res) => {
    try {
      const volunteer = insertVolunteerSchema.parse(req.body);
      const createdVolunteer = await storage.createVolunteer(volunteer);
      res.json(createdVolunteer);
    } catch (error) {
      res.status(400).json({ message: "Invalid volunteer data" });
    }
  });

  app.get("/api/volunteers", async (req, res) => {
    try {
      const volunteers = await storage.getVolunteers();
      res.json(volunteers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch volunteers" });
    }
  });

  // Donations
  app.post("/api/donations", async (req, res) => {
    try {
      const donation = insertDonationSchema.parse(req.body);
      const createdDonation = await storage.createDonation(donation);
      res.json(createdDonation);
    } catch (error) {
      res.status(400).json({ message: "Invalid donation data" });
    }
  });

  app.get("/api/donations", async (req, res) => {
    try {
      const donations = await storage.getDonations();
      res.json(donations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch donations" });
    }
  });

  app.get("/api/donations/total", async (req, res) => {
    try {
      const total = await storage.getTotalDonations();
      res.json({ total });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch donation total" });
    }
  });

  // Event registrations
  app.post("/api/event-registrations", async (req, res) => {
    try {
      const registration = insertEventRegistrationSchema.parse(req.body);
      const createdRegistration = await storage.createEventRegistration(registration);
      res.json(createdRegistration);
    } catch (error) {
      res.status(400).json({ message: "Invalid registration data" });
    }
  });

  app.get("/api/event-registrations", async (req, res) => {
    try {
      const eventId = req.query.eventId as string | undefined;
      const registrations = await storage.getEventRegistrations(eventId);
      res.json(registrations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch registrations" });
    }
  });

  // Contact submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const submission = insertContactSubmissionSchema.parse(req.body);
      const createdSubmission = await storage.createContactSubmission(submission);
      res.json(createdSubmission);
    } catch (error) {
      res.status(400).json({ message: "Invalid contact data" });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contact submissions" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
