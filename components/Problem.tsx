import React from 'react'

import regular from "next/font/local";
import medium from "next/font/local";



const Regular = regular({
    src: './GeneralSans-Semibold.ttf',
    display: 'swap',
})

const light = medium({
    src: './GeneralSans-Regular.ttf',
    display: 'swap',
})

export default function Problem() {
    return (
        <div className="">
            <div className='min-h-96 flex flex-col justify-center items-center  py-32 text-center space-y-6'>
                <span className="text-transparent  font-semibold bg-clip-text"
                    style={{
                        backgroundImage:
                            "linear-gradient(140deg,#36beff 24.24%,#733ff1)",
                    }}>THE PROBLEM</span>

                <p className={'' + Regular.className} style={{ fontSize: "1.875rem", }} >
                    When college students in India don&apos;t get placed during campus  <br />
                    placements, it can make things tough for them upon graduation. <br />
                    They have to figure out how to find a job all on their own, and that <br />
                    can be really hard.
                </p>
            </div>


            <div className='min-h-screen flex flex-col justify-center items-center  py-16 text-center space-y-6 bg-[#f9f9fb]'>

                <p className={'' + light.className} style={{ fontSize: "1.875rem", }} >
                    Being left out of on-campus placements can deal a blow to a fresher&apos; confidence <br />
                    and self-esteem. The journey of job hunting can take a toll on a fresher&apos; confidence <br />
                    and self-belief. Rejections become a constant companion, chipping away at their <br />
                    resilience
                </p>
                <p className={'' + light.className} style={{ fontSize: "1.875rem", }} >
                    For many freshers, securing a job post-graduation isn&apos;t just about fulfilling career <br />
                    aspirations; it&apos; also about contributing to their family&apos; financial stability. The delay in <br />
                    finding employment adds to the burden, increasing financial strain and amplifying the <br />
                    pressure to succeed.
                    jrp to
                </p>
            </div>
        </div>
    )
}
