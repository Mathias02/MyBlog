
import Image from "next/image";

const HeaderPage = () => {
  return (
    <div className=" flex items-center justify-between bg-white px-6 fixed top-0 right-0 left-0">
        <div className="flex justify-between items-center px-2 py-3 text-black space-x-20">
            <Image src={"/logo.svg"} width={125} height={125} alt="logoImg" />
            <ul className="flex space-x-10 capitalize items-center">
                <li className="hover:text-green-500 py-3 cursor-pointer">sale</li>
                <li className="hover:text-green-500 py-3 cursor-pointer">location</li>
                <li className="hover:text-green-500 py-3 cursor-pointer">owner</li>
            </ul>
        </div>
        <div>
            <button className="btn btn-md btn-accent text-xs capitalize">subscribe to our newsletter</button>
        </div>
    </div>
  )
}

export default HeaderPage