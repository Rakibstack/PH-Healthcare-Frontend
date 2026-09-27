import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import LoginForm from "@/components/form/Login-Form";
import Logo from "@/components/shared/Logo";

export default function LoginPage() {
  return (
    <main className="min-h-svh bg-background">
      <div className="grid min-h-svh lg:grid-cols-[0.9fr_1.1fr]">
        {/* Login Section */}
        <section className="flex flex-col px-6 py-8 sm:px-10 lg:px-16 xl:px-20">
          {/* Brand */}
          <div>
           <Logo></Logo>
          </div>

          {/* Form */}
          <div className="flex flex-1 items-center justify-center py-12">
            <div className="w-full max-w-md">
              <div className="mb-8">
                <Link
                  href="/"
                  className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowLeft className="size-4" />
                  Back to home
                </Link>

                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Welcome back
                </h1>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Sign in to your account to continue your healthcare journey.
                </p>
              </div>

              <LoginForm />

              <p className="mt-8 text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="font-medium text-primary hover:underline"
                >
                  Create an account
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
            src="/login.jpg"
            alt="Healthcare professional providing patient care"
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 0vw"
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-10 text-white xl:p-14">
            <div className="max-w-lg">
              <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
                Trusted healthcare, simplified
              </div>

              <h2 className="text-3xl font-semibold leading-tight xl:text-4xl">
                Your healthcare journey, all in one place.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/80">
                Find verified doctors, book appointments, consult online, and
                manage your healthcare with ease.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}