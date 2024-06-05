
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(Request) {
  
    const {title, content} = await Request.json();

        try {
            const newPost = await prisma.post.create({
                data:{
                  title, content
                }
            }) 
            return NextResponse.json(newPost, { status: 200 });     
        } catch (error) {
            return NextResponse.json({message: 'Something went wrong'},{status: 500});
        }
            
}
