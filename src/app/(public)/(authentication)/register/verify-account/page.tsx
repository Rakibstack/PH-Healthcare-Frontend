import Link from "next/link";
import { ArrowLeft, MailCheck } from "lucide-react";

import Logo from "@/components/shared/Logo";
import VerifyAccountForm from "@/components/form/VerifyAccountForm";

export default function VerifyAccountPage() {
  return (
    <main className="min-h-svh bg-background">
      <div className="mx-auto flex min-h-svh w-full max-w-xl flex-col px-6 py-8 sm:px-8">
        {/* Logo */}
        <div>
          <Logo />
        </div>

        {/* Content */}
        <div className="flex flex-1 items-center justify-center py-12">
          <div className="w-full max-w-md">
            {/* Icon */}
            <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <MailCheck className="size-7" />
            </div>

            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Verify your email
              </h1>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                We&apos;ve sent a 6-digit verification code to your email
                address. Enter the code below to verify your account.
              </p>
            </div>

            {/* OTP Form */}
            <VerifyAccountForm />

            {/* Back to login */}
            <Link
              href="/login"
              className="mx-auto mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to login
            </Link>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} PH Healthcare. All rights reserved.
        </p>
      </div>
    </main>
  );
}