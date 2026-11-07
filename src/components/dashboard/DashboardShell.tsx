"use client";

import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import { useDashboardConfig } from "@/hooks/useDashboardConfig";

interface DashboardShellProps {
  children: React.ReactNode;
}

export default function DashboardShell({ children }: DashboardShellProps) {
  const { user, config, isPending } = useDashboardConfig();

  if (isPending) {
    return (
      <div className="min-h-screen animate-pulse bg-muted/30">
        <div className="hidden lg:fixed lg:inset-y-0 lg:block lg:w-72 lg:border-r lg:bg-background" />

        <div className="lg:pl-72">
          <div className="h-16 border-b bg-background" />
          <div className="space-y-4 p-6">
            <div className="h-8 w-48 rounded-lg bg-muted" />
            <div className="h-40 rounded-xl bg-muted" />
          </div>
        </div>
      </div>
    );
  }

  if (!user || !config) {
    return null;
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardSidebar config={config} />

      <div className="min-h-screen lg:pl-72">
        <DashboardHeader config={config} user={user} />

        <main className="mx-auto w-full max-w-[1600px] p-4 md:p-6 lg:p-8">
          {children}
          
        </main>
      </div>
    </div>
  );
}
