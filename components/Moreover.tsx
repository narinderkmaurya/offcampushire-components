import { Instrument_Serif } from 'next/font/google';
import React from 'react'


import regular from "next/font/local";




const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });



const general = regular({
    src: './GeneralSans-Medium.ttf',
    display: 'swap',
})


export default function Moreover() {
    return (
        <div className='flex items-center  py-[120px] justify-center w-full bg-gradient-to-b from-[#f4f4f7] to-[#cdd3fd]  '>
            <div className="bg-white border rounded-2xl px-8 py-12 text-center">
                <span className={instrument.className + " text-6xl mb-4 text-transparent bg-clip-text "}  style={{
                        backgroundImage:
                            "linear-gradient(140deg,#36beff 24.24%,#733ff1)",
                    }}>Moreover</span>
                <p className= {general.className + 'text-xl mt-6 leading-9'} >
                    Every fresher starts searching for <br />
                    jobs on traditional job hunting platforms <br />
                    excitedly, only to find that most opportunities <br />
                    ask for experience they don&apos;t have yet
                </p>
            </div>
        </div>
    )
}
