import React from 'react'

interface MobileCardItemProps {
    title: string;
    subtitle: string;
    desc: string;
    name: string;
    designation: string;
    
}



const MobileCardItem = ({title,subtitle,desc,name,designation}:MobileCardItemProps) => {
  return (
    <section className='flex w-full snap-center flex-col overflow-hidden rounded-2xl border border-gray-200 md:min-w-[770px] md:flex-row lg:min-w-[970px]' >
        <div className='flex w-full items-center justify-center p-16 md:px-9 md:py-10 bg-gradient-to-br from-[#36beff] to-[#733ff1]'>
            <h2 className='flex flex-col gap-2 text-center'>
                <span className='text-[40px] font-semibold leading-none tracking-[0] font-primary text-white'>
                    {title}
                </span>
                <span className='text-[16px] font-normal leading-[1.5] tracking-[0] font-primary  text-gray-200'>
                    {subtitle}
                </span>
            </h2>
        </div>
        <div className='flex flex-col gap-6 bg-white p-6 md:gap-12 md:p-10'>
            <blockquote className='text-[16px] font-normal leading-[1.5] tracking-[0] font-primary text-[#020617]'> 
                <span>
                    {desc}
                </span>
            </blockquote>
            <div className='flex flex-row items-center justify-between gap-6 md:flex-col md:items-start md:justify-normal lg:flex-row lg:items-center lg:justify-between lg:gap-0'>
                <div>
                    <p className='text-[16px] leading-[1.5] tracking-[0] font-primary text-[#020617] font-semibold '>
                        {name}
                    </p>
                    <span className='text-[14px] leading-[1.5] tracking-[0] font-primary font-normal  text-gray-500'>
                        {designation}
                    </span>
                </div>
                <img src='https://www.datocms-assets.com/105223/1693899035-zerion.svg' className='h-fit w-[116px] md:w-[146.47px]' style={{color:"transparent"}} />
            </div>
        </div>
    </section>
  )
}

export default MobileCardItem