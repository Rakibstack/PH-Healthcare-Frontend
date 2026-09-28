"use client";

import Link from "next/link";
import { LayoutDashboard, LogOut, UserRound } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserMenuProps {
  user: {
    data: {
      name: string;
      email: string;
      profilePhoto?: string | null;
    };
  };
}

export default function UserMenu({ user }: UserMenuProps) {
  const initials = user.data.name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        type="button"
        aria-label="Open user menu"
        className="rounded-full outline-none transition focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <Avatar className="size-9">
          <AvatarImage src={user.data.profilePhoto ?? undefined} alt={user.data.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-60">
        <div className="px-2 py-2">
          <p className="text-sm font-medium">{user.data.name}</p>

          <p className="truncate text-xs text-muted-foreground">{user.data.email}</p>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link href="/dashboard" className="flex w-full items-center gap-2">
            <LayoutDashboard className="size-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link href="/profile" className="flex w-full items-center gap-2">
            <UserRound className="size-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <button type="button" className="flex w-full items-center gap-2">
            <LogOut className="size-4" />
            <span>Logout</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
