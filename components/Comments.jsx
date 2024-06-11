
import { format } from "date-fns";
import { prisma } from "@/lib/prisma";


const Comments = async ({postId}) => {

  const comments = await prisma.comment.findMany({
    where: {
     postId,
    },
  });

  return (
    <div className="mt-2 mx-w-4xl h-full flex flex-col flex-grow">
      <h4 className="text-left font-bold mb-3">Comments</h4>
      <ul className="text-gray-600 p-2 bg-blue-100">
        {
          comments.map((comment) => {
           return(
            <li key={comment} className="mt-2 bg-white p-2 font-semibold">
              <div className="flex justify-center flex-col text-sm">
                <p>{comment.text}</p>
                <p>By: Name</p>
                <p className="text-cyan-700 mt-1">{format(comment.createdAt, 'yyyy-MM-d')}</p>
              </div>
            </li>
           ) 
          })
        }
      </ul>
    </div>
  )
}

export default Comments