import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Home,
  Search,
} from "lucide-react";

import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute left-[8%] top-[18%] size-2 rounded-full bg-primary/25" />
        <div className="absolute right-[12%] top-[24%] size-1.5 rounded-full bg-primary/20" />
        <div className="absolute bottom-[20%] right-[20%] size-2 rounded-full bg-primary/15" />
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
            Back to home
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-20">
        <div className="w-full max-w-3xl text-center">
          {/* 404 visual */}
          <div className="relative mx-auto mb-8 flex w-fit items-center justify-center">
            <div className="absolute size-44 rounded-full border border-primary/10" />
            <div className="absolute size-32 rounded-full border border-primary/10" />

            <div className="relative flex size-24 items-center justify-center rounded-3xl border bg-card shadow-lg shadow-primary/5">
              <Compass className="size-10 text-primary" />
            </div>
          </div>

          {/* 404 */}
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Error 404
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            This page has gone off the map.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist, has been moved,
            or may no longer be available. Let&apos;s get you back to where you
            need to be.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/">
              <Button size="lg" className="h-11 px-6">
                <Home className="size-4" />
                Back to home
              </Button>
            </Link>

            <Link href="/doctors">
              <Button
                size="lg"
                variant="outline"
                className="h-11 px-6"
              >
                <Search className="size-4" />
                Find a doctor
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>

          {/* Helpful links */}
          <div className="mx-auto mt-14 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
            <Link
              href="/doctors"
              className="group rounded-xl border bg-card/60 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card hover:shadow-sm"
            >
              <Search className="size-4 text-primary" />

              <p className="mt-3 text-sm font-medium">
                Find a doctor
              </p>

              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Explore verified healthcare professionals.
              </p>
            </Link>

            <Link
              href="/"
              className="group rounded-xl border bg-card/60 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card hover:shadow-sm"
            >
              <Home className="size-4 text-primary" />

              <p className="mt-3 text-sm font-medium">
                Homepage
              </p>

              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Return to the PH Healthcare homepage.
              </p>
            </Link>

            <Link
              href="/apply-as-doctor"
              className="group rounded-xl border bg-card/60 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card hover:shadow-sm"
            >
              <ArrowLeft className="size-4 text-primary" />

              <p className="mt-3 text-sm font-medium">
                Join as a doctor
              </p>

              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Start your professional application.
              </p>
            </Link>
          </div>

          {/* Bottom note */}
          <p className="mt-10 text-xs text-muted-foreground">
            PH Healthcare · Connecting patients with trusted care
          </p>
        </div>
      </section>
    </main>
  );
}