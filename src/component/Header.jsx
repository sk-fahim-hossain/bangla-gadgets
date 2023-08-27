import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon,UserCircleIcon,MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'
import useCartHook from './useDataLoader/useCartHook';


const Header = () => {


    return (
        <div className="w-11/12 bg-white text-[#EEE0C9] mx-auto">
            <nav className='flex justify-between p-6 text-gray-600 font-semibold'>
                <Link to='/'>
                    <div className='text-blue-700'>
                        <h2 className='font-bold text-2xl'>Bangla Gadgets</h2>
                    </div>
                </Link>
                <div className="space-x-10">
                    <Link to='/' className='text-gray-800 hover:text-blue-400'>Home</Link>
                    <Link to='/shop'  className='text-gray-800 hover:text-blue-400'>Shop</Link>
                    <Link to='/about'  className='text-gray-800 hover:text-blue-400'>About</Link>
                </div>
                <div className='flex gap-2'>
                    <Link to='/cart'><span className='flex rounded-3xl '><ShoppingCartIcon className="h-6 w-6 text-[#ADC4CE] hover:text-blue-400 cursor-pointer" /><i className='flex items-center justify-center bg-black w-5 h-5  text-white rounded-full'>0</i></span></Link>
                    <span><UserCircleIcon className="h-6 w-6 text-[#ADC4CE] hover:text-blue-400  cursor-pointer" /></span>
                    <span><MagnifyingGlassCircleIcon className="h-6 w-6 text-[#ADC4CE] hover:text-blue-400  cursor-pointer" /></span>
                </div>
            </nav>
        </div>
    );
};

export default Header;