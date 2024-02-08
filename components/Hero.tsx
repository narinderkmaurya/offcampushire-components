import { Instrument_Serif } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
import regular from "next/font/local";

import card from "@/public/card.svg"
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });
const general = regular({
    src: './GeneralSans-Medium.ttf',
    display: 'swap',
})


export default function Hero() {
    return (
        <header className=' hero-bg flex items-center justify-center '>
            <div className='w-full flex lg:px-24'>
                <div className="w-1/2 pt-32">
                    <h1 className={instrument.className + '  text-[64px] font-bold  hero-heading'}>
                        The future of <span style={{
                        backgroundImage:
                            "linear-gradient(140deg,#36beff 24.24%,#733ff1)",
                    }} className='text-transparent bg-clip-text'>off-campus</span> <br />
                        placement drives is here
                    </h1>
                    <p className= {general.className + ' mt-4 leading-9 text-[22px] para text-[#3f3f42]' } style={{fontWeight:"500"}} >
                        OffcampusHire is the ultimate destination for freshers 
                        to explore, apply & attend off-campus placement drives
                    </p>
                </div>
                <div className="">
                <Image src={card} alt=""  className='w-[500px] relative top-[2.8rem] left-[6.5rem]' />
                </div>
            </div>


        </header>
    )
}
