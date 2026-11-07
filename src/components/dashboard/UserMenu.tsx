"use client";

import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, LogOut, Settings, UserRound } from "lucide-react";

interface DashboardUser {
  name: string;
  email: string;
  profilePhoto?: string | null;
}

interface UserMenuProps {
  user: DashboardUser;
  onLogout?: () => void;
}

export default function UserMenu({ user, onLogout }: UserMenuProps) {
  const router = useRouter();

  const initials =
    user.name
      ?.trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase() || "U";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 rounded-xl p-1.5 outline-none transition-colors hover:bg-muted">
        <Avatar className="size-9">
          <AvatarImage src={user.profilePhoto || undefined} />

          <AvatarFallback className="bg-primary/10 text-sm font-semibold text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>

        <div className="hidden text-left sm:block">
          <p className="max-w-32 truncate text-sm font-semibold">{user.name}</p>

          <p className="max-w-32 truncate text-xs text-muted-foreground">
            {user.email}
          </p>
        </div>

        <ChevronDown className="hidden size-4 text-muted-foreground sm:block" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <div className="px-3 py-2">
          <p className="text-sm font-semibold">{user.name}</p>
          <p className="truncate text-xs text-muted-foreground">{user.email}</p>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => router.push("profile")}>
          <UserRound className="mr-2 size-4" />
          Profile
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => router.push("settings")}>
          <Settings className="mr-2 size-4" />
          Settings
        </DropdownMenuItem>

        {onLogout && (
          <>
            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={onLogout}
              className="text-destructive focus:text-destructive"
            >
              <LogOut className="mr-2 size-4" />
              Sign out
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
