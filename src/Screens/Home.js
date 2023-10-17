import React from 'react'
import image1 from '../image/newsletter.png'
import image from '../image/profile.jpeg'


const Home = () => {
    return (
        <div className='flex flex-col-reverse py-[6%] px-[5%]'>
            <div className='flex flex-col space-y-8 w-[100%]'>
                <div className='text-3xl md:text-6xl font-extrabold text-center'>
                    <span>The <span className='underline'>All-in-One</span><br/></span>
                    <span>Frontend Solutions For</span><br/>
                    <span>Startup Founders</span>
                </div>
                <div className='text-slate-600 text-md md:text-2xl text-center'>
                    90% of startups fail. Design a beautiful frontend for your business. <span className='text-black font-semibold'>Join 40,000+ founders.</span>
                </div>
                <div className='flex flex-row space-x-1 md:space-x-2 justify-center'>
                    <input className='py-2 px-4 w-3/4 h-fit rounded-md border-solid border-2 border-gray-800 focus:border-gray-900' placeholder='Enter the Email Address'></input>
                    <button className='bg-black text-white text-sm md:text-base px-2 md:px-7 rounded-[4px]'>Subscribe</button>
                </div>
                <div className='flex flex-row items-center justify-center'>
                    <img src={image} alt='my image' className='rounded w-8 md:w-16'/>
                    <span className='text-slate-600 text-sm md:text-xl italic'>My name is Suman Balayar and I'm a Full Stack Developer. I'd love you to join the newsletter!</span>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <img src={image1} alt="Mobile Image" className='w-2/3' />
            </div>
            
        </div>
    )
}

export default Home