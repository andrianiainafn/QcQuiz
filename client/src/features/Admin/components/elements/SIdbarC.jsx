import { useState } from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Avatar, Box, IconButton, Typography} from "@mui/material";
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

const Item = ({ title, to, icon, selected, setSelected }) => {
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: 'balck',
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >  
            <NavLink
             to={to}><Typography>{title}</Typography></NavLink>
      </MenuItem>
    );
  };
function SIdbarC() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selected, setSelected] = useState("Dashboard");
  return (
    <div className="h-screen">
    <Sidebar collapsed={isCollapsed} style={{height: "100vh",backgroundColor:'#38c172'}}>
        <Menu>
        <MenuItem
        style={{
          margin: "10px 0 20px 0",
          color: '#fff',
       }}
      >
        {!isCollapsed ? (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            ml="15px"
          >
            <h2 className="text-[#444]">ADMIN</h2> 
            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <CloseIcon/>
            </IconButton>
          </Box>
        ):
        <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        ml="15px"
        >
            <h2 className="text-[#444]">ADMIN</h2> 
            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
            </IconButton>
         </Box>
        }
      </MenuItem>

      {!isCollapsed && (
        <Box mb="25px">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Avatar sx={{height:'10vh',width:'10vh'}}/>
          </Box>
          <div className="flex justify-center mt-4">
            <h3>NOMENA ANDRIANIAINA</h3>
          </div>
        </Box>
      )}

      <Box paddingLeft={isCollapsed ? undefined : "0"}>
        <Item
          title="Dashboard"
          to="/admin/dashboard/"
          icon={<HomeOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Questions"
          to="/admin/dashboard/qcm/list"
          icon={<ReceiptOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Students"
          to="/admin/dashboard/student/list"
          icon={<PersonOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Manage Team"
          to="/team"
          icon={<PeopleOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="FAQ Page"
          to="/faq"
          icon={<HelpOutlineOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Bar Chart"
          to="/bar"
          icon={<BarChartOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Pie Chart"
          to="/pie"
          icon={<PieChartOutlineOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Line Chart"
          to="/line"
          icon={<TimelineOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Contacts"
          to="/contacts"
          icon={<ContactsOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
      </Box>
    </Menu>
    </Sidebar>
  </div>
  )
}

export default SIdbarC