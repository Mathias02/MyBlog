'use client'

import axios from "axios";
import { useState} from "react";
import { useRouter } from "next/navigation";

const FormComments = ({postId}) => {
    const [comment, setComment] = useState('');
    const router = useRouter();


    const changeComment = (e) => {
        setComment(e.target.value)
    };

    const submitComment = async () => {
      if(comment.trim() !== '') {
        try {
          const commenting = await axios.post('/api/addComment', {
            postId, text: comment
          })
          
          if(commenting.status === 200){
            setComment('');
            router.refresh();
          }
        } catch (error) {
          console.error(error)
        }
      }   
    };

  return (
    <div className='mt-2 text-left max-w-4xl w-full'>
        <div>
           <label htmlFor="newComments" 
           className='text-gray-700 font-bold text-sm block mb-1 opacity-40'>Add comments</label>
        </div>
        <div>
           <input type='text' name="comment" id="newComments" value={comment} onChange={changeComment} placeholder="type here" className="input input-bordered input-md w-full max-w-sm" required />
        </div>
        <button type="submit" className="btn btn-outline btn-md btn-success mt-3 text-sm" onClick={submitComment}>Submit</button>
    </div>
  )
}
export default FormComments