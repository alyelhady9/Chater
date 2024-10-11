"use client"
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";

import { PiShareFatLight } from "react-icons/pi";
import { PiShareFatBold } from "react-icons/pi";


import { useState } from "react";


const PostLowerBar = ({likesCount, comments,handleOpenComments,plusComment,}) => {

    const [likesCounter, setLikesCounter] = useState(likesCount);
    const [liked,setLiked] = useState(false);
    const handleLike = () => { 
       if (liked === false) {
        setLiked (true)
        setLikesCounter(likesCounter + 1)
    }else {
        
        setLiked (false)
        setLikesCounter(likesCounter - 1)
       }
    }
    return ( 
        <div className="w-full flex text-gray-900 
        dark:text-gray-100
        
        select-none ">
            <div className="
            flex justify-evenly items-center 
            w-1/3 border-r-2 
            
            hover:bg-gray-100 

            dark:hover:bg-gray-700
            text-center py-2
            cursor-pointer" onClick={handleLike}>

                {
                    !liked ?

                    <AiOutlineLike className="text-2xl" />:
                    <AiFillLike  className="text-2xl text-blue-600" />
                } 
                {likesCounter}

            </div>
            <div className="
            flex justify-evenly items-center 
            w-1/3 border-r-2 hover:bg-gray-100 
            dark:hover:bg-gray-700

            text-center py-2
            cursor-pointer" onClick={handleOpenComments}>
              <FaRegCommentAlt className="text-xl"/>
              <p>Comments  <span className="ml-2"> { plusComment} </span></p>

            </div>
            <div className="
            flex justify-evenly items-center 
            w-1/3 hover:bg-gray-100 
            dark:hover:bg-gray-700

            text-center py-2
            cursor-pointer" onClick={() => {}}>
              
              <PiShareFatBold className="text-xl" />
              <p>Share</p>

            </div>
        </div>
     );
}
 
export default PostLowerBar; 