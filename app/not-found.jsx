import { FiAlertTriangle } from "react-icons/fi";
import Link from 'next/link';

const NotFoundPage= () => {
  return (
 <div className="bg-blue-50 min-h-screen flex-grow">
    <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-24 mb-4 shadow-md rounded-md m-4 md:0">
            <div className="flex justify-centre">
            <FiAlertTriangle />
            </div>
        </div>
        <div className="text-center text-red">
            <h1 className="text-3xl font-bold mt-4 mb-2">Page not found</h1>
            <p>Page you are looking for doesn't exist</p>
            <Link href={'/'} className="bg-blue-600 hover:bg-blue-700 py-4 px-8 capitalize">Go home</Link>
        </div>
    </div>
 </div>
  )
}

export default NotFoundPage