import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useDataLoader from './useDataLoader/useDataLoader';
import useCartHook from './useDataLoader/useCartHook';

const ProductDetails = () => {
    const [descOpen, setDescOpen] = useState(false)
    const [addiOpen, setAddiOpen] = useState(false)
    const [reviewOpen, setReviewOpen] = useState(false)

    const { name } = useParams();
    const data = useLoaderData()
    const { products } = data;

    const {cart ,handleAddToCart} = useCartHook();
    
    const selectedItem = products?.find(pd => pd.name === name)

    return (
        <div className="grid grid-cols-2 my-container">
            <div className='flex items-center justify-center bg-white'>
                    <img src={selectedItem?.image_url} alt="" className='object-fit h-[calc(100vh-120px)] max-h-[calc(100vh-120px)] py-2 px-4 p-4' />
            </div>
            <div className='p-6 '>
                <p className='text-3xl mb-2'>{selectedItem?.name}</p>
                <p>{selectedItem?.ratings} out of 5({selectedItem?.reviews?.length}customers review)</p>
                <p className='mt-6 text-3xl mb-6'>${selectedItem?.price}</p>
                <p >{selectedItem?.description}</p>
                <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempore, eveniet harum commodi odit, laborum explicabo animi doloremque facilis similique nobis iure vitae non hic dignissimos deserunt maxime, ipsa accusamus?</p>
                <div className="flex items-center justify-center"><button onClick={()=>handleAddToCart(selectedItem)} className='w-96 text-center py-3 border bg-indigo-400  hover:bg-indigo-300 hover:text-white'>Add To Cart</button></div>
                <div className=' flex items-center justify-center gap-4'>
                    <div>
                        {/* drop down feature */}
                        <div className='border inline-block py-2 px-4 cursor-pointer dropdown hover:relative' onClick={() => setDescOpen(!descOpen)}>
                            <p className='duration-700 hover:ml-5'>description +</p>
                        </div>

                    </div>
                    <div className=''>
                        {/* drop down feature */}
                        <div className=' my-2 border  inline-block py-2 px-4 cursor-pointer dropdown hover:relative' onClick={() => setAddiOpen(!addiOpen)}>
                            <p className='duration-700 hover:ml-5'>Additional  +</p>
                        </div>

                    </div>
                    <div>
                        {/* drop down feature */}
                        <div className='my-2 border inline-block py-2 px-4 cursor-pointer dropdown hover:relative' onClick={() => setReviewOpen(!reviewOpen)}>
                            <p className='duration-700 hover:ml-5'>Reviews <span >+</span></p>
                        </div>

                    </div>



                </div>
                {/* dropdown show */}
                <div>
                    {
                        descOpen && <div className='border  p-4 my-2 '>
                            <p className='text-md'>{selectedItem?.description}</p>
                        </div>
                    }

                    {
                        addiOpen &&
                        <div>
                            <div className='my-2 border p-4 duration-500'>
                                <p>Additional Information</p>
                                <div className="border p-4">
                                    <p>Model: {selectedItem?.name}</p>
                                    <p>Category:{selectedItem?.category}</p>
                                    <p>Rating:{selectedItem?.ratings}</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, laborum.</p>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        reviewOpen && <div className=' border p-4 rounded-md  animate-fade-in'>
                            <p>Reviews</p>
                            {
                                selectedItem.reviews.map(rw =>
                                    <div className=' mt-3  rounded-3xl flex-row border-2 p-4' key={rw.user}>

                                        <div ><p className='bg-slate-400 p-1 mb-2 rounded-3xl inline-block'>{rw.user}</p></div>
                                        <p className='ml-14 bg-white p-1 rounded-xl inline-block'>{rw.comment} Rated <span className='text-orange-400'>{rw.rating}</span></p>

                                    </div>)
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;