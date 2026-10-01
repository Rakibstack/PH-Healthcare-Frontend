import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";

import Logo from "@/components/shared/Logo";
import ApplyDoctorForm from "@/components/form/ApplyDoctorForm";

const benefits = [
  {
    icon: FileCheck2,
    title: "Submit your application",
    description:
      "Provide your professional information, resume, and supporting documents.",
  },
  {
    icon: BadgeCheck,
    title: "Professional review",
    description:
      "Our admin team will review your qualifications and submitted documents.",
  },
  {
    icon: ShieldCheck,
    title: "Build your doctor profile",
    description:
      "Once approved, you can continue by completing and managing your doctor profile.",
  },
];

export default function ApplyAsDoctorPage() {
  return (
    <main className="min-h-svh bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Logo />

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </Link>
        </div>

        <div className="grid gap-12 py-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:py-16">
          {/* Introduction */}
          <section className="lg:sticky lg:top-8 lg:self-start">
            <div className="max-w-md">
              <span className="text-sm font-semibold text-primary">
                Join PH Healthcare
              </span>

              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Apply as a doctor.
              </h1>

              <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                Submit your professional information and supporting documents
                to become a verified healthcare professional on PH Healthcare.
              </p>

              <div className="mt-9 space-y-6">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.title}
                      className="flex items-start gap-4"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>

                      <div>
                        <h2 className="text-sm font-semibold">
                          {benefit.title}
                        </h2>

                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 border-t pt-6">
                <p className="text-xs leading-5 text-muted-foreground">
                  Make sure the information and documents you provide are
                  accurate and belong to you. Applications are subject to
                  verification and administrative review.
                </p>
              </div>
            </div>
          </section>

          {/* Form */}
          <section className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Doctor application
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Complete the application with your professional information
                and supporting documents.
              </p>
            </div>

            <ApplyDoctorForm />
          </section>
        </div>

        <p className="pb-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} PH Healthcare. All rights reserved.
        </p>
      </div>
    </main>
  );
}