import React from 'react'


interface props {
  title: string
}


const PrimaryButton = ({ title }: props) => {
  return (
    <button className='group relative h-fit rounded-lg transition-all focus:shadow-purple pointer-events-auto w-full'>
      <span className='flex flex-row items-center justify-center gap-2 rounded-lg transition-all bg-transparent text-[#020617] hover:bg-gray-100 hover:text-gray-700 active:bg-gray-50 active:text-blue-400 active:bg-clip-text active:text-transparent active:shadow-md px-4 py-3 text-[14px] font-bold leading-none'>
        {title}
      </span>
    </button>
  )

}

export default PrimaryButton