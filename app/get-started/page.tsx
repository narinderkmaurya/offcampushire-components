"use client";

import React, { useState } from 'react'
import logo from "@/public/logo.png"
import Image from 'next/image'


import profile from "@/public/profile.png"
import linkedin from "@/public/in.svg"
import google from "@/public/google.png"


export default function GetStartedPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='w-full lg:grid lg:grid-cols-12  '>
            <div className="left col-span-6 hidden md:flex     min-h-screen ">
                <div className="fixed min-h-screen w-1/2 flex flex-col px-10 py-10 justify-between">
                    <div className="space-y-12">
                        <Image src={logo} alt="Logo" className='w-28' />

                        <h1 className='text-6xl font-semibold'>
                            Join thousands of founders using Raizer all over the globe.
                        </h1>
                    </div>

                    <div className="rounded-xl bg-[#e3f7db] px-6 py-6 ">
                        <p className='text-lg'>
                            “Since we started using Raizer to accelerate our Pre-Seed raise we have noticed a big increase in our cold email success rate, leading to booking meetings and way less stress on my already full plate as a founder.”
                        </p>

                        <div className="flex mt-6 gap-2">
                            <Image src={profile} alt="profile" className='w-12 h-12' />
                            <div className="">
                                <h2 className="font-semibold text-lg flex gap-1">John Doe <span><Image src={linkedin} alt="" /></span></h2>
                                <p className="text-sm">Co-founder of <span className='text-[#778af5] cursor-pointer'>MADE</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:col-span-6 text-center px-10 py-10 justify-center  flex-col space-y-8 flex items-center min-h-screen lg:min-h-0">
                <div className="flex flex-col space-y-6">
                    <h1 className='md:text-4xl text-2xl font-semibold px-4'>
                        Create your account
                    </h1>
                    <button className='flex gap-2 border rounded-xl px-6 py-2 hover:bg-[#f6f5f2] font-semibold text-center items-center justify-center'>
                        <Image src={google} alt='' className='w-6 h-6' /> Continue with Google
                    </button>

                    <div className="flex gap-2 ">
                        <div className="px-20 border-b mb-3"> <hr /></div>
                        or
                        <div className="px-20 border-b mb-3"></div> </div>
                </div>

                <div className="space-y-6 ">
                    <div className="flex flex-col items-start text-left ">
                        <span className='font-medium mb-2'>Email</span>
                        <input
                            type="text"
                            placeholder="Email address"
                            className='border rounded-xl focus:outline-[#95befc] hover:bg-[#f6f5f2] focus:bg-transparent px-4 py-2 w-[350px] md:w-96'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col items-start text-left">
                        <span className='font-medium mb-2'>Password</span>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className='border rounded-xl focus:outline-[#95befc] hover:bg-[#f6f5f2] focus:bg-transparent px-4 py-2 w-[350px] md:w-96'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <button
                    className={`border rounded-xl px-6 py-3 bg-[#eeeeee]  w-[350px] md:w-96 font-semibold text-center items-center justify-center ${email && password ? 'bg-[#000000] text-white' : 'cursor-not-allowed text-[#666666]'}`}
                    disabled={!(email && password)}
                >
                    Create Account
                </button>

                <div className="flex flex-col space-y-12">
                    <h3 className=' md:text-md'>Already have an account? <span className='text-[#7a86f9]'>Sign in</span> </h3>

                    <p className='text-[12px] lg:text-md lg:px-44'>
                        Clicking «‎Create account‎» or «‎Continue with Google» <div className='hidden'><br /></div> ‎ means that you’re okay with our <span className='text-[#7a86f9]' >Terms</span> and <span className='text-[#7a86f9]'>Privacy</span>.
                    </p>
                </div>
            </div>
        </div>
    )
}