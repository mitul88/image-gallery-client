import { BiSolidEditAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const SingleInputForm = ({defaultValue, onClose, elemType}) => {
  return (
    <form>
        <div className="flex">
            {!elemType && (
                <input type="text" defaultValue={defaultValue} className="border border-gray-400 px-2 rounded" />
            )}
            {elemType === 'textarea' && (
                <textarea type="text" defaultValue={defaultValue} className="border border-gray-400 px-2 rounded" />
            )}
            <button type='submit' className='text-gray-500 h-[30px] w-[30px] flex flex-col justify-center items-center bg-gray-100  mx-1 rounded-full'><BiSolidEditAlt /></button>
            <button onClick={()=>onClose(false)} className='text-gray-500 bg-gray-100 h-[30px] w-[30px] flex flex-col justify-center items-center rounded-full'><AiOutlineClose /></button>
        </div>
    </form>
  )
}

export default SingleInputForm