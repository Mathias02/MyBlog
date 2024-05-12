import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FrontPage = () => {
  return (
    <section className='mt-20 bg-green'>
    <div className='grid md:grid-cols-2 gap-2'>
      <div className="p-1 rounded-md flex flex-col items-center justify-center bg-gray-500">
        <h1 className="text-3xl font-semibold capitalize text-left"><span className="text-5xl space-y-2 text-green">Discover </span><br />the true meaning through these topic </h1>
        <p className="mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nemo eum est soluta commodi sint qui aliquam quam blanditiis dicta incidunt ipsum suscipit cupiditate alias vero doloribus praesentium, numquam temporibus.</p>
        <div className="flex gap-4 mt-5">
          <Link href={'/viewTopics'}>
            <button className="btn btn-md capitalize">view posts</button>
          </Link>
          <Link href={'/addTopics'}>
            <button className="btn btn-md capitalize">create posts</button>
          </Link>
        </div>
      </div>
      <div>
        <Image src={'/images/6.jpg'} width={950} height={600} alt="leftImg" className="rounded-md"/>
      </div>
    </div>
  </section>
  )
}

export default FrontPage