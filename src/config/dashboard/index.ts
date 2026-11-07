import {
  LayoutDashboard,
  CalendarDays,
  Search,
  CreditCard,
  FileText,
  Settings,
  Users,
  Stethoscope,
  ClipboardList,
  Clock,
  Video,
} from "lucide-react";

import type { DashboardConfig } from "./types";

// Patient Dashboard
export const patientDashboardConfig: DashboardConfig = {
  title: "Patient Portal",
  description: "Manage your healthcare journey",
  basePath: "/patient-dashboard",

  navigation: [
    {
      label: "OVERVIEW",
      items: [
        {
          title: "Overview",
          url: "/patient-dashboard",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      label: "HEALTHCARE",
      items: [
        {
          title: "Find Doctors",
          url: "/patient-dashboard/doctors",
          icon: Search,
        },
        {
          title: "Appointments",
          url: "/patient-dashboard/appointments",
          icon: CalendarDays,
        },
        {
          title: "Prescriptions",
          url: "/patient-dashboard/prescriptions",
          icon: FileText,
        },
        {
          title: "Payments",
          url: "/patient-dashboard/payments",
          icon: CreditCard,
        },
      ],
    },
    {
      label: "PREFERENCES",
      items: [
        {
          title: "Settings",
          url: "/patient-dashboard/settings",
          icon: Settings,
        },
      ],
    },
  ],
};

// Doctor Dashboard
export const doctorDashboardConfig: DashboardConfig = {
  title: "Doctor Portal",
  description: "Manage your medical practice",
  basePath: "/doctor-dashboard",

  navigation: [
    {
      label: "OVERVIEW",
      items: [
        {
          title: "Overview",
          url: "/doctor-dashboard",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      label: "PRACTICE",
      items: [
        {
          title: "Appointments",
          url: "/doctor-dashboard/appointments",
          icon: CalendarDays,
        },
        {
          title: "My Schedule",
          url: "/doctor-dashboard/schedule",
          icon: Clock,
        },
        {
          title: "Consultations",
          url: "/doctor-dashboard/consultations",
          icon: Video,
        },
        {
          title: "Prescriptions",
          url: "/doctor-dashboard/prescriptions",
          icon: FileText,
        },
      ],
    },
    {
      label: "PREFERENCES",
      items: [
        {
          title: "Settings",
          url: "/doctor-dashboard/settings",
          icon: Settings,
        },
      ],
    },
  ],
};

// Admin Dashboard
export const adminDashboardConfig: DashboardConfig = {
  title: "Admin Portal",
  description: "Manage healthcare operations",
  basePath: "/admin-dashboard",

  navigation: [
    {
      label: "OVERVIEW",
      items: [
        {
          title: "Overview",
          url: "/admin-dashboard",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      label: "MANAGEMENT",
      items: [
        {
          title: "Users",
          url: "/admin-dashboard/users",
          icon: Users,
        },
        {
          title: "Doctor Applications",
          url: "/admin-dashboard/doctor-applications",
          icon: ClipboardList,
        },
        {
          title: "Doctors",
          url: "/admin-dashboard/doctors",
          icon: Stethoscope,
        },
        {
          title: "Appointments",
          url: "/admin-dashboard/appointments",
          icon: CalendarDays,
        },
      ],
    },
    {
      label: "SYSTEM",
      items: [
        {
          title: "Settings",
          url: "/admin-dashboard/settings",
          icon: Settings,
        },
      ],
    },
  ],
};
