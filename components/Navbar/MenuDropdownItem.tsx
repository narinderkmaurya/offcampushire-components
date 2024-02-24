import React from 'react'


interface props {
  title: string;
}

const MenuDropdownItem = ({title}:props) => {
  return (
    <div className='flex  flex-col text-gray-950 transition-all'>
        <div className='flex w-full cursor-pointer flex-row items-center justify-between px-6 py-4'>
            <span className='font-semibold text-[16px] leading-[1.1] '>
                {title}
            </span>
        </div>
    </div>
  )
}

export default MenuDropdownItem