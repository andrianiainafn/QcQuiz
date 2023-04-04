import { TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
// import { useTypewriter } from 'react-simple-typewriter'
import NavBar from './NavBar'
import {  styled } from '@mui/material/styles';
import {motion} from 'framer-motion'
import ListContext from '../StudentContext';

const CssTextField = styled(TextField)({
  '& label': {
    color: '#f2f2f2', // Définit la couleur du label en vert
  },
  '& label.Mui-focused': {
    color: '#f2f2f2',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#f2f2f2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#f2f2f2',
    },
    '&:hover fieldset': {
      borderColor: '#f2f2f2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#f2f2f2',
    },
  },
});
function Header() {
const {modifyFirstYears,modifySecondYears} = useContext(ListContext)
const [firstyear, setFirsrYear] = useState();
const [secondyear,setSecondsrYear] = useState();
const handleFirstYearChange = (event) => {
  const { value } = event.target;
  const yearRegex = /^[0-9]{0,4}$/; // regex pour limiter la saisie à 4 chiffres
  if (yearRegex.test(value) || value === '') { // vérifier si la valeur est valide ou non
    setFirsrYear(value);
    modifyFirstYears(value)
  }
};
const handleSecondYearChange =  (event) => {
  const { value } = event.target;
  const yearRegex = /^[0-9]{0,4}$/; // regex pour limiter la saisie à 4 chiffres
  if (yearRegex.test(value) || value === '') { // vérifier si la valeur est valide ou non
    setSecondsrYear(value);
    modifySecondYears(value)
  }
};
  return (
    <div className="  flex flex-col space-y-5">
        <NavBar/>
        <motion.div 
        initial={{
          transform: 'scale(2)',
          opacity:0
        }}
        transition={{
          duration:1.5
        }}
        animate={{opacity:1,transform: 'scale(1)'}}
        className=" relative flex justify-center items-center top-[22vh]">
            <h3 className="text-2xl text-[#66ACFF] text-center">
              Welcom ANDRIANIAINA <br/>
              Are you ready to do it ?,Let's try do it now!
            </h3>
        </motion.div>
        <motion.div 
        initial={{
          x:-200,
          opacity:0
        }}
        transition={{
          duration:1.5,
          delay: 1.5
        }}
        animate={{opacity:1,x:0}}        
        className = "relative top-[24vh] flex justify-center">
          <h3 className=" text-xl text-[#f2f2f2] ">Entrer l' annee universitaire:</h3>
        </motion.div>
        <motion.div 
        initial={{
          x:200,
          opacity:0
        }}
        transition={{
          duration:1.5,
          delay: 1
        }}
        animate={{opacity:1,x:0}}
        className='relative top-[26vh] w-full flex justufy-center mx-auto '>
          <div className="  flex justify-between items-center  w-[20%] mx-auto ">
            <CssTextField onChange={handleFirstYearChange} value={firstyear} className='w-[40%]' variant='outlined' label='year' type='text'   inputProps={{
            style: { color: '#f2f2f2',height:'2vh' },
            maxLength: 4,
            min: '2021', 
            max: '2023',   }}/>
            <CssTextField onChange={handleSecondYearChange} value={secondyear} className='w-[40%]' variant='outlined' label='year' type='text'   inputProps={{
            style: { color: '#f2f2f2',height:'2vh' },
            maxLength: 4,
            min: '2021', 
            max: '2023',   }}/>
          </div>
        </motion.div>
        <motion.div
        initial={{
          x:-200,
          opacity:0
        }}
        transition={{
          duration:1.5,
          delay: 0.9
        }}
        animate={{opacity:1,x:0}}
           className="relative top-[28vh] flex justify-center">
          <div className='text-[#f2f2f2] text-base w-[11vw]  flex justify-center items-center cursor-pointer rounded-lg bg-[#38C172] font-semibold p-3'  >
            <a href="#1">Go</a>
          </div>
        </motion.div>
    </div>
  )
}

export default Header