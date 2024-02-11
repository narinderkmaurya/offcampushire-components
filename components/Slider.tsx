"use client"

import React from 'react'
import MobileCardsSection from './MobileCardsSection'
import DesktopCardsSection from './DesktopCardsSection'
import { useRef } from 'react';
import "./scrollbar.css"
import { useState } from 'react';
import { useEffect } from 'react';


import globe from "@/public/globe2.jpg"
import Image from 'next/image';



const Slider = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isLeftScrollable, setIsLeftScrollable] = useState(false);
  const [isRightScrollable, setIsRightScrollable] = useState(false);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setIsLeftScrollable(container.scrollLeft > 0);
      setIsRightScrollable(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      handleScroll(); // Initial check
      scrollContainerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 1000;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 1000;
    }
  };
  
  return (
    <section className='relative flex flex-col gap-8 overflow-hidden md:gap-12 text-[#020617]'>
        <Image src={globe} className='absolute inset-0 z-0 h-full w-full object-cover object-center hidden lg:block' alt='desktop-card-bg-image'/>
        <Image src='https://www.alchemy.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F105223%2F1705608917-testimonial-mobile.png&w=3840&q=75' width={3840} height={75} className='absolute inset-0 z-0 h-full w-full object-cover object-center lg:hidden' alt='mobile-card-bg-image'/>
        <div className='z-10 flex flex-col gap-14'>
            <div className='mx-auto flex w-full max-w-[1170px] flex-col items-center justify-center gap-4 px-6 pt-12 md:px-8 md:pt-16 lg:pt-24'>
                <h2 className='lg:text-[48px] md:text-[38px] text-[32px] font-primary leading-none font-black max-w-[770px] text-center'>
                    <span>Powering web3 growth</span>
                </h2>
            </div>
            <MobileCardsSection/>
            <div 
                className='no-scrollbar hidden w-screen cursor-grab snap-x snap-mandatory flex-row gap-8 overflow-x-auto scroll-smooth px-6 pb-4 active:cursor-grabbing md:flex md:scroll-px-[calc(50vw-484px)] md:px-[calc(50vw-484px)]'
                ref={scrollContainerRef}
            >
                <DesktopCardsSection/>
            </div>
        </div>
        <div className='z-10 hidden flex-row justify-center gap-3 pb-12 text-[#020617] md:flex md:pb-16 lg:pb-24'>
        <button onClick={scrollLeft} disabled={!isLeftScrollable} className={`scroll-button ${isLeftScrollable ? 'active' : ''}`}>
          <svg className={`transition-all ${isLeftScrollable ? 'hover:text-blue-600 active:scale-95' : 'text-gray-300'}`} width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.7212 30.9884C20.2516 31.6248 21.1974 31.7108 21.8338 31.1804C22.4703 30.6501 22.5562 29.7042 22.0259 29.0678L19.7212 30.9884ZM14.3375 22.1848L13.1851 21.2245C12.7216 21.7808 12.7216 22.5888 13.1851 23.1451L14.3375 22.1848ZM22.0259 15.3018C22.5562 14.6654 22.4703 13.7195 21.8338 13.1892C21.1974 12.6588 20.2516 12.7448 19.7212 13.3812L22.0259 15.3018ZM30.0241 23.6848C30.8525 23.6848 31.5241 23.0132 31.5241 22.1848C31.5241 21.3564 30.8525 20.6848 30.0241 20.6848V23.6848ZM22.0259 29.0678L15.4898 21.2245L13.1851 23.1451L19.7212 30.9884L22.0259 29.0678ZM15.4898 23.1451L22.0259 15.3018L19.7212 13.3812L13.1851 21.2245L15.4898 23.1451ZM14.3375 23.6848H30.0241V20.6848H14.3375V23.6848ZM10.6923 10.6962C17.0372 4.35126 27.3244 4.35126 33.6694 10.6962L35.7907 8.57489C28.2742 1.05837 16.0875 1.05837 8.57098 8.57489L10.6923 10.6962ZM33.6694 10.6962C40.0143 17.0411 40.0143 27.3283 33.6694 33.6733L35.7907 35.7946C43.3072 28.2781 43.3072 16.0914 35.7907 8.57489L33.6694 10.6962ZM33.6694 33.6733C27.3244 40.0182 17.0372 40.0182 10.6923 33.6733L8.57098 35.7946C16.0875 43.3111 28.2742 43.3111 35.7907 35.7946L33.6694 33.6733ZM10.6923 33.6733C4.34736 27.3283 4.34736 17.0411 10.6923 10.6962L8.57098 8.57489C1.05447 16.0914 1.05447 28.2781 8.57098 35.7946L10.6923 33.6733Z" fill="currentColor"></path></svg>
            </button>
            <button onClick={scrollRight} disabled={!isRightScrollable} className={`scroll-button ${isRightScrollable ? 'active' : ''}`}>
          <svg className={`transition-all ${isRightScrollable ? 'hover:text-blue-600 active:scale-95' : 'text-gray-300'}`} width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.646 13.3788C24.1156 12.7424 23.1698 12.6564 22.5334 13.1868C21.8969 13.7171 21.811 14.663 22.3413 15.2994L24.646 13.3788ZM30.0297 22.1824L31.182 23.1427C31.6456 22.5864 31.6456 21.7784 31.182 21.2221L30.0297 22.1824ZM22.3413 29.0654C21.8109 29.7018 21.8969 30.6477 22.5333 31.178C23.1698 31.7084 24.1156 31.6224 24.646 30.986L22.3413 29.0654ZM14.3431 20.6824C13.5147 20.6824 12.8431 21.354 12.8431 22.1824C12.8431 23.0108 13.5147 23.6824 14.3431 23.6824L14.3431 20.6824ZM22.3413 15.2994L28.8774 23.1427L31.182 21.2221L24.646 13.3788L22.3413 15.2994ZM28.8774 21.2221L22.3413 29.0654L24.646 30.986L31.182 23.1427L28.8774 21.2221ZM30.0297 20.6824L14.3431 20.6824L14.3431 23.6824L30.0297 23.6824L30.0297 20.6824ZM33.6749 33.671C27.3299 40.0159 17.0428 40.0159 10.6978 33.671L8.5765 35.7923C16.093 43.3088 28.2797 43.3088 35.7962 35.7923L33.6749 33.671ZM10.6978 33.671C4.35288 27.326 4.35288 17.0389 10.6978 10.6939L8.5765 8.57259C1.05999 16.0891 1.05999 28.2758 8.5765 35.7923L10.6978 33.671ZM10.6978 10.6939C17.0428 4.34897 27.3299 4.34897 33.6749 10.6939L35.7962 8.57259C28.2797 1.05608 16.093 1.05608 8.5765 8.57259L10.6978 10.6939ZM33.6749 10.6939C40.0198 17.0389 40.0198 27.326 33.6749 33.671L35.7962 35.7923C43.3127 28.2758 43.3127 16.0891 35.7962 8.57259L33.6749 10.6939Z" fill="currentColor"></path></svg>
            </button>
        </div>
    </section>
  )
}

export default Slider