
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Logo from "@/components/shared/Logo";
import RegisterForm from "@/components/form/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="min-h-svh bg-background">
      <div className="grid min-h-svh lg:grid-cols-[0.9fr_1.1fr]">
        {/* Registration Section */}
        <section className="flex flex-col px-6 py-8 sm:px-10 lg:px-16 xl:px-20">
          {/* Brand */}
          <div>
            <Logo />
          </div>

          {/* Form */}
          <div className="flex flex-1 items-center justify-center py-12">
            <div className="w-full max-w-md">
              <div className="mb-8">
                {/* Back to Home */}
                <Link
                  href="/"
                  className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowLeft className="size-4" />
                  Back to home
                </Link>

                {/* Heading */}
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Create your account
                </h1>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Join PH Healthcare and take control of your healthcare
                  journey.
                </p>
              </div>

              <RegisterForm />

              {/* Login Link */}
              <p className="mt-8 text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-primary hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-muted-foreground lg:text-left">
            © {new Date().getFullYear()} PH Healthcare. All rights reserved.
          </p>
        </section>

        {/* Visual Section */}
        <section className="relative hidden overflow-hidden lg:block">
          <Image
            src="/register.png"
            alt="Healthcare professional helping a patient"
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 0vw"
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent" />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-10 text-white xl:p-14">
            <div className="max-w-lg">
              <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
                Care that starts with you
              </div>

              <h2 className="text-3xl font-semibold leading-tight xl:text-4xl">
                Better healthcare starts with the right connection.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/80">
                Create your account, discover verified doctors, book
                appointments, and access personalized healthcare from one
                place.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}