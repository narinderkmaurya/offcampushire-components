import React from 'react'
import MenuDropdownItem from './MenuDropdownItem'
import Link from 'next/link'

const NavbarMenuDropdown = ({ isMenuClicked }: { isMenuClicked: boolean }) => {
    return (
        isMenuClicked &&
        <div className={` ${!isMenuClicked ? " pointer-events-none -z-20 opacity-0" : " z-20 opacity-100"} font-primary transition-opacity duration-300 `}>
            <div className='absolute inset-0 flex h-screen w-screen flex-col bg-[rgb(255,255,255,1)] pt-14 xl:hidden'>
                <div className="flex flex-col">
                    <Link href="/about"> <MenuDropdownItem title="About Us" /></Link>
                    <Link href="/student"> <MenuDropdownItem title="Student" /></Link>
                    <MenuDropdownItem title="Enterprise" />
                    <MenuDropdownItem title="Company" />
                    <MenuDropdownItem title="Developers" />
                    <MenuDropdownItem title="Pricing" />
                </div>
                <div className='bottom-0 left-0 flex w-full flex-col-reverse gap-2 bg-[rgb(255,255,255,1)] p-6 transition-opacity pointer-events-auto fixed opacity-100'>
                    <a href="" className='w-full'>
                        <button className='w-full group relative h-fit rounded-lg transition-all focus:shadow-purple pointer-events-auto'>
                            <span className='flex flex-row items-center justify-center gap-2 rounded-lg transition-all bg-transparent text-[#020617] hover:bg-gray-100 hover:text-gray-700 active:bg-gray-50 active:text-blue-400 active:bg-clip-text active:text-transparent active:shadow-md px-4 py-3 text-[14px] font-bold leading-none'>
                                Sign in
                            </span>
                        </button>
                    </a>
                    <Link href="/get-started" className='w-full'>
                        <button className='w-full group relative h-fit rounded-lg transition-all focus:shadow-purple pointer-events-auto'>
                            <span className='flex flex-row items-center justify-center gap-2 rounded-lg transition-all bg-gradient-to-br from-gradient-vibrant-blue-100 to-gradient-vibrant-blue-200 text-[#FFFFFF] hover:bg-clip-text hover:text-transparent hover:shadow-lg text-[14px] font-bold leading-none px-4 py-3' style={{ backgroundImage: "linear-gradient(to bottom right, #05f, #21d6ef)" }} >
                                Get Started
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavbarMenuDropdown