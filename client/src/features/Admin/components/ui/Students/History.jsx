import React from 'react'
import BarChart from '../../../../../components/BarChart'

function History() {
  return (
    <div>
      <div className="ml-5  ">
        <h4 className='text-2xl text-[#444]'> WELCOM TO YOUR DASHBOARD</h4>
        <div className="grid grid-cols-2 gap-5">
          <div className="h-[38vh]">
            <BarChart/>
          </div>
          <div className="h-[38vh]">
            <BarChart/>
          </div>
          <div className="h-[38vh]">
            <BarChart/>
          </div>
          <div className="h-[38vh]">
            <BarChart/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History