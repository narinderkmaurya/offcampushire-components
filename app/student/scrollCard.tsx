import { Instrument_Serif } from 'next/font/google';
import React from 'react'
import regular from "next/font/local";

const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });


const general = regular({
    src: '../../public/fonts/GeneralSans-Regular.ttf',
    display: 'swap',
})

interface Props {
    title: string;
    description: string;

}

const ScrollCard = ({ title, description }: Props) => {
    return (
        <div className='lg:w-[600px] w-[380px] lg:h-[180px] border border-[#d7d7d7] px-6 py-6 bg-[#F6F7FE] rounded-[10px] '>
            <p className= {` ${instrument.className} text-[1.75rem] `} >
                {title}
            </p>
            <p className= {` ${general.className} pt-4 leading-[2rem] text-[1.125rem] text-[#64748B] `} >
                {description}
            </p>
        </div>
    )
}

export default ScrollCard