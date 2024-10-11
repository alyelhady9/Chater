"use client"
import { IoIosArrowRoundBack } from "react-icons/io";
import { FiVideo } from "react-icons/fi";
import { MdOutlineCall } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useState } from "react";

import Image from "next/image";
import ChatFooter from "./ChatFooter";
const MainChatArea = ({userName,photo,sent,received,setChat}) => {
    const [message, setMessage] = useState([])
    const [messageText, setMessageText] = useState("")
    const handleMessage = (m) => {
        setMessage([...message, m])
        console.log(message)
    }
    const newMessage = (e) => {
        e.preventDefault()
        handleMessage(messageText)
        setMessageText("")
    }



    function mixArrays(array1, array2) {
        const mixedArray = [];
        const length = Math.max(array1.length, array2.length);
      
        for (let i = 0; i < length; i++) {
          if (i < array1.length) {
            mixedArray.push(array1[i]); // Add from the first array
          }
          if (i < array2.length) {
            mixedArray.push(array2[i]); // Add from the second array
          }
        }
      
        return mixedArray;
      }
      
      // Example usage:
      const array1 = ['A', 'B', 'C'];
      const array2 = [1, 2, 3, 4];
      
      const result = mixArrays(sent, received);
      console.log(result);
      


    return ( 



        <div className="relative h-screen overflow-y-hidden">
            <header className="flex justify-between items-center shadow-md p-4 select-none
            fixed w-[67%] top-[70px] bg-white z-30
            dark:bg-gray-800
            max-lg:w-full
      
            ">
                <div className="flex items-center">
                    <IoIosArrowRoundBack className="text-4xl cursor-pointer rounded-full
                        hover:bg-gray-200 
                        dark:hover:bg-gray-700
                    
                    " 
                    onClick={() => setChat([])}
                    
                    />

                    <div ><Image src={photo} width={50} height={50} alt={userName} className="rounded-full ml-2 cursor-pointer" /></div>
                    <div className="ml-4 font-bold text-lg cursor-pointer">{userName}</div>
                </div>
                <div className="flex items-center text-2xl gap-3">
                    <FiVideo  className="cursor-pointer rounded-full dark:hover:bg-gray-700 hover:bg-gray-200"/>
                    <MdOutlineCall className="cursor-pointer rounded-full dark:hover:bg-gray-700 hover:bg-gray-200" />
                    <BiDotsVerticalRounded  className="cursor-pointer rounded-full dark:hover:bg-gray-700 hover:bg-gray-200"/>

                </div>

            </header>
            <main  className="mt-28 py-4 px-3 absolute w-full h-[27rem] max-lg:h-[35rem]
            max-lg:pb-11
            max-lg:mt-32
            overflow-y-scroll bg-white dark:bg-gray-900 scrollbar">
                {
                    result.map((m,i) => (
                        i %2 ?
                        <div className="flex justify-start dark:text-gray-900 mb-2">
                            <div className="w-fit bg-gray-100 p-2 rounded-lg bg-blue">
                             {m}
                            </div>
                        </div> :

                        <div className=" sent text-white flex justify-end mb-2">
                            <div className="w-fit bg-blue-600 p-2 rounded-lg bg-blue ">
                                {m}
                            </div>
                        </div> 

                    ))
                    
                }{
                    message.map ((m,i) => (
                        <div className=" sent text-white flex justify-end">
                            <div className="w-fit bg-blue-600 p-2 rounded-lg bg-blue mb-2 ">
                                {m}
                            </div>
                        </div> 

                    ))

                }
            </main>
            <hr className="fixed bottom-16 w-[67%] h-1"/>
            <ChatFooter message={messageText} setMesssage = {setMessageText} handleMessage={newMessage} />

        </div>
     );
}
 
export default MainChatArea;