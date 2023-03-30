import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout'
import { IconButton } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()
    const HandleClickLogout = async()=>{
        const logout = await axios.get('http://localhost:8080/Auth/logout.php')
        if(logout.status === 200){
            if(logout.data.status === 200){
                navigate('/')
            }
        }
    }
  return (
    <div className=' flixed flex justify-between items-center w-full px-12 '>
        <div className='text-[#f2f2f2]'>
            <h3>ANDRIANIAINA Fanomezantsoa Nomena</h3>
        </div>
        <div onClick={HandleClickLogout} className='flex items-center cursor-pointer'>
            <div>
                <h3 className='text-[#66ACFF]' >LOGOUT</h3>
            </div>
            <div>
                <IconButton>
                    <LogoutIcon sx={{color: "#66ACFF"}}/>
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default NavBar