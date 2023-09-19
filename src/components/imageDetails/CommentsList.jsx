import ErrorBlock from '../../ui/ErrorBlock'
import CommentForm from './CommentForm'
                 
const CommentsListSection = ({submitComment, showCommentForm, toggleCommentForm, isCommentPending, isCommentError}) => {
    
  return (
    <div className='w-full max-h-[400px] overflow-x-hidden overflow-y-auto'>
        {isCommentError && (
                <ErrorBlock
                    title="Failed to post comment"
                    message={isCommentError.info?.message || 'Please try again later'}
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
        <div className="rounded-full bg-gray-100 p-3 mb-2 max-w-[250px]">
            <h4 className="text-sm font-bold ml-5">Shahed Rahman</h4>
            <p className="text-sm text-gray-400 ml-5">Beautiful pic !!</p>
        </div>

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
        </div>
    </div>
  )
}

export default CommentsListSection