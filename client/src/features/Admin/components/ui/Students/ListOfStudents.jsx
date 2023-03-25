import React,{useEffect,useContext} from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import StudentActions from '../../elements/StudentActions';
import DataContext from '../../../context/AdminContext';

const columns = [
  { field: 'id', headerName: 'Matricule', width: 90 },
  
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

export default function ListOfStudents() {
  const {arrayOfStudents} = useContext(DataContext)
  let rows = arrayOfStudents.map(students=>{
    return(
      { id: students.num_etudiant, nom: students.nom, prenom: students.nom, niveau: students.niveau,email:students.adr_email }
    )
  })
  
  useEffect(()=>{
    console.log(arrayOfStudents,343000)
  },[arrayOfStudents])
  return (
    <div className='flex flex-col space-y-5'>
    <Box sx={{ height: 450, width: '98%' }}>
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
    <div>
      <button className="px-3 py-2 bg-transparent border border-[#66ACFF] rounded-lg text-[#66ACFF]">
         <Link to="/admin/dashboard/student/create">Add Student</Link>
      </button>
    </div>
    </div>
  );
}

