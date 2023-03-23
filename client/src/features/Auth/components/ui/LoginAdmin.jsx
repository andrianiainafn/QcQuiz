import React,{useState,useCallback} from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate,Link } from 'react-router-dom';
import {Checkbox, FormControlLabel, TextField} from '@mui/material'
import {Formik} from 'formik'
import IconButton from '@mui/material/IconButton';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as yup from "yup";
import { motion } from 'framer-motion';
import {styled } from '@mui/material/styles'
import axios from 'axios';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';


const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#332fd0',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#332fd0',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      height: '8vh',
    },
    '&:hover fieldset': {
      borderColor: '#fb2576',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#332fd0',
    },
  },
});
function LoginAdmin() {
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()
  const HandleClickBack = ()=>{
      navigate('/auth/login')
  }
  const handleClickShowConfirmPassword = useCallback( ()=>{
    setShowConfirmPassword(encienEtat=>!encienEtat)
  },[])
  const handleMouseDownPassword = useCallback((e)=>{
    e.preventDefault(); 
  },[])

  const handleFormSubmit = async (values)=>{
      navigate('/')
  }
  return (
    <div className='md:mt-16 mt-[20vh] '>
      <div className="fex justify-center   items-center mx-auto flex-col w-[80%]   md:w-[80%] space-y-10">
        <div className="text-center text-2xl text-[#f2f2f2]">
          <h3>Enter you Choice</h3>
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
                              <PersonOutlinedIcon/>
                            </InputAdornment>
                          )
                        }}
                        />
                        <CssTextField fullWidth variant='outlined'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        name="password"
                        error={!!touched.password && !!errors.password}
                        helperText={touched.password && errors.password} 
                        type={showConfirmPassword ? 'text' : 'password'}  
                        label='Password'
                          InputProps={{
                            startAdornment:(
                              <InputAdornment position='start'>
                                <LockOpenIcon/>
                              </InputAdornment>
                            ),
                            endAdornment:(
                              <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowConfirmPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showConfirmPassword ?   <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                            )
                          }}/> 
                          <div className="flex justify-between items-center">
                            <div className="">
                              <FormControlLabel className='mx-0' sx={{margin: 0}} label="Remember me" name='remember' id='remember'  control={<Checkbox  onChange={handleChange} value={values.remember}/>} />
                            </div>
                            <div className="">
                              <Link to='/forgotpassword'>Forgot password ?</Link>
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
                          <button type='submit' className='border-none text-white bg-[#38C172] rounded-lg w-[100%] flex justify-center items-center p-3'>SignUp</button>
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

export default LoginAdmin

const checkoutSchema = yup.object().shape({
  identifiant: yup.string().required("required"),
  password: yup.string().required("required"),
  rememberMe: yup.boolean()
});
const initialValues = {
  identifiant: "",
  password: "",
  remember: false,
};