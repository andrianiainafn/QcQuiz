import { useState } from "react";
// import { Avatar, Box, IconButton, Typography} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {  NavLink } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, IconButton } from "@mui/material";
import Profile from '../../../../assets/Image/profile.png'


function SIdbarC() {
  const [isCollapsed,setIsCollapsed] = useState(false)
  const contentLink = [
    {
      link: '/admin/dashboard/',
      title: 'Dashboard',
      icon: <HomeOutlinedIcon sx={{color: "#66ACFF"}}/>,
    },
    {
      link: '/admin/dashboard/qcm/list',
      title: 'Questions',
      icon: <ReceiptOutlinedIcon sx={{color: "#66ACFF"}}/>,
    },
    {
      link: '/admin/dashboard/student/list',
      title: 'Students',
      icon: <PersonOutlinedIcon sx={{color: "#66ACFF"}}/>,
    },
    {
      link: '/admin/dashboard/faq',
      title: 'FAQ Page',
      icon: <HelpOutlineOutlinedIcon sx={{color: "#66ACFF"}}/>,
    },
    {
      link: '/admin/dashboard/bar',
      title: 'Bar Chart',
      icon: <BarChartOutlinedIcon sx={{color: "#66ACFF"}}/>,
    },{
      link: '/admin/dashboard/pie',
      title: 'Pie Chart',
      icon: <PieChartOutlineOutlinedIcon sx={{color: "#66ACFF"}}/>,
    },{
      link: '/admin/dashboard/line',
      title: 'Line Chart',
      icon: <TimelineOutlinedIcon sx={{color: "#66ACFF"}}/>,
    },{
      link: '/admin/dashboard/contact',
      title: 'Contacts',
      icon: <ContactsOutlinedIcon sx={{color: "#66ACFF"}}/>,      
    }
  ]
  return (
      <div className="flex bg-[#001E3C] h-screen w-full text-[#66ACFF]">
        <div className="mt-5 flex flex-col items-center w-full px-5 space-y-2">
              <div className="flex justify-between items-center w-full">
                <div className="text-[#66ACFF]">
                  <h3>ADMIN</h3>
                </div>
                <div className="">
                  <IconButton sx={{color:"#66ACFF"}}>
                    <MenuOutlinedIcon/>
                  </IconButton>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col space-y-3 ">
                <Avatar sx={{height:"14vh" ,width:"7vw"}} src={Profile}/>
                <div className="uppercase">
                  <h3>Yor Forger</h3>
                </div>
              </div>
              {
                contentLink.map((element,key)=>(
                  <div key={key} className="flex justify-center items-center w-full space-x-4 ">
                    <div className="flex justify-center items-center w-full space-x-4 mt-5  ">
                      <div className="">
                           {element.icon}
                      </div>
                      <div className=" bg-tranparent text-[#66ACFF] ">
                        <NavLink className='link ' to={element.link}>{element.title}</NavLink>
                      </div>
                    </div>
                  </div>
                ))
              }
        </div>
      </div>
  )
}

export default SIdbarC