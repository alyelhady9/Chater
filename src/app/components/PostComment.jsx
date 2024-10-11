"use client"

const PostComment = ({index, comment}) => {
    return ( 

        
        <div key={index} className="w-fit bg-gray-200 mb-3 p-3 rounded-md 
        
        dark:bg-gray-900
        ">
            <div className="font-bold ">{comment.user}</div>
            <p>{comment.content}</p>

        </div>
     );
}
 
export default PostComment;