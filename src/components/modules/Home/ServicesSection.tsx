import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck2,
  FileText,
  MessageCircleMore,
  Search,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Find a Doctor",
    description: "Discover verified doctors by specialty and find the right care for your needs.",
    href: "/doctors",
    tag: "Smart Search",
  },
  {
    icon: CalendarCheck2,
    title: "Book an Appointment",
    description: "Choose an available schedule and book your appointment in just a few steps.",
    href: "/doctors",
    tag: "Instant Book",
  },
  {
    icon: MessageCircleMore,
    title: "Online Consultation",
    description: "Connect with your doctor online and get care without needing to visit a clinic.",
    href: "/doctors",
    tag: "Telehealth",
  },
  {
    icon: FileText,
    title: "Digital Prescription",
    description: "Access your digital prescriptions and keep your healthcare information organized.",
    href: "/dashboard",
    tag: "Secure Cloud",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden py-20 sm:py-30 bg-background">
      {/* SaaS Ambient Glow Background Effect */}
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.08),transparent_50%)]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header (Centered for a balanced SaaS look) */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
            Healthcare made simple
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Everything you need for better healthcare
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From finding a verified doctor to managing your consultation, PH Healthcare brings your essential healthcare experience together in one premium place.
          </p>
        </div>

        {/* Services Grid with 4-Columns or Bento Style vibe */}
        <div className="mx-auto grid max-w-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-5px_rgba(var(--primary-rgb),0.1)] hover:-translate-y-1"
              >
                {/* Top Subtle Card Highlight Line */}
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-primary transition-all duration-400 group-hover:w-full" />
                
                <div>
                  {/* Icon & Tag Row */}
                  <div className="flex items-center justify-between gap-x-4">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                      {service.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Interactive Call to Action */}
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center text-xs font-semibold text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>Get Started</span>
                  <ArrowRight className="ml-1 size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
