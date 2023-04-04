import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout'
import { IconButton } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import {motion} from 'framer-motion'

function NavBar() {
    const navigate = useNavigate()
    const HandleClickLogout = async()=>{
        const logout = await axios.get('http://localhost:8080/Auth/logout.php')
        if(logout.status === 200){
            console.log(logout.data)
            console.log(document.cookie)
            document.cookie = 'PHPSESSID=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
            Cookies.remove('PHPSESSID')
            console.log(Cookies.get('PHPSESSID'))
            console.log(document.cookie)
            // if(logout.data.status === 200){
                navigate('/')
            // }
        }
    }
  return (
    <div className=' flixed flex justify-between items-center w-full px-24 '>
        <motion.div
        initial={{
          x:-200,
          opacity:0
        }}
        transition={{
          duration:1.5
        }}
        animate={{opacity:1,x:0}}
       className='text-[#f2f2f2]'>
            <h3 className='text-transparent font-bold bg-clip-text bg-gradient-to-br from-[#d0aa5b] to-[#1fa1b8]'><span className='text-[#38C172]'>QC'</span>QUIZZ</h3>
        </motion.div>
        <motion.div 
        initial={{
          x:200,
          opacity:0
        }}
        transition={{
          duration:1.5
        }}
        animate={{opacity:1,x:0}}
        onClick={HandleClickLogout} className='flex items-center cursor-pointer'>
            <div>
                <h3 className='text-[#66ACFF]' >LOGOUT</h3>
            </div>
            <div>
                <IconButton>
                    <LogoutIcon sx={{color: "#66ACFF"}}/>
                </IconButton>
            </div>
        </motion.div>
    </div>
  )
}

export default NavBar