import { Instrument_Serif } from 'next/font/google';
import React from 'react'
import regular from "next/font/local";

const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });


const general = regular({
    src: '../../public/fonts/GeneralSans-Regular.ttf',
    display: 'swap',
})


const Goodbye = () => {
    return (
        <div className='lg:min-h-[542px] lg:max-h-[542px] bg-[#151D46] flex items-start justify-center lg:px-32 py-16 my-16 '>
            <div className="">
                <h1 className={` text-[2rem] text-center pb-8 text-white ${instrument.className} `}>
                    Say goodbye to CGPA requirements
                </h1>

                <div className="bg-gradient-to-b from-[#2C2950] to-[#827FA600]  lg:w-[700px] lg:h-[340px] text-center flex  lg:px-12 px-4 mx-2 py-12 sm:py-0 items-center justify-center text-white text-[18px] leading-[2rem] border border-[#FFFFFF10] rounded-[10px]">
                    <div className="space-y-8">
                        <p className={` ${general.className}  `}>
                            When it comes to placement drives, many companies have traditionally
                            required students to meet certain CGPA  requirements in order to be
                            eligible to apply
                        </p>

                        <p className={` ${general.className} `}>
                            We recognize that your true potential goes beyond a GPA and so we&apos;re
                            breaking down barriers of CGPA requirements, redefining the eligibility
                            criteria for freshers to participate in off-campus drives based on skills,
                            passion, and commitment, irrespective of academic grades
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goodbye