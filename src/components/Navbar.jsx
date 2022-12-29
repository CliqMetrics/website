import React, { useState, useEffect } from 'react';

const navbar = () => {

    return (
        <div className={'nav w-full sticky top-0 z-50 bg-black h-14 md:h-16 2xl:h-24 flex items-center justify-center md:justify-between'}
        >
            <h1 className='text-white text-xl md:text-3xl md:pl-16'>Cliqmetrics</h1>
            <div className='md:flex space-x-4 hidden pr-16'>
                <button className='bg-white hidden md:block h-auto w-32 py-2 rounded-full font-semibold'>
                    <a href="login">
                        Login
                    </a>
                </button>
                <button className='bg-white hidden md:block h-auto w-32 py-2 rounded-full font-semibold'>
                    <a href="#demo">

                        Request Demo
                    </a>
                </button>
            </div>
        </div>
    )
}

export default navbar