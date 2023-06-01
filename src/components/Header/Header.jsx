import React from 'react'
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiYarn } from 'react-icons/si';


export default function Header() {
  return (
    <div className='flex justify-center items-center mb-2 gap-1 w-full'>
      <FaReact />
      <SiVite />
      <SiYarn />
      <SiTailwindcss />
    </div>
  )
}
