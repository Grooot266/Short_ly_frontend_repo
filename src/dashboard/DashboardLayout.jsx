import React from 'react'
import Graph from './graph'
import { dummyData } from '../DummyData/data'

const DashboardLayout = () => {
  return (
    <div className='lg:px-14 sm:px-8 min-h-[calc(100vh=64px)]'>
        <div className='lg:w-[90%] w-full mx-auto py-16'>
          <div className='h-96 relative'>
            <Graph graphData={dummyData}/>
          </div>
          <div className='py-5 sm:text-end text-center'>
            <button className="bg-white border-2 border-black text-black font-semibold text-base sm:text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-[linear-gradient(90deg,_#d53369_0%,_#daae51_100%)] hover:text-white hover:shadow-xl">
              Create a new Short Url
            </button>
          </div>
        </div>
    </div>
  )
}

export default DashboardLayout