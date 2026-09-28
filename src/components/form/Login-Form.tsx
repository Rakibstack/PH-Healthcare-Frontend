"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, Loader2 } from "lucide-react";
import { useForm } from "@tanstack/react-form";

import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { loginSchema } from "@/validation";
import { useLogin } from "@/hooks";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const { mutate: login, isPending } = useLogin();

  const form = useForm({
    defaultValues: {
      email: "superadmin@gmail.com",
      password: "Super@Admin1234",
    },

    validators: {
      onSubmit: loginSchema,
    },

    onSubmit: ({ value }) => {
      const loginData = {
        email: value.email,
        password: value.password,
      };

      login(loginData, {
        onSuccess: (res) => {
          toast.success("Login User Successfully");
          router.push("/");
        },

        onError: (err) => {
          toast.error(err.message || "Somethin Went Wrong. Please try again.");
        },
      });
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="space-y-6"
    >
      <FieldGroup>
        {/* Email */}
        <form.Field name="email">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;

            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Email address</FieldLabel>

                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                  <Input
                    name={field.name}
                    id={field.name}
                    type="email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    autoComplete="email"
                    aria-invalid={isInvalid}
                    placeholder="you@example.com"
                    className="h-11 pl-10"
                  />
                </div>

                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        </form.Field>

        {/* Password */}
        <form.Field name="password">
          {(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;

            return (
              <Field data-invalid={isInvalid}>
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>

                  <Link
                    href="/forgot-password"
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                  <Input
                    name={field.name}
                    id={field.name}
                    type={showPassword ? "text" : "password"}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    autoComplete="current-password"
                    aria-invalid={isInvalid}
                    placeholder="Enter your password"
                    className="h-11 px-10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </button>
                </div>

                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        </form.Field>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isPending}
          className="h-11 w-full font-medium shadow-sm"
        >
          {isPending ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Signing in...
            </>
          ) : (
            "Sign in"
          )}
        </Button>
      </FieldGroup>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-background px-3 text-xs text-muted-foreground">
            OR CONTINUE WITH
          </span>
        </div>
      </div>

      {/* Google */}
      <Button
        type="button"
        variant="outline"
        className="h-11 w-full font-medium"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
          <path
            fill="currentColor"
            d="M21.35 12.23c0-.68-.06-1.34-.17-1.98H12v3.75h5.24a4.48 4.48 0 0 1-1.94 2.94v2.44h3.14c1.84-1.7 2.91-4.2 2.91-7.15Z"
          />
          <path
            fill="currentColor"
            d="M12 21.75c2.63 0 4.84-.87 6.45-2.37l-3.14-2.44c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.52A9.75 9.75 0 0 0 12 21.75Z"
          />
          <path
            fill="currentColor"
            d="M6.54 13.83a5.86 5.86 0 0 1 0-3.66V7.65H3.3a9.75 9.75 0 0 0 0 8.7l3.24-2.52Z"
          />
          <path
            fill="currentColor"
            d="M12 6.14c1.43 0 2.72.49 3.73 1.45l2.8-2.8C16.83 3.2 14.63 2.25 12 2.25A9.75 9.75 0 0 0 3.3 7.65l3.24 2.52c.77-2.31 2.92-4.03 5.46-4.03Z"
          />
        </svg>
        Continue with Google
      </Button>
    </form>
  );
}
