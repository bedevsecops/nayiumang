import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRegistrationSchema } from "@shared/schema";
import { sendConfirmationSMS } from "./services/sms";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Registration endpoint
  app.post("/api/registrations", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertRegistrationSchema.parse(req.body);
      
      // Save to database
      const registration = await storage.createRegistration(validatedData);
      
      // Send SMS confirmation
      try {
        await sendConfirmationSMS(registration.mobile, registration.fullName);
      } catch (smsError) {
        console.error("SMS sending failed:", smsError);
        // Don't fail the registration if SMS fails
      }
      
      res.status(201).json({
        message: "Registration successful",
        id: registration.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          message: "Validation failed",
          errors: error.errors
        });
      } else {
        console.error("Registration error:", error);
        res.status(500).json({
          message: "Registration failed. Please try again."
        });
      }
    }
  });

  // Get all registrations (for admin purposes)
  app.get("/api/registrations", async (req, res) => {
    try {
      const registrations = await storage.getRegistrations();
      res.json(registrations);
    } catch (error) {
      console.error("Error fetching registrations:", error);
      res.status(500).json({
        message: "Failed to fetch registrations"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
