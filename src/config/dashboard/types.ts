
import type { LucideIcon } from "lucide-react";

export interface DashboardNavItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

export interface DashboardNavGroup {
  label: string;
  items: DashboardNavItem[];
}

export interface DashboardConfig {
  title: string;
  description: string;
  basePath: string;
  navigation: DashboardNavGroup[];
}