import React from 'react'
import logo from '../assets/logo.svg'
const Navbar = () => {
  return (
    <div className='bg-white p-8 flex justify-between md:mx-10'>
      <div>
        <img src={logo} alt="logo"/>
      </div>
      <div className='hidden md:block flex flex-col md:flex-row justify-between space-x-8'>
        <a className='text-gray-500 border-spacing-2  hover:border-2 border-b-blue-600 from-green-400 to-blue-500' href="#">Home</a>
        <a className='text-gray-500 border-spacing-2  hover:border-2 border-b-blue-600 from-green-400 to-blue-500' href="#">About</a>
        <a className='text-gray-500 border-spacing-2  hover:border-2 border-b-blue-600 from-green-400 to-blue-500' href="#">Contact</a>
        <a className='text-gray-500 border-spacing-2  hover:border-2 border-b-blue-600 from-green-400 to-blue-500' href="#">Blog</a>
        <a className='text-gray-500 border-spacing-2  hover:border-2 border-b-blue-600 from-green-400 to-blue-500' href="#">Careers</a>
        
      </div>
      <div>
        <button type="button" class="hidden md:block text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Request Invite</button>
        <p className='md:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        </p>
      </div>
    </div>
  )
}

export default Navbar
