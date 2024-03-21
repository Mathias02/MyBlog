import Image from "next/image"


function HomPage() {
  return (
    <selection>
      <div className='flex item-center pt-20 p-10 gap-5'>
        <div className="w-full mt-6">
          <h1 className='text-7xl text-blue-400 text-left mb-10'><span className="text-gray-500 font-semibold">Discover</span><br /> New concepts on biblical topics</h1>
          <p className="text-2xl">All it takes is to come up with your biblical topics or have a point of view on aligned topics and also be able to defend it when questions rise.</p>
        </div>
        <div>
          <Image src="/images/6.jpg" width={1050} height={300} alt={'image'} className="text-center mx-auto mt-5 bg-primary rounded-md" />
        </div>
      </div>
      <div className="flex mx-auto gap-10 items-center justify-center max-w-6xl mt-10">
        <button className="btn btn-wide bg-blue-400">Login</button>
        <button className="btn btn-wide bg-blue-400">Admin</button>  
      </div>
    </selection>
  )
}

export default HomPage