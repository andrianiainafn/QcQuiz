import React from 'react'

function Button({HandleClickBtn}) {
  return (
    <div className='text-[#f2f2f2] text-base w-[11vw]  flex justify-center items-center cursor-pointer rounded-lg bg-[#38C172] font-semibold p-3' onClick={HandleClickBtn} >
        <h2>Get Started</h2>
    </div>
  )
}

export default Button
