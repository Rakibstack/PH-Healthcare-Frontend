
import { useCurrentUser } from "@/hooks";
import {
  adminDashboardConfig,
  doctorDashboardConfig,
  patientDashboardConfig,
} from "@/config/dashboard";

import type { DashboardConfig } from "@/config/dashboard/types";
import { UserRole, UserRoles } from "@/types";

const dashboardConfigs: Partial<Record<UserRole, DashboardConfig>> = {
  [UserRoles.PATIENT]: patientDashboardConfig,
  [UserRoles.DOCTOR]: doctorDashboardConfig,
  [UserRoles.ADMIN]: adminDashboardConfig,
  [UserRoles.SUPER_ADMIN]: adminDashboardConfig,
};

export function useDashboardConfig() {
  const { data, isPending } = useCurrentUser();
  
  // Assumes the API response is { success, data: user }
  const user = data?.data;

  const config = user
    ? dashboardConfigs[user.role as UserRole]
    : undefined;

  return {
    user,
    config,
    isPending,
  };
}