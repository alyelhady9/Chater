"use client"
import { Button } from "flowbite-react";
import { useState } from "react"
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export const SearchBar = () => {

    const [search, setSearch] = useState ("")

    const handleSearch = () => {
        console.log(search)
    }
  return (
    
    <div className="w-full flex py-1">

        <div className=" w-8/12 flex relative items-center"> 
                <HiMiniMagnifyingGlass className=" 
                absolute
                text-gray-400 dark:text-gray-300
                text-xl
                ml-2
                
                " />
                <input className="
                    bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                    pl-8
                    pr-16
                    py-2
                    rounded-full

                    " type="text" value={search} placeholder="Search" onChange={(e) => setSearch(e.target.value)} />  
          {
            search.length > 0 && 
          <button 
            className="
            bg-blue-600
            text-white
            p-2
            rounded-md
            ml-2
            absolute
            right-1
            
            "
          onClick={() => setSearch("")}
          >Search</button>
          }
        </div>
    </div>
  )
}

{/* <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
<div className="relative w-full">
       <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
       <HiMiniMagnifyingGlass />

       </div>

       <input type="search" id="default-search" value={search} onChange={(e) => setSearch(e.target.value)} className="

       
       
       " placeholder="Search Mockups, Logos..."  />


           {
               search.length > 0 && 
           <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSearch}>Search</button>
           }
</div> */}