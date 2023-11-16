import prisma from "@/utils/client";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (request:NextRequest, { params }:{params: any}) => {
    const {id} = params;
    const body = await request.json();
    console.log(body);
    try {

        await prisma.work.create({
            data: {
                ...body, 
                startDate: new Date(body.startDate), 
                endDate: new Date(body.endDate), 
                userId: parseInt(id)},
        });

        return NextResponse.json({message: "Work added successfully."}, {status: 201})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Something went wrong"}, { status: 500});
    }
}

