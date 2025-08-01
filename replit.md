# replit.md

## Overview

This is a fully responsive Indian restaurant website called "Aunty's Kitchen" built as a **frontend-only application** with React.js and pure CSS. The website features an authentic Indian theme with Hindi text, rupee pricing, custom animations, and traditional Indian hospitality elements. It includes a custom animated loader page, mobile-first responsive design, and smooth user interactions throughout. **No backend server required** - all functionality is client-side for easy deployment to any static hosting service.

## User Preferences

Preferred communication style: Simple, everyday language.
Website theme: Indian restaurant with authentic cultural elements
Pricing: Indian Rupees (₹) instead of dollars
Language: Bilingual (Hindi/English) with cultural touches
Animations: Smooth transitions and custom cursors
Design: Mobile-first responsive with gradient backgrounds

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with JSX (converted from TypeScript)
- **Styling**: Tailwind CSS with custom Indian restaurant theme colors and animations
- **Theme**: Indian restaurant "Aunty's Kitchen" with bilingual content
- **Custom Features**: 
  - Animated loader with rotating plate and steam effects
  - Custom cursors (namaste hands, chili pepper)
  - Gradient backgrounds with spice-inspired colors
  - Smooth transitions and hover effects
  - Mobile-first responsive design
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Status**: Removed - Now frontend-only application
- **Previous**: Express.js backend removed for simpler deployment
- **Current**: Pure static site with client-side form handling
- **Benefits**: Faster deployment, no server maintenance, works on any static host

### Data Layer
- **Status**: Removed for frontend-only architecture
- **Previous**: Drizzle ORM with PostgreSQL removed
- **Current**: Client-side form handling with local state management
- **Forms**: ReservationForm component with validation and success states
- **Future**: Can easily integrate with Formspree, Netlify Forms, or EmailJS

### Development Environment
- **Monorepo Structure**: Organized with separate client, server, and shared directories
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Error Handling**: Runtime error overlay for development
- **Logging**: Custom request logging middleware

### Authentication & Session Management
- **Status**: Not required for restaurant website
- **Previous**: Session management removed with backend
- **Current**: Static website with contact forms only
- **Future**: Can add authentication if needed for admin features

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver for Neon database
- **express**: Web framework for Node.js backend
- **react**: Frontend UI library
- **drizzle-orm**: TypeScript ORM for SQL databases

### UI & Styling Dependencies
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **shadcn/ui**: Pre-built component library built on Radix UI and Tailwind
- **class-variance-authority**: Utility for creating variant-based className APIs
- **clsx & tailwind-merge**: Conditional className utilities

### Development & Build Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution engine for Node.js
- **esbuild**: Fast JavaScript bundler for production
- **drizzle-kit**: CLI tool for Drizzle ORM migrations

### Data Management
- **@tanstack/react-query**: Server state management for React
- **react-hook-form**: Form library with validation
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **zod**: TypeScript-first schema validation
- **drizzle-zod**: Integration between Drizzle and Zod

### Additional Libraries
- **wouter**: Minimalistic routing for React
- **date-fns**: Modern JavaScript date utility library
- **lucide-react**: Icon library
- **nanoid**: URL-safe unique string ID generator
- **connect-pg-simple**: PostgreSQL session store for Express sessions