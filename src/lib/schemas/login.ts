import { z } from "zod";

const strongPassword = z
  .string()
  .min(8)
  .max(128)
  .regex(/[A-Z]/, "Must contain an uppercase letter")
  .regex(/[a-z]/, "Must contain a lowercase letter")
  .regex(/[0-9]/, "Must contain a number")
  .regex(/[^A-Za-z0-9]/, "Must contain a symbol");

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: strongPassword,
});

export type LoginInput = z.infer<typeof loginSchema>;
