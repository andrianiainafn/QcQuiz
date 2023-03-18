import React from 'react'
import Headers from '../../features/Home/components/ui/Headers'
import NavBar from '../../features/Home/components/ui/NavBar'

function Home() {
  return (
    <div className='overflow-y-hidden'>
      <div className="">
        <NavBar/>
      </div>
      <Headers/>
    </div>
  )
}

export default Home
