import { chats } from "../assets/index ";
import ChatBtn from "./ChatBtn";
import { HiOutlinePlusCircle } from "react-icons/hi2";



const Chats = ({openChat}) => {
    return ( 
    
    <div className=" w-1/3 dark:bg-gray-800 select-none 
        h-screen overflow-y-scroll  pb-20
        scrollbar-thumb-rounded-full scrollbar

        max-lg:w-full
        max-lg:absolute
        max-lg:top-0
        max-lg:left-0
        max-lg:pb-0
        max-lg:mt-10
        


    ">
         <div className="flex flex-col justify-between items-center mb-4 w-full shadow-lg p-4 ">
            <div className="w-full mb-4 max-lg:mt-6">
                
                    <div className="relative hidden md:block w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search icon</span>
                    </div>
                    <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>



            </div>
            <div className="flex items-center w-full justify-between">
                <div className="flex items-center">
                 <p className="text-lg font-bold">Messages </p><div className="ml-2 bg-blue-600 flex justify-center items-center text-white h-7 w-7 rounded-full">{chats.length}</div>

                </div>

                 <HiOutlinePlusCircle className="text-3xl cursor-pointer hover:text-blue-600"/>
            </div>


             
            
         </div>
         <div className="p-4">

        {chats.map((chat, index) => (
            
            <ChatBtn name={chat.contact.name} photo ={chat.contact.profilePhoto} key={chat.contact.id} 
            lastMessage={chat.receivedMessages.at(-1) } lastMessageTime = {chat.lastMessageTimestamp[0]}
            openChat={openChat} chat={chat}
            
            />
        ))}
        
        </div>

    </div> );
}
 
export default Chats;