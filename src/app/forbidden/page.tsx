
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Home,
  LockKeyhole,
} from "lucide-react";

import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";

export default function ForbiddenPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute left-[10%] top-[20%] size-2 rounded-full bg-primary/20" />
        <div className="absolute right-[14%] top-[28%] size-1.5 rounded-full bg-primary/20" />
        <div className="absolute bottom-[20%] left-[18%] size-1.5 rounded-full bg-primary/15" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Logo />

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Home className="size-4" />
            Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-20">
        <div className="w-full max-w-2xl text-center">
          {/* Icon */}
          <div className="relative mx-auto mb-8 flex size-24 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-primary/10" />

            <div className="absolute inset-3 rounded-full border border-primary/10" />

            <div className="relative flex size-16 items-center justify-center rounded-2xl border bg-card shadow-sm">
              <LockKeyhole className="size-7 text-primary" />
            </div>
          </div>

          {/* Status */}
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Access restricted
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            You don&apos;t have permission
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            Your account is authenticated, but you don&apos;t have the required
            permissions to access this page.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/">
              <Button size="lg" className="h-11 px-6">
                <Home className="size-4" />
                Go home
              </Button>
            </Link>

            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="h-11 px-6">
                <ArrowLeft className="size-4" />
                Go to dashboard
              </Button>
            </Link>
          </div>

          <div className="mx-auto mt-12 flex max-w-md items-center justify-center gap-2 text-xs text-muted-foreground">
            <span>Need access?</span>

            <Link
              href="/"
              className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
            >
              Contact support
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}