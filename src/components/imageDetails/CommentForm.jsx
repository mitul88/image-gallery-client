import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const CommentForm = ({submitComment, toggleCommentForm}) => {

    const params = useParams();
    const [comment, setComment] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault()
        const data = new FormData();
        data.append("comment", comment);
        data.append("imageId", params.imageId);
        submitComment(data)
    }

  return (
    <form onSubmit={handleSubmit} className='p-3 rounded-md border border-gray-300'>
        <div className="mb-2 w-full flex justify-center">
            <textarea 
                type="text"
                name='comment' 
                className='rounded-md border border-gray-200 px-3 py-1 mx-auto w-full'
                onChange={(e)=>setComment(e.target.value)}
            ></textarea>
            <input 
                type="text" 
                className="hidden" 
                defaultValue={params.imageId} 
                name='imageId'
            />
        </div>
        <div className='w-full flex flex-row justify-around'>
            <button className="px-3 py-1 bg-gray-100 text-gray-400 text-xs rounded-md" type="submit">Comment</button>
            <button className="px-3 py-1 bg-gray-100 text-gray-400 text-xs rounded-md" onClick={toggleCommentForm}>Cancel</button>
        </div>
    </form>
  )
}

export default CommentForm