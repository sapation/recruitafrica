import prisma from "@/utils/client";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { id } = params;

    try {
       const profile = await prisma.user.findUnique({
            where: { 
                id: parseInt(id), 
            },
        })

        return new NextResponse(JSON.stringify(profile, {status: 200}))

    } catch (error) {
       return new NextResponse(JSON.stringify({message: "Something went wrong"}, { status: 500}));
    }
}