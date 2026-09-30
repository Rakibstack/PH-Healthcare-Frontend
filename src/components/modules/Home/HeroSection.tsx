import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck2,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const trustPoints = [
  {
    icon: BadgeCheck,
    label: "Verified doctors",
  },
  {
    icon: CalendarCheck2,
    label: "Easy appointment booking",
  },
  {
    icon: ShieldCheck,
    label: "Secure healthcare",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100svh-72px)] items-center gap-12 py-14 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:py-20">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3.5 py-2 text-xs font-medium text-primary">
              <span className="flex size-5 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck className="size-3.5" />
              </span>

              Trusted healthcare, made simpler
            </div>

            {/* Heading */}
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              Connect with the right doctor,{" "}
              <span className="text-primary">right when you need care.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Find verified doctors, book appointments, consult online, and
              manage your healthcare journey from one secure platform.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/doctors">
                <Button size="lg" className="group h-12 w-full px-6 sm:w-auto">
                  Find a Doctor
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="#how-it-works">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 w-full px-6 sm:w-auto"
                >
                  How It Works
                </Button>
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-10 flex flex-col gap-4 border-t pt-7 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              {trustPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Icon className="size-4 text-primary" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            {/* Decorative background */}
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-primary/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border bg-muted/30 p-2 shadow-sm">
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/hero1.jpg"
                  alt="Doctor consulting with a patient"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />

                {/* Floating consultation card */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:left-6 sm:right-auto sm:max-w-sm dark:bg-black/70">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CalendarCheck2 className="size-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold">
                        Ready to book your appointment?
                      </p>

                      <p className="mt-0.5 text-xs text-muted-foreground">
                        Find a doctor and choose a convenient schedule.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small floating badge */}
            <div className="absolute -right-2 top-8 hidden rounded-xl border bg-background px-4 py-3 shadow-lg sm:flex sm:items-center sm:gap-2 lg:-right-5">
              <BadgeCheck className="size-5 text-primary" />

              <div>
                <p className="text-xs font-semibold">Verified Doctors</p>
                <p className="text-[11px] text-muted-foreground">
                  Trusted care
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}