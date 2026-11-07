
import Logo from "@/components/shared/Logo";
import type { DashboardConfig } from "@/config/dashboard/types";
import SidebarNav from "./SidebarNav";
import { ShieldCheck } from "lucide-react";

interface DashboardSidebarProps {
  config: DashboardConfig;
}

export default function DashboardSidebar({
  config,
}: DashboardSidebarProps) {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r bg-background lg:flex lg:flex-col">
      {/* Brand */}
      <div className="flex h-20 items-center border-b px-6">
        <Logo />
      </div>

      {/* Portal Info */}
      <div className="border-b px-5 py-5">
        <div className="rounded-xl bg-primary/5 p-4">
          <p className="text-sm font-semibold text-primary">
            {config.title}
          </p>

          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {config.description}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <SidebarNav navigation={config.navigation} />
      </div>

      {/* Footer */}
      <div className="border-t p-4">
        <div className="rounded-xl border p-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-5 text-primary" />

            <div>
              <p className="text-xs font-semibold">
                Secure Healthcare
              </p>
              <p className="text-[11px] text-muted-foreground">
                Your health matters
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}