import { NextResponse } from "next/server";

export async function POST(req:Request) {
    try{
        const { email, password} = await req.json();
        console.log(email);
        console.log(password);

        return NextResponse.json({message: "User registered."}, {status: 201})
    } catch(error) {
        return NextResponse.json({message: "An error occurred while registering the user"}, {status: 500})
    }
}