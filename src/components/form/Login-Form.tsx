"use client";
import { useForm } from "@tanstack/react-form";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { loginSchema } from "@/validation";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

export default function LoginForm() {
  
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });
  return (
    <div>
      <p>Login To Your Account</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <FieldGroup>
          <form.Field name="email">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    name={field.name}
                    id={field.name}
                    onChange={(e) => field.handleChange(e.target.value)}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    autoComplete="off"
                    aria-invalid={isInvalid}
                  ></Input>
                  {isInvalid && (
                    <FieldError errors={field.state.meta.errors}></FieldError>
                  )}
                </Field>
              );
            }}
          </form.Field>
          <form.Field name="password">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <Input
                    name={field.name}
                    id={field.name}
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => field.handleChange(e.target.value)}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    autoComplete="off"
                  ></Input>
                  {isInvalid && (
                    <FieldError errors={field.state.meta.errors}></FieldError>
                  )}
                  <Button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <EyeClosed /> : <Eye />}
                  </Button>
                </Field>
              );
            }}
          </form.Field>
          <Button type="submit">Submit</Button>
        </FieldGroup>
      </form>
    </div>
  );
}
