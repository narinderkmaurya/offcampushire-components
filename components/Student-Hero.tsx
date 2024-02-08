import { Instrument_Serif } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
import regular from "next/font/local";

import card from "@/public/card.svg"
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });
const general = regular({
    src: './GeneralSans-Medium.ttf',
    display: 'swap',
})


export default function StudentHero() {
    return (
        <header>
            <div className="student-bg lg:px-64 text-center flex flex-col items-center justify-center ">
                <h1 className={instrument.className + '  text-[64px] font-bold  hero-heading'}>
                    Introducing  <span style={{
                        backgroundImage:
                            "linear-gradient(140deg,#36beff 24.24%,#733ff1)",
                    }} className='text-transparent bg-clip-text'>off-campus</span>
                    , your ultimate
                    destination for off-campus placement drives
                </h1>
                <p className={general.className + ' mt-4 lg:px-24 leading-9 text-[22px] para text-[#3f3f42]'} style={{ fontWeight: "500" }} >
                    OffCampusHire is a platform aimed at helping freshers start their careers
                    by connecting them with exclusive off-campus placement drives organized
                    in collaboration with universities and companies
                </p>

            </div>
        </header>
    )
}
