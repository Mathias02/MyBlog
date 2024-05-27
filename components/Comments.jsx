import React from 'react'

const Comments = ({postId}) => {
  return (
    <div className='mt-2 w-full bg-gray-300 text-sm p-2 text-left rounded-md'>
        <span className='text-blue-700 text-sm font-bold mr-1 mb-2'>By Charles,</span>
        <span className='text-gray-900 opacity-50 mr-1'>10-June-2021.</span>
        <p className='inline text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facere in fugiat vel assumenda ad necessitatibus voluptate, dignissimos dicta placeat, maiores perferendis repellat ullam eveniet odit ex dolorem, nisi dolorum.</p>
    </div>
  )
}

export default Comments