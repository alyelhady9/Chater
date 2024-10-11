import photo1 from '../../assets/images/bike.jpg'
import photo2 from '../../assets/images/gaming.webp'
import photo3 from '../../assets/images/wierdstuff.webp'
import photo4 from '../../assets/images/Tiger-1.jpg'
import Image from 'next/image'

const Discover = () => {

    const groups = [
        {
            id:1,
            title: "Marathon every friday" ,
            photo: photo1,
            members: `20 K`,
        },
        {
            id:2,
            title: "Gaming nights free" ,
            photo: photo2,
            members: `23 K`,
        },
        // {
        //     id:3,
        //     title: "Mysterious phenomena" ,
        //     photo: photo3,
        //     members: `2 K`,
        // },
        // {
        //     id:4,
        //     title: "Tigers lovers" ,
        //     photo: photo4,
        //     members: `18 K`,
        // },
    ]
    return (  
    <div className="bg-white dark:bg-gray-800 dark:text-gray-100 p-4 rounded-lg mt-4">

        <div>
            <h2 className='text-xl font-bold text-blue-500 mb-4'>Discover</h2>
                <h2 className="text-lg mb-2">Trending Groups</h2>
            <div className='grid grid-cols-2 gap-4 '>
                {
                    groups.map((group) => (
                        <div key={group.id} className='relative select-none cursor-pointer'>
                            <div><Image  src={group.photo} alt={group.title} width={200} height={200} /></div>
                            <div className='bg-opacity-60 text-gray-100 bg-black p-1 absolute bottom-0 left-0 w-full '>
                                <div>{group.title}</div>
                                <div className='text-sm'>{group.members} Members</div>

                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    </div>
   );
}
 
export default Discover;