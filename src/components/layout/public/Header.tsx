"use client";

import Link from "next/link";
import { ArrowRight, Menu, Search } from "lucide-react";

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
    href: "#doctors",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "About",
    href: "#about",
  },
];

export default function PublicHeader() {
  const { data: user, isLoading } = useCurrentUser();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-primary/5 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          {/* Find Doctor */}
          <Link href="/doctors">
            <Button
              variant="ghost"
              className="gap-2 rounded-full px-4 text-sm font-medium"
            >
              <Search className="size-4" />
              Find a Doctor
            </Button>
          </Link>

          <div className="mx-1 h-6 w-px bg-border" />

          {/* Authentication */}
          {isLoading ? (
            <div className="size-9 animate-pulse rounded-full bg-muted" />
          ) : user ? (
            <UserMenu user={user} />
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" className="rounded-full px-4">
                  Log in
                </Button>
              </Link>

              <Link href="/register">
                <Button className="group rounded-full px-5">
                  Get started
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger
              aria-label="Open navigation menu"
              className="inline-flex size-10 items-center justify-center rounded-full border bg-background transition-colors hover:bg-muted"
            >
              <Menu className="size-5" />
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px] sm:w-[380px]">
              <SheetHeader className="border-b pb-5">
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col pt-6">
                {/* Navigation */}
                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Find Doctor */}
                <Link href="/doctors" className="mt-5">
                  <Button
                    variant="outline"
                    className="w-full justify-center gap-2 rounded-xl"
                  >
                    <Search className="size-4" />
                    Find a Doctor
                  </Button>
                </Link>

                {/* Auth */}
                {!isLoading && !user && (
                  <div className="mt-5 grid gap-2 border-t pt-5">
                    <Link href="/login">
                      <Button variant="outline" className="w-full rounded-xl">
                        Log in
                      </Button>
                    </Link>

                    <Link href="/register">
                      <Button className="w-full rounded-xl">
                        Get started
                        <ArrowRight className="size-4" />
                      </Button>
                    </Link>
                  </div>
                )}

                {/* Mobile logged-in state */}
                {!isLoading && user && (
                  <div className="mt-5 border-t pt-5">
                    <UserMenu user={user} />
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
