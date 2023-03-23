import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import StudentActions from '../../elements/StudentActions';

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

let rows = [
  { id: '1234', nom: 'Snow', prenom: 'Jon', niveau: "L2",email:"test@gmail.com" },
  { id: '1431', nom: 'Lannister', prenom: 'Cersei', niveau: "M1",email:"Cersei@gmail.com"  },
  { id: '1332', nom: 'Lannister', prenom: 'Jaime', niveau: "L3",email:"Jaime@gmail.com" },
  { id: '1435H-F', nom: 'Stark', prenom: 'Arya', niveau: "M2" ,email:"Jaime@gmail.com"},
  { id: '1432', nom: 'Targaryen', prenom: 'Daenerys', niveau: "L1" ,email:"Jaime@gmail.com"},
  { id: '1223', nom: 'Melisandre', prenom: "Dert", niveau: "L2" ,email:"Jaime@gmail.com"},
  { id: '1422', nom: 'Clifford', prenom: 'Ferrara', niveau: "M1" ,email:"Jaime@gmail.com"},
  { id: '1222', nom: 'Frances', prenom: 'Rossini', niveau: "M2" ,email:"Jaime@gmail.com"},
  { id: '1212', nom: 'Roxie', prenom: 'Harvey', niveau: "L3" ,email:"Jaime@gmail.com"},
];

export default function ListOfStudents() {
  React.useEffect(()=>{
    console.log(rows)
  },[rows])
  return (
    <Box sx={{ height: 450, width: '98%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 6,
            },
          },
        }}
        pageSizeOptions={[6]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

