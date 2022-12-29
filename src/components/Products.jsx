import React from 'react'
import bulb from '../assets/bulb.png'
import Form from './Form'
import ProductCards from './ProductCards'

const Products = () => {
    let props = {
        title: "Analyze",
        desc1: "Where there is data, there is insight",
        desc2: "Reveal key product insights through granular control over your data"
    }
    return (
        <div className='w-full relative flex h-auto justify-center md:text-3xl'>
            <div className='absolute md:shrink-0 z-0'>
                <img className="h-[100vh] xl:h-[100vh] z-0 brightness-50 w-full xl:width-auto object-cover" src={bulb} alt="" />
            </div>
            <h3 className='absolute top-16 md:top-24 uppercase tracking-[20px] md:tracking-[24px] text-gray-200'>Products</h3>
            <div className='w-full lg:overflow-hidden top-32 md:top-72 lg:top-52 relative flex space-x-4 px-10 md:px-20 overflow-x-auto md:overflow-x-hidden'>
                <ProductCards {...props} />
                <ProductCards {...props} />
                <ProductCards {...props} />
            </div>
                <button className='absolute bg-white right-70 opacity-70 hover:opacity-100 transition-opacity duration-100 bottom-3 md:bottom-5 flex flex-col p-3 w-52 md:w-64 h-12 md:h-16 text-xl justify-center items-center space-y-2 rounded-full'>
                    <span>
                        Demo
                    </span>
                </button>
        </div>
    )
}

export default Products