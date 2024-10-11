"use client"

import React from 'react'
import Image from 'next/image'
import { HiMiniXMark } from "react-icons/hi2";
import PostLowerBar from './PostLowerBar';
import PostHeader from './PostHeader';
import CommentSection from './CommentSection';


import { useState } from'react';

 const Post = ({
    keyValue,publisher,mainPostText,photo,comments,
    likesCount, handleHidePost,hidePost,profilePhoto

}) => {

    const [showComments, setShowComments] = useState(false);
    const [plusComment, setPlusComment] = useState(comments.length)
    const handlePlusComment = () => { 
        setPlusComment(plusComment + 1)
    }
    const handleOpenComments = () => {
        if(showComments === false){ 
            setShowComments(true);
        }else {
            setShowComments(false);
        }
    }

  return (
  
  <div className='w-full mb-4
  bg-white
    dark:bg-gray-900
    dark:text-gray-100

  
  ' >
    <div className={`w-full  
        dark:bg-gray-800
max-lg:rounded-none
    
    bg-white rounded-lg`} key={keyValue}>
       
      <PostHeader publisher={publisher} profilePhoto={profilePhoto}  />



        <main className='p-8  '>
            <div><p>{mainPostText}</p></div>
            <div className='w-full mt-2 text-center flex justify-center '>
                {
                    photo  !== null ?
                    <Image className='w-full rounded-lg' src={photo} alt={"post photo"} width={500} height={500} /> :
                    null
                }
            </div>

        </main>


        <PostLowerBar comments ={comments} likesCount = {likesCount} handleOpenComments ={handleOpenComments}  plusComment ={plusComment}/>
    </div>
    {
        showComments &&
    <CommentSection handlePlusComment={handlePlusComment} comments={comments} handleOpenComments={handleOpenComments}/>
    }
  </div >
  )
}
export default Post