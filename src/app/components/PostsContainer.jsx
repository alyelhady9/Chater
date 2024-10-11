"use client" 
import { Posts } from "./Posts";

import { useState } from "react";
const PostsContainer = () => {
    const [hidePost, setHidePost] = useState("")
    const handleHidePost = () => { 
        setHidePost("hidden")
    }
    return (
        <Posts />
     );
}
 
export default PostsContainer;