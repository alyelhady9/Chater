"use client"
import { BsEmojiSmile } from "react-icons/bs";
import { IoImageOutline } from "react-icons/io5";
import { BsFillMicFill } from "react-icons/bs";
import { PiPaperPlaneRightFill } from "react-icons/pi";


const ChatFooter = ({message, setMesssage,handleMessage}) => {
    return (
        <footer className="w-[67%] flex justify-between items-center fixed bottom-0
        p-4 bg-white
        dark:bg-gray-800
        max-lg:w-full

        ">
            <div className="flex justify-center gap-4 w-2/12 text-2xl ">
                <BsEmojiSmile  className="hover:text-blue-600 cursor-pointer"/>
                <IoImageOutline className="hover:text-blue-600 cursor-pointer" />
 
            </div>
            <div className="flex w-8/12">
                <input className="w-full
                border-none
                outline-none
                focus:border-none
                focus:outline-none
                focus:shadow-none
                dark:bg-gray-800
                "
                type="text" placeholder="Type a message" value={message} onChange={(e)=> setMesssage(e.target.value)}
                
                
                />
            </div>
            <div className="w-2/12 flex justify-center">
                {
                    message.length > 0 ?

                    <div className="text-xl hover:bg-blue-700 bg-blue-600 text-white rounded-full w-12 h-12 flex justify-center items-center cursor-pointer"
                    onClick={handleMessage}
                    >
                        <PiPaperPlaneRightFill  />

                    </div>:
                    <div className="text-xl hover:bg-blue-700 bg-blue-600 text-white rounded-full w-12 h-12 flex justify-center items-center cursor-pointer">

                        <BsFillMicFill />
                    </div>



                }
            </div>
        </footer>
      );
}
 
export default ChatFooter;