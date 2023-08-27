import React from 'react';
import useCartHook from './useDataLoader/useCartHook';
import CartProduct from './CartProduct';

const Cart = () => {
    const { handleGetDb, handleRemoveFromDb } = useCartHook()
    const data = handleGetDb()


    console.log(data.length)
    // const handleRemoveFromDb = (id) => {
    //     const remaining = data.filter(product => product.id !== id)
    //     console.log('click',id, remaining);
    // }
    return (
        <div className='my-container'>
            <div className='border-2 rounded min-h-screen'>
                {
                    data ==0 && <h2 className='text-center text-2xl text-gray-400 mt-5'>Please Enter some products</h2> 
                }
                
                {data &&
                    data?.map((pd, i) => <CartProduct key={i} pd={pd} handleRemoveFromDb={handleRemoveFromDb}></CartProduct>)
                    
                }
            </div>
        </div>
    );
};

export default Cart;