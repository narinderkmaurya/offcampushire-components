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

export default function Problem() {
    return (
        <div className="">
            <div className='min-h-96 flex flex-col justify-center items-center  pt-[120px] pb-[112px] text-center space-y-6'>
                <span className="text-transparent  font-semibold bg-clip-text"
                    style={{
                        backgroundImage:
                            "linear-gradient(140deg,#36beff 24.24%,#733ff1)",
                    }}>THE PROBLEM</span>

                <p className={'' + Regular.className} style={{ fontSize: "1.875rem" ,color:"#3f3f42",lineHeight:"3.25rem"}} >
                    When college students in India don&apos;t get placed during campus  <br />
                    placements, it can make things tough for them upon graduation. <br />
                    They have to figure out how to find a job all on their own, and that <br />
                    can be really hard.
                </p>
            </div>


         
        </div>
    )
}
