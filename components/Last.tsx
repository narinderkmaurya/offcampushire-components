import React from 'react'
import bg from "@/public/bg.svg"
import Image from 'next/image'
import { Instrument_Serif } from 'next/font/google';




const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });



export default function Last() {
  return (
    <div className="overflow-hidden">

      <div className="h-0">
        <Image src={bg} alt="gradient" className="w-1/2 " />
      </div>


      <div className='min-h-screen flex items-center justify-center text-center bg-[#020617] Last'>

        <div className="">
          <span className='bg-[#ddd6fe] px-10 py-3 text-[#4c1d95]font-bold text-2xl rounded-full'>
            INTRODUCING
          </span>

          <h1 className={instrument.className + "  text-center  pt-12 text-7xl text-white "}>
            offcampushine
          </h1>
          <div className="text-start">
            <p className='text-white pt-8 leading-9 text-xl'>
              Welcome aboard to OffcampusHire, the radical platform committed to fueling  <br />
              the career move of freshers with exclusive off-campus placement drives!
            </p>
            <p className='text-white pt-8 leading-9 text-xl'>
              With our innovative approach to career empowerment, we aim to level the playing <br />
              field for freshers and provide them with the opportunities they need to thrive. By <br />
              bridging the gap between freshers and off-campus placement drives, we empower <br />
              the next generation of talent to reach their full potential and achieve their dreams.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
