# Nayi Umang NGO Registration Platform

## Overview

This is a full-stack web application for Nayi Umang, a non-profit organization focused on community development through education, healthcare, housing, and environmental programs. The platform serves as a registration system for volunteers and provides information about the organization's mission and impact.

The application features a modern React frontend with a Node.js/Express backend, utilizing PostgreSQL for data persistence and Twilio for SMS notifications. It's built with a focus on user experience, accessibility, and responsive design suitable for NGO operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with pages for Home, About, Registration, and 404 handling
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom NGO-themed color variables (ngo-blue, ngo-green, ngo-orange, ngo-gray)
- **Forms**: React Hook Form with Zod validation for robust form handling and validation
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Database ORM**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Schema Validation**: Zod schemas shared between frontend and backend for consistent data validation
- **File Structure**: Clean separation with `/server` for backend code, `/client` for frontend, and `/shared` for common types and schemas

### Database Design
- **Primary Database**: PostgreSQL with Neon serverless connection
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Tables**:
  - `users`: Basic user authentication with username/password
  - `registrations`: Volunteer registration data including personal info, contact details, and interests
- **Data Types**: JSON fields for flexible data storage (interests array) with proper TypeScript typing

### Authentication & Session Management
- **Session Storage**: Connect-pg-simple for PostgreSQL-backed session storage
- **Session Configuration**: Secure session handling with database persistence
- **User Management**: Basic user creation and retrieval with username-based lookup

### API Design
- **RESTful Endpoints**: 
  - `POST /api/registrations` - Create new volunteer registration
  - `GET /api/registrations` - Retrieve all registrations (admin functionality)
- **Error Handling**: Comprehensive error handling with proper HTTP status codes and user-friendly messages
- **Request Logging**: Custom middleware for API request logging with response time tracking
- **Validation**: Server-side validation using shared Zod schemas

### Development & Build Process
- **Development Server**: Vite dev server with HMR and Express API proxy
- **Production Build**: Separate client (Vite) and server (esbuild) builds
- **TypeScript Configuration**: Shared tsconfig with path mapping for clean imports
- **Code Quality**: ESM modules throughout with proper TypeScript strict mode

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM**: Type-safe database operations with automatic migration support

### Communication Services
- **Twilio SMS**: SMS notification service for registration confirmations
  - Sends personalized confirmation messages to new volunteers
  - Configurable through environment variables (TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER)
  - Graceful fallback when SMS service is unavailable

### UI & Styling Libraries
- **Radix UI**: Accessible component primitives for complex UI interactions
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icons including social media icons

### Development Tools
- **Replit Integration**: Development environment optimization with runtime error overlay and cartographer plugin
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **Date-fns**: Date manipulation and formatting utilities

### Form & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation
- **Drizzle-Zod**: Automatic Zod schema generation from Drizzle database schemas

### Fonts & Assets
- **Google Fonts**: Inter font family for modern, readable typography
- **Custom Font Loading**: Optimized font loading with preconnect for performance