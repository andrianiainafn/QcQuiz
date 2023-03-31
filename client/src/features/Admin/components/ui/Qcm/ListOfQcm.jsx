import React,{ useContext ,useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import  DataContext  from '../../../context/AdminContext';
import QcmAction from '../../elements/QcmAction';
import { Alert, AlertTitle } from '@mui/material';
import {motion} from 'framer-motion'



export default function ListOfQcm() {
  const [success,setSuccess] = useState(false)
  const [error,setError] = useState(false)
  const ChangeValueOfSuccess = () => {
    setSuccess(true)
  }
  const ChangeValueOfError = () =>{
    setError(true)
  }
  const {arrayOfQcm} = useContext(DataContext)
  useEffect(()=>{
    console.log(arrayOfQcm,343000)
  },[arrayOfQcm])
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
        <QcmAction  params={params} ChangeValueOfError={ChangeValueOfError} ChangeValueOfSuccess={ChangeValueOfSuccess}/>
      )
    }
  ];
  let rows = arrayOfQcm.map(qcm=>{
    return(
      { id: qcm.num_quest , question: qcm.question, reponse1: qcm.reponse1, reponse2: qcm.reponse2, reponse3: qcm.reponse3, 
         reponse4: qcm.reponse4, reponse_vrai: qcm.reponse_vrai ,niveau: qcm.niveau }
    )
  })
  return (
    <div className="flex flex-col space-y-3">
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
                     Error when deleting MCQ
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
                  MCQ deleted successfully!
              </Alert>
            </motion.div>
          )
        }
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
