import React from 'react'
import Notifications from './Notifications'
import Discover from './Discover'

export const Left = () => {
  return (
    <div className='w-3/12 mt-6 rounded-lg flex flex-col
    
    fixed left-0
    max-lg:w-1/3
    max-sm:hidden
    '>

      <Notifications />
      <Discover />
    </div>
  )
}
