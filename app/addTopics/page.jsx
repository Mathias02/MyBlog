'use client'

import TextareaAutosize from 'react-textarea-autosize';

const AddTopics = () => {
  const inputCss="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-300"
  return (
    <section className="bg-gray-500 mt-6 max-w-4xl mx-auto">
        <form className="py-10 mx-auto w-full">
          <div className='mb-2'>
            <input 
            type='text' 
            className={`${inputCss} text-2xl text-gray-500 font-bold`} 
            name="title" 
            id="title" 
            placeholder="Enter the title"/>
          </div>
          <div>
            <TextareaAutosize 
            minRows={15}
            className={`${inputCss} text-xl`}
            name='content'
            placeholder='Please enter your content'/>
          </div>
          <button className='btn btn-success btn-large w-full text-xl text-white cursor-pointer focus:bg-blue text-red'>Enter</button>
        </form>
    </section>
  )
}

export default AddTopics
