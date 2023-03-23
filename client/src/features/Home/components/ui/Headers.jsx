import React from 'react'
import { useNavigate } from 'react-router-dom'
import Illustration from '../../../Auth/components/elements/Illustration'
import Button from '../element/Button'

function Headers() {
    const navigate = useNavigate()
    const HandleClickStarted = ()=>{
        navigate('auth/login')
      }
  return (
    <div className="w-full flex  justify-between items-center md:px-20 px-6 mt-24 md:mt-auto text-[#f2f2f2]">
        <div className="flex flex-col space-y-7">
            <h2 className='font-bold text-2xl'>Real-Time API DATA Connectors</h2>
            <div className="text-start">
                <p>
                    Subscribe to you favorite APIs<br/>
                    push them to any number<br/>
                    of destination
                </p>
            </div>
            <div className="w-[50%]">
                <Button HandleClickBtn={HandleClickStarted}/>
            </div> 
        </div>
        <div className="hidden md:block">
          <Illustration/>
        </div>
    </div>
  )
}

export default Headers
