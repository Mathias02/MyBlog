import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { format } from "date-fns";

const ViewTopics = async () => {

  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  });

  console.log(posts);
 
  return (
    <div>
      <div className="max-w-4xl mx-auto mt-8 bg-slate-600 py-2">
        <h1 className="text-center text-3xl text-blue mb-5">Posts</h1>
        <div className="grid md:grid-cols-3 gap-2 text-black p-4">
          {posts.map((post) => {
          return(
              <Link 
              key={post.id} 
              href={`/viewTopics/${post.id}`} 
              className='bg-white shadow-md rounded-md py-3 text-xl'
              >
                <div>
                  <h2 className="font-semibold text-blue-800">{post.title}</h2>
                  <p className="opacity-40 text-xs">Date: {format(post.createdAt,'d-MM-yyyy')}</p>
                </div>
              </Link>
             )
          })}
        </div>
      </div>
    </div>
  )
}

export default ViewTopics