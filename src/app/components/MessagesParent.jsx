"use client"


import { Header } from "./Header";
import { chats } from "../assets/index ";
import Chats from "./Chats";
import Chat from "./Chat";
import { useState } from "react";
const MessagesParent = () => {

    const [chat, setChat] = useState([]);
    const openChat =  (chato) => {
        setChat([chato]);
    }
    return ( 
    
    <div className="dark:bg-gray-900 dark:text-gray-100 mt-[4.4rem] w-full h-[38.5rem] overflow-hidden
    max-lg:h-[35rem]
    
    ">
        <Header />
        <hr  className="h-2 z-50"/>
        <div className="flex relatives">
          
            <Chats openChat={openChat} setChat ={setChat}/>
            <Chat chat={chat} setChat ={setChat} />
            
        </div>
        
    </div> );
}
 
export default MessagesParent;