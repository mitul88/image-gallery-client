import React from 'react'
import { Link } from 'react-router-dom'

const DropdownOptions = ({children, show}) => {
  return (
    <div className={`${show? 'block': 'hidden'} absolute top-[60px] right-3 p-3 border border-gray-200 bg-white text-lg min-w-[120px] flex flex-col gap-3`} style={{fontFamily: "Quicksand"}}>
        {children}
    </div>
  )
}

export default DropdownOptions