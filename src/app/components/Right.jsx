import React from 'react'
import {users} from '../assets/index '
import Image from 'next/image'
import { SearchBar } from './SearchBar'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export const Right = () => {
  return (
    <div className='w-3/12  bg-white mt-6 
    
    max-lg:hidden 
    
    scrollbar
    
    rounded-xl p-4  h-screen overflow-y-scroll
    fixed right-0
    dark:bg-gray-800
    dark:text-gray-100
    '>
      <div>
        <h2 className='text-lg font-bold text-blue-600 '>Online friends</h2>
        <div className='relative mb-3'>

            <HiMiniMagnifyingGlass className=" 
                          absolute
                          text-gray-400 dark:text-gray-300
                          text-xl
                          ml-2
                          mt-3
                          " />
            <input type="text" placeholder='Search for friends' className='w-full h-8 bg-gray-100 dark:bg-gray-700 rounded-full mt-2 px-2 pl-8' />
          </div>
        <div>
          {
            users.map((user,i) => (
              <div className='flex items-center p-3 hover:bg-gray-100  dark:hover:bg-gray-700 cursor-pointer'>
                <div className='relative'><Image className='rounded-full' alt={user.name} src={user.profilePhoto} width={40} height={40} /> <div className='w-3 h-3 rounded-full border-2 border-white bg-emerald-600 absolute right-0 bottom-0'></div></div>
                <p className='ml-2 font-semibold'>
                 {user.name}
                </p>
              </div>
            )).slice(0,12)
          }
        </div>
      </div>
    </div>
  )
}
