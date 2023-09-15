import React from 'react'

const CommentForm = ({toggleCommentForm}) => {
    const submitComment = e => {
        e.preventDefault()
    }
  return (
    <form onSubmit={submitComment} className=' p-3 rounded-md border border-gray-300'>
        <div className="mb-2 w-full flex justify-center">
            <input type="text" className='rounded-md border border-gray-200 px-3 py-1 mx-auto w-full' />
        </div>
        <div className='w-full flex flex-row justify-around'>
            <button className="px-3 py-1 bg-gray-100 text-gray-400 text-xs rounded-md" type="submit">Comment</button>
            <button className="px-3 py-1 bg-gray-100 text-gray-400 text-xs rounded-md" onClick={toggleCommentForm}>Cancel</button>
        </div>
    </form>
  )
}

export default CommentForm