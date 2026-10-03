import { Loader2, ShieldCheck, Stethoscope } from "lucide-react";

import Logo from "@/components/shared/Logo";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute left-[12%] top-[20%] size-2 rounded-full bg-primary/30" />
        <div className="absolute right-[15%] top-[30%] size-1.5 rounded-full bg-primary/20" />
        <div className="absolute bottom-[22%] left-[20%] size-1.5 rounded-full bg-primary/20" />
      </div>

      <div className="relative z-10 flex w-full max-w-sm flex-col items-center text-center">
        {/* Brand */}
        <Logo />

        {/* Loading indicator */}
        <div className="mt-12">
          <div className="relative flex size-16 items-center justify-center rounded-2xl border bg-card shadow-sm">
            <div className="absolute inset-0 animate-pulse rounded-2xl bg-primary/5" />

            <Loader2 className="relative size-7 animate-spin text-primary" />
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-2">
          <h1 className="text-lg font-semibold tracking-tight">
            Preparing your experience
          </h1>

          <p className="text-sm leading-6 text-muted-foreground">
            Securely loading PH Healthcare. Please wait a moment.
          </p>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 flex items-center gap-5 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-primary" />
            Secure
          </div>

          <div className="h-3 w-px bg-border" />

          <div className="flex items-center gap-1.5">
            <Stethoscope className="size-3.5 text-primary" />
            Healthcare
          </div>
        </div>

        {/* Progress line */}
        <div className="mt-8 h-1 w-32 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-primary" />
        </div>
      </div>
    </main>
  );
}