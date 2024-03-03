"use client";

import StudentHero from '@/components/Student-Hero'
import React from 'react'
import Card from "@/components/Slider"
import Navbar from '@/components/Navbar/Navbar';
import Para from './para';
import Three from './cards';
import Goodbye from './goodbye';
import Resume from './resume';
import ImagesCard from './imagesCard';

import yellow from "./yellow.png"
import red from "./red.png"
import blue from "./blue.png"
import Blue from './blue';
import Scroll from './scroll';
import { motion } from 'framer-motion';

import { useInView } from 'react-intersection-observer';

export default function page() {
        const [ref, inView] = useInView({
                triggerOnce: true, // Change to false if you want the animation to trigger again whenever it comes into view
        });
        const [ref1, inView1] = useInView({
                triggerOnce: true,
        });
        const [ref2, inView2] = useInView({
                triggerOnce: true,
        });
        const [ref3, inView3] = useInView({
                triggerOnce: true,
        });
        return (
                <div className='overflow-x-hidden'>
                        <Navbar />
                        <StudentHero />
                        <Para />
                        <div className="flex flex-col lg:flex-row lg:pt-32 gap-12 items-center justify-center w-full lg:px-32">
                                <motion.div
                                        ref={ref}
                                        className="three-card"
                                        initial={{ opacity: 0, rotateY: -180 }}
                                        animate={inView ? { opacity: 1, rotateY: 0 } : {}}
                                        transition={{ duration: 0.5 }}
                                >
                                        <Three number="01" title='Sign up & complete your profile to unlock access and get started with offcampushire' />
                                </motion.div>
                                <motion.div
                                        ref={ref}
                                        className="three-card"
                                        initial={{ opacity: 0, rotateY: -180 }}
                                        animate={inView ? { opacity: 1, rotateY: 0 } : {}}
                                        transition={{ duration: 0.5 }}
                                >
                                        <Three number="02" title='Explore & apply for off-campus drives scheduled across various colleges & universities' />
                                </motion.div>
                                <motion.div
                                        ref={ref}
                                        className="three-card"
                                        initial={{ opacity: 0, rotateY: -180 }}
                                        animate={inView ? { opacity: 1, rotateY: 0 } : {}}
                                        transition={{ duration: 0.5 }}
                                >
                                        <Three number="03" title='Shortlisted candidates shall be invited to attend placement drives' />
                                </motion.div>
                        </div>

                        <Goodbye />

                        <Resume />

                        <div className="lg:px-24 justify-between px-2 py-20 lg:flex-row flex-col flex items-center w-full gap-6 ">
                                <motion.div
                                        ref={ref1}
                                        className="images-card lg:w-1/3"
                                        initial={{ opacity: 0, rotateY: -180, scale: 0.8 }}
                                        animate={inView1 ? { opacity: 1, rotateY: 0, scale: 1 } : {}}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                        <ImagesCard imageSrc={yellow} description='With just one click, you can apply for off-campus drives. No more filling out lengthy application forms or attaching resumes' title='Single click apply' />
                                </motion.div>
                                <motion.div
                                        ref={ref2}
                                        className="images-card lg:w-1/3"
                                        initial={{ opacity: 0, rotateX: -180, scale: 0.8 }}
                                        animate={inView2 ? { opacity: 1, rotateX: 0, scale: 1 } : {}}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                        <ImagesCard imageSrc={red} description='Stay informed about the status of your applications with real-time updates. Receive notifications about interview invitations, application reviews, and more – all in one place' title='Real-Time Updates' />
                                </motion.div>
                                <motion.div
                                        ref={ref3}
                                        className="images-card lg:w-1/3"
                                        initial={{ opacity: 0, rotateZ: -180, scale: 0.8 }}
                                        animate={inView3 ? { opacity: 1, rotateZ: 0, scale: 1 } : {}}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                        <ImagesCard imageSrc={blue} description='Stay organized with a personalized dashboard that allows you to manage your applications and keep track your progress' title='Track Your Progress' />
                                </motion.div>
                        </div>

                        <Blue />

                        <Scroll />
                        <Card />

                </div>
        )
}
