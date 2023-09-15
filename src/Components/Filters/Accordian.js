import React,{useState} from 'react'
import { BsChevronDown , BsChevronUp } from "react-icons/bs";
const Accordian = ({title , component}) => {
    const [show, setShow] = useState(false)
  return (
    <div>
        <div className=" border-b-2">
        <div
          className="w-full p-3 flex items-center justify-between cursor-pointer"
          onClick={() => setShow(!show) }
        >
          <h1 className="text-xl font-semibold text-gray-500">{title}</h1>
          {show ? (
            <BsChevronDown className="text-2xl cursor-pointer font-bold text-gray-500" />
          ) : (
            <BsChevronUp className="text-2xl cursor-pointer font-bold text-gray-500"/>
          )}
        </div>
       {show && component}
      </div>
    </div>
  )
}

export default Accordian