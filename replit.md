# NGO Website - Hope Foundation

## Overview

This is a comprehensive NGO website for Hope Foundation, built with modern web technologies to provide a professional, trustworthy, and inspiring platform for community engagement. The website focuses on showcasing the organization's impact in education, healthcare, and environmental conservation while providing clear pathways for donations, volunteer registration, and community involvement.

The application serves as a complete digital presence for the NGO, featuring program showcases, impact statistics, event management, volunteer coordination, and secure donation processing. It's designed to build trust through transparency and encourage meaningful community participation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight, hook-based client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, professional design
- **UI Components**: Radix UI primitives for accessible, customizable interface components
- **Animations**: Framer Motion for smooth, engaging user interactions and page transitions
- **State Management**: TanStack Query for server state management and data fetching
- **Forms**: React Hook Form with Zod validation for robust form handling and validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **API Design**: RESTful API architecture with clear endpoint structure
- **Data Storage**: In-memory storage implementation (MemStorage) with interface for future database integration
- **Schema Validation**: Zod schemas for consistent data validation across client and server
- **Error Handling**: Centralized error handling with proper HTTP status codes and error responses

### Development Architecture
- **Build System**: Vite for fast development and optimized production builds
- **Module System**: ES Modules throughout the application
- **Development Server**: Vite dev server with HMR and Express API integration
- **TypeScript Configuration**: Strict TypeScript setup with path aliases for clean imports

### Data Models
The application manages four core entities:
- **Volunteers**: Registration and management of volunteer applications with interests and availability
- **Donations**: Secure donation processing with support for one-time and recurring contributions
- **Event Registrations**: Event attendance tracking and participant management
- **Contact Submissions**: General inquiry and contact form submissions

### Component Structure
- **Layout Components**: Responsive navigation and footer with mobile-first design
- **Page Components**: Dedicated pages for home, about, programs, get-involved, donate, events, and gallery
- **Form Components**: Specialized forms for volunteer registration and donation processing
- **UI Components**: Reusable shadcn/ui components with consistent theming and accessibility

### Security Considerations
- **Input Validation**: Comprehensive Zod schema validation on both client and server
- **CORS**: Configured for secure cross-origin requests
- **Form Security**: Protection against common form vulnerabilities
- **Error Handling**: Secure error messages that don't expose sensitive information

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form for component architecture and form management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tools**: Vite for development and build processes, TypeScript for type safety
- **Server Framework**: Express.js for API server implementation

### Database and ORM
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle ORM with Drizzle Kit for schema management and migrations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Validation**: Drizzle-Zod for schema-to-validation integration

### UI and Design System
- **Component Library**: shadcn/ui with Radix UI primitives for accessible components
- **Styling**: Tailwind CSS for utility-first styling approach
- **Icons**: Lucide React for consistent iconography
- **Animations**: Framer Motion for smooth animations and transitions

### Data Management
- **Server State**: TanStack React Query for caching, synchronization, and server state management
- **Form Validation**: Zod for runtime type checking and validation
- **Date Handling**: date-fns for date manipulation and formatting

### Development Tools
- **Package Manager**: npm with package-lock.json for dependency locking
- **Development Environment**: tsx for TypeScript execution, esbuild for production builds
- **Code Quality**: TypeScript strict mode for type safety
- **Build Optimization**: Vite plugins for runtime error handling and development enhancements

### Potential Future Integrations
- **Payment Processing**: PayPal, Stripe, or similar for secure donation handling
- **Email Services**: For automated confirmations and notifications
- **Analytics**: For tracking user engagement and donation metrics
- **Content Management**: For dynamic content updates and blog functionality