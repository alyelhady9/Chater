const PostedComment = ({comment, index}) => {
    return ( 



        <div key={index} className="w-fit bg-gray-200 mb-3 p-3 rounded-md 
        
        
        dark:bg-gray-900">
        <div className="font-bold ">{"Aly Elhady"}</div>
        <p>{comment}</p>

    </div>
     );
}
 
export default PostedComment;