import MainChatArea from "./MainChatArea";
import { TiMessages } from "react-icons/ti";
import { PiChatsLight } from "react-icons/pi";

import { CiLock } from "react-icons/ci";


const Chat = ({chat,setChat}) => {
        console.log(chat)
    return ( <div className="w-2/3 
    max-lg:w-full
    max-lg:absolute
    max-lg:top-0
    max-lg:left-0
    
    
    ">
        
        {
            chat.length === 0? <div className="w-full h-screen flex flex-col justify-center items-center select-none max-lg:hidden">
                <div className="text-8xl text-gray-500"><PiChatsLight /></div>
                <div className="text-2xl font-semibold text-gray-700 dark:text-gray-300">you can now chat with other users with no limits!!</div>
                <div className="flex items-center gap-2 ">All chats are End-to-End encrypted <CiLock className="text-xl" /></div>

            </div> :
           chat.map((chat,i) => (
           <MainChatArea key={i} userName={chat.contact.name}
           photo ={chat.contact.profilePhoto}
            setChat={setChat}
           sent={chat.sentMessages}
           received={chat.receivedMessages}
           />
        ))
    }

    </div> );
}
 
export default Chat;