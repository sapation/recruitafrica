import prisma from "@/utils/client";
import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from "bcrypt"

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

            async authorize(credentials : any) {
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