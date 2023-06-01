import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";

export default function Footer() {
  return (
    <div className='footer'>
        <p>
            <a className='flex flex-col items-center justify-center' href="https://github.com/Erik-Varga" target="_blank" rel="noreferrer">
                &copy; {(new Date().getFullYear())} Erik Varga | Web Developer 
                &nbsp; <AiFillGithub className='ml-1' />
            </a>
        </p>
        <p>
            <a className='flex items-center justify-center' href="https://github.com/Erik-Varga/react-vite-weather-app" target="_blank" rel="noreferrer">
        
            Source Code &nbsp;<BsCodeSlash />
            </a>
        </p>
    </div>
  )
}