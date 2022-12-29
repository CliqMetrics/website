import React from 'react'

const Services = () => {
    return (
        <div className='service h-[70vh] md:h-[40vh] lg:h-[80vh] 2xl:h-[40vh] relative flex justify-center w-full'>
            <h4 className='uppercase top-24 absolute md:text-2xl 2xl:text-5xl tracking-[20px] font-semibold'>
                Services
            </h4>
            <div className='w-full relative top-40 flex justify-evenly'>
                <div className='bg-black space-y-12 w-1/3 rounded-xl p-10 h-1/2'>
                    <h5 className='text:xl text-white md:text-3xl text-center md:text-left'>Clickstream Schema Management</h5>
                    <p className=' text-white'>Envisioning and maintenance of clickstream tracking schema for existing and new features</p>
                </div>
                <div className='bg-black w-1/3 space-y-12 text-white rounded-xl p-10 h-1/2'>
                    <h5 className='text:xl md:text-3xl'>Clickstream Reporting</h5>
                    <p className=''>Providing in-depth analysis for key product trends, on request</p>
                </div>
            </div>
            
        </div>
    )
}

export default Services