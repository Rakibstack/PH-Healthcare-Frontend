
import {
  BadgeCheck,
  CalendarCheck2,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";

const trustItems = [
  {
    icon: BadgeCheck,
    title: "Verified Doctors",
    description: "Connect with doctors verified through our platform.",
  },
  {
    icon: CalendarCheck2,
    title: "Easy Booking",
    description: "Choose a convenient schedule and book in minutes.",
  },
  {
    icon: MonitorSmartphone,
    title: "Online Consultation",
    description: "Consult with your doctor from wherever you are.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Healthcare",
    description: "Your healthcare experience is built with security in mind.",
  },
];

export default function TrustStats() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-start gap-4"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}