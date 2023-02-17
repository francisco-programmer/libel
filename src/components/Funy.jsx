import React, { useState } from 'react'
import {  NavLink} from 'react-router-dom'
import Funnies from './Funnies'
import Last30Days from './Last30Days'
import ThisFunnies from './ThisFunnies'
import ThisWeek from './ThisWeek'

const Funy = () => {
 const [openTabs, setOpenTabs] = useState(1)
  return (
    <div className='bg-gray-900 h-[60vh] py-10 flex flex-col sm:px-40 px-2'>
        <div className='sm:px-[250px]'>
            <ul className=' text-white flex gap-4'>
            <NavLink  className="hover:text-sky-500"
            onClick={e => {
              e.preventDefault();
              setOpenTabs(1)}}>Today</NavLink> <p className='text-gray-500'>/</p>
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
            <Funnies />
          </div>
          <div className={openTabs === 2 ? "block" : "hidden"}>
             
             <ThisFunnies />
          </div>
          <div className={openTabs === 3 ? "block" : "hidden"}>
             
             <Last30Days />
          </div>
          
         
         
        </div>
    </div>
  )
}

export default Funy