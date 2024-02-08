import React from 'react'
import { Instrument_Serif } from 'next/font/google';


import regular from "next/font/local";

const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });

const general = regular({
    src: './GeneralSans-Medium.ttf',
    display: 'swap',
})

export default function EcoSystem() {
    return (
        <div className="my-[120px]  text-center flex-col">


            <div className=''>

                <h1 className={instrument.className + "  text-center   text-[50px]  "}>
                    Reimagining <span style={{
                        backgroundImage:
                            "linear-gradient(140deg,#36beff 24.24%,#733ff1)",
                    }} className='text-transparent bg-clip-text'>off-campus placement  drives</span> <br />
                    ecosystem of India

                </h1>
                <div className="text-center pt-6   text-[#3f3f42] ">
                    <p className={general.className} style={{ fontSize: "1.45rem", fontWeight:"400" , lineHeight:"2.7rem"}}>
                        Welcome to OffcampusHire, where we are dedicated to empowering <br />
                        freshers to kickstart their careers through exclusive off-campus placement <br />
                        drives. Our platform serves as a catalyst for bridging the gap between freshers <br />
                        and exclusive off-campus placement drives beyond on-campus placements .
                    </p>

                </div>
            </div>
        </div>
    )
}
