import React from 'react'
import image1 from '../image/newsletter.png'


const Home = () => {
    return (
        <div className='flex flex-row mt-[6%] mr-[5%] ml-[5%]'>
            <div className='flex flex-col space-y-4'>
                <div className='text-6xl font-extrabold'>
                    <span >The All-in-One</span><br/>
                    <span>NewsLetter For</span><br/>
                    <span>Startup Founders</span>
                </div>
                <div>
                    90% of startups fail. Learn how not to with our weekly guides and stories. Join 40,000+ founders.
                </div>
                <div className='flex flex-row space-x-2'>
                    <input className='py-2 px-4 w-64 h-10 rounded-md border-solid border-2 border-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-200' placeholder='Enter the Email Address'></input>
                    <button className='bg-black text-white px-5 rounded-sm'>Subscribe</button>
                </div>
            </div>
            <div>
                <img src={image1} alt="Mobile Image" className='h-[55%] min-w-min' />
            </div>
        </div>
    )
}

export default Home