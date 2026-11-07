
"use client";

import { useState } from "react";
import {
  Menu,
  Bell,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Logo from "@/components/shared/Logo";
import SidebarNav from "./SidebarNav";
import UserMenu from "./UserMenu";

import type { DashboardConfig } from "@/config/dashboard/types";

interface DashboardHeaderProps {
  config: DashboardConfig;
  user: {
    name: string;
    email: string;
    profilePhoto?: string | null;
  };
}

export default function DashboardHeader({
  config,
  user,
}: DashboardHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur-md md:px-6">
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Open navigation menu"
            className="flex size-9 items-center justify-center rounded-lg border hover:bg-muted lg:hidden"
          >
            <Menu className="size-5" />
          </SheetTrigger>

          <SheetContent side="left" className="w-[280px] p-0">
            <SheetTitle className="border-b px-5 py-5">
              <Logo />
            </SheetTitle>

            <div className="border-b px-5 py-4">
              <p className="text-sm font-semibold text-primary">
                {config.title}
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                {config.description}
              </p>
            </div>

            <div className="overflow-y-auto p-4">
              <SidebarNav
                navigation={config.navigation}
                onNavigate={() => setOpen(false)}
              />
            </div>
          </SheetContent>
        </Sheet>

        <div>
          <h1 className="text-sm font-semibold md:text-base">
            {config.title}
          </h1>

          <p className="hidden text-xs text-muted-foreground sm:block">
            Welcome to your dashboard
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex size-9 items-center justify-center rounded-xl border transition-colors hover:bg-muted"
        >
          <Bell className="size-[18px]" />

          <span className="absolute right-2 top-2 size-2 rounded-full bg-primary" />
        </button>

        <UserMenu user={user} />
      </div>
    </header>
  );
}