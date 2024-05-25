import React from 'react'

const FooterPage = () => {
  return (
    <footer className='bg-green-800 border border-white py-10 px-4'>
        <div className='flex justify-around'>
            <div className="flex flex-col gap-1">
                <h2 className='font-bold'>Learn from inspired people to be inspired with new inspiration</h2>
                <p className='opacity-40'>Born to learn and teach others</p>
            </div>
            <p className='opacity-60 text-gray-100'>&copy; 2024. MTD Ba-manya-yi, Matt</p>
        </div>  
    </footer>
  )
}

export default FooterPage