import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertVolunteerSchema,
  insertDonationSchema,
  insertEventRegistrationSchema,
  insertContactSubmissionSchema,
  insertAdminUserSchema
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

  app.delete("/api/volunteers/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteVolunteer(id);
      res.json({ message: "Volunteer deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete volunteer" });
    }
  });

  app.put("/api/volunteers/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
      const updatedVolunteer = await storage.updateVolunteer(id, updates);
      res.json(updatedVolunteer);
    } catch (error) {
      res.status(500).json({ message: "Failed to update volunteer" });
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

  app.delete("/api/donations/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteDonation(id);
      res.json({ message: "Donation deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete donation" });
    }
  });

  app.put("/api/donations/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
      const updatedDonation = await storage.updateDonation(id, updates);
      res.json(updatedDonation);
    } catch (error) {
      res.status(500).json({ message: "Failed to update donation" });
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

  // Admin user management
  app.post("/api/admin/register", async (req, res) => {
    try {
      const adminUser = insertAdminUserSchema.parse(req.body);
      
      // Check if username or email already exists
      const existingUsername = await storage.getAdminUserByUsername(adminUser.username);
      if (existingUsername) {
        return res.status(400).json({ message: "Username already exists" });
      }
      
      const existingEmail = await storage.getAdminUserByEmail(adminUser.email);
      if (existingEmail) {
        return res.status(400).json({ message: "Email already exists" });
      }
      
      const createdAdminUser = await storage.createAdminUser(adminUser);
      res.json(createdAdminUser);
    } catch (error) {
      res.status(400).json({ message: "Invalid admin user data" });
    }
  });

  app.get("/api/admin/users", async (req, res) => {
    try {
      const adminUsers = await storage.getAdminUsers();
      res.json(adminUsers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch admin users" });
    }
  });

  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
      }
      
      const adminUser = await storage.getAdminUserByUsername(username);
      if (!adminUser) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      // In a real application, you would hash and compare passwords
      if (adminUser.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      res.json({ 
        message: "Login successful",
        user: {
          id: adminUser.id,
          username: adminUser.username,
          email: adminUser.email,
          fullName: adminUser.fullName,
          role: adminUser.role,
          status: adminUser.status
        }
      });
    } catch (error) {
      res.status(500).json({ message: "Login failed" });
    }
  });

  app.delete("/api/admin/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteAdminUser(id);
      res.json({ message: "Admin user deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete admin user" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
