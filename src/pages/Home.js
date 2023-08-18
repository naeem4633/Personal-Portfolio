import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
    <Header navigation={false} transparent={true}/>
    <section className="w-full h-[100vh] bg-gray-950 flex items-center text-gray-300">
      <div className='h-[70vh] lg:h-3/4 w-full flex flex-col lg:flex-row justify-around items-center lg:items-end mt-20'>
        <div className='lg:h-3/4 flex flex-col space-y-4 justify-center lg:justify-end tracking-wider font-semibold lg:mb-32'>
          <p>SYED NAEEM AHMED</p>
          <p className='font-light'>Full Stack Developer / Web Designer</p>
        </div>
        <div className='h-2/3 lg:h-full flex flex-col w-full lg:w-2/5 font-light text-7xl lg:text-[10rem] 2xl:text-[12rem] items-center'>
          <div className='h-full flex flex-col space-y-10 lg:space-y-0'>
            <Link to={'/work'} className='lg:h-60 hover:translate-x-4 hover:text-white transition-all duration-200'>WORK</Link>
            <Link to={'/about'} className='lg:h-60 hover:translate-x-4 hover:text-white transition-all duration-200'>ABOUT</Link>
            <Link to={'/contact'} className='lg:h-60 hover:translate-x-4 hover:text-white transition-all duration-200'>CONTACT</Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home
