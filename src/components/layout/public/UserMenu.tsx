"use client";
import Link from "next/link";
import {
  CalendarDays,
  LayoutDashboard,
  LogOut,
  Settings,
  UserRound,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLogout } from "@/hooks";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  user: {
    data: {
      name: string;
      email: string;
      imageUrl?: string | null;
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
  const { mutate: Logout } = useLogout();
  const queryClient = useQueryClient();
  const router = useRouter()

  const handleLogout = () => {
    Logout(undefined, {
      onSuccess: () => {
        toast.success("Logout Successfully");
        queryClient.removeQueries({ queryKey: ["user"] });
        router.push('/login')
      },
      onError: () => {
        toast.error("Logout Failed");
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        type="button"
        aria-label="Open user menu"
        className="group flex items-center gap-2 rounded-full outline-none transition-all focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
      >
        <Avatar className="size-9 border border-border transition-transform group-hover:scale-105">
          <AvatarImage
            src={user.data.imageUrl ?? undefined}
            alt={user.data.name}
          />

          <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>

        <div className="hidden text-left xl:block">
          <p className="max-w-24 truncate text-sm font-medium leading-none">
            {user.data.name}
          </p>

          <p className="mt-1 text-[11px] text-muted-foreground">Patient</p>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" sideOffset={8} className="w-64 p-1.5">
        {/* User information */}
        <div className="flex items-center gap-3 px-2.5 py-2.5">
          <Avatar className="size-10">
            <AvatarImage
              src={user.data.imageUrl ?? undefined}
              alt={user.data.name}
            />

            <AvatarFallback className="bg-primary/10 text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{user.data.name}</p>

            <p className="truncate text-xs text-muted-foreground">
              {user.data.email}
            </p>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer">
          <Link href="/dashboard" className="flex w-full items-center gap-2">
            <LayoutDashboard className="size-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer">
          <Link href="/appointments" className="flex w-full items-center gap-2">
            <CalendarDays className="size-4" />
            <span>My Appointments</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer">
          <Link href="/profile" className="flex w-full items-center gap-2">
            <UserRound className="size-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer">
          <Link href="/settings" className="flex w-full items-center gap-2">
            <Settings className="size-4" />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => handleLogout()}
          className="cursor-pointer text-destructive focus:text-destructive"
        >
          <LogOut className="size-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
