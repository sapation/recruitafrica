import prisma from "@/utils/client";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (request:NextRequest, { params }:{params: any}) => {
    const {id} = params;
    const body = await request.json();

    try {

        await prisma.profile.create({
            data: {...body, profile: "./blog1.jpg", userId: parseInt(id)},
        });

        return NextResponse.json({message: "Profile Updated successfully."}, {status: 201})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Something went wrong"}, { status: 500});
    }
}

