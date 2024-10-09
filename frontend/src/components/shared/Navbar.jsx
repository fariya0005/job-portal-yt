


import React, { useState } from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
import { Avatar, AvatarImage } from '../ui/avatar';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  // State to manage user authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='bg-white text-gray-900 shadow-md'>
      <div className='flex items-center justify-between max-w-7xl mx-auto px-8 py-4 h-16'>
        {/* Logo Section */}
        <div className='flex items-center'>
          {/* KIIT Logo */}
          <img
            src='/kiit-logo.png'  // Image path in public folder
            alt='KIIT Logo'
            className='h-20 w-350 mr-2' // Smaller logo size
          />
          <h1 className='text-2xl font-extrabold tracking-tight'>
            <span className='text-green-600'>KIIT</span> {/* Green color for KIIT */}
            <span className='ml-2 text-gray-800'>Career Connect</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className='flex items-center gap-8'>
          <ul className='flex items-center gap-6 text-md font-medium'>
            <li className='hover:text-green-600 cursor-pointer transition duration-300'>
              Home
            </li>
            <li className='hover:text-green-600 cursor-pointer transition duration-300'>
              Jobs
            </li>
            <li className='hover:text-green-600 cursor-pointer transition duration-300'>
              Browse
            </li>
          </ul>

          {/* Login, Sign Up, and User Avatar with Popover */}
          {isLoggedIn ? (
            // If the user is logged in, show the profile avatar and popover
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className='cursor-pointer'>
                  <AvatarImage
                    src='https://github.com/shadcn.png'
                    alt='@shadcn'
                    className='rounded-full border-2 border-green-400 shadow-lg hover:shadow-xl transition-all duration-300'
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className='p-4 w-64 bg-gray-100 text-gray-800 shadow-lg rounded-lg border border-gray-300 transition-all duration-200'>
                <div className='flex items-center gap-4 mb-3'>
                  <Avatar className='w-14 h-14'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                      className='rounded-full border border-gray-300 shadow-sm'
                    />
                  </Avatar>
                  <div>
                    <h1 className='text-lg font-semibold'>Fariya Afrin</h1>
                    <p className='text-xs text-gray-500'>Welcome to Career Connect</p>
                  </div>
                </div>
                <div className='border-t border-gray-300 pt-2'>
                  <div className='flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-green-600 transition-colors duration-200'>
                    <FaUserCircle className='text-green-600' />
                    <span>View Profile</span>
                  </div>
                  <div
                    className='flex items-center gap-2 mt-3 text-sm text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200'
                    onClick={() => setIsLoggedIn(false)}
                  >
                    <FaSignOutAlt className='text-red-500' />
                    <span>Log Out</span>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            // If the user is not logged in, show the Login and Sign Up buttons
            <div className='flex items-center gap-4'>
              <button
                onClick={() => setIsLoggedIn(true)}
                className='bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition-all duration-300'
              >
                Login
              </button>
              <button
                className='bg-green-400 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition-all duration-300'
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

