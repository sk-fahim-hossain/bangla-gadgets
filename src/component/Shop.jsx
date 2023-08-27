import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';
import useDataLoader from './useDataLoader/useDataLoader';

const Shop = () => {
    // const { products } = useLoaderData()
    const [productsData] = useDataLoader();
    const {products} = productsData;

    return (
        <div className='my-container'>
            <div className='grid grid-cols-4 gap-8 my-8'>
                {
                    products?.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
            
        </div>
    );
};

export default Shop;