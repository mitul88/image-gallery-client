import { BiSolidEditAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const SingleInputForm = ({defaultValue, name, onClose, elemType, singleEdit}) => {
  const [input, setInput] = useState("");

  const submitForm = e => {
    e.preventDefault()
    const formData = new FormData();
    formData.append(name, input);
    singleEdit(formData)
  };

  if(!defaultValue) defaultValue = "";

  return (
    <form onSubmit={submitForm}>
        <div className={`flex ${elemType === "textarea" ? "flex-col" : "flex-row"}`}>
            {!elemType && (
                <input 
                  type="text" 
                  name="input"
                  onChange={(e)=>setInput(e.target.value)} 
                  defaultValue={defaultValue} 
                  className="border border-gray-200 px-2 rounded mb-1 w-[220px]" 
                />
            )}
            {elemType === 'textarea' && (
                <textarea 
                  type="text" 
                  name="input" 
                  defaultValue={defaultValue}
                  onChange={(e)=>setInput(e.target.value)}
                  className="border border-gray-200 px-2 rounded mb-1 " 
                />
            )}
            <div className="flex">
            <button type='submit' className={`${elemType !== "textarea" ? "hidden" : "block" } text-gray-500 h-[30px] w-[30px] flex flex-col justify-center items-center bg-gray-100  mx-1 rounded-full`}><BiSolidEditAlt /></button>
            <button onClick={()=>onClose(false)} className='ml-1 text-gray-500 bg-gray-100 h-[30px] w-[30px] flex flex-col justify-center items-center rounded-full'><AiOutlineClose /></button>
            </div>
        </div>
    </form>
  )
}

export default SingleInputForm