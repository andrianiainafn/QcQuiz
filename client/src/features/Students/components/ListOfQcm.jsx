import React, { useEffect, useRef, useState } from 'react'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

function ListOfQcm() {
  const numQcm = [1,2,3,4,5,6,7,8,9,10]
  const [response,setResponse] = useState({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    question6: null,
    question7: null,
    question8: null,
    question8: null,
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
        console.log(e.target.classList)
        console.log(e.target.getAttribute('id').split(''))
        const responsArray = e.target.getAttribute('id').split('')
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
  let spies = []
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
      spies = Array.from(ref.current.querySelectorAll('[data-spy]'))
    }
    if(spies.length > 0){
      observe(spies)
      window.addEventListener('resize',()=>{
        observe(spies)
      })
    }
  },[valueOfScroll])
  const HandleClikSubmit = ()=>{
    console.log(response)
  }
  return (
    <div className='relative h-screen bg-[#001E3C] scroll-smooth overflow-y-scroll snap-y snap-mandatory' 
    onScroll={HandleScroll} ref={ref} >
      <div className="fixed flex flex-col space-y-3  h-[24vh] right-16 mt-[11%]">
            {
              numQcm.map((question,key)=>(
                <div key={key} className=" text-[#38c172] h-8 w-8 border cursor-pointer border-[#38c172] rounded-full flex justify-center items-center ">
                  <a href= {'#' + question} >{question}</a>
                </div>
              ))
            }
      </div>
     {
      numQcm.map(elem=>(
        <div key={elem} id={elem} className="flex snap-center  flex-col h-screen items-center justify-center bg-[#001E3C] " data-spy>
        <div className="text-start text-2xl text-[#f2f2f2]">
            <h1>{elem}<ArrowRightAltOutlinedIcon/> Que signifie l' acronyme PHP ? </h1>
        </div>
        <div className="mt-5 text-xl flex flex-col space-y-2 text-[#f2f2f2]">
          <div className="">
            A- Hypertext Preprocessor
          </div>
          <div className="">
            B- Hypertext Preprocessor
          </div>
          <div className="">
            C- Hypertext Preprocessor
          </div>
          <div className="">
            D- Hypertext Preprocessor
          </div>
        </div>
        <div className=" mt-12 w-[40%] flex mx-auto justify-between items-center ">
          <div onClick={Handleclick} className={nonActiveClass} id={"A" + elem }> 
                A
          </div>
          <div onClick={Handleclick} className={nonActiveClass} id={"B" + elem }>
              B
          </div>
          <div  onClick={Handleclick} className={nonActiveClass} id={"C" + elem }>
              C
          </div>
          <div  onClick={Handleclick} className={nonActiveClass} id={"D" + elem }>
              D
          </div>
        </div>
      </div>
      ))
     }
    </div>
  )
}

export default ListOfQcm