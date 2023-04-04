import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useContext, useEffect } from 'react'
import DataContext from '../../../context/AdminContext';

function Listes() {
  const {arrayOfNotes} = useContext(DataContext)
  useEffect(()=>{
      console.log(arrayOfNotes)
  },[])
  const columns = [
    { field: 'id', headerName: 'Matricule', width: 80 },
    
    {
      field: 'nom',
      headerName: 'First name',
      width: 250,
      editable: true,
    },
    {
      field: 'prenom',
      headerName: 'Last name',
      width: 250,
    },
    {
      field: 'niveau',
      headerName: 'Niveau',
      type: 'string',
      width: 210,
    },
      {
        field:'note',
        headerName:'Notes',
        width :150,
      }
  ];
  let rows = arrayOfNotes.map(notes=>{
    return(
      { id: notes.num_etudiant, nom: notes.nom, prenom: notes.prenom, niveau: notes.niveau,note:notes.note }
    )
  })
  return (
    <div>
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
    </div>
  )
}

export default Listes