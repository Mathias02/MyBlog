import { prisma } from "@/lib/prisma";
import Link from "next/link";

const ViewTopics = async () => {

  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
 console.log(posts)
 
  return (
    <section>
      <div className="max-w-4xl mx-auto mt-20 bg-slate-600 py-2">
        <h1 className="text-center text-3xl text-blue mb-5">Posts</h1>
        <div className="grid md:grid-cols-3 gap-2 text-black p-4">
          {posts.map((post) => {
            <Link key={post.id} href={`/viewTopics/${post.id}`} className='bg-white shadow-md'>
              <div className="bg-white-600 flex flex-col">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </div>
            </Link>
          })}
        </div>
      </div>
    </section>
  )
}

export default ViewTopics