import { Alert, AlertTitle, IconButton, InputBase } from '@mui/material'
import React, { useEffect, useState } from 'react'
import  SearchIcon from '@mui/icons-material/Search'
import axios from 'axios'
import StudentActions from '../../elements/StudentActions'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid'
import { Box } from '@mui/system'
import { motion } from 'framer-motion'

function Search() {
    const [search,setSearch] = useState()
    const [success,setSuccess] = useState(false)
    const [error,setError] = useState(false)
    const ChangeValueOfSuccess = () => {
      setSuccess(true)
    }
    const ChangeValueOfError = () =>{
      setError(true)
    }
    const [arrayOfStudentsSearch,setArrayOfStudentsSearch] = useState([])
    const HadleClickSearch = async()=>{
        const getStudentsSearched = await axios.get(`http://localhost:8080/Etudiant/search.php/${search}`)
        console.log(getStudentsSearched)
        if(getStudentsSearched.status === 200){
            setArrayOfStudentsSearch(getStudentsSearched.data)
        }
    }
    const HandleSearchChange = (e)=>{
        setSearch(e.target.value)
    }
    const columns = [
        { field: 'id', headerName: 'Matricule', width: 80 },
        
        {
          field: 'nom',
          headerName: 'First name',
          width: 150,
          editable: true,
        },
        {
          field: 'prenom',
          headerName: 'Last name',
          width: 150,
          editable: true,
        },
        {
          field: 'niveau',
          headerName: 'Niveau',
          type: 'string',
          width: 110,
          editable: true,
        },
          {
            field:'email',
            headerName:'Email',
            width :150,
            etidable:true,
          },{
          field: 'action',
          headerName: 'Action',
          type: 'actions',
          width:150,  
          renderCell:( params) =>(
            <StudentActions  params={params} ChangeValueOfError={ChangeValueOfError} ChangeValueOfSuccess={ChangeValueOfSuccess}/>
          )
        }
      ];
      let rows = arrayOfStudentsSearch.map(students=>{
        return(
          { id: students.num_etudiant, nom: students.nom, prenom: students.prenom, niveau: students.niveau,email:students.adr_email }
        )
      })
    return (
    <div>
     <div display="flex" className='flex bg-transparent rounded-lg border border-[#66ACFF] w-[20%]' >
        <InputBase  sx={{ml:2,flex:1,color:'#66ACFF'}} onChange={HandleSearchChange} value={search} placeholder="Search"/>
        <IconButton onClick={HadleClickSearch}  type="button" sx={{p:1}}>
          <SearchIcon  sx={{color: "#66ACFF"}}/>
        </IconButton>
     </div>
     <div className='mt-5'>
         {
            error && (
                <motion.div
                  initial={
                  {
                   opacity: 0,
                   y:-100
                  }
                  }
                  animate={{
                      opacity:1,
                      y:0
                  }}
                  transition={
                      {
                        duration: 0.7
                      }
                }>
                <Alert severity='error'  onClose={()=>{setError(false)}}>
                    <AlertTitle>Error</AlertTitle>
                     Error when deleting Students
                  </Alert>
              </motion.div>
            )
        }
        {
          success && (
            <motion.div
            initial={
              {
                opacity: 0,
                y:-100
              }
              }
              animate={{
                  opacity:1,
                  y:0
              }}
              transition={
                  {
                    duration: 0.7
                  }
              }
              className='mr-3'
              >
              <Alert severity='success' onClose={()=>{setSuccess(false)}}>
                  <AlertTitle>Success!</AlertTitle>
                  Student deleted successfully!
              </Alert>
            </motion.div>
          )
        }
      <Box sx={{ height: 350, width: '98%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
           pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      <div className="">
       <button className="px-3 py-2 bg-transparent border border-[#66ACFF] rounded-lg text-[#66ACFF]">
         <Link to="/admin/dashboard/qcm/create">Add Student</Link>
        </button>
      </div>
    </div>
        </div>
     
  )
}

export default Search