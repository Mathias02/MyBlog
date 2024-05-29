'use client'
import axios from "axios";
import { useState } from "react";

const FormComments = ({postId}) => {

    const [comment, setComment] = useState('');

    const changeComment = (e) => {
        setComment(e.target.value)
    };

    const submitComment = async () => {
      if(comment.trim() !== '') {
        try {
          const nexEntry = await axios.post('/api/addcomment', {
            postId, text: content
          })
        } catch (error) {
          console.error(error)
        }
      }
       
    };


  return (
    <div className='mt-2 text-left'>
        <div>
           <label htmlFor="newComments" 
           className='text-gray-700 font-bold text-sm block mb-1 opacity-40'>Add comments</label>
        </div>
        <div>
           <input id="newComments" value={comment} onChange={changeComment} type="text" placeholder="type here" className="input input-bordered input-md w-full max-w-sm" />
        </div>
        <button type="submit" className="btn btn-outline btn-md btn-success mt-3 text-sm" onClick={submitComment}>Submit</button>
    </div>
  )
}
export default FormComments