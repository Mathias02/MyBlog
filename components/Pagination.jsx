import Link from "next/link";


const Pagination = ({postPerPage, totalPage, pageChanger}) => {

  const pageNumbers = [];

  for(let i=1; i<=Math.ceil(totalPage / postPerPage); i++){
      pageNumbers.push(i);
  }

  return (
   <div className="flex mx-auto justify-center pt-5 absolute bottom-0 left-[50%] right-[50%]">
     <ul className="mx-auto flex space-x-4">
        {
          pageNumbers.map((page) => {
            return (
              <li key={page} className="hover:text-blue-400 rounded-full border py-1 px-3 hover:bg-green-400 hover:text-black">
                <Link onClick={() => pageChanger(page)}  className="text-white" href='#'>{page}</Link>
              </li>
            )
          })
        }
     </ul>
   </div>
  )
}

export default Pagination