"use client";

import React from 'react'
import { motion } from 'framer-motion'

import regular from "next/font/local";
import medium from "next/font/local";



const Regular = regular({
    src: './GeneralSans-Medium.ttf',
    display: 'swap',
})

const light = medium({
    src: './GeneralSans-Regular.ttf',
    display: 'swap',
})

export default function Problem() {
    return (
        <div className="">
            <div className='min-h-96 flex flex-col justify-center items-center  pt-[120px] pb-[112px] text-center space-y-6'>
                <motion.span
                    className="text-transparent  font-semibold bg-clip-text"
                    style={{
                        backgroundImage:
                            "linear-gradient(140deg,#36beff 24.24%,#733ff1)",
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >THE PROBLEM</motion.span>

                <motion.p
                    className={Regular.className + ' px-6 text-md  lg:text-[1.8755rem] leading-[1.5rem] lg:px-[20rem] lg:leading-[3.25rem] '}
                    style={{color:"#3f3f42"}}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    When college students in India don&apos;t get placed during campus
                    placements, it can make things tough for them upon graduation.
                    They have to figure out how to find a job all on their own, and that
                    can be really hard.
                </motion.p>
            </div>



        </div>
    )
}