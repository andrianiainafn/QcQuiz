import React,{ useContext ,useEffect} from 'react';
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import  DataContext  from '../../../context/AdminContext';
import QcmAction from '../../elements/QcmAction';

const columns = [
  { field: 'id', headerName: 'ID', width: 40 },
  {
    field: 'question',
    headerName: 'Question',
    width: 150,
    editable: true,
  },
  {
    field: 'reponse1',
    headerName: 'Response 1',
    width: 150,
    editable: true,
  },
  {
    field: 'reponse2',
    headerName: 'Response 2',
    width: 150,
    editable: true,
  },
  {
    field: 'reponse3',
    headerName: 'Response 3',
    width: 150,
    editable: true,
  },
  {
    field: 'reponse4',
    headerName: 'Response 4',
    width: 150,
    editable: true,
  },
  {
    field: 'reponse_vrai',
    headerName: 'True Response',
    width: 80,
    editable: true,
  },
  {
    field: 'action',
    headerName: 'Action',
    type: 'actions',
    width:150,  
    renderCell:( params) =>(
      <QcmAction  params={params}/>
    )
  }
];

export default function ListOfQcm() {
  const {arrayOfQcm} = useContext(DataContext)
  useEffect(()=>{
    console.log(arrayOfQcm,343000)
  },[arrayOfQcm])
  let rows = arrayOfQcm.map(qcm=>{
    return(
      { id: qcm.num_quest , question: qcm.question, reponse1: qcm.reponse1, reponse2: qcm.reponse2, reponse3: qcm.reponse3, 
         reponse4: qcm.reponse4, reponse_vrai: qcm.reponse_vrai ,niveau: qcm.niveau }
    )
  })
  return (
    <div className="flex flex-col space-y-3">
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
      <div className="">
       <button className="px-3 py-2 bg-transparent border border-[#66ACFF] rounded-lg text-[#66ACFF]">
         <Link to="/admin/dashboard/qcm/create">Add Qcm</Link>
        </button>
      </div>
    </div>
  );
}
