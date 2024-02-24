import { Instrument_Serif } from 'next/font/google'
import Image from 'next/image';
import React from 'react'

import bg from "@/components/Header/assets/bg.svg";

const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });



export default function Header() {
    return (
        <header className={instrument.className + "  text-center  pt-16 "}>
            <h1 className='lg:text-[4rem]  text-[2rem]   lg:leading-[5.2rem] '>
                Empowering freshers with <br />
                <span className="text-transparent  bg-clip-text"
                    style={{
                        backgroundImage:
                            "linear-gradient(140deg,#36beff 24.24%,#733ff1)",
                    }}>off-campus placement drives</span>
            </h1>
            <div className="w-full pt-12 lg:pt-0" >
                <Image src={bg} alt="hero-bg" className='w-full h-full' />
            </div>
        </header>
    )
}
