'use client'

import axios from 'axios';
import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useRouter } from 'next/navigation';





const AddTopics = () => {
  const inputCss="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-300"
  const [formData, setFormData] = useState({
    title:'',
    content: '',
  })

  const router = useRouter();

  const handleChange = (e) =>{
    e.preventDefault();
    const {name, value}= e.target;
    setFormData({
      ...formData, [name]: value,
    });
  };

    const formSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('api/posts', formData);
        if(response.status === 200){
            router.push(`app/viewTopics/${response.newPost.id}`); 
        }
      } catch (error) {
        console.error(error)
      }
      
    }

  
  return (
    <section className="bg-gray-500 mt-20 max-w-4xl mx-auto">
        <h2 className='p-2'>Create your post here</h2>
        <form className="mx-auto w-full" onSubmit={formSubmit}>
          <div className='mb-2'>
            <input 
            type='text' 
            value={formData.title}
            className={`${inputCss} text-2xl text-gray-500 font-bold`} 
            name="title" 
            id="title" 
            onChange={handleChange}
            placeholder="Enter the title of your topic"/>
          </div>
          <div>
            <TextareaAutosize 
            minRows={10}
            className={`${inputCss} text-xl text-black`}
            name='content'
            value={formData.content}
            onChange={handleChange}
            placeholder='Please enter your content'/>
          </div>
          <button type='submit' className='btn btn-accent w-full text-xl text-red cursor-pointer focus:bg-blue text-red'>Enter</button>
        </form>
    </section>
  )
}

export default AddTopics
