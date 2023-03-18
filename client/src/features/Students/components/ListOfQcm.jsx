import React from 'react'

function ListOfQcm() {
  const numQcm = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className='relative' >
      <div className="absolute flex flex-col space-y-2  h-[24vh] right-16 mt-[11%]">
            {
              numQcm.map((question,key)=>(
                <div key={key} className=" text-[#38c172] h-8 w-8 border  border-[#38c172] rounded-full flex justify-center items-center">
                  <h2>{question}</h2>
                </div>
              ))
            }
      </div>
    </div>
  )
}

export default ListOfQcm
