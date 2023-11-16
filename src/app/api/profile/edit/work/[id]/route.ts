import prisma from "@/utils/client";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest, { params }:{params:any}) {
    const { id } = params;

    try {
       const work = await prisma.work.findUnique({
            where: { 
                id: parseInt(id), 
            },
        })

        return NextResponse.json(work, {status: 200})

    } catch (error) {
       return NextResponse.json({message: "Something went wrong"}, { status: 500});
    }
}

export const POST = async (request:NextRequest, { params }:{params: any}) => {
    const {id} = params;
    const body = await request.json();

    try {

        await prisma.work.update({
            where: { id: parseInt(id)},
            data: {
                ...body,
                startDate: new Date(body.startDate), 
                endDate: new Date(body.endDate), 
                // userId: parseInt(id)
            },
        });

        return NextResponse.json({message: "Work updated successfully."}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: "Something went wrong check the fields and try again"}, { status: 500});
    }
}

