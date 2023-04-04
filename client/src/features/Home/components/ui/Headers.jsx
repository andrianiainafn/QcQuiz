import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useTypewriter} from 'react-simple-typewriter'
import Illustration from '../../../Auth/components/elements/Illustration'
import Button from '../element/Button'
import {motion} from 'framer-motion'

function Headers() {
    const navigate = useNavigate()
    const[text,count]= useTypewriter({
        words:["Test your knowledge with our online MCQ exams.",
        "Convenient,reliable,and user-friendly","Let's try do it now!"
        ],
        loop:true,
        delaySpeed:900,
        typeSpeed: 30
    })
    const HandleClickStarted = ()=>{
        navigate('auth/login')
      }
  return (
    <div className="w-full flex  justify-between items-center md:px-20 px-6 mt-24 md:mt-auto text-[#f2f2f2]">
            <motion.div 
            initial={{
              x:-200,
              opacity:0
            }}
            transition={{
              duration:1.5,
              delay: 1.3
            }}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            className="flex flex-col space-y-7">
                <h2 className='font-bold text-2xl'>{text}</h2>
                <div className="text-start">
                    <p>
                        Welcom to our online MCQ exam platform! Test your knowledge and skills<br/>
                        with our extensive IT questions and prepare for success Whether  you<br/>
                          are a student or a professional our MCQ exams offer a reliale and<br/>
                        Convenient way to measure your performance <br/>
                    </p>
                </div>
                <div className="w-[50%]">
                    <Button HandleClickBtn={HandleClickStarted}/>
                </div> 
            </motion.div>
        <motion.div 
        className="hidden md:block">
          <Illustration/>
        </motion.div>
    </div>
  )
}

export default Headers
