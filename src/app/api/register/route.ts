import prisma from "@/utils/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { type } from "os";

type user = {
    name: string,
    email: string,
    password: string
}
export async function POST(req:Request) {
    try{
        const body = await req.json();

        const hashedPassword = await bcrypt.hash(body.password, 10);
        body.password = hashedPassword;
        const email = body.email;

        const userExist = await prisma.user.findUnique({
                where: {email}
        });

        if(userExist) {
            return NextResponse.json({message: "User Already Exist."}, {status: 401})
        } else {
            await prisma.user.create({
                data: {...body}
            })
        }

        return NextResponse.json({message: "User registered successfully."}, {status: 201})
    } catch(error) {
        return NextResponse.json({message: "An error occurred while registering the user"}, {status: 500})
    }
}