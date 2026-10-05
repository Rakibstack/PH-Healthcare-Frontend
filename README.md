# PH Healthcare — Frontend

A production-oriented healthcare platform frontend built with Next.js, TypeScript, and modern React ecosystem tools.

PH Healthcare provides a unified experience for patients, doctors, and administrators to manage healthcare services, appointments, consultations, payments, and doctor workflows through a secure and role-based system.

The frontend is designed to work with the PH Healthcare backend, which handles authentication, authorization, business rules, payments, appointments, and data consistency.

---

## Overview

PH Healthcare solves the problem of managing multiple healthcare workflows in a single platform.

Patients can discover verified doctors, book available appointment slots, complete payments, and access consultation and prescription-related services.

Doctors can manage their professional workflow, schedules, appointments, consultations, and prescriptions.

Administrators can manage users, verify doctors, and monitor platform operations.

The frontend focuses on providing a clean, responsive, and scalable SaaS-style user experience while keeping authentication, authorization, and business rules enforced by the backend.

---

## Key Features

### Authentication & Security

- Login and registration
- Email verification workflow
- Forgot and reset password
- Google authentication
- Cookie-based authentication
- Protected routes
- Role-based route protection
- Secure session handling
- Automatic authentication state management

### Patient Experience

- Browse verified doctors
- View doctor information
- Explore available schedules
- Book appointments
- Payment workflow integration
- View appointment history
- Access consultation-related information
- View digital prescriptions

### Doctor Experience

- Doctor application workflow
- Professional information submission
- Resume and supporting document upload
- Doctor dashboard
- Schedule management
- Appointment management
- Online consultation workflow
- Prescription management

### Admin Experience

- Admin dashboard
- User management
- Doctor application review
- Doctor verification workflow
- User status management
- Platform-level operational controls

### Frontend Architecture

- Reusable component architecture
- Feature-based UI organization
- Centralized API layer
- TanStack Query for server-state management
- TanStack Form for form state management
- Zod-based client-side validation
- Shared authentication hooks
- Route-level loading and error states
- Role-aware navigation
- Responsive design

---

## Tech Stack

### Core

- Next.js
- React
- TypeScript
- Tailwind CSS

### UI

- shadcn/ui
- Base UI
- Lucide React

### State & Data

- TanStack Query
- TanStack Form

### Validation

- Zod

### API

- ofetch
- REST API

### Development

- Biome
- Bun

---

## Architecture

The frontend follows a layered architecture to keep UI, data fetching, and API communication separated.

```text
UI Components
      ↓
Forms / Feature Components
      ↓
TanStack Query Hooks
      ↓
API Functions
      ↓
Centralized API Client
      ↓
PH Healthcare Backend
      ↓
Business Logic / Security
      ↓
PostgreSQL

This separation keeps the frontend maintainable and prevents business logic from being unnecessarily duplicated inside UI components.

Authentication Architecture

Authentication is handled through secure HTTP-only cookies managed by the backend.

The frontend does not store access or refresh tokens in localStorage.

User Login
    ↓
Frontend Login Form
    ↓
Login API
    ↓
Backend Authentication
    ↓
HTTP-only Cookies
    ↓
Current User API
    ↓
TanStack Query
    ↓
Application Auth State

Protected routes are handled through a combination of:

Next.js Proxy
Auth Guard
Role Guard
Backend authentication
Backend RBAC

The frontend guards improve user experience and navigation, while the backend remains the final security boundary.

Route Protection

The application separates routes into different categories.

Public Routes
├── /
├── /doctors
├── /about
└── ...

Auth Routes
├── /login
├── /register
├── /verify-email
├── /forgot-password
└── /reset-password

Protected Routes
├── /patient-dashboard
├── /doctor-dashboard
└── /admin-dashboard

Next.js Proxy performs lightweight request-level checks such as:

Detecting authentication cookie presence
Redirecting unauthenticated users
Redirecting authenticated users away from auth pages
Preserving the intended destination after login

Heavy authentication logic, permissions, ownership checks, and business rules remain on the backend.

Project Structure
src/
├── api/
│   ├── auth/
│   ├── doctor/
│   ├── patient/
│   ├── admin/
│   └── ...
│
├── app/
│   ├── (public)/
│   ├── (auth)/
│   ├── (dashboard)/
│   ├── error.tsx
│   ├── loading.tsx
│   └── not-found.tsx
│
├── components/
│   ├── shared/
│   ├── ui/
│   └── modules/
│
├── hooks/
│
├── lib/
│   ├── apiClient.ts
│   └── ...
│
├── providers/
│
├── type/
│
├── validation/
│
└── proxy.ts

The project uses route groups to keep public, authentication, and dashboard experiences isolated without unnecessarily affecting the URL structure.