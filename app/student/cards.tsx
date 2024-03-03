import { Instrument_Serif } from 'next/font/google';
import React from 'react'
import regular from "next/font/local";

const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });


const general = regular({
    src: '../../public/fonts/GeneralSans-Regular.ttf',
    display: 'swap',
})


interface CardProps {
    number: string;
    title: string;
}



const Three = ({ number, title }: CardProps) => {
    return (
        <div className='border rounded-[20px] border-[#D7D7D7] w-[350px] h-[220px] text-center  '>
            <h2 className={` ${instrument.className} text-[2.25rem] pt-6 `}>
                {number}
            </h2>
            <p className={ ` ${general.className} text-[1.125rem] px-6  pt-6` } >
                {title}
            </p>

        </div>
    )
}

export default Three