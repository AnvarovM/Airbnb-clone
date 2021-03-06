import React from 'react'
import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid"

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* left section in header */}
            <div className="relative">
                <img
                src="https://links.papareact.com/qd3"
                className="w-28 md:w-32 cursor-pointer"
                />
            </div>
            {/* middle section in header === search */}
            <div className="flex items-center md:border-2 rounded-full px-5 py-2 md:shadow-sm">
                <input className="bg-transparent outline-none flex-grow text-sm text-gray-600" type="text" placeholder="Start your search" />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hover:bg-red-300" />
            </div>
            {/* right section in header */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />

                <div className="flex border rounded-full p-2 space-x-2">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer" />    
                </div>
            </div>
        </header>
    )
}

export default Header
