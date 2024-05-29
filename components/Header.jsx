import Link from "next/link";
import Image from "next/image";


const HeaderPage = () => {

  return (
    <header className=" flex items-center justify-between box-shadow-md bg-white px-6 mb-15">
        <div className="flex justify-between items-center px-2 py-3 text-black space-20">
            <Link href={'/'}>
              <Image src={"/logo.svg"} width={125} height={125} alt="logoImg" />
            </Link>
            <ul className="flex space-x-10 capitalize items-center">
                <li className="hover:text-green-500 py-3 cursor-pointer">sale</li>
                <li className="hover:text-green-500 py-3 cursor-pointer">location</li>
                <li className="hover:text-green-500 py-3 cursor-pointer">owner</li>
            </ul>
        </div>
        <div>
            <button className="btn btn-md btn-outline btn-success text-xs capitalize">Logout</button>
        </div>
    </header>
  )
}

export default HeaderPage