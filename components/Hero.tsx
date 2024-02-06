import { Instrument_Serif } from 'next/font/google';
import React from 'react'


const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });



export default function Hero() {
    return (
        <header className=' hero-bg flex items-center justify-center '>
            <div className='w-full flex lg:px-24'>
                <div className="w-1/2">
                    <h1 className={instrument.className + ' text-6xl font-bold '}>
                        The future of off-campus <br />
                        placement drives is here
                    </h1>
                    <p className=' mt-4'>
                        OffcampusHire is the ultimate destination for freshers <br />
                        to explore, apply & attend off-campus placement drives
                    </p>
                </div>
            </div>


        </header>
    )
}
