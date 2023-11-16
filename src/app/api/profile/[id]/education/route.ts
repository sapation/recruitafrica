import prisma from "@/utils/client";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (request:NextRequest, { params }:{params: any}) => {
    const {id} = params;
    const body = await request.json();

    try {

        await prisma.education.create({
            data: {...body, userId: parseInt(id)},
        });

        return NextResponse.json({message: "Education added successfully."}, {status: 201})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Something went wrong"}, { status: 500});
    }
}

