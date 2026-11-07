"use client";

import {
  CalendarDays,
  ChevronDown,
  LayoutDashboard,
  LogOut,
  Settings,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useLogout } from "@/hooks";

interface UserMenuProps {
  user: {
    data: {
      name: string;
      email: string;
      imageUrl?: string | null;
      role: string;
    };
  };
}

const dashboardRoutes: Record<string, string> = {
  PATIENT: "/patient-dashboard",
  DOCTOR: "/doctor-dashboard",
  ADMIN: "/admin-dashboard",
  SUPER_ADMIN: "/admin-dashboard",
};

const roleLabels: Record<string, string> = {
  PATIENT: "Patient",
  DOCTOR: "Doctor",
  ADMIN: "Administrator",
  SUPER_ADMIN: "Super Admin",
};

export default function UserMenu({ user }: UserMenuProps) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useLogout();

  const { name, email, imageUrl, role } = user.data;

  const dashboardPath = dashboardRoutes[role];

  const initials = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const roleLabel = roleLabels[role] ?? role;

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        toast.success("Logged out successfully");

        queryClient.removeQueries({ queryKey: ["user"] });

        router.replace("/login");
      },
      onError: () => {
        toast.error("Logout failed. Please try again.");
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        type="button"
        aria-label="Open user menu"
        className="group flex items-center gap-2 rounded-xl border border-transparent p-1.5 pr-2 transition-all duration-200 hover:border-border hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
      >
        <Avatar className="size-9 border border-border shadow-sm">
          <AvatarImage src={imageUrl ?? undefined} alt={name} />
          <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>

        <div className="hidden min-w-0 text-left sm:block">
          <p className="max-w-32 truncate text-sm font-semibold leading-tight">
            {name}
          </p>
          <p className="mt-1 text-[11px] text-muted-foreground">
            {roleLabel}
          </p>
        </div>

        <ChevronDown className="hidden size-4 text-muted-foreground transition-transform duration-200 group-data-[popup-open]:rotate-180 sm:block" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="w-72 rounded-xl border border-border/80 bg-popover p-2 shadow-xl shadow-black/5"
      >
        {/* Profile information */}
        <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
          <Avatar className="size-11 border border-border shadow-sm">
            <AvatarImage src={imageUrl ?? undefined} alt={name} />
            <AvatarFallback className="bg-primary/10 font-semibold text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">{name}</p>
            <p className="mt-0.5 truncate text-xs text-muted-foreground">
              {email}
            </p>

            <div className="mt-2 flex w-fit items-center gap-1 rounded-full border border-primary/15 bg-primary/5 px-2 py-0.5">
              <ShieldCheck className="size-3 text-primary" />
              <span className="text-[10px] font-medium text-primary">
                {roleLabel}
              </span>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator className="my-2" />

        {/* Dashboard navigation */}
        {dashboardPath && (
          <>
            <DropdownMenuItem
              onClick={() => handleNavigation(dashboardPath)}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm"
            >
              <LayoutDashboard className="size-4 text-muted-foreground" />
              <span className="font-medium">My Dashboard</span>
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() =>
                handleNavigation(`${dashboardPath}/appointments`)
              }
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm"
            >
              <CalendarDays className="size-4 text-muted-foreground" />
              <span>My Appointments</span>
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => handleNavigation(`${dashboardPath}/profile`)}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm"
            >
              <UserRound className="size-4 text-muted-foreground" />
              <span>My Profile</span>
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => handleNavigation(`${dashboardPath}/settings`)}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm"
            >
              <Settings className="size-4 text-muted-foreground" />
              <span>Settings</span>
            </DropdownMenuItem>
          </>
        )}

        <DropdownMenuSeparator className="my-2" />

        {/* Logout */}
        <DropdownMenuItem
          disabled={isPending}
          onClick={handleLogout}
          className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-destructive focus:bg-destructive/10 focus:text-destructive"
        >
          <LogOut className="size-4" />
          <span className="font-medium">
            {isPending ? "Logging out..." : "Logout"}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
