import React from 'react'

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

                <p className={'' + light.className} style={{ fontSize: "22px", lineHeight: "2.75rem" }} >
                    Being left out of on-campus placements can deal a blow to a fresher&apos;s confidence <br />
                    and self-esteem. The journey of job hunting can take a toll on a fresher&apos;s confidence <br />
                    and self-belief. Rejections become a constant companion, chipping away at their <br />
                    resilience
                </p>
                <p className={'' + light.className} style={{ fontSize: "22px", lineHeight: "2.75rem" }} >
                    For many freshers, securing a job post-graduation isn&apos;t just about fulfilling career <br />
                    aspirations; it&apos;s also about contributing to their family&apos;s financial stability. The delay in <br />
                    finding employment adds to the burden, increasing financial strain and amplifying the <br />
                    pressure to succeed.
                </p>
            </div>
        </div>
    )
}
