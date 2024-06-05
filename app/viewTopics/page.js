"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { format } from "date-fns";



const ViewTopics = () => {

  const [posts, setPosts] = useState([])


  useEffect(() => {
   const getPost = async () => {
      const response = await fetch("/api/fetchData");
      const resp = await response.json();
      setPosts(resp);
      console.log(resp)
   };
   getPost()
  },[]);
 
  return (
    <section>
      <div className="bg-cyan-800 p-2 min-h-screen px-10">
        <div className="flex justify-end pr-4 capitalize text-sm">
          <Link href={'/addTopics'} className=" transition-all duration-50 py-4 hover:text-green-400">create post</Link>
        </div>
        <h1 className="text-2xl">Posts</h1>
        <div className="px-3 mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-2 text-black">
            {posts.map((post) => {
              return( 
                <Link  
                className="bg-white p-2 rounded-md"  
                href={`/viewTopics/${post.id}`}
                key={post.id}
                  >
                    <h2 className="text-green-900 font-bold text-xl">{post.title}</h2>
                    <p>created: {format(post.createdAt, 'yyy-d-MM')}</p>
                </Link>   
               )
            })}
        </div>
      </div>   
    </section>
  )
}

export default ViewTopics