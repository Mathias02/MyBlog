import { FiAlertTriangle } from "react-icons/fi";
import Link from 'next/link';

const NotFoundPage= () => {
  return (
 <div className="bg-blue-50 min-h-screen flex-grow">
    <div className="container mx-auto max-w-2xl py-14">
            <div className="bg-white px-6 py-12 mb-4 shadow-md rounded-md m-4 flex flex-col">
                <FiAlertTriangle className="text-red-400 text-8xl m-auto"/>
                <div className="text-center text-red">
                    <h1 className="text-3xl font-bold mt-4 mb-2 text-black">Page not found</h1>
                    <p className="text-red-500 mb-8">Page you are looking for doesn't exist</p>
                    <Link href={'/'} className="bg-blue-600 hover:bg-blue-700 py-4 px-8 capitalize rounded-md">Go home</Link>
                </div>
            </div>
    </div>
 </div>
  )
}

export default NotFoundPage