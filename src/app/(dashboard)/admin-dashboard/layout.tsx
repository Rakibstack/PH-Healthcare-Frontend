import { RoleGuard } from "@/components/auth/role-guard";
import DashboardShell from "@/components/dashboard/DashboardShell";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RoleGuard roles={["ADMIN", "SUPER_ADMIN"]}>
      <DashboardShell>{children}</DashboardShell>
     
    </RoleGuard>
  );
}
