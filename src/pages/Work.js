import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Work = () => {
  return (
    <>
    <Header  navigation={true} transparent={false}/>
    <section className="w-full h-[100vh] bg-gray-950 flex items-center text-gray-300 text-sm lg:text-base">
      <div className='h-3/4 w-full flex flex-col lg:flex-row justify-around items-center'>
        <div className='w-full lg:w-1/3 h-3/4 flex flex-col tracking-wider font-semibold justify-center lg:justify-end items-center'>
          <div className='w-3/4 text-left flex flex-col space-y-2'>
          <p className='text-left'>WORK</p>
          <p className='font-light'>This is a carefully curated showcase of the projects I've poured my passion and skills into, illustrating my journey through creativity and innovation.</p>
          </div>
        </div>
        <div className='flex flex-col h-full w-3/4 lg:w-2/5 justify-evenly text-2xl lg:text-5xl items-start'>
          <ul className='flex flex-col h-full justify-evenly'>
            <Link to={'/work/cosmetics'} className='hover:text-white hover:translate-x-2 transition-all duration-200'>E-commerce Cosmetics Boutique</Link>
            <Link to={'/work/portfolio'} className='hover:text-white hover:translate-x-2 transition-all duration-200'>Photographer Portfolio</Link>
            <Link to={'/work/euphoria'} className='hover:text-white hover:translate-x-2 transition-all duration-200'>Café Euphoria</Link>
            <Link to={'/work/music-app'} className='hover:text-white hover:translate-x-2 transition-all duration-200'>Spotify Music App</Link>
            <Link to={'/work/furniture'} className='hover:text-white hover:translate-x-2 transition-all duration-200'>Furniture Emporium</Link>
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}

export default Work
