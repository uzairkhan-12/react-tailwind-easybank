import React from 'react'
import mobile from '../assets/mobiles.png';
import bgDesktop from '../assets/bg-intro-desktop.svg'
import iconOnline from '../assets/icon-online.svg'
import iconBudgeting from '../assets/icon-budgeting.svg'
import fastOnboarding from '../assets/icon-onboarding.svg'
import openApi from '../assets/icon-api.svg'
import currencyImg from '../assets/image-currency.jpg'
import confettiImg from '../assets/image-confetti.jpg'
import planeImg from '../assets/image-plane.jpg'
import resturantImg from '../assets/image-restaurant.jpg'
import bgMobile from '../assets/bg-intro-mobile.svg'
const Dashboard = () => {
    return (
        <div>
            <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
                <div className='flex flex-col mb-32 space-y-4 md:w-1/3 md:items-start items-center'>
                    <p className='text-4xl text-black'>Next Generation</p>
                    <p className='text-4xl text-black'>digital Banking</p>
                    <p className='text-gray-500'>Take your financial life online. Your Easybank account will be one-stop-shop for spending, saving, budgeting, investing, and much more</p>
                    <div>
                        <button type="button" class="mt-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Request Invite</button>
                    </div>
                </div>
                <div className='flex flex-col mb-32 space-y-4 items-center'>
                    <img className='hidden md:block h-1/2 mb-[-30]' src={bgDesktop} alt="mobiles-backgound" />
                    <img className='hidden md:block absolute h-3/4' src={mobile} alt="mobiles-pic" />
                    {/* for mobile view */}
                    <img className='md:hidden' src={bgMobile} alt="mobiles-backgound" />
                    {/* <img className='md:hidden -mt-32 absolute' src={mobile} alt="mobiles-backgound" />   */}
                </div>
            </div>
            <div className='bg-gray-100 py-10'>
                <div className='container px-auto px-4 md:px-20 space-y-2 '>
                    <p className='text-3xl text-gray-800'>Why choose Easybank?</p>
                    <p className='text-gray-500'>We leverage Open Banking to turn your bank account into your financial hub.</p>
                    <p className='text-gray-500'>Control your finances like never before.</p>
                </div>
                <div className='flex flex-col md:flex-row md:px-20'>
                    <div className='md:w-1/4 container mt-10 justify-start flex flex-col px-auto px-4 md:px-10 space-y-2 items-center md:items-start'>
                        <img src={iconOnline} alt="icon" className='h-20 w-20 mb-10' />
                        <p className='text-3xl text-gray-800'>Online Banking</p>
                        <p className='text-gray-500'>Our modern web and mobile application allow to keep track of your finances wherever you are in the world</p>
                    </div>
                    <div className='md:w-1/4 container mt-10 justify-start flex flex-col px-auto px-4 md:px-10 space-y-2 items-center md:items-start'>
                        <img src={iconBudgeting} alt="icon" className='h-20 w-20 mb-10' />
                        <p className='text-3xl text-gray-800'>Simple Budgeting</p>
                        <p className='text-gray-500'>See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.</p>
                    </div>
                    <div className='md:w-1/4 container mt-10 justify-start flex flex-col px-auto px-4 md:px-10 space-y-2 items-center md:items-start'>
                        <img src={fastOnboarding} alt="icon" className='h-20 w-20 mb-10' />
                        <p className='text-3xl text-gray-800'>Fast Onboarding</p>
                        <p className='text-gray-500'>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                    </div>
                    <div className='md:w-1/4 container mt-10 justify-start flex flex-col px-auto px-4 md:px-10 space-y-2 items-center md:items-start'>
                        <img src={openApi} alt="icon" className='h-20 w-20 mb-10' />
                        <p className='text-3xl text-gray-800'>Open API</p>
                        <p className='text-gray-500'>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                    </div>
                </div>
            </div>
            <div className=' py-10'>
                <div className='container px-auto px-4 md:px-20 space-y-2 '>
                    <p className='text-3xl text-gray-800'>Latest Articles</p>
                </div>
                <div className='flex flex-col md:flex-row px-4 md:px-20'>
                    <div className='md:w-1/4 container mt-10 justify-start flex flex-col px-auto px-4 space-y-2'>
                        <img src={currencyImg} alt="icon" className='rounded-sm' />
                        <p className='my-4 text-gray-500'>By Claire Robinson</p>
                        <p className='text-2xl text-gray-800'>Reveive money in any currency with no fees</p>
                        <p className='text-gray-500'>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...</p>
                    </div>
                    <div className='md:w-1/4 container mt-10 justify-start flex flex-col px-auto px-4 space-y-2'>
                        <img src={resturantImg} alt="icon" className='rounded-sm' />
                        <p className='my-4 text-gray-500'>By Claire Robinson</p>
                        <p className='text-2xl text-gray-800'>Treat yourself without worrying about money</p>
                        <p className='text-gray-500'>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...</p>
                    </div>
                    <div className='md:w-1/4 container mt-10 justify-start flex flex-col px-auto px-4 space-y-2'>
                        <img src={planeImg} alt="icon" className='rounded-sm' />
                        <p className='my-4 text-gray-500'>By Claire Robinson</p>
                        <p className='text-2xl text-gray-800'>Take your Easybank card wherever you go</p>
                        <p className='text-gray-500'>We want you to enjoy your traverls. This is why we don't charge any fees on purchases while you're abroad We'll even show you...</p>
                    </div>
                    <div className='md:w-1/4 container mt-10 justify-start flex flex-col px-auto px-4 space-y-2'>
                        <img src={confettiImg} alt="icon" className='rounded-sm' />
                        <p className='my-4 text-gray-500'>By Claire Robinson</p>
                        <p className='text-2xl text-gray-800'>Our invite-only Beta accounts are now live</p>
                        <p className='text-gray-500'>After a lot of hard work by the whole team, we're exiceted to launch our closed beta. It's easy to request an invite through the site ...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
