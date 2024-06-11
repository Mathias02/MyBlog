import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(Request) {
        try {
            const {postId, text} = await Request.json();
            const newComment = await prisma.comment.create({
                data:{
                  postId, text
                }
            });
            return NextResponse.json(newComment, { status: 200 }); 
        } catch (error) {

            return NextResponse.json({message: 'Something went wrong'},{status: 500});
        }          
}
