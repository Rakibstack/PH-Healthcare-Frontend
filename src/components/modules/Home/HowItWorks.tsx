
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  CreditCard,
  FileText,
  Search,
  Video,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Find a Doctor",
    description:
      "Browse verified doctors and find the right specialist based on your healthcare needs.",
  },
  {
    number: "02",
    icon: CalendarCheck2,
    title: "Choose a Schedule",
    description:
      "View available schedules and select a convenient appointment slot that works for you.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Book & Pay",
    description:
      "Confirm your appointment and complete the payment securely through bKash.",
  },
  {
    number: "04",
    icon: Video,
    title: "Consult & Get Care",
    description:
      "Join your online consultation and receive your digital prescription after the appointment.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y bg-muted/30 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-primary">
            Simple healthcare journey
          </span>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Healthcare in four simple steps.
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground">
            From finding the right doctor to receiving your digital
            prescription, PH Healthcare keeps your entire healthcare journey
            connected.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14 lg:mt-16">
          {/* Connecting line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-6 hidden border-t border-dashed lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative text-center lg:px-4"
                >
                  {/* Icon */}
                  <div className="relative mx-auto flex size-12 items-center justify-center rounded-full border bg-background text-primary shadow-sm">
                    <Icon className="size-5" />
                  </div>

                  {/* Step Number */}
                  <span className="mt-5 block text-xs font-semibold tracking-[0.18em] text-primary">
                    STEP {step.number}
                  </span>

                  {/* Content */}
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA / workflow highlight */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border bg-background p-6 sm:flex-row sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <CheckCircle2 className="size-5" />
            </div>

            <div>
              <h3 className="text-sm font-semibold">
                Everything stays connected.
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Appointments, consultations, payments, and prescriptions in
                one healthcare platform.
              </p>
            </div>
          </div>

          <Link
            href="/doctors"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Find a doctor
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}