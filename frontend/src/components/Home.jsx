import React from 'react'
import Feed from './Feed'
import RightSideBar from './RightSideBar'
import LeftSideBar from './LeftSideBar'

const Home = () => {
  return (
  <div className='flex justify-between w-[80%] mx-auto'>
  <LeftSideBar/>
  <Feed/>
  <RightSideBar/>
  </div>
  )
}

export default Home