"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Loader2, Mail } from "lucide-react";
import { useForm } from "@tanstack/react-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import Logo from "@/components/shared/Logo";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { forgotPasswordSchema } from "@/validation";
import { useForgotPassword } from "@/hooks";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const { mutate: sendOtp, isPending } = useForgotPassword();

  const form = useForm({
    defaultValues: {
      email: "",
    },

    validators: {
      onSubmit: forgotPasswordSchema,
    },

    onSubmit: ({ value }) => {
      const email = value.email.trim().toLowerCase();
      const searchParams = new URLSearchParams({ email });

      sendOtp(
        { email },
        {
          onSuccess: () => {
            toast.success("Verification code sent to your email.");

            router.push(`/reset-password?${searchParams.toString()}`);
          },

          onError: (error) => {
            toast.error(
              error.message ||
                "Unable to send verification code. Please try again.",
            );
          },
        },
      );
    },
  });

  return (
    <main className="min-h-svh bg-background">
      <div className="grid min-h-svh lg:grid-cols-[0.9fr_1.1fr]">
        {/* Form Section */}
        <section className="flex flex-col px-6 py-8 sm:px-10 lg:px-16 xl:px-20">
          <div>
            <Logo />
          </div>

          <div className="flex flex-1 items-center justify-center py-12">
            <div className="w-full max-w-md">
              <Link
                href="/login"
                className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-4" />
                Back to login
              </Link>

              <div className="mb-8">
                <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="size-6 text-primary" />
                </div>

                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Forgot password?
                </h1>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Don&apos;t worry, it happens. Enter the email address
                  associated with your account and we&apos;ll send you a
                  verification code to reset your password.
                </p>
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  form.handleSubmit();
                }}
                className="space-y-6"
              >
                <FieldGroup>
                  <form.Field name="email">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;

                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>
                            Email address
                          </FieldLabel>

                          <div className="relative">
                            <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                              id={field.name}
                              name={field.name}
                              type="email"
                              value={field.state.value}
                              onChange={(event) =>
                                field.handleChange(event.target.value)
                              }
                              onBlur={field.handleBlur}
                              autoComplete="email"
                              placeholder="you@example.com"
                              aria-invalid={isInvalid}
                              className="h-11 pl-10"
                            />
                          </div>

                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      );
                    }}
                  </form.Field>

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="h-11 w-full font-medium shadow-sm"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Sending verification code...
                      </>
                    ) : (
                      "Send verification code"
                    )}
                  </Button>
                </FieldGroup>
              </form>

              <p className="mt-8 text-center text-sm text-muted-foreground">
                Remember your password?{" "}
                <Link
                  href="/login"
                  className="font-medium text-primary hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>

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

          <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-10 text-white xl:p-14">
            <div className="max-w-lg">
              <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
                Secure account recovery
              </div>

              <h2 className="text-3xl font-semibold leading-tight xl:text-4xl">
                Your health matters. So does your account security.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/80">
                We make it easy to securely regain access to your account and
                continue managing your healthcare without interruption.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
