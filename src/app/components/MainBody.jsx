import React from 'react'
import { Left } from './Left'
import { Mid } from './Mid'
import { Right } from './Right'

export const MainBody = () => {
  return (
    <div className='flex bg-gray-100 gap-6 w-full justify-evenly mt-16 relative 
     dark:bg-gray-900

    
    '>
        <Left />
        <Mid />
        <Right />
    

    </div>
  )
}
