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



export default function New() {
    return (
        <div>
            <div className=' flex flex-col justify-center items-center text-[#020617]  py-[105px] text-center space-y-12 bg-[#f9f9fb]'>

                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={light.className +  ' md:text-[20px]  md:px-[16.5rem] lg:px-[13.5rem] xl:px-[19.5rem] px-6 text-md  lg:text-[1.4rem] leading-[1.71rem] lg:leading-[2.75rem] '}
                  style={{ }}
                >
                    Being left out of on-campus placements can deal a blow to a fresher&apos;s confidence
                    and self-esteem. The journey of job hunting can take a toll on a fresher&apos;s confidence
                    and self-belief. Rejections become a constant companion, chipping away at their
                    resilience
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={light.className +  'md:text-[20px]  md:px-[16.5rem] lg:px-[13.659rem] xl:px-[18.5rem] px-6 text-md  lg:text-[1.4rem] leading-[1.71rem] lg:leading-[2.75rem]'}
                  style={{ }}
                >
                    For many freshers, securing a job post-graduation isn&apos;t just about fulfilling career
                    aspirations; it&apos;s also about contributing to their family&apos;s financial stability. The delay in
                    finding employment adds to the burden, increasing financial strain and amplifying the
                    pressure to succeed.
                </motion.p>
            </div>
        </div>
    )
}