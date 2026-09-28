
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
} from "lucide-react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import Logo from "@/components/shared/Logo";
import { Separator } from "@/components/ui/separator";

const productLinks = [
  { label: "Find Doctors", href: "/doctors" },
  { label: "Appointments", href: "/appointments" },
  { label: "Online Consultation", href: "/consultation" },
  { label: "Prescriptions", href: "/prescriptions" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function PublicFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          {/* Brand */}
          <div className="max-w-sm">
            <Logo />

            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              A modern healthcare platform that makes it easier to find
              verified doctors, book appointments, consult online, and manage
              your healthcare journey.
            </p>

            <Link
              href="mailto:support@phhealthcare.com"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-4 text-primary" />
              support@phhealthcare.com
            </Link>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold">Product</h3>

            <ul className="mt-4 space-y-3">
              {productLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold">Company</h3>

            <ul className="mt-4 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h3 className="text-sm font-semibold">Get started</h3>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Start managing your healthcare journey from one secure place.
            </p>

            <Link
              href="/register"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Create your account
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        <Separator className="my-10" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} PH Healthcare. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              {legalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-2">
            <Link
              href="#"
              aria-label="GitHub"
              className="flex size-9 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            >
              <FaGithub className="size-4" />
            </Link>

            <Link
              href="#"
              aria-label="LinkedIn"
              className="flex size-9 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            >
              <FaLinkedinIn className="size-4" />
            </Link>

            <Link
              href="#"
              aria-label="Facebook"
              className="flex size-9 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            >
              <FaFacebookF className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}