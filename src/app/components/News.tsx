import Image from 'next/image'
import React from 'react'

const News = () => {
    return (

        <div className="grid grid-cols-3 gap-10">
            <div className='w-full h-[300px]'>
                <Image src={'/michael-jordan-looks.jpg'} alt='' className='grayscale object-cover h-[300px]' width={500} height={500} />
            </div>
            <div className='w-full h-[300px]'>
                <Image src={'/kobe.jpeg'} alt='' className='grayscale object-cover h-[300px]' width={500} height={500} />
            </div>
            <div className='w-full h-[300px]'>
                <Image src={'/lebron.jpg'} alt='' className='grayscale object-cover h-[300px]' width={500} height={500} />
            </div>



        </div>
    )
}

export default News