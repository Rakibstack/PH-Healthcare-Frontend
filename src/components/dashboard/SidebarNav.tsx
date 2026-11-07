
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { DashboardNavGroup } from "@/config/dashboard/types";

interface SidebarNavProps {
  navigation: DashboardNavGroup[];
  onNavigate?: () => void;
}

export default function SidebarNav({
  navigation,
  onNavigate,
}: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-6">
      {navigation.map((group) => (
        <div key={group.label} className="space-y-2">
          <p className="px-3 text-[11px] font-semibold tracking-wider text-muted-foreground">
            {group.label}
          </p>

          <div className="space-y-1">
            {group.items.map((item) => {
              const Icon = item.icon;

              const isActive =
                pathname === item.url ||
                (item.url !== "/patient-dashboard" &&
                  item.url !== "/doctor-dashboard" &&
                  item.url !== "/admin-dashboard" &&
                  pathname.startsWith(`${item.url}/`));

              return (
                <Link
                  key={item.url}
                  href={item.url}
                  onClick={onNavigate}
                  className={`
                    group flex items-center gap-3 rounded-xl px-3 py-2.5
                    text-sm font-medium transition-colors
                    ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }
                  `}
                >
                  <Icon className="size-[18px] shrink-0" />

                  <span>{item.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}