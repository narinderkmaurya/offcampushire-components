import React from 'react'


interface props {
  title: string;
}



const SecondaryButton = ({ title }: props) => {
  return (
    <button className='group relative h-fit rounded-lg transition-all hover:bg-blue-100 active:bg-blue-50 pointer-events-auto w-full'>
      <span className='flex flex-row items-center justify-center gap-2 rounded-lg transition-all bg-gradient-to-br from-gradient-vibrant-blue-100 to-gradient-vibrant-blue-200 text-[#FFFFFF] hover:bg-clip-text hover:text-transparent hover:shadow-lg text-[14px] font-bold leading-none px-4 py-3' style={{ backgroundImage: "linear-gradient(to bottom right, #05f, #21d6ef)" }} >
        {title}
      </span>
    </button>
  )
}

export default SecondaryButton