import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import ResetPasswordForm from "@/components/form/Reset-Password-Form";
import Logo from "@/components/shared/Logo";

// Keep your existing ResetPasswordForm import path.

interface ResetPasswordPageProps {
  searchParams: Promise<{
    email?: string;
  }>;
}

export default async function ResetPasswordPage({
  searchParams,
}: ResetPasswordPageProps) {
  const { email } = await searchParams;

  if (!email) {
    redirect("/forgot-password");
  }

  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#F7F8FC] px-4 py-10 sm:px-6">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 -top-40 size-[420px] rounded-full bg-violet-200/30 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 size-[420px] rounded-full bg-blue-200/30 blur-[100px]" />

      <div className="relative z-10 w-full max-w-5xl">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <Logo></Logo>

          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Back to login
          </Link>
        </header>

        {/* Main content */}
        <section className="grid overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_20px_70px_-25px_rgba(15,23,42,0.15)] lg:grid-cols-[0.85fr_1.15fr]">
          {/* Information panel */}
          <div className="relative flex flex-col justify-between overflow-hidden bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 size-72 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative">
              <div className="mb-8 flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                <LockKeyhole className="size-7 text-violet-300" />
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                Account security
              </p>

              <h1 className="max-w-sm text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Create a new password for your account.
              </h1>

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                You are one step away from regaining access to your account.
                Verify your email and choose a strong, secure password.
              </p>
            </div>

            <div className="relative mt-12 space-y-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-400" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Verify your identity
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Enter the 6-digit verification code sent to your email.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 size-5 shrink-0 text-emerald-400" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Protect your account
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Use a strong password that you have not used before.
                  </p>
                </div>
              </div>
            </div>

            <p className="relative mt-12 text-xs text-slate-500">
              Your security matters. Keep your password private.
            </p>
          </div>

          {/* Reset form panel */}
          <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
            <div className="w-full max-w-md">
              <div className="mb-8">
                <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="size-5" />
                </div>

                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Reset your password
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Enter the verification code and create a new password to
                  continue.
                </p>
              </div>

              <ResetPasswordForm email={email} />
            </div>
          </div>
        </section>

        <footer className="mt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Healthcare. All rights reserved.
        </footer>
      </div>
    </main>
  );
}