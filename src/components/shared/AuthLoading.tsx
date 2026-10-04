
import { Loader2, ShieldCheck } from "lucide-react";

export default function AuthLoading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="flex flex-col items-center text-center">
        <div className="relative flex size-14 items-center justify-center rounded-2xl border bg-card shadow-sm">
          <div className="absolute inset-0 animate-pulse rounded-2xl bg-primary/5" />

          <Loader2 className="relative size-6 animate-spin text-primary" />
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-center gap-1.5">
            <ShieldCheck className="size-4 text-primary" />

            <p className="text-sm font-medium">
              Verifying your access
            </p>
          </div>

          <p className="mt-1.5 text-xs text-muted-foreground">
            Please wait while we verify your account permissions.
          </p>
        </div>
      </div>
    </div>
  );
}