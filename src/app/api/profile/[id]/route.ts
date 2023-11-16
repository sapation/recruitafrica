import prisma from "@/utils/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest, { params }:{params:any}) {
    const { id } = params;

    try {
       const profile = await prisma.user.findUnique({
            where: { 
                id: parseInt(id), 
            },
            include: {
                profile: true,
                works: true,
                educations: true,
                referee: true
            },

        })

        return NextResponse.json(profile, {status: 200})

    } catch (error) {
       return NextResponse.json({message: "Something went wrong"}, { status: 500});
    }
}