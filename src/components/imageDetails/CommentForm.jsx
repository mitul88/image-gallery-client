import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const CommentForm = ({submitComment, toggleCommentForm, isCommentPending}) => {

    const params = useParams();
    const [comment, setComment] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault()
        if (comment === "") return;
        const data = new FormData();
        data.append("user_comment", comment);
        data.append("image_id", params.imageId);
        submitComment(data)
    }

  return (
    <>
        {isCommentPending && (
            <div className="rounded-full bg-gray-100 p-3 mb-2 max-w-[250px]">
                <h4 className="text-sm font-bold ml-5 text-gray-300">Posting Comment ....</h4>
                <p className="text-sm text-gray-200 ml-5">{comment}</p>
            </div>
        )}
        {!isCommentPending && (
            <form onSubmit={handleSubmit} className='p-3 rounded-md border border-gray-300'>
                <div className="mb-2 w-full flex justify-center">
                    <textarea 
                        type="text"
                        name='user_comment' 
                        className='rounded-md border border-gray-200 px-3 py-1 mx-auto w-full'
                        onChange={(e)=>setComment(e.target.value)}
                    ></textarea>
                    <input 
                        type="text" 
                        className="hidden" 
                        defaultValue={params.imageId} 
                        name='image_id'
                    />
                </div>
                <div className='w-full flex flex-row justify-around'>
                    <button 
                        className="px-3 py-1 bg-gray-100 text-gray-400 text-xs rounded-md" 
                        type="submit"
                    >Comment</button>
                    <button className="px-3 py-1 bg-gray-100 text-gray-400 text-xs rounded-md" onClick={toggleCommentForm}>Cancel</button>
                </div>
            </form>
        )}
    </>

  )
}

export default CommentForm