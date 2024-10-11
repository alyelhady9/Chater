"use client"
import { BsThreeDots } from "react-icons/bs";
import { TbMessageReport } from "react-icons/tb";
import { FiPlusSquare } from "react-icons/fi";
import { FiMinusSquare } from "react-icons/fi";
import Image from "next/image";
import { HiMiniXMark } from "react-icons/hi2";
import { useState } from "react";

const PostHeader = ({publisher,profilePhoto}) => {
    const [openReport , setOpenReport] = useState(false);
    const handleReport = () => {
        if (openReport === false) {
            setOpenReport(true)
        }else {
            setOpenReport(false)
        }
    }
  return (
    <>
    

        <header  className={` relative flex justify-between items-center  w-full px-4 pt-4 select-none`}>
            <div className="flex items-center"> 
                <div className="cursor-pointer">
                    <Image src={profilePhoto} alt={publisher} width={40} height={40} className='rounded-full' />
                </div>
                <h2 className='text-md font-bold cursor-pointer ml-3 hover:text-gray-700
                dark:hover:text-gray-300
                '>
                    {publisher}
                </h2>
            </div>
            <div  className='hover:bg-gray-200
            dark:hover:bg-gray-900
            
            cursor-pointer  rounded-full p-1'
                onClick={handleReport}
            >
             <BsThreeDots className='text-xl 
            
             
             '/>
            </div>

        {
            openReport && 
            <div className="absolute -bottom-16 right-0
                bg-white  
                shadow-md
                dark:bg-gray-900
            
            ">



                <div onClick={handleReport} className='flex items-center p-2 hover:bg-gray-100
                dark:hover:bg-gray-800
                cursor-pointer'>
                    
                    <FiPlusSquare className="mr-2 
                        text-xl
                        " />
                    <p className='text-sm font-medium'>Show more</p>
                </div>


                <div onClick={handleReport} className='flex items-center p-2 hover:bg-gray-100 
                                dark:hover:bg-gray-800

                cursor-pointer'>
                    
                    <FiMinusSquare className="mr-2
                        text-xl
                        " />
                    <p className='text-sm font-medium'>Show less</p>
                </div>

                        <div onClick={handleReport} className='flex items-center p-2 hover:bg-gray-100
                                        dark:hover:bg-gray-800

                        cursor-pointer'>
                            
                            <TbMessageReport className="mr-2 text-red-600
                                text-xl
                            " />
                            <p className='text-sm font-medium'>Report</p>
                        </div>
            </div>
        }
        </header>
    </>
      );
}
 
export default PostHeader;