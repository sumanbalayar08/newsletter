import React from 'react'
import image1 from '../image/newsletter.png'
import image from '../image/profile.jpeg'


const Home = () => {
    return (
        <div className='flex flex-row mt-[6%] mr-[5%] ml-[5%]'>
            <div className='flex flex-col space-y-8 w-[100%]'>
                <div className='text-6xl font-extrabold'>
                    <span >The All-in-One</span><br/>
                    <span>NewsLetter For</span><br/>
                    <span>Startup Founders</span>
                </div>
                <div className='text-slate-600 text-2xl'>
                    90% of startups fail. Learn how not to with our weekly guides and stories. <span className='text-black font-semibold'>Join 40,000+ founders.</span>
                </div>
                <div className='flex flex-row space-x-2'>
                    <input className='py-2 px-4 w-3/4 h-fit rounded-md border-solid border-2 border-gray-800 focus:border-gray-900' placeholder='Enter the Email Address'></input>
                    <button className='bg-black text-white px-7 rounded-[4px]'>Subscribe</button>
                </div>
                <div className='flex flex-row'>
                    <img src={image} alt='my image' className='rounded w-16'/>
                    <span className='text-slate-600 text-xl italic'>My name is Suman Balayar and I'm a Full Stack Developer. I'd love you to join the newsletter!</span>
                </div>
            </div>
            <div>
                <img src={image1} alt="Mobile Image" className='h-[55%] min-w-min' />
            </div>
        </div>
    )
}

export default Home