import React, { useContext, useEffect, useRef, useState } from 'react'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import Header from '../element/Header';
import ListContext from '../StudentContext';
import axios from 'axios';
import {motion} from 'framer-motion'
import { Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from '@mui/material';
import { useParams } from 'react-router-dom';

function ListOfQcm() {
  const numQcm = [1,2,3,4,5,6,7,8,9,10]
  const  {exam,firstYears,secondeYears} = useContext(ListContext)
  const [note,setNote] = useState(0)
  const [response,setResponse] = useState({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    question6: null,
    question7: null,
    question8: null,
    question9: null,
    question10: null,
  })
  const nonActiveClass = "text-[#38c172] w-[20%] p-2 cursor-pointer border border-[#38c172] flex justify-center items-center rounded-3xl"
  const Handleclick = (e) =>{
    if(e.target.classList.contains('text-[#38c172]')){
      for(let i=0 ;i<4;i++){
        e.target.parentNode.childNodes[i].classList.remove('text-white')
        e.target.parentNode.childNodes[i].classList.remove('bg-[#38c172]')
        e.target.parentNode.childNodes[i].classList.add('text-[#38c172]')
        e.target.parentNode.childNodes[i].classList.add('border')
        e.target.parentNode.childNodes[i].classList.add('border-[#38c172]')
        e.target.classList.remove('text-[#38c172]')
        e.target.classList.add('text-white')
        e.target.classList.add('bg-[#38c172]')
        const responsString = e.target.getAttribute('id')
        const responsArray = responsString.split(',')
        switch(responsArray[1]){
            case '1':
              setResponse({...response,question1:responsArray[0]})
              break
            case "2":
              setResponse({...response,question2:responsArray[0]})
              break
            case "3":
              setResponse({...response,question3:responsArray[0]})
              break
            case "4":
              setResponse({...response,question4:responsArray[0]})
              break
            case "5":
              setResponse({...response,question5:responsArray[0]})
              break
            case "6":
              setResponse({...response,question6:responsArray[0]})
              break
            case "7":
              setResponse({...response,question7:responsArray[0]})
              break
            case "8":
              setResponse({...response,question8:responsArray[0]})
              break
            case "9":
              setResponse({...response,question9:responsArray[0]})
              break
            case "10":
              setResponse({...response,question10:responsArray[0]})
              break
            default:
              console.log("Inaccepted response")
        }
      }
    }
}
  const [spies,setSpies] = useState([])
  const ref = useRef(null)
  const [valueOfScroll,setValueOfScroll] = useState(true)
  const ratio = .6
  let observer = null
  const active = (elem)=>{
    const id = elem.getAttribute('id')
    const anchor = document.querySelector(`a[href="#${id}"]`)
    if(anchor === null){
      return
    }
    anchor.parentElement.parentElement.querySelectorAll('.activeQ').forEach(node=>{
      node.classList.remove('activeQ')
    })
    anchor.parentElement.classList.add('activeQ')
  } 
  const callback = (entries,observer)=>{
    entries.forEach(entry=>{
      if(entry.intersectionRatio > 0){
        active(entry.target)
      }
    })
  }
  const observe = (elems)=>{
    if(observer !== null){
      elems.forEach(elem=> observer.unobserve(elem))
    }
    const y = Math.round(window.innerHeight * ratio)
    observer = new IntersectionObserver(callback,{
      rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`
    })
    for(let i=0;i<elems.length;i++){
      observer.observe(elems[i])
    }
  }
  const HandleScroll = ()=>{
    setValueOfScroll(ancien=>!ancien)
  }
  useEffect(()=>{
    if(ref.current){
      setSpies(Array.from(ref.current.querySelectorAll('[data-spy]')))
    }
    if(spies.length > 0){
      observe(spies)
      window.addEventListener('resize',()=>{
        observe(spies)
      })
    }
  },[valueOfScroll])
  const [open,setOpen] = useState(false)
  const {id} = useParams()
  const handleClose = ()=>{
    setNote(0)
    setOpen(false)
  }
  const handleClickSure = async()=>{
      setOpen(false)
      const annee_univ = firstYears.toString() + '-' + secondeYears.toString()
      const information = {note,annee_univ,num_etudiant: id}
      const response = await axios.post('http://localhost:8080/Note/AddNotes.php',information)
      if(response.status === 200){
        console.log(response.data)
        if(response.data.status === 200){ 
            console.log('reussi!!')
            setNote(0)
        }else{
          console.log('erreur')
        }
      }else{
        console.log('Error')
      }
      // const sendNotes = await axios.post('http://localhost:8080/Etudiant/EmailSend.php',information)
      // if(sendNotes.status === 200 ){
      //   if(sendNotes.data.status === 200){
      //     console.log('success')
      //     setNote(0)
      //   }else{
      //     console.log('error')
      //   }
      // }else{
      //   console.log('grave erreur')
      // }
  }
  const HandleClikSubmit = async()=>{
    for(let i=0;i<10;i++){ 
      const res = 'question' + parseInt(i + 1)
      const resStudent = response[res]
      const  resVrai = exam[i].reponse_vrai
      if(resStudent === resVrai){
          setNote(ancien=>ancien+1)
        }
      }
      setOpen(true) 
  }
  return (
    <div className='relative h-screen bg-[#001E3C] scroll-smooth overflow-y-scroll snap-y snap-mandatory' 
    onScroll={HandleScroll} ref={ref} >
      <div className="fixed flex flex-col space-y-3  h-[24vh] right-16 mt-[11%]">
            {
              numQcm.map((question,key)=>(
                <motion.div 
                initial={{
                  y:-200,
                  opacity:0
                }}
                transition={{
                  duration:1.5,
                  delay: 1.7
                }}
                animate={{opacity:1,y:0}}
                key={key} className=" text-[#38c172] h-8 w-8 border cursor-pointer border-[#38c172] rounded-full flex justify-center items-center ">
                  <a href= {'#' + question} >{question}</a>
                </motion.div>
              ))
            }
      </div>
      <div className='fixed h-[10vh] w-[5vw] top-[30%] left-[15%] blur rounded-full bg-gradient-to-br from-[#38c172] animate-pulse to-[#1fa1b8]'/>
      <div className='fixed h-[10vh] w-[5vw] top-[70%] left-[80%] blur rounded-full bg-gradient-to-br from-[#38c172] animate-spin to-[#1fa1b8]'/>
      <div className='fixed h-[10vh] w-[5vw] top-[80%] left-[5%] blur rounded-full bg-gradient-to-br from-[#38c172] animate-bounce to-[#1fa1b8]'/>
      {/* </div> */}
      <div className='h-screen snap-start' data-spy>
        <Header/>
      </div>  
     {
      exam.map((elem,key)=>(
        <div key={key} id={key+1} className="flex snap-center w-[80%] mx-auto   flex-col h-screen items-center justify-center bg-[#001E3C] " data-spy>
        <div className=" text-2xl z-3 text-[#f2f2f2] text-start">
            <h1>{key + 1}<ArrowRightAltOutlinedIcon/> {elem.question} </h1>
        </div>
        <div className="mt-5 text-xl flex flex-col space-y-2 text-[#f2f2f2]">
          <div className="">
            A- {elem.reponse1}
          </div>
          <div className="">
            B- {elem.reponse2}
          </div>
          <div className="">
            C- {elem.reponse3}
          </div>
          <div className="">
            D- {elem.reponse4}
          </div>
        </div>
        <div className=" mt-12 w-[40%] flex mx-auto justify-between items-center ">
          <div onClick={Handleclick} className={nonActiveClass} id={"reponse1," +  (key +1) }> 
            A
          </div>
          <div onClick={Handleclick} className={nonActiveClass} id={"reponse2," + (key +1) }>
            B
          </div>
          <div  onClick={Handleclick} className={nonActiveClass} id={"reponse3," + (key +1) }>
            C
          </div>
          <div  onClick={Handleclick} className={nonActiveClass} id={"reponse4," + (key +1) }>
            D
          </div>
        </div>
        {
          key + 1 === 10 && (
          <div  onClick={HandleClikSubmit} className='hover:text-[#f2f2f2] hover:bg-[#38c172] mt-10 text-[#38c172] w-[20%] p-2 cursor-pointer border border-[#38c172] flex justify-center items-center rounded-3xl' >
            Submit Response
         </div>
          )
        }
      </div>
      ))
     }
     <Dialog
     open={open}
     onClose={handleClose}
     aria-labelledby="alert-dialog-title"
     aria-describedby='alert-dialog-description'
     sx={{
      "& .MuiDialog-paper":{
        backgroundColor: "#001E3C"
      },
      "& .MuiDialogContentText-root":{
        color:"#eee"
      }
     }}
     >
      <DialogTitle id='alert-dialog-title' sx={{color:"#f2f2f2"}}>
        {"Are  sure to submit your response ? "}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
            lorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, consectetur adip
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} >No,return</Button>
        <Button onClick={handleClickSure} >Yes!,sure</Button>
      </DialogActions>
     </Dialog>
    </div>
  )
}

export default ListOfQcm