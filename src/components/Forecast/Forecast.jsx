import React from 'react'

function Forecast({ title }) {
  return (
    <div>
      <div className='flex justify-start items-center mt-6'>
        <p className='text-white font-medium uppercase'>{title}</p>
      </div>
      <hr className='my-2' />

      <div className='flex justify-between items-center'>
        {/* time */}
        <div className='flex flex-col justify-center items-center'>
            <p className='font-light text-sm'>
                04:30 PM
            </p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-1' />
            <p className='font-medium'>22°</p>
        </div>
        {/* time */}
        <div className='flex flex-col justify-center items-center'>
            <p className='font-light text-sm'>
                04:30 PM
            </p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-1' />
            <p className='font-medium'>22°</p>
        </div>
        {/* time */}
        <div className='flex flex-col justify-center items-center'>
            <p className='font-light text-sm'>
                04:30 PM
            </p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-1' />
            <p className='font-medium'>22°</p>
        </div>
        {/* time */}
        <div className='flex flex-col justify-center items-center'>
            <p className='font-light text-sm'>
                04:30 PM
            </p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-1' />
            <p className='font-medium'>22°</p>
        </div>
        {/* time */}
        <div className='flex flex-col justify-center items-center'>
            <p className='font-light text-sm'>
                04:30 PM
            </p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-1' />
            <p className='font-medium'>22°</p>
        </div>
      </div>      
    </div>
  )
}

export default Forecast
