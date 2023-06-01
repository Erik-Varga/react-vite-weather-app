import React from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown  } from 'react-icons/ai';
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill, BsCloudRainHeavyFill, BsWind, BsFillSunFill  } from 'react-icons/bs';
import { FaTemperatureHigh, FaTemperatureLow  } from 'react-icons/fa';
import { TbSunset2  } from 'react-icons/tb';


function TemperatureAndDetails() {
  return (
    <div>
      <div className='flex justify-center items-center py-6'>
        <p>Cloudy or whatever</p>
      </div>
      <div className='flex flex-row justify-around items-center text-white p-3'>
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-20' />
        <p className='text-5xl'> 34°</p>
        <div className='flex flex-col space-y-2'>
            <div className='flex font-light text-sm justify-center items-center'>
                <FaTemperatureHigh size={18} className='mr-1'/>
                Real fell:
                <span className='font-medium ml-1'>32°</span>
            </div>
            <div className='flex font-light text-sm justify-center items-center'>
                <BsCloudRainHeavyFill size={18} className='mr-1'/>
                Humidity:
                <span className='font-medium ml-1'>65%</span>
            </div>
            <div className='flex font-light text-sm justify-center items-center'>
                <BsWind size={18} className='mr-1'/>
                Wind:
                <span className='font-medium ml-1'>11 mph</span>
            </div>
        </div>
      </div>
        <div className='flex justify-center items-center py-1 text-sm'>
            <div className='flex justify-center items-center'>
                <BsFillSunFill size={18} className='mr-1'/>
                Rise:
                <span className='ml-1'>05:30 AM</span>
                &nbsp; | &nbsp;
            </div>
            <div className='flex justify-center items-center'>
                <TbSunset2 size={18} className='mr-1'/>
                Set:
                <span className='ml-1'>09:10 PM</span>
                &nbsp; | &nbsp;
            </div>
            <div className='flex justify-center items-center'>
                <AiOutlineArrowUp size={18} />
                High:
                <span className='ml-1'>21°</span>
                &nbsp; | &nbsp;
            </div>
            <div className='flex justify-center items-center'>
                <AiOutlineArrowDown size={18} />
                Low:
                <span className='ml-1'>17°</span>
            </div>
        </div>
    </div>
  )
}

export default TemperatureAndDetails
