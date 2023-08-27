import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { id, name, image_url, brand, price } = product;
    return (
        <Link to={`/shop/${name}`}>
            <div className="bg-white relative duration-200 cursor-pointer">
                <div className=' border-slate-700 p-5 rounded-lg shadow-xl flex items-center cursor-pointer duration-200 justify-center hover:border'>
                    <img src={image_url} alt="" className='object-center h-48 ' />
                </div>
                <div className=' overflow-hidden flex-col bg-black top-0 bottom-0 right-0 left-0 rounded-lg p-4 opacity-0 absolute hover:opacity-60 duration-200'>
                    <p className='text-gray-200 font-mono font-extrabold text-lg'>{name}</p>


                    <div className='flex justify-between items-center mt-36'>
                        <p className='text-gray-100 font-mono font-extrabold text-md'>{brand}</p>
                        <p className='text-white font-mono font-extrabold text-2xl mt-auto'>${price}</p>
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default ProductCard;