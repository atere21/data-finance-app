import React from 'react'
import laptop from '../assests/laptop.jpg'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img
            className='w-[500px] mx-auto my-4'
             src={laptop} alt='/'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics centrally</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, aliquid hic. Corrupti aperiam soluta architecto. Nulla debitis nihil illo ipsa, possimus aperiam molestiae facilis consectetur iusto beatae pariatur a enim.</p>
                <button className='text-[#00df9a] w-[200px] rounded-md font-medium md:mx-0 mx-auto my-6 py-3 bg-black'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics