import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function StudentActions({params}) {
  return (
    <div>
        <Tooltip>
            <IconButton onClick={()=>console.log(params)}>
                <ContactsOutlinedIcon/>
            </IconButton>
        </Tooltip>
        <Tooltip>
            <IconButton onClick={()=>console.log(params)}>
                <EditOutlinedIcon/>
            </IconButton>
        </Tooltip>
        <Tooltip>
            <IconButton onClick={()=>console.log(params)}>
                <DeleteOutlineOutlinedIcon/>
            </IconButton>
        </Tooltip>
    </div>
  )
}

export default StudentActions