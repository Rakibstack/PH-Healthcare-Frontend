"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCurrentUser } from "@/hooks";
import UserMenu from "./UserMenu";

const navItems = [
  {
    label: "Doctors",
    href: "/doctors",
  },
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "About",
    href: "/about",
  },
];

export default function PublicHeader() {
  const { data: user, isLoading } = useCurrentUser();
  console.log('user Data From Header',user);
  
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          {isLoading ? (
            <div className="size-9 animate-pulse rounded-full bg-muted" />
          ) : user ? (
            <UserMenu user={user} />
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost">Log in</Button>
              </Link>

              <Link href="/register">
                <Button>Get started</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger
              aria-label="Open navigation menu"
              className="inline-flex size-9 items-center justify-center rounded-lg border bg-background transition-colors hover:bg-muted"
            >
              <Menu className="size-5" />
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[360px]">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-4 border-t pt-4">
                  <div className="grid gap-2">
                    <Link href="/login" className="w-full">
                      <Button variant="outline" className="w-full">
                        Log in
                      </Button>
                    </Link>

                    <Link href="/register" className="w-full">
                      <Button className="w-full">Get started</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
