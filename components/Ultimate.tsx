import React from 'react'
import UltimateCard from './Cards/Ultimate-Card'
import Image from 'next/image'
import quote from "@/public/quote.svg"
import purple from "@/public/purple-large-backdrop.png"
import divider from "@/public/divider.svg"
export default function Ultimate() {
    return (
        <div className="">
            <div className="h-0 relative -z-10">
                <Image src={purple} alt="" className='object-top h-[1200px] ' />
            </div>
            <div className='min-h-screen flex items-center pt-[90px] pb-[100px] w-full ultimate  flex-col space-y-16 lg:px-44'>

                <h1 className='text-5xl'>
                    The <span className='text-transparent bg-clip-text' style={{
                        backgroundImage:
                            "linear-gradient(140deg,#36beff 24.24%,#733ff1)",
                    }} >ultimate ecosystem</span> <br /> for levelling up in web3
                </h1>
                <div className="">
                    <div className=" w-full columns-3 items-center gap-12 justify-center">
                        <UltimateCard number='552k' title='code lessons completed' />
                        <UltimateCard number='59k' title='AU students' />
                        <UltimateCard number='2,797' title='total projects created' />
                    </div>
                </div>
                <div className="z-10">

                    <div className="max-w-xl rounded-2xl py-8 border-2 bg-white px-8 ">
                        <div className="h-0 bottom-12 relative">
                            <Image src={quote} alt="" />
                        </div>
                        <p className='text-3xl leading-[3rem]'>
                            I learned the skillset I needed to transition from web2 to web3 and it led directly to landing my dream job and helping secure the open economy.
                        </p>

                        <div className="mt-24">
                            <p className='font-medium text-lg'>
                                Dan McKeon, <span className='text-[#363ff9]'>@OpenZeppelin</span>
                            </p>
                            <span className='text-[#99a3b3]'>
                                Full Stack Ethereum Developer
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
