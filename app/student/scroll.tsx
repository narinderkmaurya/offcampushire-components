"use client";

import { Instrument_Serif } from 'next/font/google';
import React from 'react'
import regular from "next/font/local";
import ScrollCard from './scrollCard';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });


const general = regular({
  src: '../../public/fonts/GeneralSans-Regular.ttf',
  display: 'swap',
})

const Scroll = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 5,
          bounce: 0.3,
        },
      });
    } else {
      animation.start({ opacity: 0 });
    }
  }, [inView]);

  return (
    <motion.div
      className='cone'
      ref={ref}
      animate={animation}
      initial={{ opacity: 0 }}
    >
      <div className="flex lg:flex-row flex-col py-6 px-2 w-full  lg:px-32 lg:py-16">
        <div className="lg:w-1/2 text-center lg:text-start" >
          <h6 className={` ${instrument.className} text-[2.25rem] sticky top-32 `}>
            Here&apos;s how we empower you
          </h6>
        </div>
        <div className="w-1/2 gap-6 flex flex-col pt-16">
          <ScrollCard title="Exclusive Opportunities" description="We connect you with exclusive off-campus drives organized in
          collaboration with companies & colleges" />
          <ScrollCard title="Connect with startups" description="Gone are the days of limited options. We bring you emerging
          startups actively seeking bright, specialized talents" />
          <ScrollCard title="Personalized Experience" description="Our platform fosters direct interaction with HRs and recruiters,
          allowing you to showcase your unique skills and personality" />
        </div>
      </div>
    </motion.div>
  )
}

export default Scroll