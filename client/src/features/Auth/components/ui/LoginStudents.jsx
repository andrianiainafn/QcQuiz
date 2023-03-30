import React, { useContext } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate,Link } from 'react-router-dom';
import {Checkbox, FormControlLabel, TextField} from '@mui/material'
import {Formik} from 'formik'
import InputAdornment from '@mui/material/InputAdornment';
import * as yup from "yup";
import { motion } from 'framer-motion';
import {styled } from '@mui/material/styles'
import axios from 'axios';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Context from '../../../../context/AuthContext';


const CssTextField = styled(TextField)({
  '& label':{
      color:"#f2f2f2"
  },
  '& label.Mui-focused':{
    color:"#f2f2f2",
    backGroundColor:'#66ACFF'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#332fd0',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      height: '8vh',
      color:'#66ACFF',
      borderColor:'#eee',
      backGroundColor:'#66ACFF'
    },
    '&:hover fieldset': {
      borderColor: '#fb2576',
      backGroundColor:'#66ACFF'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#66ACFF',
      backGroundColor:'#66ACFF'
    },
    
  },
});
function LoginStudents() {
  const navigate = useNavigate()
  const{getIsConnected} = useContext(Context)
  const HandleClickBack = ()=>{
      navigate('/')
  }
  const handleFormSubmit = async (values)=>{
      console.log(values)
      const login = await axios.post('http://localhost:8080/Auth/loginStudent.php',values,{withCredentials:true})
      console.log(login.data)
      if(login.status === 200){
         if(login.data.status === 200){
            getIsConnected()
           navigate(`/students/${values.matricule}`)
         }
         else{
            console.log("Invalid email or matricule")
         }
      }else{
        console.log("Serveur Error")
      }
  }
  return (
    <div className='md:mt-16 mt-[20vh] text-[#f2f2f2] '>
      <div className="fex justify-center   items-center mx-auto flex-col w-[80%]   md:w-[80%] space-y-10">
        <div className="text-center text-2xl">
          <h3 className='text-[#38C172]'>LOGIN</h3>
        </div>
        <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={checkoutSchema}
                    > 
                      {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                      })=>(                        
                    <motion.form 
                     initial={
                      {
                       opacity: 0,
                       x:-200
                      }
                      }
                      animate={{
                          opacity:1,
                          x:0
                      }}
                      transition={
                          {
                            duration: 1.5
                          }
                      }  
                    onSubmit={handleSubmit} className='space-y-5'>
                        <CssTextField 
                        sx={{color:'#f2f2f2'}}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.identifiant}
                        name="identifiant"
                        error={!!touched.identifiant && !!errors.identifiant}
                        helperText={touched.identifiant && errors.identifiant}
                        fullWidth variant='outlined'  label='Email' type='identifiant'
                        InputProps={{
                          startAdornment:(
                            <InputAdornment position='start'>
                              <PersonOutlinedIcon sx={{color:"#eee"}}/>
                            </InputAdornment>
                          )
                        }}
                        />
                        <CssTextField 
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.matricule}
                        name="matricule"
                        error={!!touched.matricule && !!errors.matricule}
                        helperText={touched.matricule && errors.matricule}
                        fullWidth variant='outlined'  label='Matricule' type='text'
                        InputProps={{
                          startAdornment:(
                            <InputAdornment position='start'>
                              <PersonOutlinedIcon sx={{color:"#eee"}}/>
                            </InputAdornment>
                          )
                        }}
                        />
                          <div className="flex justify-between items-center">
                            <div className="">
                              <FormControlLabel className='mx-0' sx={{margin: 0}} label="Remember me" name='remember' id='remember'  control={<Checkbox  onChange={handleChange} value={values.remember}/>} />
                            </div>
                            <div className="">
                              <Link to='/forgotpassword'>Forgot Matricule ?</Link>
                            </div>
                          </div>
                           <motion.div 
                              initial={
                               {
                                opacity: 0,
                                x:200
                               }
                               }
                               animate={{
                                 opacity:1,
                                 x:0
                               }}
                               transition={
                                   {
                                     duration: 1.5
                                   }
                                 }  
                                 className="flex cursor-pointer justify-between items-center  w-full">
                          <button type='submit' className='border-none text-white bg-[#38C172] rounded-lg w-[100%] flex justify-center items-center p-3'>Login</button>
                      </motion.div>
                        </motion.form>
                      )}
                    </Formik>
        <div className="flex justify-end cursor-pointer" onClick={HandleClickBack}>
          <div className="flex justify-between items-center text-xl mx-3">
            <KeyboardBackspaceIcon/>
            <h4 className='ml-2'>Back</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginStudents

const checkoutSchema = yup.object().shape({
  identifiant: yup.string().email("!nvalid email !").required('Required !'),
  matricule: yup.string().required("Required !"),
  rememberMe: yup.boolean()
});
const initialValues = {
  identifiant: "",
  password: "",
  remember: false,
};