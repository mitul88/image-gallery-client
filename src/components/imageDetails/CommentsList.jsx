import { useRouteLoaderData } from 'react-router-dom';
import ErrorBlock from '../../ui/ErrorBlock';
import CommentForm from './CommentForm';
import jwtDecode from 'jwt-decode';
                 
const CommentsListSection = ({
    commentData, 
    submitComment, 
    deleteComment, 
    showCommentForm, 
    toggleCommentForm, 
    isCommentPending, 
    isPostCommentError
}) => {
    const token = useRouteLoaderData('root');

    let decoded;
    if (token){
      if(token !== "EXPIRED") {
        decoded = jwtDecode(token)
      }
    };

    const submitDeleteComment = e => {
        e.preventDefault();
        let deleteCommentForm = document.forms.deleteCommentForm;
        const formData = new FormData(deleteCommentForm);
        deleteComment(formData);
    }

  return (
    <div className='w-full max-h-[400px] overflow-x-hidden overflow-y-auto'>
        {isPostCommentError && (
                <ErrorBlock
                    title="Failed to post comment"
                    message={isPostCommentError.info?.message || 'Please try again later'}
                /> 
        )}
        {showCommentForm && (
            <div className="mr-5 mb-2">
                <CommentForm 
                    submitComment={submitComment} 
                    toggleCommentForm={toggleCommentForm} 
                    isCommentPending={isCommentPending}
                />
            </div>
        )}
        {commentData.map(comment => (
            <div key={comment._id} className="rounded-full bg-gray-100 p-3 mb-2 max-w-[250px]">
                <h4 className="text-sm font-bold ml-5">{comment.user.name}</h4>
                <p className="text-sm text-gray-400 ml-5">{comment.user_comment}</p>
                {decoded?._id && decoded._id === comment.user.id ? (
                    <div className="w-1/2 flex justify-around text-xs ml-5 mt-2">
                        <button className="text-blue-400">
                            Edit
                        </button>
                        <form onSubmit={submitDeleteComment} id="deleteCommentForm" className='flex flex-row justify-center items-center '>
                            <input 
                                type="text" 
                                className="hidden" 
                                value={comment._id}
                                name="comment_id" 
                                readOnly={true} 
                            />
                            <button type="submit" className="text-blue-400">
                                Delete
                            </button>
                        </form>
                    </div>
                ) : null }
            </div>
        ))}
        
{/* 
        <div className="rounded-full bg-gray-100 p-3 mb-2 max-w-[250px]">
            <h4 className="text-sm font-bold ml-5">Redwan Rahman</h4>
            <p className="text-sm text-gray-400 ml-5">My backyard !!</p>
        </div>

        <div className="rounded-full bg-gray-100 p-3 mb-2 max-w-[250px]">
            <h4 className="text-sm font-bold ml-5">Romit Paul</h4>
            <p className="text-sm text-gray-400 ml-5">I wish I could go there</p>
        </div>

        <div className="rounded-full bg-gray-100 p-3 mb-2 max-w-[250px]">
            <h4 className="text-sm font-bold ml-5">Sabuj Tarafdar</h4>
            <p className="text-sm text-gray-400 ml-5">Heaven !!</p>
        </div>

        <div className="rounded-full bg-gray-100 p-3 mb-2 max-w-[250px]">
            <h4 className="text-sm font-bold ml-5">Sadek Rahman</h4>
            <p className="text-sm text-gray-400 ml-5">I have taken a similar pic back in 2012 in canada. this place remind me of that place</p>
        </div> */}
    </div>
  )
}

export default CommentsListSection