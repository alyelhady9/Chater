"use client"

import userPhoto from '../../assets/images/alyelhady.jpg'
import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
  } from "flowbite-react";
  import { DarkThemeToggle, Flowbite } from "flowbite-react";
import React from 'react'
import { SearchBar } from "./SearchBar";
import Image from 'next/image';
import { BiMessageRoundedDetail } from "react-icons/bi";
import Link from 'next/link';
import { useState } from 'react';


export const Header = () => {
  const [isOpen, setIsOpen] = useState("");
  
  return (
    
    <Navbar className='w-full fixed top-0 z-50 p-0 ' >
    <nav className="bg-white w-full border-gray-200 dark:bg-gray-800 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-600 ">Chater</span>
          </Link>
          <div className="flex items-center md:order-2 w-4/12">
          
            <div className="relative hidden md:block w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
          <div className='relative'>
            <Link href='/messages' onClick={() => setIsOpen('hidden')}>
              <BiMessageRoundedDetail className='
              inline-flex items-center w-10 h-10 justify-center text-sm
              text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none
              focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700
              dark:focus:ring-gray-600 p-2
              cursor-pointer ml-2
              ' />
              <div className={`bg-red-600 w-2 h-2 rounded-full absolute top-1 right-0 ${isOpen}`}></div>
            </Link>
          </div>

            <DarkThemeToggle className='ml-3'/>
            <NavbarToggle>

              <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </NavbarToggle>
            {/* <NavbarToggle /> */}
          </div>
          <NavbarCollapse>

            <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-search">
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
              </div>
              {/* <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                </li>
              </ul> */}
            </div>
          </NavbarCollapse>
        </div>
  </nav>
      </Navbar>
    
    
  )
}


