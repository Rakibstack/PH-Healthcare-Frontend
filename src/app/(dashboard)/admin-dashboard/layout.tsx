import { RoleGuard } from "@/components/auth/role-guard";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RoleGuard roles={['ADMIN', 'SUPER_ADMIN']}>
      {children}
    </RoleGuard>
  );
}