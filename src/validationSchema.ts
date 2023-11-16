import { z } from "zod"

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

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

export const profileForm = z.object({
    firstName: z.string().min(3, 'Firstname should be minimum of 3 characters').max(255),
    lastName: z.string().min(3, 'Lastname should be minimum of 3 characters').max(255),
    phoneNumber: z.string().min(10, 'Phone number is required').regex(phoneRegex, 'Please enter a valid phone number!'),
    country: z.string(),
    gender: z.string()
});

export const WorkForm = z.object({
    id: z.number(),
    jobTitle: z.string().min(3, 'Please enter Job title').max(255),
    companyName: z.string().min(3, 'Please enter company name').max(255),
    country: z.string(),
    startDate: z.string(),
    endDate : z.string().optional(),
    companyWebsite: z.string(),
    jobDescription: z.string(),
    userId: z.number()
})

export const EducationForm = z.object({
    coarseOffered: z.string().min(3, 'Please enter coarse name').max(255),
    universityName: z.string().min(3, 'Please enter university name').max(255),
    universityAddress: z.string().min(3, 'Please enter university address').max(255),
    startDate: z.string(),
    endDate : z.string(),
    universityWebsite: z.string().url()
})

export const RefereeForm = z.object({
    name: z.string().min(3, 'Please enter referee name').max(255),
    title: z.string().min(3, 'Please enter job title name').max(255),
    email: z.string().min(3, 'Please enter contact').max(255),
    contact: z.string().min(10, "Please enter a contact"),
})