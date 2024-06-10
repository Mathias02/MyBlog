
import Link from "next/link";
import { format } from "date-fns";


const Views = ({pages}) => {
  return (
    <div className="px-3 mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-2 text-black mb-7 p-7">
            {pages.map((post) => {
                return( 
                <Link  
                className="bg-white p-2 rounded-md"  
                href={`/viewTopics/${post.id}`}
                key={post.id}
                  >
                    <h2 className="text-green-600 font-bold text-xl">{post.title}</h2>
                    <p className="text-xs">created: {format(post.createdAt, 'yyy-MM-d')}</p>
                </Link>   
               )
            })}
    </div>
  )
}

export default Views