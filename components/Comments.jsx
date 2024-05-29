
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";


const Comments = async ({postId}) => {
  
  const results = await prisma.comment.findMany({
    where: {
      postId,
    },
  });

  return (
    <div className="mt-2">
      <h4 className="text-left font-bold mb-1">Comments</h4>
      <ul>
        {results.map((cmt) => {
          return(
            <li key={cmt.id} className="bg-gray-300 py-2 px-1 rounded-md mb-1">
                <div className="flex items-center">
                  <div className="text-xs">
                    <li>{cmt.text}</li>
                    <li className="mt-1 text-slate-600 text-xs">{format(cmt.createdAt, 'd,MM,yyyy')}</li>
                  </div>
                </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Comments