import React from 'react'
import bold from "next/font/local"

const Semibold = bold({
    src: '../../public/fonts/GeneralSans-Semibold.ttf',
    display: 'swap',
})

interface Props {
    number: string;
    title: string;
}


export default function UltimateCard({ number, title }: Props) {
    return (
        <div className='bg-white px-8 py-10 space-y-2 border rounded-3xl min-w-[370px] max-w-[380px] flex flex-col text-center'>
            <span style={{
                backgroundImage:
                    "linear-gradient(140deg,#36beff 24.24%,#733ff1)",
            }} className={`${Semibold.className}  text-transparent bg-clip-text text-5xl`}>
                {number}
            </span>
            <span className='text-[#6e7d92] text-lg'>
                {title}
            </span>
        </div>
    )
}
