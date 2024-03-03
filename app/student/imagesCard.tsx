import React from 'react'
import Image, { StaticImageData } from 'next/image';

import regular from "next/font/local";
import { Instrument_Serif } from 'next/font/google';

const general = regular({
    src: '../../public/fonts/GeneralSans-Regular.ttf',
    display: 'swap',
})


const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });


interface CardProps {
    title: string;
    description: string;
    imageSrc: string | StaticImageData; // Added prop for different images
}


const ImagesCard = ({ title, description, imageSrc }: CardProps) => {
    return (
        <div className=' border border-[#D7D7D7] min-w-[370px] h-[475px] py-4 px-5 bg-white rounded-[20px] '>
            <div className="">
                <Image src={imageSrc} alt="image" className='min-w-[320px] h-[160px] w-full object-cover' />
            </div>
            <p className= {` ${instrument.className} text-[1.75rem] pt-6 pb-6`}>{title}</p>
            <p className= {` ${general.className} text-[1.025rem] leading-[1.75rem] text-[#7B899C] `} >{description}</p>
        </div>
    )
}

export default ImagesCard