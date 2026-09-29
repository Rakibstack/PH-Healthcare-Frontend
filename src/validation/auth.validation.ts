import z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please provide a valid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(50, "Password must not exceed 50 characters")
     .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    ),
});

export const registerUserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters long")
    .max(20, "Name must not exceed 20 characters"),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please provide a valid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(50, "Password must not exceed 50 characters")
     .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    ),
    confirmPassword : z.string().min(1)
}).refine((data) => data.password === data.confirmPassword,{
  message : "Password Not Match",
  path: ["confirmPassword"]
})