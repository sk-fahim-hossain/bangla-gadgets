import React from 'react';
import Shop from './Shop';

const Home = () => {
    return (
        <div className="my-container">
            <div className=''>
                <img className='w-screen h-96' src="https://images.unsplash.com/photo-1630750796085-5fa9d4dd2818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
            <div className='flex-col items-center justify-center text-center my-16'>
                <p className='text-gray-600 text-center font-bold text-3xl'>Fresh Foam Lazr Hyposkin <br />
                    Up to 70% Off. All Sales are Final!</p>
                <p className='text-gray-600 text-center font-normal text-lg'>Military Foliage Green with Phantom & Sea Salt</p>
                <button className='border py-2 px-3 bg-gray-700 text-white'>Discover Sales</button>
            </div>
            <Shop></Shop>
           {/* category section here */}
        </div>
    );
};

export default Home;