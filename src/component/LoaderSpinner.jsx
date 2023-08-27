import React from 'react';

const LoaderSpinner = () => {
    return (
        <div className="flex items-center justify-center relative">
            <div className="flex text-8xl items-center justify-center">
                <h2>L</h2>
                <div className='border-4 border-4  border-dashed border-blue-600 h-16 w-16 rounded-full animate-spin'></div>
                <h2>DING</h2>
            </div>
        </div>
    );
};

export default LoaderSpinner;