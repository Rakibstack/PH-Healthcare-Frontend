
import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarCheck2, ShieldCheck } from "lucide-react";

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

export default function HomeClosing() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Healthcare that works around you.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            Find the right doctor, choose a convenient schedule, and stay
            connected throughout your healthcare journey.
          </p>

          <div className="mt-8">
            <Link
              href="/doctors"
              className="group inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Find a Doctor
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 border-t pt-7">
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
      </div>
    </section>
  );
}