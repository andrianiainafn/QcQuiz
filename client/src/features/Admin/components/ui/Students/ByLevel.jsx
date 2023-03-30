import React,{ useContext ,useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import  DataContext  from '../../../context/AdminContext';
import StudentActions from '../../elements/StudentActions';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

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
      <StudentActions  params={params}/>
    )
  }
];

export default function ByLevel() {
  const {arrayOfStudentByLevel} = useContext(DataContext)
  const [niveau,setNiveau] = useState('L2')
  useEffect(()=>{
    console.log(arrayOfStudentByLevel,343000)
  },[arrayOfStudentByLevel])
  let rows = arrayOfStudentByLevel.map(students=>{
    return(
      { id: students.num_etudiant, nom: students.nom, prenom: students.prenom, niveau: students.niveau,email:students.adr_email }
    )
  })
  const HandleChange = (e)=>{
      setNiveau(e.target.value)
  }
  return (
    <div className="flex flex-col space-y-3">
    <div className='flex justify-between items-center w-[30%]'>
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
      <button className="px-4 py-2 bg-[#66ACFF]  rounded-lg text-[#fff]">
         <Link to="/admin/dashboard/qcm/create">Submit</Link>
      </button>
    </div>
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
