import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

import Carrusel from './Carousel'
import ThisWeek from './ThisWeek'
import Last30Days from './Last30Days'


const Movies = () => {
  const [openTabs, setOpenTabs] = useState(1)
  return (
    <div className='bg-gray-800 h-[60vh] py-10 flex flex-col sm:px-40 px-2'>
        <div className=''>
            <ul className=' text-white flex gap-4'>
            <NavLink onClick={e => {
              e.preventDefault();
              setOpenTabs(1)}}className=' hover:text-sky-500'>Today</NavLink> <p className='text-gray-500'>/</p>
            <NavLink onClick={e => {
              e.preventDefault();
              setOpenTabs(2)}}>This Week</NavLink> <p className='text-gray-500'>/</p>
            <NavLink onClick={e => {
              e.preventDefault();
              setOpenTabs(3)}}>Last 30 Days</NavLink> 
            </ul>
        </div>
        <div>
        <div className={openTabs === 1 ? "block" : "hidden"}>
            <Carrusel  />
          </div>
          <div className={openTabs === 2 ? "block" : "hidden"}>
             
             <ThisWeek />
          </div>
          <div className={openTabs === 3 ? "block" : "hidden"}>
             
             <Last30Days />
          </div>
        </div>
    </div>
  )
}

export default Movies