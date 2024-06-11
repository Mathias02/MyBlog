
import Image from "next/image";
import Link from "next/link";


const HeaderPage = () => {

  return (
    <header>
      <div className="flex items-center justify-between shadow-xl px-9 border-b border-white bg-black-800">
        <div className="flex justify-between items-center px-2 py-3 text-white">
            <Link href={'/'}>
              <Image src={"/logo.svg"} width={125} height={125} alt="logoImg" />
            </Link>
            <ul className="flex space-x-10 capitalize items-center ml-5">
                <li className="hover:text-green-500 py-3 cursor-pointer">contact</li>
            </ul>
        </div>
        <div>
            <button className="btn btn-md btn-outline btn-success text-xs capitalize">Logout</button>
        </div>
      </div>
    </header>
  )
}

export default HeaderPage