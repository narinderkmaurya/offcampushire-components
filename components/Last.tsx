"use client";

import React from 'react'
import bg from "@/public/bg.svg"
import Image from 'next/image'
import { Instrument_Serif } from 'next/font/google';
import { motion } from 'framer-motion';



const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });



export default function Last() {
  return (
    <div className="overflow-hidden ">

      <div className="h-0">
        <Image src={bg} alt="gradient" className="w-1/2 " />
      </div>


      <div className='min-h-screen flex items-center justify-center text-center bg-[#020617] Last lg:pt-[110px] lg:pb-[85px] '>

        <div className="">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='bg-[#ddd6fe] px-6 lg:px-10 py-3 text-[#4c1d95]font-bold lg:text-[1.25rem] rounded-full'>
            INTRODUCING
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={instrument.className + "  text-center lg:text-[6rem] text-[4rem]  font-bold  pt-12  text-white "}>
            offcampushine
          </motion.h1>
          <div className="text-start px-4 lg:px-[12rem]">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='text-white pt-2 text-xl text-md  lg:text-[1.5rem] leading-[1.5rem] lg:leading-[2.75rem]'>
              Welcome aboard to OffcampusHire, the radical platform committed to fueling
              the career move of freshers with exclusive off-campus placement drives!
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='text-white pt-8 text-xl text-md  lg:text-[1.5rem] leading-[1.5rem] lg:leading-[2.75rem]'>
              With our innovative approach to career empowerment, we aim to level the playing
              field for freshers and provide them with the opportunities they need to thrive. By
              bridging the gap between freshers and off-campus placement drives, we empower
              the next generation of talent to reach their full potential and achieve their dreams.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}