
"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-destructive/10">
          <AlertTriangle className="size-7 text-destructive" />
        </div>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight">
          Something went wrong
        </h1>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          We couldn&apos;t complete this request. Please try again.
        </p>

        <div className="mt-7">
          <Button onClick={reset}>
            <RefreshCcw className="size-4" />
            Try again
          </Button>
        </div>
      </div>
    </main>
  );
}