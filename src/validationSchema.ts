import { z } from "zod"

export const loginSchema = z.object({
    email: z.string({required_error: "Name is required",invalid_type_error: "Name must be a string",}).trim().email({ message: "Please enter a valid email" }),
    password: z.string().trim().min(1, 'Password field is required'),
});

export const registerSchema = z.object({
    firstName: z.string().min(3, 'Firstname should be minimum of 3 characters').max(255),
    lastName: z.string().min(3, 'Lastname should be minimum of 3 characters').max(255),
    email: z.string({required_error: "Name is required",invalid_type_error: "Name must be a string",}).trim().email({ message: "Please enter a valid email" }),
    password: z.string().trim().min(5, 'Password should be more than 5'),
    confirmPassword: z.string().trim().min(5),
    isEmployer: z.boolean().optional()
})
.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  });