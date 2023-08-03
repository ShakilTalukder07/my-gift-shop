import React from 'react';

const Product = ({ product }) => {

    const { image_url, price, title, details, rating } = product

    return (
        <div className="w-[200px] h-[300px] shadow-md">
            <div className='mx-2'>
                <img className='mb-5 w-full h-[170px]' src={image_url} alt="" />
                <h1 className='text-xl'>{title}</h1>
                <h1 className='text-xl'>Price: {price}</h1>
            </div>
        </div>
    );
};

export default Product;