import React from 'react'
import { Instrument_Serif } from 'next/font/google';




const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });



export default function EcoSystem() {
    return (
        <div className="overflow-hidden">


            <div className='min-h-screen flex items-center justify-center text-center flex-col'>

                <h1 className={instrument.className + "  text-center  pt-12 text-7xl  "}>
                    Reimagining off-campus placement drives <br />
                    ecosystem of India

                </h1>
                <div className="text-center">
                    <p className=' pt-8 leading-9 text-xl'>
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
