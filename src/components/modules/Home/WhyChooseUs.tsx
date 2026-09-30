
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck2,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Verified doctors",
    description:
      "Connect with healthcare professionals verified through our platform.",
  },
  {
    icon: CalendarCheck2,
    title: "Simple appointment booking",
    description:
      "Find an available schedule and book your appointment without unnecessary steps.",
  },
  {
    icon: ShieldCheck,
    title: "Secure healthcare experience",
    description:
      "Your appointments, payments, and healthcare information are handled with security in mind.",
  },
  {
    icon: FileCheck2,
    title: "Digital prescriptions",
    description:
      "Receive and access your prescription digitally after your consultation.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="border-y bg-muted/30 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border bg-background p-2 shadow-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/doctor4.jpg"
                  alt="Doctor consulting with a patient"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border bg-background/95 p-4 shadow-lg backdrop-blur-md sm:left-8 sm:right-auto sm:max-w-xs">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="size-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Secure & connected care
                  </p>

                  <p className="mt-0.5 text-xs leading-5 text-muted-foreground">
                    Your healthcare journey, all in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:py-6">
            <span className="text-sm font-semibold text-primary">
              Why PH Healthcare
            </span>

            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              Healthcare should feel connected, not complicated.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              PH Healthcare brings the essential parts of your healthcare
              journey together—from finding a verified doctor and booking an
              appointment to online consultation and digital prescriptions.
            </p>

            {/* Benefits */}
            <div className="mt-9 grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div key={benefit.title} className="flex items-start gap-3.5">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-4" />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold">
                        {benefit.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="/doctors"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Explore verified doctors
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}