import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../element/Button'
import MenuIcon from '@mui/icons-material/Menu';
import {motion} from 'framer-motion'

function NavBar() {
  const navigate = useNavigate()
  const HandleClickStarted = ()=>{
    navigate('auth/login')
  }
  return (
    <div className='flex justify-between px-20 h-24 py-4 items-center'>
        <motion.div 
          initial={{
            x:-100,
            opacity:0
          }}
          transition={{
            duration:1.5
          }}
          whileInView={{opacity:1,x:0}}
          viewport={{once:true}}
        className="w-[20%] md:w-[10%]">
          <h3 className='text-transparent font-bold bg-clip-text bg-gradient-to-br from-[#d0aa5b] to-[#1fa1b8]'><span className='text-[#38C172]'>QC'</span>QUIZZ</h3>
        </motion.div>
        <div className="md:hidden text-[#38C172]">
            <MenuIcon/>
        </div>
        <div className="hidden md:flex w-[20%] justify-between items-center ">
          <div className="cursor-pointer text-transparent font-bold bg-clip-text bg-gradient-to-br from-[#d0aa5b] to-[#1fa1b8]">
            <h3>HOME</h3>   
          </div>
          <div className="cursor-pointer text-transparent font-bold bg-clip-text bg-gradient-to-br from-[#d0aa5b] to-[#1fa1b8]">
            <h3>HELP</h3>  
          </div>
          <div className="cursor-pointer text-transparent font-bold bg-clip-text bg-gradient-to-br from-[#d0aa5b] to-[#1fa1b8]">
            <h3>ABOUT</h3>    
          </div>
        </div>
        <motion.div 
        initial={{
          x:100,
          opacity:0
        }}
        transition={{
          duration:1.5
        }}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}    
        className="w-[10%] hidden md:block ">
          <Button HandleClickBtn={HandleClickStarted}/>
        </motion.div>
    </div>
  )
}

export default NavBar
