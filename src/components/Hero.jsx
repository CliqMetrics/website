import React from 'react'
import market from '../assets/market.png'

const Hero = () => {
    return (
        <div>
            <div className='relative h-[60vh]'>
                <div className="absolute w-full md:shrink-0 flex justify-center items-center">
                    <img className="blur-sm brightness-75 w-full object-cover h-[60vh]" src={market} alt="Modern building architecture" />
                    <div className='absolute z-10 text-white font-medium md:font-bold tracking-[2px] md:tracking-[10px] text-xl md:text-4xl'>Unleash the Power of Data</div>
                </div>
            </div>
        </div>
    )
}

export default Hero