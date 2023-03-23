import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";

function StudentActions({params}) {
  return (
    <div>
        <Tooltip>
            <IconButton onClick={()=>console.log(params)}>
                <ContactsOutlinedIcon/>
            </IconButton>
        </Tooltip>
    </div>
  )
}

export default StudentActions