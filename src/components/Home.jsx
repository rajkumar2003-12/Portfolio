import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          POOJITHA
        </h1>
        <h2 className='text-4xl sm:text-5l font-bold text-[#8892b0]'>
          I'm a Full Stack Developer (Backend focused).
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a backend developer that occasionally works on the frontend.
        </p>
        {/* <div>
        <Link className='text-white w-40 group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600' to='work' smooth={true} duration={500}>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
        </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
