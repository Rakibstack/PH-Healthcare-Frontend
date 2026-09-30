
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck2,
  Clock3,
  Stethoscope,
} from "lucide-react";

const featuredDoctors = [
  {
    id: "doctor-1",
    name: "Dr. Sarah Ahmed",
    specialty: "Cardiologist",
    experience: "8+ years experience",
    image: "/doctor1.jpg",
    availability: "Available today",
  },
  {
    id: "doctor-2",
    name: "Dr. Mahmud Hasan",
    specialty: "Internal Medicine",
    experience: "10+ years experience",
    image: "/doctor3.jpg",
    availability: "Available tomorrow",
  },
  {
    id: "doctor-3",
    name: "Dr. Nusrat Jahan",
    specialty: "Dermatologist",
    experience: "6+ years experience",
    image: "/doctor2.jpg",
    availability: "Available today",
  },
];

export default function FeaturedDoctors() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-primary">
              Trusted medical professionals
            </span>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Meet our verified doctors.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              Connect with verified healthcare professionals and choose the
              right doctor for your needs.
            </p>
          </div>

          <Link
            href="/doctors"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View all doctors
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Doctor Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredDoctors.map((doctor) => (
            <article
              key={doctor.id}
              className="group overflow-hidden rounded-2xl border bg-background transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md"
            >
              {/* Doctor Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Availability */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  {doctor.availability}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                {/* Doctor Identity */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-semibold tracking-tight">
                        {doctor.name}
                      </h3>

                      <BadgeCheck className="size-4 shrink-0 text-primary" />
                    </div>

                    <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Stethoscope className="size-3.5" />
                      {doctor.specialty}
                    </div>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="mt-5 grid grid-cols-2 gap-3 border-y py-4">
                  <div className="flex items-center gap-2">
                    <Clock3 className="size-4 text-muted-foreground" />

                    <div>
                      <p className="text-[11px] text-muted-foreground">
                        Experience
                      </p>
                      <p className="mt-0.5 text-xs font-medium">
                        {doctor.experience}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarCheck2 className="size-4 text-muted-foreground" />

                    <div>
                      <p className="text-[11px] text-muted-foreground">
                        Consultation
                      </p>
                      <p className="mt-0.5 text-xs font-medium">
                        Online available
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={`/doctors/${doctor.id}`}
                  className="mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-lg border text-sm font-medium transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  View profile
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/30 hover:bg-primary/5"
          >
            <CalendarCheck2 className="size-4" />
            Find a doctor for your needs
          </Link>
        </div>
      </div>
    </section>
  );
}