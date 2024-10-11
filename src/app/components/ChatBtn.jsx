import Image from "next/image";
const ChatBtn = ({name, photo,lastMessage,lastMessageTime,openChat,chat,}) => {
    return (  
        <div className="w-full flex justify-between items-center p-4
        hover:bg-gray-100 cursor-pointer
        dark:hover:bg-gray-700
        "
        onClick={() => openChat(chat)}
        >
            <div className="flex ">
                <div><Image className="rounded-full" src={photo} alt={name} width={40} height={40} /></div>
                <div className="ml-4">
                    <div className="text-lg font-semibold">{name}</div>
                    <div>{lastMessage}</div>
                </div>
            </div>
            <div>
            {lastMessageTime}
            </div>
        </div>
    );
}
 
export default ChatBtn;