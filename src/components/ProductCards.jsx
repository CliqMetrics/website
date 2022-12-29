import React from 'react'

const ProductCards = (props) => {
    return (
        <>
            <div className='h-[70vh] relative z-0 overflow-hidden justify-center lg:h-[80vh] 2xl:h-[70vh] w-80 md:w-64 lg:w-96 2xl:w-2/6 rounded-lg 2xl:rounded-2xl min-w-full md:min-w-[80vw] lg:min-w-fit flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity duration-150' >
                <div className='absolute h-full w-full opacity-60 bg-white'></div>
                <div className='absolute px-20 flex justify-center space-y-14 tracking-wide lg:space-y-20 items-center flex-col h-full'>
                    <h4 className='text-black text-2xl lg:text-2xl 2xl:text-6xl font-semibold opacity-100'>{props.title}</h4>
                    <h4 className='text-black text-lg 2xl:text-5xl font-medium'>{props.desc1}</h4>
                    <h4 className='text-black text-sm 2xl:text-4xl'>{props.desc2}</h4>
                </div>
            </div>
        </>
    )
}

export default ProductCards