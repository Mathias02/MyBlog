'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';






const AddTopics = () => {
  
  const [formData, setFormData] = useState({
    title:'',
    content: '',
  });
  const router = useRouter();
  const inputCss="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-300";

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
          router.push('/viewTopics');  
        }
      } catch (error) {
        console.error(error)
      }  
    };

  
  return (
    <div className="bg-gray-500 mt-8 max-w-4xl mx-auto">
        <h2 className='p-2 ont-semibold text-xl'>Create your post here</h2>
        <form className="mx-auto w-full" onSubmit={formSubmit}>
          <div className='mb-2'>
            <input 
            type='text' 
            value={formData.title}
            className={`${inputCss} text-xl text-gray-500 `} 
            name="title" 
            id="title" 
            onChange={handleChange}
            placeholder="your topic here" required/>
          </div>
          <div>
            <TextareaAutosize 
            minRows={6}
            className={`${inputCss} text-xl text-black`}
            name='content'
            value={formData.content}
            onChange={handleChange}
            placeholder='Please enter your content' required/>
          </div>
          <button type='submit' className='btn btn-success w-full text-xl text-red cursor-pointer focus:bg-blue text-red'>Enter</button>
        </form>
    </div>
  )
}

export default AddTopics
