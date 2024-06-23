import React from 'react'
import { AiFillHome } from "react-icons/ai";

const LeftSideBar = () => {
  return (
    <div>
        <div>
            <div>
                <img width={"30px"} src='https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1719014400&semt=ais_user' alt='twitterlogo'/>
            </div>
            <div>
                <div className='flex items-center'>
                    <AiFillHome />
                    <h1>Home</h1>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default LeftSideBar