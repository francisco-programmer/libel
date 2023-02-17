import React, { useRef } from 'react'
import Peliculas from './pelicula';
import { IoIosArrowDropright } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';
const Carrusel = () => {
    const slider = useRef()
 

    return (
      <div className="">
        <div className="flex items-center  w-full  ">
          
          <div
            ref={slider} 
            className="snap-x overflow-x-hidden w-[120vh]   scroll-smooth h-full p-5 flex items-center justify-start"
          >
            {Peliculas.map((items, i) => (
              <div
                key={i}
                className="snap-start  flex-shrink-0  overflow-y-hidden mx-2 flex flex-col "
              >
                <img
                  src={items.img}
                  className="object-cover object-center w-32 h-40"
                />
                <div className='leading-3 mb-5'>
                 <p className='text-gray-500 text-sm'> {items.genero}, {items.estreno}</p>
                 <p className='text-white w-32 text-sm leading-3'>{items.name}</p>
                </div>
              </div>
            ))}
          </div>


          <div className='w-60 mx-2'>
            <hr className='w-8 border-gray-600 mb-5'></hr>
            <p className='text-white sm:text-2xl text-xl leading-6 mb-3'>Action & <br></br> Drama Movies</p>
          
          <div className='flex mb-5'>
          <button
            className="text-gray-600 text-3xl hover:text-gray-400"
            onClick={() => (slider.current.scrollLeft -= 200)}
            >
            <IoIosArrowDropright className="rotate-180" />
          </button>
          <button
            className=" mx-2 text-gray-600 text-3xl hover:text-gray-400"
            onClick={() => (slider.current.scrollLeft += 200)}
            >
            <IoIosArrowDropright />{" "}
          </button></div>
          <hr className='border-gray-600'></hr>
          <p className='text-gray-500 text-xs mt-4 flex items-center '>VIEW ALL <MdKeyboardArrowRight /></p>
        </div>
              </div>

       
      </div>
    );
}
export default Carrusel
