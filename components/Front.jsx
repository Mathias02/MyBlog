import Image from 'next/image'
import Link from 'next/link'


const FrontPage = () => {

  return (
    <div className='bg-cyan-900 opacity-80'>
        <div className='grid lg:grid-cols-2 p-8'>
          <div className="flex flex-col justify-center py-4 px-3">
            <h1 className="text-5xl text-stone-400 text-left font-bold mb-3 pl-2">Encounter</h1>
            <h2 className='text-xl text-left pl-2'>Through these topics we need your comments</h2>
            <p className="mt-4 text-left pl-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nemo eum est soluta commodi sint qui aliquam quam blanditiis dicta incidunt ipsum suscipit cupiditate alias vero doloribus praesentium, numquam temporibus.</p>
            <div className="flex justify-center gap-4 mt-5">
              <Link href={'/viewTopics'}>
                <button className="btn btn-md capitalize">view posts</button>
              </Link>
              <Link href={'/addTopics'}>
                <button className="btn btn-md capitalize">create posts</button>
              </Link>
            </div>
          </div>
          <div>
            <Image src={'/images/6.jpg'} width={1000} height={750} alt="leftImg" className="object-cover" />
          </div>
        </div>
  </div>
  )
}

export default FrontPage