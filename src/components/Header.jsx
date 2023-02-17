import React from 'react'
import { BsPlayCircle } from 'react-icons/bs';

const Header = () => {
  return (
    <div className="bg-gray-700  sm:px-40 px-3 py-20 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-0 w-full">
      <div className="flex flex-col gap-9">
        <h1 className="text-white text-3xl  font-bold">Big Comeback</h1>
        <p className="text-white">
          NNulian porta,eros id iaqus ex mattins, quis ves- <br></br>
          tibulum una turpies
          rises mauris portitos risus faucibus, <br></br>autor arcu a, tincidunt nibn...
        </p>
        <div className="flex gap-4 justify-center sm:justify-start">
          <button className="sm:py-4 py-1 sm:px-10 px-5 bg-sky-500 text-white rounded-md">
            Watch Now
          </button>

          <button className=" border-[1px] py-4 sm:px-10 px-5 border-white text-white rounded-md">
          +  Playlist
          </button>
        </div>
      </div>
      <div className="px-20">
        <BsPlayCircle className='text-9xl text-sky-500'/>
      </div>
    </div>
  );
}
                                                                        
export default Header;