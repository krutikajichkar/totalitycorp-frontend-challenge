import React from 'react'

const Ratings = () => {
  return (
    <div className='px-4 py-2'>

        <ul>
            <li className='flex gap-3 text-xl font-semibold p-2' >
                <input className='w-5 cursor-pointer' type="checkbox" name="" id="" />
                <span>4.5 above</span>
            </li>
            <li className='flex gap-3 text-xl font-semibold p-2' >
                <input className='w-5 cursor-pointer' type="checkbox" name="" id="" />
                <span>4 above</span>
            </li>
            <li className='flex gap-3 text-xl font-semibold p-2' >
                <input className='w-5 cursor-pointer' type="checkbox" name="" id="" />
                <span>3 above</span>
            </li>
            <li className='flex gap-3 text-xl font-semibold p-2' >
                <input className='w-5 cursor-pointer' type="checkbox" name="" id="" />
                <span>2 above</span>
            </li>
           
        </ul>

    </div>
  )
}

export default Ratings