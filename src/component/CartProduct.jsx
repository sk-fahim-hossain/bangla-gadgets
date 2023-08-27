import React from 'react';

const CartProduct = ({ pd ,handleRemoveFromDb }) => {
   
    return (
        <div className='grid grid-flow-row grid-cols-3 border-2 p-4 items-center justify-center mt-3 w-3/4 mx-auto  bg-white rounded-md'>
            <div className=''>
                <img src={pd.image_url} alt="" srcset="" className='h-16' />
            </div>
            <div>
                <p>{pd.name}</p>
                <p>{pd.brand}</p>
            </div>
            <div className='text-right pr-8'>
                <h3 className='text-lg text-orange-400'>${pd.price}</h3>
                <button className='py-1 px-2 border bg-red-400 rounded hover:text-white' onClick={()=>handleRemoveFromDb(pd.id)}>remove</button>
            </div>
        </div>
    );
};

export default CartProduct;