import React from 'react'
import { BiCurrentLocation, BiRefresh, BiSearch } from 'react-icons/bi';

function Inputs() {
  return (
    <div className='flex flex-row justify-center items-center my-6'>
      <div className='flex flex-row w-full justify-center items-center space-x-4 m-2 p-2'>
        <input type="text" className='w-full text-md text-black capitalize p-2 focus:outline-none placeholder:lowercase rounded shadow-lg' placeholder='Search for city ...' />
        <BiSearch size={25} className='text-white cursor-pointer transition duration-150 ease-in-out hover:scale-125' />
        <BiCurrentLocation size={25} className='text-white cursor-pointer transition duration-150 ease-in-out hover:scale-125' />
        <div className='flex flex-row justify-center items-center space-x-4'>
            <button name='metric' className='text-xl text-white font-light hover:text-yellow-200'>°C</button>
            <p className='text-md text-white mx-1'>|</p>
            <button name='imperial' className='text-xl text-white font-light hover:text-yellow-200'>°F</button>
            <p>
                <BiRefresh className='text-white cursor-pointer transition duration-150 ease-in-out hover:scale-125' />
            </p>
        </div>
      </div>
    </div>
  )
}

export default Inputs
