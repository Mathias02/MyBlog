"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import Views from "@/components/Views";
import Pagination from "@/components/Pagination";



const ViewTopics = () => {

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);

// fetching data

  useEffect(() => {
   const getPost = async () => {
      const response = await fetch("/api/fetchData");
      const resp = await response.json();
      setPosts(resp);
      console.log(resp)
   };
   getPost()
  },[]);
 
  // get current page 

  const lastPage = currentPage * postPerPage;
  const firstPage = lastPage - postPerPage; 

  // slicing all posts
  const pages = posts.slice(firstPage, lastPage); 

  //change pages

  const pageChanger = (pageIndex) => setCurrentPage(pageIndex);
  

  return (
    <section>
      <div className="bg-cyan-800 p-2 h-screen px-10">
        <div className="flex justify-end pr-4 capitalize text-sm">
          <Link href={'/addTopics'} className=" transition-all duration-50 py-4 hover:text-green-400">create post</Link>
        </div>
        <h1 className="text-2xl">Posts</h1>

        <Views pages={pages} />
        <Pagination postPerPage={postPerPage} totalPage={posts.length} pageChanger={pageChanger}/>

      </div>   
    </section>
  )
}

export default ViewTopics