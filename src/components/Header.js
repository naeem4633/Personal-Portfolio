import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className='w-full fixed top-0 text-gray-300 tracking-wider bg-gray-950'>
        <div className='w-full  border-white flex flex-row justify-between items-center py-2 px-4'>
            <Link to={'/'}>
                <img className='w-20 h-16 border border-white'></img>
            </Link>
            <ul className='flex flex-row space-x-5 text-sm'>
                <Link to={'/'} className='relative inline-block group'>
                    <span className='pb-1 block'>HOME</span>
                    <span className='absolute bottom-1 left-0 w-full h-0.5 bg-white group-hover:-translate-y-2'></span>
                </Link>
                <Link to={'/work'} className='relative inline-block group'>
                    <span className='pb-1 block'>WORK</span>
                    <span className='absolute bottom-1 left-0 w-full h-0.5 bg-white group-hover:-translate-y-2'></span>
                </Link>
                <Link to={'/about'} className='relative inline-block group'>
                    <span className='pb-1 block'>ABOUT</span>
                    <span className='absolute bottom-1 left-0 w-full h-0.5 bg-white group-hover:-translate-y-2'></span>
                </Link>
                <Link to={'/contact'} className='relative inline-block group'>
                    <span className='pb-1 block'>CONTACT</span>
                    <span className='absolute bottom-1 left-0 w-full h-0.5 bg-white group-hover:-translate-y-2'></span>
                </Link>
            </ul>
        </div>
    </section>
  )
}

export default Header
