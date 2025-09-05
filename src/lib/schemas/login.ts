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

export const userSchema = z.object({
  organization: z.enum(["OrgA", "OrgB", "OrgC"]), // dropdown
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must not exceed 30 characters"),
  email: z.string().email("Invalid email address"),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  phoneNumber: z.string().regex(/^\+?[0-9]{7,15}$/, "Phone number must be 7–15 digits, optional +"),
  status: z.enum(["Active", "Inactive", "Pending"]), // dropdown
});

export type LoginInput = z.infer<typeof loginSchema>;
export type FilterInput = z.infer<typeof userSchema>;
