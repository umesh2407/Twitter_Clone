import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

const LeftSideBar = () => {
  return (
    <div>
        <div>
            <div>
                <img className='ml-4 w-15' width={"30px"} src='https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1719014400&semt=ais_user' alt='twitterlogo'/>
            </div>
            <div className='my-4'>
                <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <AiFillHome />
                    <h1 className='font-bold text-lg ml-2'>Home</h1>
                    </div>
                    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <FaHashtag />
                    <h1 className='font-bold text-lg ml-2'>Explore</h1>
                    </div>
                    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <IoNotifications />
                    <h1 className='font-bold text-lg ml-2'>Notifications</h1>
                    </div>
                    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <FaUser/>
                    <h1 className='font-bold text-lg ml-2'>Profile</h1>
                    </div>
                    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <FaRegBookmark />
                    <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
                    </div>
                    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <IoLogOut />
                    <h1 className='font-bold text-lg ml-2'>Logout</h1>
                    </div>
                    <button className='text-lg font-bold bg-[#4c9eeb] rounded-full text-white my-2 px-4 py-2 w-full'>Post</button>
            </div>
        </div>
    </div>
  )
}

export default LeftSideBar