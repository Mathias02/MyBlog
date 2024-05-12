
import Image from 'next/image'
import Link from 'next/link'

const FrontPage = () => {
  return (
    <section className='mt-20'>
    <div className='grid md:grid-cols-2 gap-2'>
      <div className="rounded-md flex flex-col justify-center bg-gray-600">
        <h1 className="text-5xl text-stone-400 text-left font-bold mb-2 pl-2">Encounter</h1>
        <h2 className='text-xl text-left pl-2'>Through these topics the revelation of the word of God</h2>
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
        <Image src={'/images/6.jpg'} width={950} height={600} alt="leftImg" className="rounded-md object-cover"/>
      </div>
    </div>
  </section>
  )
}

export default FrontPage