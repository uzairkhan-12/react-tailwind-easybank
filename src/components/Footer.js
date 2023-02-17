import React from 'react'
import logo from '../assets/logo.svg'
import fbIcon from '../assets/icon-facebook.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import youtubeIcon from '../assets/icon-youtube.svg'
import pinterestIcon from '../assets/icon-pinterest.svg'
import instagramIcon from '../assets/icon-instagram.svg'
const Footer = () => {
    return (
        <div className='bg-gray-700 flex flex-col md:flex-row p-20'>
            <div className='w-3/4 flex flex-col md:flex-row container justify-between'>
                <div >
                    <img src={logo} alt="logo" className='mb-10' style={{color:"white"}}/>
                    <div className='flex flex-row space-x-3'>
                        <img className='cursor-pointer' src={fbIcon} />
                        <img className='cursor-pointer' src={youtubeIcon} />
                        <img className='cursor-pointer' src={twitterIcon} />
                        <img className='cursor-pointer' src={pinterestIcon} />
                        <img className='cursor-pointer' src={instagramIcon} />
                    </div>
                </div>
                <div className='flex flex-col space-y-2'>
                    <p className='text-white cursor-pointer'>About Us</p>
                    <p className='text-white cursor-pointer'>Contact Us</p>
                    <p className='text-white cursor-pointer'>Blog</p>
                </div>
                <div className='flex flex-col space-y-2 items-start'>
                    <p className='text-white cursor-pointer'>Careers</p>
                    <p className='text-white cursor-pointer'>Support</p>
                    <p className='text-white cursor-pointer'>Privacy Policy</p>
                </div>
            </div>
            <div className='w-1/4 items-end flex flex-col'>
            <button type="button" class="text-white w-40 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Request Invite</button>
            <span class=" text-gray-500 sm:text-center dark:text-gray-400">© All Rights Reserved.</span>
            </div>
        </div>
    )
}

export default Footer
