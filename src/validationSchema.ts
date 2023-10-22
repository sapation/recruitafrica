import { z } from "zod"

export const loginSchema = z.object({
    email: z.string({required_error: "Name is required",invalid_type_error: "Name must be a string",}).trim().email({ message: "Please enter a valid email" }),
    password: z.string().trim().min(5, 'Password should be more than 5'),
})