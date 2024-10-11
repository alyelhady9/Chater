import React from 'react'
import { posts } from '../assets/index '
import Post from './Post'
import PostPlaceholder from './PostPlaceholder'
export const Posts = ({}) => {
  return (
    <div>

        {
            posts.map((post, index) => (
               <Post key={index} keyValue={post.postId} publisher={post.publisher.name} 
               mainPostText ={post.mainPostText} photo={post.photo} profilePhoto={post.publisher.profilePhoto}
               comments={post.comments} likesCount={post.likesCount}
               

               
               
               />
            )) 
          }
        <PostPlaceholder />
        <PostPlaceholder />
        <PostPlaceholder />

    </div>
  )
}
