import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="w-full h-[100vh] bg-gray-950 flex items-center text-gray-300">
      <div className='h-3/4 w-full flex flex-row justify-around items-center'>
        <div className='h-3/4 flex flex-col space-y-4 justify-end tracking-wider font-semibold'>
          <p>SYED NAEEM AHMED</p>
          <p className='font-light'>Full Stack Developer / Web Designer</p>
        </div>
        <div className='flex flex-col w-2/5'>
          <Link to={'/work'} className='h-60 font-light text-[12rem] hover:translate-x-4 hover:text-white transition-all duration-200'>WORK</Link>
          <Link to={'/about'} className='h-60 font-light text-[12rem] hover:translate-x-4 hover:text-white transition-all duration-200'>ABOUT</Link>
          <Link to={'/contact'} className='h-60 font-light text-[12rem] hover:translate-x-4 hover:text-white transition-all duration-200'>CONTACT</Link>
        </div>
      </div>
    </section>
  )
}

export default Home
