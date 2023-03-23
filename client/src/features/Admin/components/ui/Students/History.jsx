import React from 'react'
import BarChart from '../../../../../components/BarChart'
import LineChart from '../../../../../components/LineChart'
import PieChart from '../../../../../components/PieChart'

function History() {
  return (
    <div>
      <div className="ml-5  ">
        <h4 className='text-2xl text-[#444]'> WELCOM TO YOUR DASHBOARD</h4>
        <div className="grid grid-cols-2 ">
          <div className="h-[38vh]">
            <BarChart/>
          </div>
          <div className="h-[38vh]">
            <LineChart/>
          </div>
          <div className="h-[38vh]">
            <PieChart/>
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