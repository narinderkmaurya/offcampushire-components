"use client";

import React from 'react'
import UltimateCard from './Cards/Ultimate-Card'
import Image from 'next/image'
import quote from "@/public/quote.svg"
import purple from "@/public/purple-large-backdrop.png"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import divider from "@/public/divider.svg"


import bold from "next/font/local"
import medium from "next/font/local";







const general = medium({
    src: '../public/fonts/GeneralSans-Medium.ttf',
    display: 'swap',
})


const Semibold = bold({
    src: '../public/fonts/GeneralSans-Semibold.ttf',
    display: 'swap',
})



const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Ultimate() {
    const { ref: refOne, inView: inViewOne } = useInView();
    const { ref: refTwo, inView: inViewTwo } = useInView();

    return (
        <div className=" purple-bg ">
            <div className={"min-h-screen flex items-center py-[100px] w-full ultimate   flex-col space-y-16 lg:px-44"}>

                <motion.h1
                    ref={refOne}
                    className={`${Semibold.className} text-3xl lg:text-5xl text-center`}
                    variants={fadeUp}
                    initial="hidden"
                    animate={inViewOne ? "visible" : "hidden"}
                >
                    The <span className='text-transparent bg-clip-text' style={{
                        backgroundImage:
                            "linear-gradient(140deg,#36beff 24.24%,#733ff1)",
                    }} >ultimate ecosystem</span> <br /> for levelling up in web3
                </motion.h1>
                <div className="">
                    <div className=" w-full flex flex-col  lg:flex-row  lg:columns-3 lg:items-center gap-6 lg:gap-12 lg:justify-center">
                        <UltimateCard number='552k' title='code lessons completed' />
                        <UltimateCard number='59k' title='AU students' />
                        <UltimateCard number='2,797' title='total projects created' />
                    </div>
                </div>

                <div className="z-10 mx-4  lg:mx-0">

                    <div className="max-w-xl rounded-2xl px-4 py-4 lg:py-8 border-2 bg-white lg:px-8 ">
                        <div className="h-0 bottom-12 relative left-12 lg:left-0">
                            <Image src={quote} alt="" />
                        </div>
                        <motion.p
                            ref={refTwo}
                            className={` ${general.className} lg:text-3xl leading-[1.75rem] lg:leading-[3rem]`}
                            variants={fadeUp}
                            initial="hidden"
                            animate={inViewTwo ? "visible" : "hidden"}
                        >
                            I learned the skillset I needed to transition from web2 to web3 and it led directly to landing my dream job and helping secure the open economy.
                        </motion.p>

                        <div className="lg:mt-24 mt-8">
                            <p className='font-semibold lg:text-lg'>
                                Dan McKeon, <span className='text-[#363ff9]'>@OpenZeppelin</span>
                            </p>
                            <span className='text-[#99a3b3] text-sm lg:text-md'>
                                Full Stack Ethereum Developer
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="relative -z-0 bottom-48 ">
                <Image src={divider} alt="" className='' />
            </div>
        </div>
    )
}