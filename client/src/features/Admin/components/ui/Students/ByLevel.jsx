import React,{ useContext ,useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import  DataContext  from '../../../context/AdminContext';
import StudentActions from '../../elements/StudentActions';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Alert, AlertTitle } from '@mui/material';
import {motion} from 'framer-motion'



export default function ByLevel() {
  const [success,setSuccess] = useState(false)
  const [error,setError] = useState(false)
  const ChangeValueOfSuccess = () => {
    setSuccess(true)
  }
  const ChangeValueOfError = () =>{
    setError(true)
  }
  const {arrayOfStudentByLevel,effectif,getStudentByLevel} = useContext(DataContext)
  const [niveau,setNiveau] = useState('L2')
  useEffect(()=>{
    console.log(effectif,343000)
  },[effectif])
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
  let rows = arrayOfStudentByLevel.map(students=>{
    return(
      { id: students.num_etudiant, nom: students.nom, prenom: students.prenom, niveau: students.niveau,email:students.adr_email }
    )
  })
  const HandleChange = (e)=>{
      setNiveau(e.target.value)
  }
  const HandleClickSunmit = ()=>{
    getStudentByLevel(niveau)
  }
  return (
    <div className="flex flex-col space-y-3">
    <div className='flex justify-between items-center w-[80%]'>
      <FormControl className=' w-[14.5em] h-[6vh] '   >
                  <InputLabel id="demo-simple-select-label">Niveau</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    required
                    label="Gender"
                    name="niveau"
                    onChange={HandleChange}
                    defaultValue={niveau}
                    sx={{height:'6vh'}}
                  >
                    <MenuItem value={'L1'}>L1</MenuItem>
                    <MenuItem value={'L2'}>L2</MenuItem>
                    <MenuItem value={'L3'}>L3</MenuItem>
                    <MenuItem value={'M1'}>M1</MenuItem>
                    <MenuItem value={'M2'}>M2</MenuItem>
                  </Select>
      </FormControl>
      <button onClick={HandleClickSunmit} className="px-4 py-2 bg-[#66ACFF]  rounded-lg text-[#fff]">
         Submit
      </button>
      <h3 className='text-xl'>
        {
          effectif === 0 ? "There is no Student enregitred with this Level  " : "L' effectif total des etudiants dans cette niveau est de: " + <span> effectif </span>
        }
      </h3>
    </div>
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
  );
}
