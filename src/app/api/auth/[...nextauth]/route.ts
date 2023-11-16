import prisma from "@/utils/client";
import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import { RequestInternal } from "next-auth";

export const authOptions = NextAuth({
   providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },

            authorize: async(credentials: Record<"email" | "password", string>, req: Pick<RequestInternal, "body" | "query" | "headers" | "method">) => {
               const { email, password } = credentials;
               try {
                 const user = await prisma.user.findUnique({
                    where: {email}
                })

                if (!user) {
                    throw new Error("User does not exist");
                }

                const passwordsMatch = await bcrypt.compare(password, user.password);
                if(!passwordsMatch) {
                    throw new Error("Password is incorrect");
                }

                return user;
               } catch (error) {
                 console.log(error);
               } 
            }
        })
    ],
    callbacks: {
        session: async ({ session, token }) => {
            if (session?.user) {
                session.user.id = token.uid;
            }
            return session;
        },
        jwt: async ({ user, token }) => {
            if (user) {
                token.uid = user.id;
            }
            return token;
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login"
    }
})

//const handler = NextAuth(authOptions);

export { authOptions as GET, authOptions as POST}