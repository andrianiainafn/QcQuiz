import React from 'react'
import {Box,IconButton} from '@mui/material'
import InputBase from "@mui/material/InputBase"
import  LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import  DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import  NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import  SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import  PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import  SearchIcon from '@mui/icons-material/Search'

function Topbar() {
  return (
    <Box display="flex" justifyContent="space-between" py={2} style={{width:'99%'}} >
         {/* //Search bar */}
         <div display="flex" className='flex bg-transparent rounded-lg border border-[#66ACFF]' 
         >
          <InputBase sx={{ml:2,flex:1,color:'#66ACFF'}} placeholder="Search"/>
          <IconButton type="button" sx={{p:1}}>
            <SearchIcon sx={{color: "#66ACFF"}}/>
          </IconButton>
         </div>
          {/* Icons */}
          <Box display="flex" >
          <IconButton>
            {
               'dark' === 'light' ? 
              <DarkModeOutlinedIcon sx={{color: "#66ACFF"}}/> :            
              <LightModeOutlinedIcon sx={{color: "#66ACFF"}}/> 
            }
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon sx={{color: "#66ACFF"}}/>
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon sx={{color: "#66ACFF"}}/>
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon sx={{color: "#66ACFF"}}/>
          </IconButton>
          </Box>
    </Box>
  )
}

export default Topbar