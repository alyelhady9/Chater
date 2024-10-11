"use client"

import { IoIosArrowBack } from "react-icons/io";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { PiPaperPlaneRightLight } from "react-icons/pi";
import { FaComments } from "react-icons/fa6";

import PostComment from "./PostComment";
import PostedComment from "./PostedComment";
import { useState } from "react";


const CommentSection = ({comments,handleOpenComments,handlePlusComment}) => {

    const [comment, setComment] = useState("");
   const [commentsList, setCommentsList] = useState([])

   const handleAddComment = () => {
        setCommentsList([...commentsList, comment])
        setComment("")
        handlePlusComment()
   }
    
    return ( 


        <div className="w-full bg-white border-t-2 dark:border-gray-900
        dark:bg-gray-800
        ">
            <div className="w-full  ">
                <header className="w-full flex justify-start items-center text-lg
                py-3 
                pl-3
                border-b-2
                border-gray-100
                dark:border-gray-900
                mb-2
                select-none
                ">
                 <IoIosArrowBack
                 onClick={handleOpenComments}
                 className="mr-2 text-2xl hover:bg-gray-100 rounded-full cursor-pointer 
                 dark:hover:bg-gray-900  " />

                    <h2 className="font-semibold">Comments</h2>
                </header>
                {
                    comments.length || commentsList.length > 0 ?
                    <main className="ml-3">
                        {
                            comments.map((comment, index) => ( 

                            <PostComment key={index} comment={comment} />
                                
                            ))
                        }
                        {
                            commentsList.map((comment, index) => ( 
                                <PostedComment key={index} comment={comment} />
                            ))
                        }
                    </main>: 
                    <div className="w-full flex flex-col justify-center items-center mb-6
                    select-none
                    py-4">
                        <FaComments  className="text-8xl text-gray-300"/>
                        <p className="text-xl">No comments yet</p>
                        <p>Be the first to comment</p>

                    </div>
                }
                <div className="pb-4 px-2 ">
                    <hr className="pt-2 w-full dark:border-gray-900" />
                    
                    <div className="w-full flex items-center">

                            <input type="text"
                            className="
                            w-11/12
                            rounded-full
                            focus:outline-1

                            dark:bg-gray-700
                            "
                            placeholder="Add a comment"
                            value={comment} 
                            onChange= {(e) => setComment(e.target.value)}
                            
                            />
                            <button className="w-1/12 text-2xl flex justify-center text-center">
                                {
                                    
                                    comment.length > 0 ? 
                                    <PiPaperPlaneRightFill className="text-blue-500 hover:text-blue-700" onClick={handleAddComment} />:
                                    <PiPaperPlaneRightLight  />
                                    
                                    
                                }

                            </button>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default CommentSection;