
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(Request) {
  
    const {postId, text} = await Request.json();

        try {
            const newCmt = await prisma.comment.create({
                data:{
                  postId, text: content
                }
            }) 
            return NextResponse.json({newCmt},{status: 200});     
        } catch (error) {
            return NextResponse.json({message: 'Something went wrong'},{status: 500});
        }
            
}