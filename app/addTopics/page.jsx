'use client'

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
        const response = await fetch('api/posts',{
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        
        if(response.ok){
          alert("post successfully created")
          setFormData('')
          router.push('/viewTopics')
        }else{
          alert("something went wrong")
        }
        
      } catch (error) {
        console.error(error)
      }  
    };

  
  return (
    <section className='md:min-h-96'>
        <div className="bg-gray-200 py-10">
          <div className="max-w-3xl mx-auto sm:h-full">
            <h2 className='font-semibold text-2xl text-black mb-4'>Create a new post</h2>
            <form className="mx-auto w-full sm:py-13" onSubmit={formSubmit}>
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
                className={`${inputCss} text-xl text-black mb-4 resize-none`}
                name='content'
                value={formData.content}
                onChange={handleChange}
                placeholder='Please enter your content' required/>
              </div>
              <button type='submit' className='mb-8 btn btn-success w-full text-xl text-red-300 cursor-pointer focus:bg-blue text-red'>Enter</button>
            </form>
          </div>
        </div>
    </section>
  )
}

export default AddTopics
