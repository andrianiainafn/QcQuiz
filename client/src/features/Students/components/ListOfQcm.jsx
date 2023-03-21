import React, { useEffect, useRef, useState } from 'react'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

function ListOfQcm() {
  const numQcm = [1,2,3,4,5,6,7,8,9,10]
  const activeClass = "text-white w-[20%] p-2 cursor-pointer flex justify-center items-center bg-[#38c172] rounded-3xl"
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
        console.log(e.target.getAttribute('id'))
        // modifyPreferance({...preferance,orientation:e.target.getAttribute('id')})
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
    anchor.parentElement.parentElement.querySelectorAll('.active').forEach(node=>{
      node.classList.remove('active')
    })
    anchor.parentElement.classList.add('active')
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
  return (
    <div className='relative h-screen bg-[#C3F3D9] scroll-smooth overflow-y-scroll snap-y snap-mandatory' 
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
        <div key={elem} id={elem} className="flex snap-center  flex-col h-screen items-center justify-center bg-[#C3F3D9] " data-spy>
        <div className="text-start text-2xl">
            <h1>{elem}<ArrowRightAltOutlinedIcon/> Que signifie l' acronyme PHP ? </h1>
        </div>
        <div className="mt-5 text-xl flex flex-col space-y-2">
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
          <div onClick={Handleclick} className={nonActiveClass} id="A"> 
                A
          </div>
          <div onClick={Handleclick} className={nonActiveClass} id="B">
              B
          </div>
          <div  onClick={Handleclick} className={nonActiveClass} id="C">
              C
          </div>
          <div  onClick={Handleclick} className={nonActiveClass} id="D">
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
