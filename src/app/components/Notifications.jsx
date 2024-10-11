"use client"
import { comment } from 'postcss'
import {users} from '../../app/assets/index '
import { AiFillLike } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import Image from 'next/image';
const likedPost = {
    caption:
    " liked your post",
        icon: AiFillLike,
}
const likedStory ={ 
    caption:
    " liked your story",
    icon: FaHeart,
}
const commented = {
    caption:
    " commented on your post",
    icon: FaCommentAlt,
}
const sharedPost = {
    caption:
    " shared your post",
    icon: IoIosShareAlt,
}

const notificationsList = [
    {
       from: users[2],
       caption: likedPost.caption,
       icon: likedPost.icon,
    }, 
    {
       from: users[5],
       caption: likedStory.caption,
       icon: likedStory.icon,
    }, 
    // {
    //    from: users[6],
    //    caption: likedPost.caption,
    //    icon: likedPost.icon,
    // }, 
    {
       from: users[9],
       caption: commented.caption,
       icon: commented.icon,
    }, 
    {
       from: users[12],
       caption: sharedPost.caption,
       icon: sharedPost.icon,
    }, 
    // {
    //    from: users[18],
    //    caption: likedPost.caption,
    //    icon: likedPost.icon,
    // }, 
   


    
]
const Notifications = () => {
    return ( 
        <div className='bg-white p-4 rounded-lg text-gray-900  
        dark:text-gray-100
         dark:bg-gray-800
        '>
            <div className='mb-3'>
                <h2 className='text-lg font-bold text-blue-600'>Notifications</h2>

            </div>
            <div>
                <h2 className='text-lg ml-8'>New</h2>
                {
                    notificationsList.map((notification, i) => (
                       <div key={i} className='w-full flex justify-between items-center p-4 hover:bg-gray-100 cursor-pointer
                       dark:hover:bg-gray-700
                       
                       
                       '>
                            <div className='flex items-center'>
                                <div><Image className='rounded-full 'alt={notification.from.name} src={notification.from.profilePhoto} width={30} height={30}/></div>
                                <div className='ml-4'><span className='font-bold'>{`${notification.from.name}`}</span>  <span>{`${notification.caption}`}</span> </div>
                            </div>                        
                            <div className='flex items-center text-2xl ml-2'>{< notification.icon className='text-blue-600'/>}</div>                        
                       </div>
                    ))
                }
            </div>

        </div>
     );
}
 
export default Notifications;