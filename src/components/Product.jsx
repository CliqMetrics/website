import React from 'react'
import bulb from '../assets/bulb.png'
import ProductCards from './ProductCards'

const Product = () => {
    let props = {
        title: "Analyze",
        desc1: "Where there is data, there is insight",
        desc2: "Reveal key product insights through granular control over your data"
    }
    let props2 = {
        title: "Adapt",
        desc1: "Different strokes for different blokes",
        desc2: "Build context aware products driven by user behavior"
    }
    let props3 = {
        title: "Engage",
        desc1: "Message-In-Time",
        desc2: "Automate user communication every step of the way"
    }
    return (

        <div className='product relative flex justify-center text-white h-[100vh] lg:h-[120vh] 2xl:h-[100vh] w-full'>
            <h3 className='absolute top-12 md:top-12 2xl:top-24 uppercase tracking-[20px] md:tracking-[24px] md:text-2xl 2xl:text-5xl'>Products</h3>
            <div className='w-full lg:overflow-hidden top-28 md:top-36 2xl:top-52 absolute flex space-x-4 2xl:space-x-9 px-10 md:px-20 overflow-x-auto lg:overflow-x-hidden'>
                <ProductCards {...props} />
                <ProductCards {...props2} />
                <ProductCards {...props3} />
            </div>
            <button className='absolute bg-white right-70 opacity-70 hover:opacity-100 transition-opacity duration-100 bottom-4 2xl:bottom-20 flex flex-col p-3 w-52 md:w-64 h-12 md:h-16 text-xl justify-center text-black items-center space-y-2 rounded-full'>
                    <a href="#demo">
                        Demo
                    </a>
                </button>
        </div>
    )
}

export default Product

//Pinnafarina91!